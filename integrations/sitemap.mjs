/**
 * Erzeugt dist/sitemap.xml aus den gebauten Seiten.
 * - Aufgenommen wird jede Seite mit <link rel="canonical"> und ohne noindex; <loc> ist genau die Canonical-Adresse.
 * - <lastmod> ist der Tag der letzten inhaltlichen Änderung: Pro Seite wird ein Fingerabdruck von Titel,
 *   Description und <main> in sitemap-stand.json gespeichert. Ändert er sich, gilt das Build-Datum.
 *   Kopf- und Fußzeile zählen nicht – eine neue Telefonnummer macht nicht alle Seiten „neu“ –, und vom
 *   Hauptinhalt nur der Text: neue Symbole oder CSS-Klassen ändern das Datum nicht.
 * - Einträge mit "hash": null (Erstübernahme) behalten ihr Datum und bekommen den aktuellen Fingerabdruck.
 */
import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const STAND = new URL('../sitemap-stand.json', import.meta.url);

const treffer = (html, re) => html.match(re)?.[1] ?? '';

export default function sitemap() {
  return {
    name: 'sitemap',
    hooks: {
      'astro:build:done': async ({ dir, pages, logger }) => {
        const root = fileURLToPath(dir);
        const heute = new Date().toISOString().slice(0, 10);
        let stand = {};
        try {
          stand = JSON.parse(await readFile(STAND, 'utf8'));
        } catch {
          // noch kein Stand – alle Seiten bekommen das heutige Datum
        }

        const eintraege = [];
        for (const { pathname } of pages) {
          const html = await readFile(join(root, `${pathname.replace(/\/$/, '') || 'index'}.html`), 'utf8');
          const loc = treffer(html, /<link rel="canonical" href="([^"]+)">/);
          if (!loc || /<meta name="robots" content="[^"]*noindex/.test(html)) continue;

          const inhalt = [
            treffer(html, /<title>([\s\S]*?)<\/title>/),
            treffer(html, /<meta name="description" content="([^"]*)">/),
            // nur der sichtbare Text zählt – neue Symbole oder Klassen sind keine inhaltliche Änderung
            treffer(html, /<main[^>]*>([\s\S]*?)<\/main>/)
              .replace(/<script[\s\S]*?<\/script>/g, ' ')
              .replace(/<[^>]+>/g, ' ')
              .replace(/\s+/g, ' ')
              .trim(),
          ].join('\n');
          const hash = createHash('sha256').update(inhalt).digest('hex').slice(0, 16);

          const alt = stand[loc];
          let lastmod = heute;
          if (alt && (alt.hash === null || alt.hash === hash)) lastmod = alt.lastmod;
          else if (alt) logger.info(`geändert: ${loc}`);
          else logger.info(`neu: ${loc}`);
          eintraege.push({ loc, lastmod, hash });
        }

        // Startseite zuerst, dann alphabetisch
        eintraege.sort((a, b) => a.loc.localeCompare(b.loc));
        const startseite = eintraege.findIndex((e) => new URL(e.loc).pathname === '/');
        if (startseite > 0) eintraege.unshift(...eintraege.splice(startseite, 1));

        const xml =
          '<?xml version="1.0" encoding="UTF-8"?>\n' +
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
          eintraege.map((e) => `  <url>\n    <loc>${e.loc}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n  </url>\n`).join('') +
          '</urlset>\n';
        await writeFile(join(root, 'sitemap.xml'), xml);

        const neuerStand = Object.fromEntries(eintraege.map((e) => [e.loc, { lastmod: e.lastmod, hash: e.hash }]));
        await writeFile(STAND, JSON.stringify(neuerStand, null, 2) + '\n');
        logger.info(`sitemap.xml mit ${eintraege.length} Seiten geschrieben`);
      },
    },
  };
}
