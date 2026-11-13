/** Kopfbereich der Startseite: Botschaft, Terminbuchung, Porträt, Einstiege A/B und Versprechen. */
import type { Image, Link } from './types';
import { site } from './site';
import type { IconName } from '../lib/icons';

export const hero = {
  kicker: 'IT-Dienstleister für Industrie und Mittelstand · Österreich · Deutschland · Schweiz',
  title: 'Technik, die Ihren Betrieb nach vorne bringt.',
  lead: 'Von der Steuerung in der Werkhalle bis zur Website, die Anfragen bringt: Alpine Atlantic verbindet Industrietechnik und Software – mit einem Ansprechpartner, der beides versteht, und einem Festpreis, bevor die Arbeit beginnt.',
  cta: { label: 'Kostenloses Erstgespräch buchen', href: site.terminPage } as Link,
  links: [
    { label: 'Lieber schreiben', href: '#kontakt' },
    { label: 'Passen wir zusammen?', href: '#passt' },
  ] as Link[],
  portrait: {
    src: '/assets/ambrosius-portrait-quadrat-800.webp',
    srcset: '/assets/ambrosius-portrait-quadrat-400.webp 400w, /assets/ambrosius-portrait-quadrat-800.webp 800w, /assets/ambrosius-portrait-quadrat.webp 1200w',
    sizes: '(max-width: 700px) 100vw, 380px',
    alt: `${site.founder.name}, ${site.founder.roleDe} von ${site.name}`,
    width: 800,
    height: 800,
    fetchpriority: 'high',
    decoding: 'async',
  } as Image,
  caption: `${site.founder.name} — ${site.founder.roleDe}`,
  entriesLabel: 'Ihr Einstieg',
  entries: [
    {
      tag: 'Einstieg A · Industrie',
      title: 'Industrie & Steuerungstechnik',
      text: 'Die Anlage steht, die Steuerung soll erweitert werden oder der Programmierer fehlt: SPS-Programmierung, Fehlersuche, Engineering.',
      more: 'Zur Steuerungstechnik',
      href: '/sps-programmierung',
    },
    {
      tag: 'Einstieg B · Büro & Vertrieb',
      title: 'Software, KI & Web',
      text: 'Website, Shop oder CRM, das Anfragen bringt, und Automatisierung, die im Alltag Arbeit abnimmt – sicher betrieben auf Ihrem Server.',
      more: 'Zu Software & Web',
      href: '/webentwicklung',
    },
  ],
  promises: [
    { icon: 'tag', title: 'Festpreis', text: 'Angebot vor Beginn, keine Nachträge ohne Ihr Ja.' },
    { icon: 'user', title: 'Ein Ansprechpartner', text: 'Vom Erstgespräch bis zur Betreuung dieselbe Person.' },
    { icon: 'clock', title: '24/7 erreichbar', text: 'Bei Stillstand zählt jede Stunde – auch am Wochenende.' },
  ] as { icon: IconName; title: string; text: string }[],
};
