/** Unterseite /serverwartung */
import type { SubPage } from '../types';

const seite: SubPage = {
  path: '/serverwartung',
  title: 'Serverwartung für Onlineshops & Websites | Alpine Atlantic',
  description: 'Serverwartung für Onlineshops und Websites: Updates, Backups mit Wiederherstellungstest, Sicherheit, Überwachung und Notfallhilfe. Monatlicher Festpreis.',
  waText: 'Hallo! Ich interessiere mich für Serverwartung.',
  breadcrumb: [
    { name: 'Leistungen', href: '/#leistungen' },
  ],
  breadcrumbName: 'Serverwartung',
  pathline: {
    links: [
      { label: 'Leistungen', href: '/#leistungen' },
    ],
    current: '06 · Serverwartung',
  },
  hero: {
    title: 'Serverwartung für Onlineshops und Websites',
    lead: 'Ein Shop, der nachts ausfällt, ein abgelaufenes Zertifikat, ein Update, das niemand eingespielt hat: Wir halten Ihren Server, Ihren Shop und Ihre Website aktuell, gesichert und unter Beobachtung – zum monatlichen Festpreis.',
  },
  layoutLabel: 'Leistungsbeschreibung',
  facts: [
    { label: 'Preis', value: 'Monatlicher Festpreis nach Bestandsaufnahme' },
    { label: 'Ansprechpartner', value: 'Ambrosius Schmidt' },
    { label: 'Erreichbar', value: '24/7 per Telefon und WhatsApp' },
  ],
  blocks: [
    {
      id: 'wann-sich-wartung-lohnt',
      title: 'Wann sich Wartung lohnt',
      content: [
        {
          type: 'checks',
          items: [
            'Ihr Onlineshop läuft auf einem eigenen oder gemieteten Server, und niemand fühlt sich für Updates zuständig',
            'Plugins und Erweiterungen zeigen seit Monaten „Update verfügbar“ – aus Angst, dass danach etwas kaputt ist',
            'Sie wissen nicht genau, ob es ein aktuelles Backup gibt und ob es sich wiederherstellen ließe',
            'Der Shop wird langsamer, besonders in Aktionszeiten wie Black Friday oder Weihnachten',
            'Die Agentur, die den Server eingerichtet hat, ist nicht mehr erreichbar',
          ],
        },
      ],
    },
    {
      content: [
        {
          type: 'figure',
          image: {
            src: '/assets/serverwartung-rechenzentrum.webp',
            srcset: '/assets/serverwartung-rechenzentrum-800.webp 800w, /assets/serverwartung-rechenzentrum.webp 1200w',
            sizes: '(max-width: 760px) 100vw, 720px',
            alt: 'Techniker mit Tablet an einem geöffneten Serverschrank im Rechenzentrum, ein Server ist zur Wartung ausgezogen',
            width: 1200,
            height: 800,
            loading: 'lazy',
            decoding: 'async',
          },
          caption: 'Wartung am Server – Updates, Hardware-Zustand und Sicherungen im Blick',
        },
      ],
    },
    {
      id: 'was-die-wartung-umfasst',
      title: 'Was die Wartung umfasst',
      content: [
        {
          type: 'checks',
          items: [
            [
              { text: 'Updates:', strong: true },
              ' Betriebssystem, Webserver, PHP und Datenbank sowie Shop-Software, Themes und Plugins – geprüft eingespielt, auf Wunsch zuerst in einer Testumgebung',
            ],
            [
              { text: 'Backups:', strong: true },
              ' regelmäßige Sicherungen an einem zweiten Ort, mit Wiederherstellungstest – ein Backup, das nie zurückgespielt wurde, ist nur eine Hoffnung',
            ],
            [
              { text: 'Sicherheit:', strong: true },
              ' Firewall, Schutz vor Anmeldeangriffen, SSL-Zertifikate, Zugänge und Passwörter aufräumen, nicht benötigte Dienste abschalten',
            ],
            [
              { text: 'Überwachung:', strong: true },
              ' Erreichbarkeit, Ladezeit, Speicherplatz und Zertifikatslaufzeit – mit Alarm, bevor etwas ausfällt',
            ],
            [
              { text: 'Leistung:', strong: true },
              ' Caching, Datenbankpflege und Bildoptimierung, damit der Shop auch bei vielen Besuchern schnell bleibt',
            ],
            [
              { text: 'Notfallhilfe:', strong: true },
              ' Fällt der Shop aus oder wurde er angegriffen, sind wir erreichbar – auch nachts und am Wochenende',
            ],
            [
              { text: 'Monatlicher Bericht:', strong: true },
              ' was eingespielt wurde, was aufgefallen ist und was wir empfehlen – verständlich, ohne Fachchinesisch',
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
            src: '/assets/serverwartung-support.webp',
            srcset: '/assets/serverwartung-support-800.webp 800w, /assets/serverwartung-support.webp 1200w',
            sizes: '(max-width: 760px) 100vw, 720px',
            alt: 'Techniker mit Headset an einem Arbeitsplatz mit mehreren Bildschirmen, auf denen Überwachungsgrafiken und Programmcode zu sehen sind',
            width: 1200,
            height: 800,
            loading: 'lazy',
            decoding: 'async',
          },
          caption: 'Überwachung und Support – wir sehen Probleme, bevor Ihre Kunden sie bemerken',
        },
      ],
    },
    {
      id: 'welche-systeme',
      title: 'Welche Systeme wir betreuen',
      toc: 'Welche Systeme',
      content: [
        {
          type: 'p',
          text: 'Linux-Server bei gängigen Anbietern – virtuelle Server und dedizierte Maschinen – mit nginx oder Apache, PHP, MySQL bzw. MariaDB und Node.js. Darauf typischerweise WooCommerce, Shopware oder WordPress sowie selbst entwickelte Anwendungen.',
        },
        {
          type: 'p',
          text: 'Läuft Ihr Shop bei einem gehosteten Anbieter wie Shopify, gibt es keinen Server, den Sie warten müssten. Dort übernehmen wir auf Wunsch die Betreuung des Shops selbst: Apps, Schnittstellen und Fehlersuche.',
        },
      ],
    },
    {
      id: 'so-laeuft-es-ab',
      title: 'So läuft es ab',
      content: [
        {
          type: 'ablauf',
          items: [
            [
              { text: 'Erstgespräch.', strong: true },
              ' Sie erzählen, was läuft und was Sorgen macht. Kostenlos und unverbindlich.',
            ],
            [
              { text: 'Bestandsaufnahme.', strong: true },
              ' Wir sehen uns Server, Software-Stände, Backups und Sicherheit an und sagen Ihnen ehrlich, wo es brennt.',
            ],
            [
              { text: 'Festpreisangebot.', strong: true },
              ' Leistungsumfang, Reaktionszeit und monatlicher Preis – schriftlich.',
            ],
            [
              { text: 'Aufräumen.', strong: true },
              ' Offene Updates, fehlende Backups und Sicherheitslücken schließen wir zuerst, damit der Betrieb auf sicherem Stand beginnt.',
            ],
            [
              { text: 'Laufende Wartung.', strong: true },
              ' Updates, Überwachung und Bericht jeden Monat – und ein Ansprechpartner, wenn etwas ist.',
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
            src: '/assets/serverwartung-dashboard.webp',
            srcset: '/assets/serverwartung-dashboard-800.webp 800w, /assets/serverwartung-dashboard.webp 1200w',
            sizes: '(max-width: 760px) 100vw, 720px',
            alt: 'Laptop auf einem Schreibtisch mit einem Überwachungs-Dashboard für einen Onlineshop-Server: Erreichbarkeit, Ladezeit und Auslastung',
            width: 1200,
            height: 800,
            loading: 'lazy',
            decoding: 'async',
          },
          caption: 'Monatlicher Bericht – Erreichbarkeit, Ladezeit und Auslastung auf einen Blick',
        },
      ],
    },
    {
      id: 'was-es-kostet',
      title: 'Was es kostet',
      content: [
        {
          type: 'p',
          text: 'Sie bekommen einen monatlichen Festpreis. Er richtet sich nach der Zahl der Server und Anwendungen, nach der eingesetzten Software und nach der Reaktionszeit, die Sie brauchen. Größere Arbeiten außerhalb der Wartung, etwa ein Serverumzug oder ein neues Shop-Modul, besprechen wir vorher und bieten sie getrennt an – keine Überraschungen auf der Rechnung.',
        },
      ],
    },
  ],
  faq: [
    {
      q: 'Mein Shop läuft bei Shopify – brauche ich Serverwartung?',
      a: 'Nein. Bei gehosteten Shopsystemen wie Shopify kümmert sich der Anbieter um den Server. Wir übernehmen dort auf Wunsch die Betreuung des Shops selbst, also Apps, Anbindungen und Fehlersuche. Serverwartung lohnt sich, wenn Ihr Shop oder Ihre Website auf einem eigenen oder gemieteten Server läuft, etwa mit WooCommerce, Shopware oder WordPress.',
    },
    {
      q: 'Was kostet die Serverwartung?',
      a: 'Nach einer Bestandsaufnahme bekommen Sie einen monatlichen Festpreis, der sich nach Zahl der Server, eingesetzter Software und gewünschter Reaktionszeit richtet. Die Bestandsaufnahme selbst ist Teil der kostenlosen Erstberatung.',
    },
    {
      q: 'Wechseln wir dafür den Hoster?',
      a: 'In der Regel nicht. Wir arbeiten mit dem Server, den Sie haben, egal ob bei netcup, Hetzner, IONOS oder einem anderen Anbieter. Nur wenn der bestehende Tarif zu klein oder veraltet ist, schlagen wir einen Umzug vor – mit Plan und ohne Ausfallzeit für Ihre Kunden.',
    },
    {
      q: 'Was passiert, wenn der Shop nachts ausfällt?',
      a: 'Die Überwachung meldet den Ausfall, und wir kümmern uns – auch nachts und am Wochenende. Welche Reaktionszeit gilt, legen wir im Wartungsvertrag schriftlich fest.',
    },
  ],
  faqInToc: true,
  cta: {
    title: 'Wer kümmert sich um Ihren Server?',
    text: 'Nennen Sie uns Shop-System und Hoster – wir sagen Ihnen nach einer kurzen Bestandsaufnahme, wo Handlungsbedarf ist und was die Wartung kostet.',
    mailSubject: 'Anfrage Serverwartung',
  },
  service: {
    name: 'Serverwartung für Onlineshops und Websites',
    serviceType: 'Serverwartung',
    description: 'Updates, Backups, Sicherheit, Überwachung und Notfallhilfe für Server, Onlineshops und Websites.',
  },
};

export default seite;
