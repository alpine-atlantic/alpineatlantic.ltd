import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import sitemap from './integrations/sitemap.mjs';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

/** Räumt die von Astro erzeugten Seiten auf: keine Leerzeichen am Zeilenende, keine Zeilen nur aus Leerraum. */
const saubereAusgabe = {
  name: 'saubere-ausgabe',
  hooks: {
    'astro:build:done': async ({ dir, pages }) => {
      const root = fileURLToPath(dir);
      for (const { pathname } of pages) {
        const pfad = join(root, `${pathname.replace(/\/$/, '') || 'index'}.html`);
        const alt = await readFile(pfad, 'utf8');
        const neu = alt
          .split('\n')
          .filter((zeile, i, alle) => zeile.trim() !== '' || (zeile === '' && alle[i - 1]?.trim() !== ''))
          .map((zeile) => zeile.trimEnd())
          .join('\n');
        if (neu !== alt) await writeFile(pfad, neu);
      }
    },
  },
};

/**
 * Sprungmarken für Überschriften in Markdown-Seiten: ohne führende Nummer, Umlaute umgeschrieben
 * („8. Haftung“ → #haftung). Überschriften mit eigener id (z. B. #calendly) bleiben unverändert.
 */
const ueberschriftenMarken = () => {
  const vergeben = new Set();
  return {
    name: 'ueberschriften-marken',
    element: {
      filter: ['h1', 'h2', 'h3', 'h4'],
      visit(node, ctx) {
        if (typeof node.properties?.id === 'string') return;
        const basis = ctx
          .textContent(node)
          .replace(/^\d+\.\s*/, '')
          .toLowerCase()
          .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '');
        let id = basis;
        for (let n = 2; vergeben.has(id); n++) id = `${basis}-${n}`;
        vergeben.add(id);
        ctx.setProperty(node, 'id', id);
      },
    },
  };
};

// Statische Ausgabe für Cloudflare Pages.
// format 'file' erzeugt /impressum.html statt /impressum/index.html – Cloudflare liefert beides
// ohne Endung aus, die Adressen bleiben also exakt wie bisher (ohne Schrägstrich am Ende).
export default defineConfig({
  site: 'https://alpineatlantic.ltd',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  compressHTML: false,
  markdown: {
    // Rechtstexte: keine automatischen Links aus Adressen im Text, keine Anführungszeichen-Umwandlung
    processor: satteri({
      features: { gfm: false, smartPunctuation: false },
      hastPlugins: [ueberschriftenMarken],
    }),
  },
  integrations: [saubereAusgabe, sitemap()],
});
