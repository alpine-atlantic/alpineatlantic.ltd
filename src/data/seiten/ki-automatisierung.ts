/** Unterseite /ki-automatisierung */
import type { SubPage } from '../types';

const seite: SubPage = {
  path: '/ki-automatisierung',
  title: 'KI-Automatisierung für KMU | Alpine Atlantic',
  description: 'KI-Automatisierung für KMU: Angebote, Rechnungen, Dokumente und E-Mails automatisch erledigen – mit Ihren gewohnten Werkzeugen, zum Festpreis.',
  waText: 'Hallo! Ich interessiere mich für KI-Automatisierung.',
  breadcrumb: [
    { name: 'Leistungen', href: '/#leistungen' },
  ],
  breadcrumbName: 'KI-Automatisierung',
  pathline: {
    links: [
      { label: 'Leistungen', href: '/#leistungen' },
    ],
    current: '02 · KI-Automatisierung',
  },
  hero: {
    title: 'KI-Automatisierung für KMU: Schluss mit Routinearbeit',
    lead: 'Jede Woche gehen in kleinen und mittleren Betrieben Stunden für Aufgaben verloren, die ein Computer zuverlässiger erledigen könnte. Wir digitalisieren Ihre Prozesse mit KI – pragmatisch, bezahlbar und ohne Ihre gewohnten Abläufe umzukrempeln.',
  },
  layoutLabel: 'Leistungsbeschreibung',
  facts: [
    { label: 'Preis', value: 'Festpreis nach Erstgespräch' },
    { label: 'Ansprechpartner', value: 'Ambrosius Schmidt' },
    { label: 'Erreichbar', value: '24/7 per Telefon und WhatsApp' },
  ],
  blocks: [
    {
      id: 'woran-sie-merken-dass-automatisierung-si',
      title: 'Woran Sie merken, dass Automatisierung sich lohnt',
      content: [
        {
          type: 'checks',
          items: [
            'Ihr Team tippt Daten von einem System ins andere – Woche für Woche',
            'Angebote und Rechnungen zu schreiben dauert länger als die eigentliche Arbeit',
            'Im Posteingang landen täglich dieselben Fragen von Kunden',
            'Dokumente, Lieferscheine oder Formulare werden von Hand abgetippt und abgelegt',
            'Wichtige Aufgaben bleiben liegen, weil das Tagesgeschäft alles frisst',
          ],
        },
      ],
    },
    {
      content: [
        {
          type: 'figure',
          image: {
            src: '/assets/ki-automatisierung.webp',
            srcset: '/assets/ki-automatisierung-800.webp 800w, /assets/ki-automatisierung.webp 1200w',
            sizes: '(max-width: 760px) 100vw, 720px',
            alt: 'Laptop mit einem CRM-Dashboard und automatisierten Abläufen in einem Büro',
            width: 1200,
            height: 800,
            loading: 'lazy',
            decoding: 'async',
          },
          caption: 'Automatisierung im Alltag – Daten fließen, ohne dass jemand abtippt',
        },
      ],
    },
    {
      id: 'was-wir-fuer-sie-automatisieren',
      title: 'Was wir für Sie automatisieren',
      content: [
        {
          type: 'p',
          text: 'Wir analysieren Ihre Abläufe und bauen KI-gestützte Automatisierungen, die sich in Ihre bestehenden Werkzeuge einfügen – E-Mail, Excel, Branchensoftware, CRM oder Shop. Typische Projekte:',
        },
        {
          type: 'checks',
          items: [
            [
              { text: 'Dokumentenverarbeitung:', strong: true },
              ' Eingehende Rechnungen, Lieferscheine und Formulare automatisch auslesen, prüfen und ablegen',
            ],
            [
              { text: 'Angebots- und Rechnungserstellung:', strong: true },
              ' Aus Anfrage wird Angebot – in Minuten statt Stunden',
            ],
            [
              { text: 'E-Mail- und Kundenservice-Automatisierung:', strong: true },
              ' Wiederkehrende Anfragen automatisch beantworten, den Rest sauber vorsortieren',
            ],
            [
              { text: 'Datenübertragung zwischen Systemen:', strong: true },
              ' Schluss mit Copy-Paste zwischen Programmen',
            ],
            [
              { text: 'Berichte und Auswertungen:', strong: true },
              ' Kennzahlen automatisch zusammentragen statt monatlich von Hand',
            ],
          ],
        },
      ],
    },
    {
      id: 'so-laeuft-ihr-projekt-ab',
      title: 'So läuft Ihr Projekt ab',
      content: [
        {
          type: 'p',
          text: 'Erst die kostenlose Beratung: Wir hören zu, wo Zeit verloren geht. Dann erhalten Sie ein Konzept mit Festpreis. Nach der Umsetzung testen wir gemeinsam im echten Tagesgeschäft – und bleiben mit unserem 24h-Support an Ihrer Seite.',
        },
      ],
    },
  ],
  faq: [
    {
      q: 'Was kostet KI-Automatisierung für einen kleinen Betrieb?',
      a: 'Das hängt vom Umfang ab. Nach einer kostenlosen Erstberatung erhalten Sie von uns ein Konzept mit Festpreis – ohne versteckte Kosten. Viele Automatisierungen amortisieren sich innerhalb weniger Monate durch eingesparte Arbeitszeit.',
    },
    {
      q: 'Welche Prozesse lassen sich mit KI automatisieren?',
      a: 'Typische Beispiele: Angebots- und Rechnungserstellung, Verarbeitung eingehender E-Mails und Dokumente, Datenübertragung zwischen Systemen, Terminkoordination und die Beantwortung wiederkehrender Kundenanfragen.',
    },
    {
      q: 'Brauchen wir dafür neue Software oder neue Systeme?',
      a: 'In der Regel nicht. Wir bauen die Automatisierung um Ihre bestehenden Werkzeuge herum – E-Mail, Excel, Ihre Branchensoftware oder Ihr CRM. Ihr Team arbeitet weiter wie gewohnt, nur ohne die lästigen Routineschritte.',
    },
  ],
  faqInToc: true,
  cta: {
    title: 'Wo verliert Ihr Betrieb Zeit?',
    text: 'Erzählen Sie es uns – wir sagen Ihnen ehrlich, was automatisierbar ist und was sich rechnet.',
    mailSubject: 'KI-Automatisierung',
  },
};

export default seite;
