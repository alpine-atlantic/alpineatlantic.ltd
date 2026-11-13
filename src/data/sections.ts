/** Abschnitte der Startseite in Reihenfolge. Die Zählung „01 / 08“ entsteht aus dieser Liste. */

export interface SectionMeta {
  id: string;
  titleId: string;
  label: string;
  title: string;
  lead?: string;
  className?: string;
}

export const sections = [
  { id: 'leistungen', titleId: 'leistungen-title', label: 'Leistungen', title: 'Was wir für Ihren Betrieb tun' },
  { id: 'branchen', titleId: 'branchen-title', label: 'Branchen', title: 'Wo wir zu Hause sind', className: 'band' },
  { id: 'passt', titleId: 'passt-title', label: 'Passen wir zusammen?', title: 'Ehrlich vorab: für wen wir arbeiten' },
  { id: 'ablauf', titleId: 'ablauf-title', label: 'Ablauf', title: 'So läuft eine Zusammenarbeit', className: 'band band-dark' },
  { id: 'projekte', titleId: 'projekte-title', label: 'Projekte', title: 'Projekte, die zeigen, wie wir arbeiten' },
  { id: 'ueber-uns', titleId: 'ueber-title', label: 'Über uns', title: 'Zwei Welten, ein Ansprechpartner' },
  { id: 'faq', titleId: 'faq-title', label: 'Häufige Fragen', title: 'Was Kunden uns vor dem ersten Gespräch fragen', className: 'band' },
  {
    id: 'kontakt',
    titleId: 'kontakt-title',
    label: 'Kontakt',
    title: 'Kostenlose Erstberatung',
    lead: 'Schildern Sie kurz Ihr Anliegen – wir melden uns innerhalb von 24 Stunden mit einer ehrlichen Einschätzung. Bei Anlagenstillstand erreichen Sie uns sofort per Telefon oder WhatsApp.',
    className: 'contact',
  },
] as const satisfies readonly SectionMeta[];

export type SectionId = (typeof sections)[number]['id'];
