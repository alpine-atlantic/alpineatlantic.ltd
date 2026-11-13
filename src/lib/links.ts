import { site } from '../data/site';

/** Anker der Startseite (#…) bekommen auf Unterseiten ein / vorangestellt. */
export function homeHref(href: string, onHome: boolean): string {
  return !onHome && href.startsWith('#') ? `/${href}` : href;
}

/** Absolute Adresse für Canonical, og:url und Schema.org. */
export function absUrl(path: string): string {
  return /^https?:\/\//.test(path) ? path : `${site.url}${path.startsWith('/') ? '' : '/'}${path}`;
}

/** Wie encodeURIComponent, kodiert aber auch ! ' ( ) * – so wie die bisherigen WhatsApp-Links. */
function encodeStrict(text: string): string {
  return encodeURIComponent(text).replace(/[!'()*]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);
}

export function whatsappHref(text?: string): string {
  const base = `https://wa.me/${site.whatsapp.number}`;
  return text ? `${base}?text=${encodeStrict(text)}` : base;
}

export function mailHref(subject?: string): string {
  return subject ? `mailto:${site.email}?subject=${encodeStrict(subject)}` : `mailto:${site.email}`;
}

export const telHref = `tel:${site.phone.e164}`;

/** Geschützte Leerzeichen, damit Telefonnummern nicht umbrechen. */
export const nbsp = (text: string): string => text.split(' ').join(String.fromCharCode(160));

/** Zweistellige Nummer für Abschnitte, Leistungen, Projekte und Schritte. */
export const pad = (n: number): string => String(n).padStart(2, '0');
