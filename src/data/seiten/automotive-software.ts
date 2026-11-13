/** Unterseite /automotive-software */
import type { SubPage } from '../types';

const seite: SubPage = {
  path: '/automotive-software',
  title: 'Engineering & Automotive-Software | Alpine Atlantic',
  description: 'Engineering für Automatisierungsprojekte jeder Größe und Software für den Automotive-Bereich: Prüfstände, Testautomatisierung, Datenauswertung.',
  waText: 'Hallo! Ich habe ein Engineering-/Automotive-Projekt.',
  breadcrumb: [
    { name: 'Leistungen', href: '/#leistungen' },
  ],
  breadcrumbName: 'Engineering & Automotive-Software',
  pathline: {
    links: [
      { label: 'Leistungen', href: '/#leistungen' },
    ],
    current: '05 · Automotive-Software',
  },
  hero: {
    title: 'Engineering & Automotive-Software: Technik, die trägt',
    lead: 'Automatisierungsprojekte scheitern selten an der Idee – sondern an der Umsetzung. Wir übernehmen Engineering von der Konzeption bis zur Inbetriebnahme, für Projekte jeder Größe, und entwickeln Software für den Automotive-Bereich.',
  },
  layoutLabel: 'Leistungsbeschreibung',
  facts: [
    { label: 'Preis', value: 'Festpreis nach Spezifikation' },
    { label: 'Ansprechpartner', value: 'Ambrosius Schmidt' },
    { label: 'Erreichbar', value: '24/7 per Telefon und WhatsApp' },
  ],
  blocks: [
    {
      id: 'engineering-fuer-automatisierungsprojekt',
      title: 'Engineering für Automatisierungsprojekte',
      content: [
        {
          type: 'p',
          text: 'Ob eine einzelne Station automatisiert werden soll oder eine komplette Linie: Wir begleiten Ihr Projekt durch alle Phasen – und bleiben auch danach ansprechbar.',
        },
        {
          type: 'checks',
          items: [
            [
              { text: 'Konzeption & Spezifikation:', strong: true },
              ' Aus Ihrer Anforderung wird ein umsetzbares, kalkulierbares Konzept',
            ],
            [
              { text: 'Umsetzung:', strong: true },
              ' Steuerung, Software und Schnittstellen – sauber entwickelt und dokumentiert',
            ],
            [
              { text: 'Inbetriebnahme & Test:', strong: true },
              ' Gründlich geprüft, bevor es in den Produktivbetrieb geht',
            ],
            [
              { text: 'Kleinprojekte willkommen:', strong: true },
              ' Auch kompakte Aufgaben, für die große Engineering-Büros keine Zeit haben',
            ],
          ],
        },
      ],
    },
    {
      id: 'software-fuer-den-automotive-bereich',
      title: 'Software für den Automotive-Bereich',
      content: [
        {
          type: 'checks',
          items: [
            [
              { text: 'Prüf- und Teststand-Software:', strong: true },
              ' Abläufe automatisieren, Ergebnisse zuverlässig erfassen',
            ],
            [
              { text: 'Testautomatisierung:', strong: true },
              ' Wiederholbare Tests statt manueller Prüfmarathons',
            ],
            [
              { text: 'Datenauswertung:', strong: true },
              ' Messdaten und Produktionsdaten verständlich aufbereitet',
            ],
            [
              { text: 'Individuelle Entwicklungswerkzeuge:', strong: true },
              ' Software, die Ihre Ingenieure schneller macht',
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
            src: '/assets/automotive-entwicklung.webp',
            srcset: '/assets/automotive-entwicklung-800.webp 800w, /assets/automotive-entwicklung.webp 1200w',
            sizes: '(max-width: 760px) 100vw, 720px',
            alt: 'Tablet mit 3D-Fahrzeugmodell in einer Entwicklungshalle mit Prüfstand und Roboterarm',
            width: 1200,
            height: 800,
            loading: 'lazy',
            decoding: 'async',
          },
          caption: 'Entwicklung und Test – Software für Fahrzeug und Fertigung',
        },
      ],
    },
    {
      id: 'ein-partner-fuer-beide-welten',
      title: 'Ein Partner für beide Welten',
      content: [
        {
          type: 'p',
          text: 'Unser Hintergrund verbindet Steuerungstechnik mit moderner Software-Entwicklung. Deshalb können wir Projekte übernehmen, die zwischen den Disziplinen liegen – dort, wo der Maschinenbauer auf die IT zeigt und die IT auf den Maschinenbauer. Sie bekommen eine Lösung aus einer Hand, mit einem Ansprechpartner und Support rund um die Uhr.',
        },
      ],
    },
  ],
  faq: [
    {
      q: 'Übernehmt ihr auch kleine Engineering-Projekte?',
      a: 'Ausdrücklich ja. Vom kompakten Automatisierungs-Kleinprojekt bis zur Großanlage – wir kalkulieren jedes Projekt einzeln und sagen ehrlich, ob sich der Aufwand für Sie lohnt.',
    },
    {
      q: 'Was gehört für euch zu Automotive-Software?',
      a: 'Software-Entwicklung rund um Fahrzeug und Fertigung: Steuerungs- und Prüfsoftware, Testautomatisierung, Datenauswertung und Werkzeuge, die Entwicklungs- und Produktionsprozesse im Automotive-Umfeld schneller und zuverlässiger machen.',
    },
    {
      q: 'Wie stellt ihr die Qualität sicher?',
      a: 'Durch strukturiertes Vorgehen: klare Spezifikation vor der Umsetzung, saubere Dokumentation und gründliche Tests vor der Übergabe. Sie erhalten Software, die auch der Nächste noch versteht und warten kann.',
    },
  ],
  faqInToc: true,
  cta: {
    title: 'Projekt im Kopf? Reden wir drüber.',
    text: 'Groß oder klein – beschreiben Sie Ihr Vorhaben, und Sie bekommen eine ehrliche technische Einschätzung.',
    mailSubject: 'Engineering-Anfrage',
  },
};

export default seite;
