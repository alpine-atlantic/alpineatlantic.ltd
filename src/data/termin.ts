/** Seite /termin: eingebettete Calendly-Buchung als Zwei-Klick-Lösung (Kalender lädt erst nach Zustimmung). */
import type { Link } from './types';
import { site } from './site';

export const termin = {
  title: 'Kostenloses Erstgespräch buchen | Alpine Atlantic',
  description:
    'Wählen Sie einen Termin für ein kostenloses 30-Minuten-Erstgespräch mit Ambrosius Schmidt – per Telefon oder Video, unverbindlich.',
  waText: 'Hallo! Ich möchte einen Termin für ein Erstgespräch vereinbaren.',
  pathline: { home: 'Startseite', current: 'Erstgespräch' },
  hero: {
    title: 'Kostenloses Erstgespräch: Termin wählen',
    lead: 'Sie wählen Tag und Uhrzeit, wir rufen Sie an oder treffen uns per Video. 30 Minuten, kostenlos und unverbindlich – am Ende wissen Sie, ob und wie wir helfen können.',
  },
  facts: [
    '30 Minuten per Telefon oder Video, Sie entscheiden',
    'Kostenlos und ohne Verpflichtung',
    'Keine Vorbereitung nötig – ein paar Sätze zu Anlage, Software oder Betrieb reichen',
    'Ihr Gesprächspartner ist Ambrosius Schmidt, Geschäftsführer',
  ],
  alternativesTitle: 'Lieber ohne Kalender?',
  alternativesText: 'Rufen Sie an, schreiben Sie per WhatsApp oder nutzen Sie das Kontaktformular – wir melden uns innerhalb von 24 Stunden.',
  formLink: { label: 'Zum Kontaktformular', href: '/#kontakt' } as Link,
  consent: {
    title: 'Terminkalender laden',
    text: 'Der Kalender kommt von Calendly (Calendly LLC, USA) und wird erst geladen, wenn Sie zustimmen. Dabei werden Ihre IP-Adresse an Calendly übertragen und Cookies von Calendly gesetzt. Bis dahin werden keine Daten übermittelt.',
    privacy: { label: 'Mehr dazu in der Datenschutzerklärung', href: '/datenschutz#calendly' } as Link,
    button: 'Kalender laden und Termin wählen',
    fallback: { label: 'Oder direkt bei Calendly öffnen', href: site.calendly, external: true } as Link,
  },
  /** Calendly-Einbettung im Seitendesign; hide_gdpr_banner, weil die Zustimmung schon über den Lade-Knopf erfolgt */
  embedUrl: `${site.calendly}?hide_gdpr_banner=1&background_color=faf8f4&text_color=1c1b19&primary_color=a8412a`,
};
