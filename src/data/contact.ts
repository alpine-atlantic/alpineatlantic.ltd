/** Kontaktbereich: Formularfelder, Direktkontakt und Meldungen des Formularskripts. */
import type { Rich } from './types';
import { site } from './site';

export interface Field {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'tel';
  required?: boolean;
  autocomplete?: string;
  inputmode?: 'text' | 'email' | 'tel';
  placeholder?: string;
  /** Mehrzeiliges Feld (textarea) mit dieser Zeilenzahl. */
  rows?: number;
}

export const contact = {
  requiredHint: '* Pflichtfeld',
  /** Felder im zweispaltigen Raster. */
  gridFields: [
    { name: 'name', label: 'Name *', type: 'text', required: true, autocomplete: 'name' },
    { name: 'firma', label: 'Firma', type: 'text', autocomplete: 'organization' },
    { name: 'email', label: 'E-Mail *', type: 'email', required: true, autocomplete: 'email', inputmode: 'email' },
    { name: 'telefon', label: 'Telefon', type: 'tel', autocomplete: 'tel', inputmode: 'tel' },
  ] as Field[],
  /** Felder über die volle Breite. */
  fullFields: [
    {
      name: 'nachricht',
      label: 'Nachricht *',
      required: true,
      rows: 5,
      placeholder: 'Worum geht es? Anlage, Software, Betrieb – ein paar Sätze reichen.',
    },
    { name: 'zeit', label: 'Erreichbarkeit', type: 'text', placeholder: 'z. B. werktags 7–9 Uhr' },
  ] as Field[],
  consent: [
    'Wir verwenden Ihre Angaben nur, um Ihre Anfrage zu beantworten. Details finden Sie in der ',
    { text: 'Datenschutzerklärung', href: '/datenschutz' },
    '.',
  ] as Rich,
  /** Für Menschen unsichtbares Feld – wer es ausfüllt, ist ein Bot. */
  honeypot: { name: 'website', label: 'Website' },
  submit: 'Anfrage senden',

  directLabel: 'Direktkontakt',
  calendly: {
    tag: 'Termin',
    label: 'Erstgespräch online buchen',
    hint: '30 Minuten, kostenlos – Sie wählen den Termin, wir rufen Sie an.',
  },
  email: { tag: 'E-Mail', subject: 'Kostenlose Erstberatung' },
  phone: { tag: 'Telefon' },
  whatsapp: { tag: 'WhatsApp', hint: 'Rund um die Uhr, auch am Wochenende.' },
  person: { tag: 'Ihr Ansprechpartner', name: `${site.founder.name}, ${site.founder.roleDe}` },

  /** Meldungen des Formularskripts. */
  messages: {
    required: [
      ['name', 'Bitte Ihren Namen angeben.'],
      ['email', 'Bitte eine E-Mail-Adresse angeben, damit wir antworten können.'],
      ['nachricht', 'Bitte beschreiben Sie kurz Ihr Anliegen.'],
    ],
    invalidEmail: 'Diese E-Mail-Adresse sieht nicht vollständig aus.',
    sending: 'Wird gesendet …',
    success: 'Danke, Ihre Anfrage ist angekommen. Wir melden uns innerhalb von 24 Stunden.',
    error: 'Das hat leider nicht geklappt. Bitte versuchen Sie es noch einmal oder schreiben Sie an',
  },
};
