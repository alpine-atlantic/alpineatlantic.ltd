/** Abschnitt „Über uns“. */
import type { Image, Link } from './types';
import { site } from './site';

export const about = {
  image: {
    src: '/assets/ambrosius-vor-ort.webp',
    srcset: '/assets/ambrosius-vor-ort-800.webp 800w, /assets/ambrosius-vor-ort.webp 1200w',
    sizes: '(max-width: 900px) 100vw, 560px',
    alt: `${site.founder.name}, ${site.founder.roleDe} von ${site.name}`,
    width: 1200,
    height: 800,
    loading: 'lazy',
    decoding: 'async',
  } as Image,
  caption: `${site.founder.name} — ${site.founder.roleDe}`,
  /** Nummer des Absatzes (ab 0), der als hervorgehobenes Zitat erscheint */
  quote: 1,
  paragraphs: [
    'Alpine Atlantic LLC ist IT-Dienstleister und Steuerungstechniker in einem: solide Technik aus dem Maschinen- und Steuerungsbau, verbunden mit moderner Software-Entwicklung und KI. Wir arbeiten speziell für kleine und mittlere Betriebe – pragmatisch, verständlich und ohne IT-Fachchinesisch.',
    'Diese Verbindung ist selten. Wer die Werkhalle kennt, baut andere Software als jemand, der sie nur vom Schreibtisch aus sieht: robuster, einfacher zu bedienen, ohne Schnickschnack.',
    'Unser Anspruch: Lösungen, die sich im Alltag bezahlt machen. Keine Software um der Software willen, sondern Werkzeuge, die Ihrem Team spürbar Arbeit abnehmen – mit einem Festpreis und einem Menschen, den Sie anrufen können.',
  ],
  link: { label: 'LinkedIn-Profil', href: site.linkedin, external: true } as Link,
};
