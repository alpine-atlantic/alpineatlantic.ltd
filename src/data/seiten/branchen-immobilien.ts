/** Unterseite /branchen/immobilien */
import type { SubPage } from '../types';

const seite: SubPage = {
  path: '/branchen/immobilien',
  title: 'Website & CRM für Makler & Hausverwaltungen | Alpine Atlantic',
  description: 'Website und CRM aus einem Guss für Makler und Hausverwaltungen: Objekte, Kontakte und Termine an einem Ort, Anzeigen automatisch online, mehrsprachig.',
  waText: 'Hallo! Ich interessiere mich für eine kostenlose Erstberatung.',
  breadcrumb: [
    { name: 'Branchen', href: '/#branchen' },
  ],
  breadcrumbName: 'Makler & Hausverwaltungen',
  pathline: {
    links: [
      { label: 'Branchen', href: '/#branchen' },
    ],
    current: 'Makler & Hausverwaltungen',
  },
  hero: {
    title: 'Website und CRM für Makler und Hausverwaltungen',
    lead: 'Objekte, Interessenten, Eigentümer und Besichtigungstermine an einem Ort – und was Sie freigeben, steht automatisch auf Ihrer Website. Wir bauen Website und CRM aus einem Guss, auf Wunsch mehrsprachig.',
  },
  layoutLabel: 'Branche Makler & Hausverwaltungen',
  facts: [
    { label: 'Preis', value: 'Festpreis nach Erstgespräch' },
    { label: 'Ansprechpartner', value: 'Ambrosius Schmidt' },
    { label: 'Erreichbar', value: '24/7 per Telefon und WhatsApp' },
  ],
  blocks: [
    {
      id: 'makler',
      title: 'Für Immobilienmakler',
      content: [
        {
          type: 'checks',
          items: [
            [
              { text: 'Objekte mit Fotos und Exposé:', strong: true },
              ' im CRM gepflegt und auf Knopfdruck als Anzeige auf Ihrer Website veröffentlicht',
            ],
            [
              { text: 'Kontakte:', strong: true },
              ' Käufer, Mieter und Eigentümer mit Verknüpfung zu den passenden Objekten',
            ],
            [
              { text: 'Besichtigungstermine:', strong: true },
              ' Kalender mit Zuordnung zu Kontakt und Objekt',
            ],
            [
              { text: 'Mehrsprachig:', strong: true },
              ' Website und Anzeigen in mehreren Sprachen, wenn Ihre Kunden aus dem Ausland kommen',
            ],
          ],
        },
      ],
    },
    {
      content: [
        {
          type: 'figure',
          image: {
            src: '/assets/projekt-prince-properties.webp',
            srcset: '/assets/projekt-prince-properties-800.webp 800w, /assets/projekt-prince-properties.webp 1400w',
            sizes: '(max-width: 1100px) 100vw, 680px',
            alt: 'Startseite der Immobilienagentur Prince Properties mit Blick auf die Bucht von Pattaya',
            width: 1200,
            height: 800,
            loading: 'lazy',
            decoding: 'async',
          },
          caption: 'Aus der Praxis: Website und CRM für Prince Properties in Pattaya',
        },
      ],
    },
    {
      id: 'hausverwaltungen',
      title: 'Für Hausverwaltungen',
      content: [
        {
          type: 'checks',
          items: [
            [
              { text: 'Eine Website, die Vertrauen schafft:', strong: true },
              ' verschlüsselt, auf dem Handy lesbar, mit Ansprechpartnern und Notfallnummern auf einen Blick',
            ],
            [
              { text: 'Schäden und Anliegen online melden:', strong: true },
              ' ein Formular, über das Mieter und Eigentümer Meldungen mit allen nötigen Angaben schicken',
            ],
            [
              { text: 'Verwaltung der Kontakte:', strong: true },
              ' Eigentümer, Mieter und Handwerker übersichtlich im CRM statt verteilt auf Postfächer',
            ],
          ],
        },
      ],
    },
    {
      id: 'praxis',
      title: 'Beispiel aus der Praxis',
      content: [
        {
          type: 'p',
          text: [
            'Für die Immobilienagentur ',
            { text: 'Prince Properties', href: 'https://www.prince.properties', external: true },
            ' in Pattaya haben wir Website und CRM zusammen gebaut: dreisprachig in Deutsch, Englisch und Thai, mit Objekten, Kontakten und Besichtigungsterminen im CRM. Freigegebene Objekte erscheinen automatisch als Anzeige auf der Website.',
          ],
        },
      ],
    },
    {
      id: 'passende-leistungen',
      title: 'Passende Leistungen',
      toc: false,
      content: [
        {
          type: 'related',
          links: [
            { label: 'CRM-Tools nach Maß', href: '/webentwicklung#crm' },
            { label: 'Webentwicklung', href: '/webentwicklung' },
            { label: 'Serverwartung', href: '/serverwartung' },
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: 'Brauche ich dann noch ein CRM-Abo?',
      a: 'Nein. Das CRM läuft auf Ihrem Server, es fällt keine Lizenzgebühr pro Nutzer an, und die Daten gehören Ihnen.',
    },
    {
      q: 'Können bestehende Daten übernommen werden?',
      a: 'Ja, soweit sie sich exportieren lassen, etwa als Excel- oder CSV-Datei aus Ihrem bisherigen Programm. Wie aufwendig die Übernahme ist, klären wir im Erstgespräch.',
    },
    {
      q: 'Geht das auch mehrsprachig?',
      a: 'Ja. Website, Anzeigen und auf Wunsch auch die Bedienoberfläche des CRM lassen sich in mehreren Sprachen anlegen – bei Prince Properties sind es drei.',
    },
  ],
  faqInToc: true,
  cta: {
    title: 'Objekte, Kontakte, Website – aus einem Guss?',
    text: 'Zeigen Sie uns, wie Sie heute arbeiten. Wir sagen Ihnen ehrlich, was ein eigenes CRM bringt und was es kostet.',
    mailSubject: 'Anfrage immobilien',
  },
};

export default seite;
