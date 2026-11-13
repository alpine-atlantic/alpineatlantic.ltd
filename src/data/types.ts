/** Gemeinsame Typen für alle Inhaltsdateien. */

export interface Image {
  src: string;
  srcset?: string;
  sizes?: string;
  alt: string;
  width: number;
  height: number;
  loading?: 'lazy' | 'eager';
  fetchpriority?: 'high' | 'low' | 'auto';
  decoding?: 'async' | 'sync' | 'auto';
}

export interface Link {
  label: string;
  href: string;
  /** Öffnet in neuem Tab (target="_blank" rel="noopener"). */
  external?: boolean;
  ariaLabel?: string;
}

/** Fließtext mit wenigen Auszeichnungen: reiner Text, Links oder Hervorhebungen. */
export type RichPart = string | { text: string; href?: string; external?: boolean; strong?: boolean };
export type Rich = string | RichPart[];

/** Bausteine im Inhaltsbereich einer Unterseite. */
export type ContentNode =
  | { type: 'p'; text: Rich }
  | { type: 'h3'; text: string }
  /** Liste mit Häkchen */
  | { type: 'checks'; items: Rich[] }
  /** Nummerierte Schrittfolge */
  | { type: 'ablauf'; items: Rich[] }
  /** Weiterführende Links */
  | { type: 'related'; links: Link[] }
  | { type: 'figure'; image: Image; caption: string };

export interface Block {
  /** Sprungmarke; Blöcke mit id und title erscheinen im Inhaltsverzeichnis links. */
  id?: string;
  title?: string;
  /** false: nicht im Inhaltsverzeichnis; Text: abweichende Beschriftung dort. */
  toc?: false | string;
  content: ContentNode[];
}

/** Leistungs- oder Branchenseite (Vorlage SubPage.astro). */
export interface SubPage {
  path: string;
  title: string;
  description: string;
  /** Vorbelegter WhatsApp-Text (schwebender Knopf und Abschlusskasten). */
  waText: string;
  /** Abweichende Beschriftung des schwebenden WhatsApp-Knopfs (Standard „WhatsApp“). */
  waLabel?: string;
  /** Zwischenstufen der Breadcrumb im Schema.org-Markup (ohne Startseite und ohne die Seite selbst). */
  breadcrumb?: { name: string; href: string }[];
  /** Name der Seite in der Breadcrumb. */
  breadcrumbName: string;
  /** Sichtbare Pfadzeile über der Überschrift. */
  pathline: { links: { label: string; href: string }[]; current: string };
  hero: { title: string; lead: Rich };
  /** Abweichender Knopf im Kopfbereich (Standard: Erstgespräch über Calendly). */
  heroCta?: { label: string; href: string };
  /** aria-label des Inhaltsbereichs */
  layoutLabel: string;
  /** Eckdaten unter dem Inhaltsverzeichnis */
  facts: { label: string; value: Rich }[];
  blocks: Block[];
  faq: { q: string; a: string }[];
  /** „Häufige Fragen“ im Inhaltsverzeichnis aufführen */
  faqInToc?: boolean;
  cta: { title: string; text: Rich; mailSubject: string };
  /** Service-Markup (Schema.org) für die Seite */
  service?: { name: string; serviceType: string; description: string };
}
