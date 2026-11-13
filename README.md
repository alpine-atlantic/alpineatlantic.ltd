# alpineatlantic.ltd – Astro-Projekt

Quellcode der Website [alpineatlantic.ltd](https://alpineatlantic.ltd): statisch gebaut mit Astro und TypeScript,
ausgeliefert über Cloudflare Pages. Alle Inhalte stehen als typisierte Daten in `src/data/`, Schema.org-Markup und
Sitemap entstehen beim Build automatisch.

**Rechte:** Der Code ist als Referenz einsehbar. Texte, Fotos, Logo und Grafiken gehören der Alpine Atlantic LLC und
dürfen nicht übernommen werden. Fremdbestandteile: Symbole aus [Untitled UI Icons](https://www.npmjs.com/package/@untitledui/icons)
(MIT-Lizenz), Schriften Archivo und JetBrains Mono (SIL Open Font License).

---

Einzige Quelle der Website seit 02.11.2026. Der frühere HTML-Ordner `../alpine-atlantic/` ist gelöscht; sein letzter Stand
liegt vollständig als `../alpine-atlantic-seo/archiv/alpine-atlantic-html-archiv-20261102.zip`. Dieses Archiv **nie deployen** –
es würde die Seite mit dem alten Stand überschreiben.

## Wo was steht

| Was ändern? | Datei |
|---|---|
| Firmendaten, Telefon, WhatsApp, Calendly, Navigation, Fußzeile, Titel/Description der Startseite, CSS-Version | `src/data/site.ts` |
| Hero, Einstiege A/B, Versprechen | `src/data/hero.ts` |
| Leistungen (SPS-Schwerpunkt + 02 ff.) | `src/data/services.ts` |
| Branchen (Karten, Dropdown, Fußzeile) | `src/data/branches.ts` |
| „Passen wir zusammen?“ | `src/data/fit.ts` |
| Ablauf | `src/data/steps.ts` |
| Projekte | `src/data/projects.ts` |
| Über uns | `src/data/about.ts` |
| FAQ (Liste **und** FAQPage-Markup) | `src/data/faq.ts` |
| Kontaktformular, Direktkontakt, Formularmeldungen | `src/data/contact.ts` |
| Abschnittsüberschriften und Zählung „01 / 08“ | `src/data/sections.ts` |
| Leistungs- und Branchenseiten | `src/data/seiten/*.ts` |
| Gemeinsame Beschriftungen der Unterseiten (Knöpfe, „Auf dieser Seite“ …) | `src/data/site.ts` → `ui.sub` |
| Impressum, Datenschutz, AGB, 404 | `src/pages/*.md` |

Nummern („Projekt 03“, „Schritt 02“, „04 / 08“) entstehen automatisch aus der Reihenfolge.
Schema.org-Markup wird in `src/lib/schema.ts` aus den Daten erzeugt.

Fließtext mit Link oder Fettdruck schreibt man als Liste, z. B.
`['Text davor ', { text: 'Linktext', href: 'https://…' }, ' Text danach.']` oder `{ text: '…', strong: true }`.

## Unterseiten

**Leistungs- und Branchenseiten** (SPS, KI, Web, Automotive, Serverwartung, `branchen/*`): je eine Datei in
`src/data/seiten/` – Titel, Description, Kopf, Eckdaten, Inhaltsblöcke, FAQ, Abschlusskasten, Schema.org-Service.
Alle zehn werden von einer Vorlage (`src/components/SubPage.astro`) gebaut, die Adresse steht als `path` in der Datei.
**Neue Seite:** vorhandene Datei kopieren, `path` und Inhalte ändern – fertig, keine weitere Datei nötig.

## Sitemap

`sitemap.xml` entsteht beim Build (`integrations/sitemap.mjs`): alle Seiten mit Canonical und ohne `noindex`.
`lastmod` ist der Tag der letzten **inhaltlichen** Änderung (Titel, Description, Hauptinhalt – nicht Kopf/Fuß);
der Stand dazu liegt in `sitemap-stand.json`. Diese Datei nicht löschen, sonst bekommen alle Seiten das heutige Datum.

Bausteine in `blocks[].content`: `p` (Absatz), `h3`, `checks` (Häkchenliste), `ablauf` (nummerierte Schritte),
`related` (weiterführende Links), `figure` (Bild mit Unterschrift). Blöcke mit `id` und `title` erscheinen im
Inhaltsverzeichnis links; `toc: false` blendet einen aus, `toc: 'Kurzname'` beschriftet ihn dort anders.

**Impressum, Datenschutz, AGB, 404:** Markdown unter `src/pages/*.md`. Überschriften bekommen automatisch Sprungmarken
ohne Nummer (`/agb#haftung`); eine feste Marke schreibt man als HTML, z. B. `<h2 id="calendly">…</h2>`.
Zeilenumbruch im Absatz: Backslash am Zeilenende.

## Befehle

```bash
npm run build            # baut nach dist/
npm run check            # Typprüfung
npm run deploy:vorschau  # https://astro-vorschau.alpine-atlantic.pages.dev
npm run deploy           # live auf alpineatlantic.ltd
```

`functions/api/kontakt.js` (Kontaktformular → Resend) liegt im Projektordner, nicht in `dist/` – wrangler findet sie nur,
wenn der Deploy **aus diesem Ordner** läuft.

Bilder und CSS liegen unter `public/assets` und `public/css` und werden lange gecacht (`public/_headers`):
geänderte Dateien immer unter neuem Namen ablegen oder die Version in `site.ts` (`assetVersion`) hochzählen.

Prüfwerkzeuge der Migration (alter gegen neuer Stand) liegen in `../alpine-atlantic-seo/`:
`dom_vergleich.py`, `astro_migration/seite_vergleichen.py`, `seitenvergleich.js` + `pixelvergleich.py`.
