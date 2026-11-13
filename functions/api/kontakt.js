/**
 * Nimmt Anfragen aus dem Kontaktformular entgegen und schickt sie per E-Mail
 * an info@alpineatlantic.ltd. Läuft als Cloudflare Pages Function.
 *
 * Benötigt zwei Umgebungsvariablen im Pages-Projekt:
 *   RESEND_API_KEY  – API-Schlüssel von resend.com (Secret)
 *   ABSENDER        – verifizierte Absenderadresse, z. B. "formular@alpineatlantic.ltd"
 */

const EMPFAENGER = 'info@alpineatlantic.ltd';
const MAX = { name: 120, firma: 160, email: 160, telefon: 60, zeit: 120, nachricht: 4000 };

const escape = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const antwort = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
  });

/** Alles außer POST wird abgewiesen. */
export function onRequest(context) {
  if (context.request.method !== 'POST') {
    return new Response(JSON.stringify({ fehler: 'Nur POST erlaubt.' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', Allow: 'POST' }
    });
  }
  return context.next();
}

export async function onRequestPost({ request, env }) {
  let daten;
  try {
    daten = await request.json();
  } catch {
    return antwort(400, { fehler: 'Ungültige Anfrage.' });
  }

  // Spam-Falle: Bots füllen das versteckte Feld aus. Wir tun so, als wäre alles gut.
  if (daten.website) return antwort(200, { ok: true });

  const name = String(daten.name || '').trim();
  const email = String(daten.email || '').trim();
  const nachricht = String(daten.nachricht || '').trim();

  if (!name || !email || !nachricht) {
    return antwort(400, { fehler: 'Bitte Name, E-Mail und Nachricht ausfüllen.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return antwort(400, { fehler: 'E-Mail-Adresse ist ungültig.' });
  }
  for (const [feld, grenze] of Object.entries(MAX)) {
    if (String(daten[feld] || '').length > grenze) {
      return antwort(400, { fehler: 'Eine Eingabe ist zu lang.' });
    }
  }

  if (!env.RESEND_API_KEY) {
    // Ohne Schlüssel kein Versand – das Formular zeigt dann den Direktkontakt an.
    return antwort(503, { fehler: 'Versand ist noch nicht eingerichtet.' });
  }

  const felder = [
    ['Name', name],
    ['Firma', daten.firma],
    ['E-Mail', email],
    ['Telefon', daten.telefon],
    ['Erreichbar', daten.zeit]
  ].filter(([, wert]) => String(wert || '').trim());

  const html = `
    <h2 style="font-family:Arial,sans-serif;color:#0a1d33">Neue Anfrage über alpineatlantic.ltd</h2>
    <table style="font-family:Arial,sans-serif;font-size:15px;border-collapse:collapse">
      ${felder
        .map(
          ([k, v]) =>
            `<tr><td style="padding:4px 14px 4px 0;color:#4c6076"><strong>${k}</strong></td><td style="padding:4px 0">${escape(v)}</td></tr>`
        )
        .join('')}
    </table>
    <p style="font-family:Arial,sans-serif;font-size:15px;color:#4c6076;margin-top:18px"><strong>Nachricht</strong></p>
    <p style="font-family:Arial,sans-serif;font-size:15px;white-space:pre-wrap">${escape(nachricht)}</p>
  `;

  const text =
    felder.map(([k, v]) => `${k}: ${v}`).join('\n') + `\n\nNachricht:\n${nachricht}\n`;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: env.ABSENDER || 'Alpine Atlantic Website <formular@alpineatlantic.ltd>',
        to: [EMPFAENGER],
        reply_to: email,
        subject: `Neue Anfrage von ${name}${daten.firma ? ' (' + daten.firma + ')' : ''}`,
        html,
        text
      })
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error('Resend-Fehler', res.status, detail);
      return antwort(502, { fehler: 'E-Mail konnte nicht zugestellt werden.' });
    }
    return antwort(200, { ok: true });
  } catch (err) {
    console.error('Versandfehler', err);
    return antwort(502, { fehler: 'E-Mail konnte nicht zugestellt werden.' });
  }
}
