/** Unterseite /branchen/handwerk-dienstleister */
import type { SubPage } from '../types';

const seite: SubPage = {
  path: '/branchen/handwerk-dienstleister',
  title: 'Website & Software für Handwerk | Alpine Atlantic',
  description: 'Websites, die in der Region gefunden werden, und Software, die Büroarbeit abnimmt – für Handwerk und Dienstleister. Festpreis, Zahlung nach Fertigstellung.',
  waText: 'Hallo! Ich interessiere mich für eine kostenlose Erstberatung.',
  breadcrumb: [
    { name: 'Branchen', href: '/#branchen' },
  ],
  breadcrumbName: 'Handwerk & Dienstleister',
  pathline: {
    links: [
      { label: 'Branchen', href: '/#branchen' },
    ],
    current: 'Handwerk & Dienstleister',
  },
  hero: {
    title: 'Website und Software für Handwerk und Dienstleister',
    lead: 'Sie sind auf der Baustelle oder beim Kunden, nicht am Schreibtisch. Wir sorgen dafür, dass Ihr Betrieb in der Region gefunden wird, Anfragen vollständig bei Ihnen ankommen und Angebote und Rechnungen weniger Zeit kosten.',
  },
  layoutLabel: 'Branche Handwerk & Dienstleister',
  facts: [
    { label: 'Preis', value: 'Festpreis, Zahlung nach Fertigstellung möglich' },
    { label: 'Ansprechpartner', value: 'Ambrosius Schmidt' },
    { label: 'Erreichbar', value: '24/7 per Telefon und WhatsApp' },
  ],
  blocks: [
    {
      id: 'leistungen',
      title: 'Was Betriebe wie Ihrer von uns bekommen',
      content: [
        {
          type: 'checks',
          items: [
            [
              { text: 'Website, die in der Region gefunden wird:', strong: true },
              ' mit Ihren Leistungen, Ihrem Einsatzgebiet und Texten, die auf die Fragen Ihrer Kunden antworten',
            ],
            [
              { text: 'Anfragen, die vollständig ankommen:', strong: true },
              ' ein Formular, das die wichtigen Angaben gleich mitfragt – statt drei Rückrufen für eine Anfrage',
            ],
            [
              { text: 'Weniger Büroarbeit:', strong: true },
              ' Angebote, Rechnungen und wiederkehrende E-Mails mit KI-Unterstützung schneller erledigt',
            ],
            [
              { text: 'Kunden und Aufträge an einem Ort:', strong: true },
              ' ein einfaches CRM statt Zettel, Excel und WhatsApp-Verlauf',
            ],
            [
              { text: 'Technik, um die Sie sich nicht kümmern müssen:', strong: true },
              ' Updates, Backups und Sicherheit für Website und Server übernehmen wir',
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
            src: '/assets/website-mockup.webp',
            srcset: '/assets/website-mockup-800.webp 800w, /assets/website-mockup.webp 1200w',
            sizes: '(max-width: 760px) 100vw, 720px',
            alt: 'Eine von Alpine Atlantic entwickelte Website auf einem Laptop',
            width: 1200,
            height: 800,
            loading: 'lazy',
            decoding: 'async',
          },
          caption: 'Schnell, verständlich und auf dem Handy genauso gut lesbar wie am Bildschirm',
        },
      ],
    },
    {
      id: 'zahlung',
      title: 'Zahlung nach Fertigstellung möglich',
      content: [
        {
          type: 'p',
          text: 'Bei der Website-Erstellung müssen Sie nicht in Vorleistung gehen: Sie bekommen vorab einen Festpreis, sehen die fertige Website, nehmen sie ab und bezahlen erst dann. Die Texte erarbeiten wir mit Ihnen gemeinsam – Sie liefern das Wissen über Ihren Betrieb, wir die Technik.',
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
            { label: 'Webentwicklung, Shop & CRM', href: '/webentwicklung' },
            { label: 'KI-Automatisierung', href: '/ki-automatisierung' },
            { label: 'SEO, GEO & Backlinks', href: '/webentwicklung#seo' },
            { label: 'Serverwartung', href: '/serverwartung' },
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: 'Wie lange dauert eine neue Website?',
      a: 'Eine Firmen-Website ist bei uns typischerweise in ein bis zwei Wochen online – inklusive Texten, rechtlichen Seiten und Suchmaschinen-Grundausstattung. Den Zeitplan bekommen Sie vorab mit dem Festpreis.',
    },
    {
      q: 'Muss ich die Website im Voraus bezahlen?',
      a: 'Nein. Bei der Website-Erstellung ist die Zahlung nach Fertigstellung möglich: Sie sehen das fertige Ergebnis, nehmen es ab und bezahlen erst dann den vereinbarten Festpreis.',
    },
    {
      q: 'Brauche ich dafür technisches Wissen?',
      a: 'Nein. Sie erzählen uns, was Ihr Betrieb macht und für wen. Technik, Gestaltung und Formulierung übernehmen wir und stimmen alles mit Ihnen ab.',
    },
  ],
  faqInToc: true,
  cta: {
    title: 'Mehr Anfragen, weniger Büro?',
    text: 'Erzählen Sie uns kurz von Ihrem Betrieb – Sie bekommen eine ehrliche Einschätzung und einen Festpreis.',
    mailSubject: 'Anfrage handwerk-dienstleister',
  },
};

export default seite;
