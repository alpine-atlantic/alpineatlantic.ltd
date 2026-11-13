/** Branchen: Karten auf der Startseite, Dropdown in der Navigation und Spalte in der Fußzeile. */

export interface Branch {
  tag: string;
  title: string;
  text: string;
  href: string;
  more: string;
}

export const branches: Branch[] = [
  {
    tag: 'Industrie',
    title: 'Maschinen- & Anlagenbau',
    text: 'SPS-Kapazität auf Zeit, Inbetriebnahme, Nachdokumentation und Maschinendaten bis ins ERP.',
    href: '/branchen/maschinen-anlagenbau',
    more: 'Mehr erfahren',
  },
  {
    tag: 'Mittelstand',
    title: 'Handwerk & Dienstleister',
    text: 'Eine Website, die in der Region gefunden wird, und weniger Büroarbeit bei Angeboten und Rechnungen.',
    href: '/branchen/handwerk-dienstleister',
    more: 'Mehr erfahren',
  },
  {
    tag: 'Immobilien',
    title: 'Makler & Hausverwaltungen',
    text: 'Objekt-Website und CRM in einem: Objekte, Kontakte und Termine an einem Ort, Anzeigen automatisch online.',
    href: '/branchen/immobilien',
    more: 'Mehr erfahren',
  },
];
