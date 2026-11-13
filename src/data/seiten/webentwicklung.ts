/** Unterseite /webentwicklung */
import type { SubPage } from '../types';

const seite: SubPage = {
  path: '/webentwicklung',
  title: 'Website, Shop, CRM & App für KMU | Alpine Atlantic',
  description: 'Websites, Online-Shops, CRM-Tools nach Maß und Apps für kleine und mittlere Betriebe – schnell, sauber, zum Festpreis. Zahlung nach Fertigstellung möglich.',
  waText: 'Hallo! Ich interessiere mich für Web- oder App-Entwicklung.',
  breadcrumb: [
    { name: 'Leistungen', href: '/#leistungen' },
  ],
  breadcrumbName: 'Web- & App-Entwicklung',
  pathline: {
    links: [
      { label: 'Leistungen', href: '/#leistungen' },
    ],
    current: '03 · Webentwicklung',
  },
  hero: {
    title: 'Website, Shop, CRM & App – Entwicklung aus einer Hand',
    lead: [
      'Ihr Betrieb braucht keine fünf Dienstleister, die sich gegenseitig die Schuld zuschieben. Wir entwickeln Ihre digitalen Werkzeuge als verbundenes System: von der Website über den Online-Shop bis zum CRM, das Ihre Abläufe wirklich abbildet. ',
      { text: 'Zahlung nach Fertigstellung möglich.', strong: true },
    ],
  },
  layoutLabel: 'Leistungsbeschreibung',
  facts: [
    { label: 'Preis', value: 'Festpreis nach Erstgespräch' },
    { label: 'Zahlung', value: 'Nach Fertigstellung möglich' },
    { label: 'Ansprechpartner', value: 'Ambrosius Schmidt' },
    { label: 'Erreichbar', value: '24/7 per Telefon und WhatsApp' },
  ],
  blocks: [
    {
      id: 'was-wir-entwickeln',
      title: 'Was wir entwickeln',
      content: [
        {
          type: 'checks',
          items: [
            [
              { text: 'Firmen-Websites:', strong: true },
              ' Modern, schnell, für Suchmaschinen optimiert – wie die Seite, die Sie gerade lesen',
            ],
            [
              { text: 'Online-Shops:', strong: true },
              ' Verkaufen ohne Umwege – mit Zahlungsanbindung, Versandlogik und Auswertungen',
            ],
            [
              { text: 'Individuelle CRM-Systeme:', strong: true },
              ' Kunden, Angebote und Aufträge an einem Ort, zugeschnitten auf Ihren Ablauf statt umgekehrt',
            ],
            [
              { text: 'Mobile Apps:', strong: true },
              ' Für Ihr Team im Außendienst oder Ihre Kunden – ohne App-Store-Umwege auch als Web-App',
            ],
            [
              { text: 'Schnittstellen:', strong: true },
              ' Ihre bestehenden Systeme sprechen endlich miteinander',
            ],
          ],
        },
      ],
    },
    {
      id: 'crm',
      title: 'CRM-Tools nach Maß',
      content: [
        {
          type: 'p',
          text: 'Standard-CRMs sind für alle gebaut – und passen deshalb selten genau. Wir entwickeln CRM-Werkzeuge, die genau Ihre Abläufe abbilden: die Felder, die Sie wirklich brauchen, in Ihrer Sprache, ohne monatliche Lizenzgebühr pro Nutzer. Die Daten liegen auf Ihrem Server und gehören Ihnen.',
        },
        {
          type: 'checks',
          items: [
            [
              { text: 'Kontakte und Kunden:', strong: true },
              ' mit Typen, Verlauf und Verknüpfung zu Aufträgen, Objekten oder Projekten',
            ],
            [
              { text: 'Termine:', strong: true },
              ' Kalender mit Zuordnung zu Kontakt und Vorgang',
            ],
            [
              { text: 'Angebote und Objekte:', strong: true },
              ' mit Fotos, Dokumenten und Status – auf Wunsch automatisch auf Ihrer Website veröffentlicht',
            ],
            [
              { text: 'Mehrsprachig:', strong: true },
              ' Bedienoberfläche und Inhalte in mehreren Sprachen, wenn Ihr Team oder Ihre Kunden das brauchen',
            ],
            [
              { text: 'Anbindung:', strong: true },
              ' Website-Anfragen landen direkt im CRM, Daten lassen sich exportieren oder mit Buchhaltung und E-Mail verbinden',
            ],
          ],
        },
        {
          type: 'p',
          text: [
            'Beispiel aus der Praxis: Für die Immobilienagentur ',
            { text: 'Prince Properties', href: 'https://www.prince.properties', external: true },
            ' in Pattaya haben wir Website und CRM zusammen gebaut. Objekte, Kontakte und Besichtigungstermine werden im CRM gepflegt; freigegebene Objekte erscheinen automatisch als Anzeige auf der Website, in Deutsch, Englisch und Thai.',
          ],
        },
      ],
    },
    {
      id: 'warum-aus-einer-hand',
      title: 'Warum aus einer Hand?',
      content: [
        {
          type: 'p',
          text: 'Wenn Website, Shop und Kundenverwaltung von verschiedenen Anbietern stammen, entstehen Lücken: Daten werden doppelt gepflegt, Anfragen gehen verloren, niemand fühlt sich zuständig. Wir bauen Ihre Werkzeuge so, dass sie zusammenarbeiten – eine Anfrage auf der Website wird automatisch zum CRM-Eintrag, eine Bestellung löst den richtigen Prozess aus. Das spart Zeit und verhindert Fehler.',
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
            alt: 'Die Startseite von alpineatlantic.ltd auf einem Laptop',
            width: 1200,
            height: 800,
            loading: 'lazy',
          },
          caption: 'Beispiel aus der Praxis: schnell ladend, für Suchmaschinen optimiert, auf jedem Gerät bedienbar.',
        },
      ],
    },
    {
      id: 'festpreis-statt-ueberraschung',
      title: 'Festpreis statt Überraschung',
      content: [
        {
          type: 'p',
          text: 'Nach der kostenlosen Erstberatung erhalten Sie ein Konzept mit klarem Umfang, Zeitplan und Festpreis. Während der Umsetzung sehen Sie laufend Zwischenstände – und nach dem Start lassen wir Sie nicht allein: Wartung, Erweiterungen und 24h-Support inklusive, wenn Sie es wünschen.',
        },
        {
          type: 'p',
          text: [
            { text: 'Zahlung nach Fertigstellung möglich:', strong: true },
            ' Bei der Website-Erstellung müssen Sie nicht in Vorleistung gehen. Sie sehen die fertige Website, nehmen sie ab und bezahlen erst dann den vereinbarten Festpreis.',
          ],
        },
      ],
    },
    {
      id: 'seo',
      title: 'SEO, GEO und Backlinks: gefunden werden',
      content: [
        {
          type: 'p',
          text: 'Die schönste Website nützt nichts, wenn sie niemand findet. Deshalb gehört zu unserer Webentwicklung von Anfang an die Sichtbarkeit dazu – bei Google und zunehmend auch in den Antworten von KI-Assistenten wie ChatGPT, Perplexity oder Google AI Overviews.',
        },
        {
          type: 'checks',
          items: [
            [
              { text: 'Suchmaschinenoptimierung (SEO):', strong: true },
              ' Keyword-Recherche mit echten Suchdaten, saubere Technik (Ladezeit, strukturierte Daten, Sitemap), Inhalte, die auf die Fragen Ihrer Kunden antworten',
            ],
            [
              { text: 'Generative Engine Optimization (GEO):', strong: true },
              ' Inhalte so aufbereiten, dass KI-Systeme Ihren Betrieb als Quelle zitieren – klare Antworten, nachprüfbare Fakten, strukturierte Daten',
            ],
            [
              { text: 'Backlinks:', strong: true },
              ' Seriöser Linkaufbau über Branchenverzeichnisse, Partner, Fachbeiträge und Pressearbeit – kein gekaufter Link-Spam, der Ihrer Domain schadet',
            ],
            [
              { text: 'Messung:', strong: true },
              ' Search Console, Rankings und Anfragen im Blick, monatlich verständlich berichtet',
            ],
          ],
        },
        {
          type: 'figure',
          image: {
            src: '/assets/seo-search-console-auswertung.webp',
            srcset: '/assets/seo-search-console-auswertung-800.webp 800w, /assets/seo-search-console-auswertung.webp 1200w',
            sizes: '(max-width: 760px) 100vw, 720px',
            alt: 'Laptop mit geöffnetem Leistungsbericht der Google Search Console: Klicks, Impressionen, Klickrate und durchschnittliche Position einer Website',
            width: 1200,
            height: 670,
            loading: 'lazy',
          },
          caption: 'SEO messbar machen: Die Google Search Console zeigt, wie oft Ihre Website in der Suche erscheint und angeklickt wird.',
        },
      ],
    },
  ],
  faq: [
    {
      q: 'Wie lange dauert eine neue Website für einen kleinen Betrieb?',
      a: 'Eine professionelle Firmen-Website ist bei uns typischerweise in ein bis zwei Wochen online – inklusive Texten, rechtlichen Seiten und Suchmaschinen-Grundausstattung. Shops und individuelle Systeme dauern je nach Umfang länger; den Zeitplan bekommen Sie vorab mit dem Festpreis.',
    },
    {
      q: 'Was unterscheidet euch von einem Baukasten wie Wix oder Jimdo?',
      a: 'Baukästen sind schnell, aber austauschbar und oft langsam. Wir entwickeln individuell: schneller Seitenaufbau, sauberes Design, auf Ihre Abläufe zugeschnitten – und mit einem Ansprechpartner, der auch nach dem Start erreichbar bleibt.',
    },
    {
      q: 'Können Website, Shop und CRM miteinander verbunden werden?',
      a: 'Ja – genau das ist unsere Stärke. Anfragen von der Website landen direkt im CRM, Bestellungen aus dem Shop in Ihrer Warenwirtschaft, und wiederkehrende Abläufe werden automatisiert. Ein verbundenes System statt einzelner Insellösungen.',
    },
    {
      q: 'Muss ich die Website im Voraus bezahlen?',
      a: 'Nein. Bei der Website-Erstellung ist die Zahlung nach Fertigstellung möglich: Sie sehen das fertige Ergebnis, nehmen es ab und bezahlen erst dann den vereinbarten Festpreis.',
    },
  ],
  faqInToc: true,
  cta: {
    title: 'Welches Werkzeug fehlt Ihrem Betrieb?',
    text: 'Erzählen Sie uns, was Sie brauchen – Sie bekommen eine ehrliche Einschätzung und einen Festpreis.',
    mailSubject: 'Web-/App-Anfrage',
  },
};

export default seite;
