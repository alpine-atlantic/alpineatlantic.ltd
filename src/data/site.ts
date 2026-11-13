/** Firmendaten, Kontaktwege, Navigation, Fußzeile und Meta-Standards. */
import type { Link } from './types';

export const site = {
  name: 'Alpine Atlantic LLC',
  brand: 'Alpine Atlantic',
  url: 'https://alpineatlantic.ltd',
  lang: 'de',
  locale: 'de_DE',
  themeColor: '#FAF8F4',
  /** Bei jeder Änderung an einer CSS-Datei hochzählen – /assets und /css werden lange gecacht. */
  assetVersion: { fonts: '4', style: '45', icons: '2' },
  facebookDomainVerification: 'canmtllx26qnbbj6fpq2ttamka0brm',
  year: 2026,

  email: 'info@alpineatlantic.ltd',
  phone: { e164: '+43720309667', display: '+43 720 309667' },
  whatsapp: {
    number: '436508344991',
    display: '+43 650 8344991',
    defaultText: 'Hallo! Ich interessiere mich für eine kostenlose Erstberatung.',
  },
  calendly: 'https://calendly.com/ambrosiusschmidt/erstgesprach-alpine-atlantic',
  /** Eigene Buchungsseite mit eingebettetem Kalender – alle Termin-Knöpfe zeigen hierhin */
  terminPage: '/termin',
  linkedin: 'https://www.linkedin.com/in/ambrosius-schmidt-6b72b43a4/',
  /** Organisation auf GitHub (Profilseite + Quellcode dieser Website) */
  github: 'https://github.com/alpine-atlantic',

  founder: { name: 'Ambrosius Schmidt', jobTitle: 'Managing Director', roleDe: 'Geschäftsführer' },
  address: {
    streetAddress: '1209 Mountain Road Pl NE, Ste N',
    addressLocality: 'Albuquerque',
    addressRegion: 'NM',
    postalCode: '87110',
    addressCountry: 'US',
  },

  /** Standardwerte für <head>, wenn eine Seite nichts Eigenes setzt. */
  meta: {
    title: 'IT-Dienstleister für SPS, Software & KI | Alpine Atlantic',
    description:
      'IT-Dienstleister für Industrie und Mittelstand in AT, DE, CH: SPS-Programmierung, Software, KI-Automatisierung, Websites und Serverwartung zum Festpreis.',
    ogImage: '/assets/og-alpine-atlantic.jpg',
    ogImageAlt:
      'Alpine Atlantic – Steuerungstechnik und Software aus einer Hand, IT-Dienstleister für Österreich, Deutschland und die Schweiz',
    ogImageWidth: 1200,
    ogImageHeight: 630,
    /** Große Bildvorschau und vollständige Snippets erlauben (Google Discover, Bildersuche) */
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    author: 'Ambrosius Schmidt, Alpine Atlantic LLC',
    copyright: 'Alpine Atlantic LLC, Albuquerque, NM, USA',
  },

  /** Angaben, die nur ins Schema.org-Markup gehen. */
  schema: {
    logo: '/assets/logo.svg?v=2',
    /** Rastergrafik fürs Organization-Logo (Google akzeptiert dort kein SVG) */
    logoPng: '/assets/icon-512.png',
    image: '/assets/ambrosius-portrait-quadrat.jpg',
    description:
      'IT-Dienstleister für kleine und mittlere Betriebe: SPS-Programmierung, Software-Entwicklung, KI-Automatisierung, Website-, Shop- und App-Entwicklung, SEO, Engineering & Automotive-Software, 24h technischer Support.',
    openingHours: 'Mo-Su 00:00-24:00',
    priceRange: '$$',
    knowsLanguage: ['de', 'en'],
    areaServed: ['Österreich', 'Deutschland', 'Schweiz'],
    offerCatalogName: 'Leistungen',
  },
} as const;

/** Wiederkehrende Beschriftungen in Kopf, Fuß und Bedienelementen. */
export const ui = {
  wordmarkTop: 'zum Seitenanfang',
  wordmarkHome: 'zur Startseite',
  mainNav: 'Hauptnavigation',
  headerCta: { long: 'Erstgespräch buchen', short: 'Termin buchen' },
  footerNav: 'Fußzeile',
  footerBrandText:
    'Software- und Engineering-Dienstleister für kleine und mittlere Betriebe in Österreich, Deutschland und der Schweiz.',
  waFloat: 'WhatsApp',
  waAria: `Per WhatsApp schreiben: ${site.whatsapp.display}`,
  whatsappFooter: 'WhatsApp',
  /** Gemeinsame Beschriftungen der Leistungs- und Branchenseiten */
  sub: {
    pathAria: 'Pfad',
    heroCta: 'Kostenloses Erstgespräch buchen',
    tocTitle: 'Auf dieser Seite',
    faqTitle: 'Häufige Fragen',
    breadcrumbHome: 'Startseite',
    ctaTag: 'Kostenlose Erstberatung',
    ctaMain: 'Erstgespräch online buchen',
    ctaForm: 'Anfrage per Formular',
    ctaMail: 'E-Mail schreiben',
    ctaWhatsapp: 'WhatsApp',
    phoneShort: 'Tel.',
    serviceArea: ['AT', 'DE', 'CH'],
  },
} as const;

/** Kopfzeile: Infoleiste (nur Desktop), Logo, Handy-Menü. */
export const header = {
  topbar: {
    available: '24/7 erreichbar',
    check: { label: 'Kostenloser Website-Check', href: '/website-check' } as Link,
  },
  menuOpen: 'Menü',
  menuGroups: { services: 'Leistungen', branches: 'Branchen', company: 'Unternehmen' },
  menuAllServices: { label: 'Alle Leistungen im Überblick', href: '#leistungen' } as Link,
  call: 'Anrufen',
};

/** Ausklappmenü „Leistungen“: zwei Gruppen mit Kurzzeile je Leistung. */
export const serviceMenu: { title: string; links: (Link & { hint: string })[] }[] = [
  {
    title: 'Industrie & Steuerungstechnik',
    links: [
      { label: 'SPS-Programmierung', href: '/sps-programmierung', hint: 'Neu, Erweiterung, Modernisierung' },
      { label: 'SPS-Fehlersuche', href: '/sps-fehlersuche', hint: 'Anlage steht – Hilfe rund um die Uhr' },
      { label: 'Externer SPS-Programmierer', href: '/sps-programmierer', hint: 'Kapazität auf Zeit' },
      { label: 'Engineering & Automotive', href: '/automotive-software', hint: 'Vom Kleinprojekt bis zur Großanlage' },
    ],
  },
  {
    title: 'Software, KI & Web',
    links: [
      { label: 'KI-Automatisierung', href: '/ki-automatisierung', hint: 'Angebote, Rechnungen, Dokumente' },
      { label: 'Website, Shop, CRM & App', href: '/webentwicklung', hint: 'Zahlung nach Fertigstellung möglich' },
      { label: 'SEO, GEO & Backlinks', href: '/webentwicklung#seo', hint: 'Gefunden werden – auch in KI-Antworten' },
      { label: 'Serverwartung', href: '/serverwartung', hint: 'Updates, Backups, Überwachung' },
      { label: 'Website-Check', href: '/website-check', hint: 'Kostenlos und unverbindlich' },
    ],
  },
];

/** Hauptnavigation. Anker (#…) zeigen auf Abschnitte der Startseite; auf Unterseiten wird / vorangestellt. */
export const nav: (Link & { dropdown?: 'branches' | 'services' })[] = [
  { label: 'Leistungen', href: '#leistungen', dropdown: 'services' },
  { label: 'Branchen', href: '#branchen', dropdown: 'branches' },
  { label: 'Ablauf', href: '#ablauf' },
  { label: 'Projekte', href: '#projekte' },
  { label: 'Über uns', href: '#ueber-uns' },
  { label: 'Fragen', href: '#faq' },
];

/** Fußzeile. Die Spalten „Leistungen“ und „Branchen“ entstehen aus services.ts und branches.ts. */
export const footer = {
  headings: { services: 'Leistungen', branches: 'Branchen', company: 'Unternehmen' },
  company: [
    { label: 'Ablauf', href: '#ablauf' },
    { label: 'Projekte', href: '#projekte' },
    { label: 'Über uns', href: '#ueber-uns' },
    { label: 'Häufige Fragen', href: '#faq' },
    { label: 'Kontaktformular', href: '#kontakt' },
    { label: 'LinkedIn', href: site.linkedin, external: true },
    { label: 'GitHub', href: site.github, external: true },
  ] as Link[],
  /** Kontaktwege unter der Markenbeschreibung */
  calendlyLabel: 'Erstgespräch buchen',
  /** Unterste Zeile */
  location: 'Albuquerque, New Mexico, USA',
  area: 'Für Betriebe in Österreich, Deutschland und der Schweiz',
  toTop: 'Nach oben',
  legal: [
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
    { label: 'AGB', href: '/agb' },
  ] as Link[],
};
