/** Leistungen: Schwerpunkt SPS (Nr. 01) und die weiteren Leistungen (Nr. 02 ff., fortlaufend nummeriert). */
import type { Image, Link, Rich } from './types';
import type { IconName } from '../lib/icons';

export interface Service {
  title: string;
  /** Eigene Seite der Leistung – verlinkt Überschrift, Fußzeile und Schema.org. */
  page?: string;
  /** Kurzname in der Fußzeile; ohne Angabe erscheint die Leistung dort nicht. */
  footerLabel?: string;
  /** Abweichender Name im Schema.org-Markup. */
  schemaName?: string;
  text: Rich;
  /** Symbol in der Leistungszeile der Startseite */
  icon?: IconName;
  cta: Link;
}

export interface FocusService extends Omit<Service, 'cta'> {
  tag: string;
  bullets: string[];
  related: Link[];
  more: Link;
  image: Image;
}

export const focusService: FocusService = {
  tag: 'Schwerpunkt',
  title: 'SPS-Programmierung und Steuerungstechnik',
  schemaName: 'SPS-Programmierung & Steuerungstechnik',
  page: '/sps-programmierung',
  footerLabel: 'SPS-Programmierung',
  text: 'Komplexe Steuerungen programmieren, erweitern oder Fehler beheben: Wir entwickeln SPS-Anwendungen für Maschinen und Anlagen und bringen stillstehende Steuerungen wieder zum Laufen – zuverlässig, dokumentiert und mit Festpreis nach Analyse.',
  bullets: [
    'Neuentwicklung, Erweiterung und Modernisierung bestehender Anlagen',
    'Fehlersuche per Fernzugriff oder vor Ort – rund um die Uhr',
    'Visualisierung (HMI), Nachdokumentation, Anbindung an ERP und Cloud',
    'Externer SPS-Programmierer, wenn Ihr Team ausgelastet ist',
  ],
  related: [
    { label: 'Anlage steht still?', href: '/sps-fehlersuche' },
    { label: 'SPS-Programmierer buchen', href: '/sps-programmierer' },
  ],
  more: { label: 'Mehr zu SPS-Programmierung', href: '/sps-programmierung' },
  image: {
    src: '/assets/sps-schaltschrank.webp',
    srcset:
      '/assets/sps-schaltschrank-400.webp 400w, /assets/sps-schaltschrank-680.webp 680w, /assets/sps-schaltschrank-800.webp 800w, /assets/sps-schaltschrank.webp 1280w',
    sizes: '(max-width: 900px) 100vw, 560px',
    alt: 'Geöffneter Schaltschrank mit SPS-Baugruppen, Klemmleisten und Bedienpanel in einer Produktionshalle',
    width: 1280,
    height: 800,
    loading: 'lazy',
    decoding: 'async',
  },
};

export const services: Service[] = [
  {
    title: 'KI-Automatisierung',
    icon: 'cpu',
    page: '/ki-automatisierung',
    footerLabel: 'KI-Automatisierung',
    text: 'Wiederkehrende Arbeit automatisch erledigen lassen: Angebote, Rechnungen, Dokumente, Kundenservice. Mit KI dort, wo sie nachweisbar Zeit spart – ohne Ihre gewohnten Werkzeuge zu ersetzen.',
    cta: { label: 'Mehr erfahren', href: '/ki-automatisierung', ariaLabel: 'Mehr erfahren: KI-Automatisierung' },
  },
  {
    title: 'Webentwicklung: Website, Shop, CRM & App',
    icon: 'browser',
    page: '/webentwicklung',
    footerLabel: 'Webentwicklung',
    text: [
      'Komplette Entwicklung aus einer Hand – Websites und Online-Shops, CRM-Tools nach Maß und mobile Apps, die schnell laden und auf die Abläufe Ihres Betriebs zugeschnitten sind. ',
      { text: 'Zahlung nach Fertigstellung möglich.', strong: true },
    ],
    cta: { label: 'Mehr erfahren', href: '/webentwicklung', ariaLabel: 'Mehr erfahren: Webentwicklung' },
  },
  {
    title: 'SEO, GEO & Backlinks',
    icon: 'search',
    page: '/webentwicklung#seo',
    footerLabel: 'SEO, GEO & Backlinks',
    text: 'Gefunden werden – bei Google und in KI-Antworten: Suchmaschinenoptimierung auf Basis echter Suchdaten, Generative Engine Optimization für ChatGPT & Co. und seriöser Backlink-Aufbau.',
    cta: { label: 'Mehr erfahren', href: '/webentwicklung#seo', ariaLabel: 'Mehr erfahren: SEO, GEO und Backlinks' },
  },
  {
    title: 'Engineering & Automotive-Software',
    icon: 'tool',
    page: '/automotive-software',
    footerLabel: 'Automotive-Software',
    text: 'Engineering für Automatisierungsprojekte jeder Größe – vom Kleinprojekt bis zur Großanlage. Dazu Software für den Automotive-Bereich: konzipiert, umgesetzt, gründlich getestet.',
    cta: { label: 'Mehr erfahren', href: '/automotive-software', ariaLabel: 'Mehr erfahren: Engineering und Automotive-Software' },
  },
  {
    title: 'Serverwartung für Onlineshops & Websites',
    icon: 'server',
    page: '/serverwartung',
    footerLabel: 'Serverwartung',
    text: 'Updates, Backups, Sicherheit und Überwachung für Ihren Server, Ihren Shop und Ihre Website – damit nichts ausfällt und niemand nachts das Update vergisst.',
    cta: { label: 'Mehr erfahren', href: '/serverwartung', ariaLabel: 'Mehr erfahren: Serverwartung' },
  },
  {
    title: 'Kostenloser Website-Check',
    icon: 'shield',
    page: '/website-check',
    footerLabel: 'Website-Check (kostenlos)',
    text: [
      'Cookie-Banner ohne „Ablehnen“-Knopf, unvollständiges Impressum, veralteter Link zur EU-Streitbeilegung: Wir prüfen Ihre Website auf häufige Fehler, die bis zu 50.000 € kosten können, und schicken Ihnen eine verständliche Mängelliste. ',
      { text: 'Kostenlos und unverbindlich.', strong: true },
    ],
    cta: { label: 'Mehr erfahren', href: '/website-check', ariaLabel: 'Mehr erfahren: kostenloser Website-Check' },
  },
  {
    title: 'IT-Dienstleister & 24h technischer Support',
    icon: 'headphones',
    text: 'Wenn es klemmt, sind wir da – rund um die Uhr. Ob Website, Shop, Automatisierung oder Steuerung: ein Anruf, ein Ansprechpartner, auch nachts und am Wochenende.',
    cta: { label: 'Anfragen', href: '#kontakt', ariaLabel: 'Anfragen: IT-Betreuung und Support' },
  },
];

/** Alle Leistungen in Reihenfolge – für Fußzeile und Schema.org. */
export const allServices: Pick<Service, 'title' | 'page' | 'footerLabel' | 'schemaName'>[] = [focusService, ...services];

/** Nur im Schema.org-Angebotskatalog: SPS-Unterseiten, die auf der Startseite keine eigene Zeile haben. */
export const catalogExtra: { title: string; page: string }[] = [
  { title: 'SPS-Fehlersuche', page: '/sps-fehlersuche' },
  { title: 'Externer SPS-Programmierer', page: '/sps-programmierer' },
];
