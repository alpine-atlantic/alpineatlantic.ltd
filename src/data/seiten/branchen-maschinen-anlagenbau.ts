/** Unterseite /branchen/maschinen-anlagenbau */
import type { SubPage } from '../types';

const seite: SubPage = {
  path: '/branchen/maschinen-anlagenbau',
  title: 'SPS & Software für den Maschinenbau | Alpine Atlantic',
  description: 'Steuerungs- und Softwareaufgaben auf Zeit für Maschinen- und Anlagenbauer: SPS nach Ihrem Standard, Inbetriebnahme, HMI und Maschinendaten bis ins ERP.',
  waText: 'Hallo! Ich interessiere mich für eine kostenlose Erstberatung.',
  breadcrumb: [
    { name: 'Branchen', href: '/#branchen' },
  ],
  breadcrumbName: 'Maschinen- & Anlagenbau',
  pathline: {
    links: [
      { label: 'Branchen', href: '/#branchen' },
    ],
    current: 'Maschinen- & Anlagenbau',
  },
  hero: {
    title: 'Steuerungstechnik und Software für den Maschinen- und Anlagenbau',
    lead: 'Mehr Aufträge als Programmierer, eine Inbetriebnahme beim Endkunden, Maschinendaten, die ins ERP sollen: Wir übernehmen Steuerungs- und Softwareaufgaben auf Zeit – nach Ihren Standards, mit Dokumentation und zum Festpreis.',
  },
  layoutLabel: 'Branche Maschinen- & Anlagenbau',
  facts: [
    { label: 'Preis', value: 'Festpreis oder Stundensatz' },
    { label: 'Ansprechpartner', value: 'Ambrosius Schmidt' },
    { label: 'Erreichbar', value: '24/7 per Telefon und WhatsApp' },
  ],
  blocks: [
    {
      id: 'aufgaben',
      title: 'Typische Aufgaben, die wir übernehmen',
      content: [
        {
          type: 'checks',
          items: [
            [
              { text: 'SPS-Programmierung nach Ihrem Standard:', strong: true },
              ' mit Ihren Bibliotheken und Namenskonventionen – neu, als Erweiterung oder als Modernisierung',
            ],
            [
              { text: 'Inbetriebnahme:', strong: true },
              ' bei Ihnen im Haus oder beim Endkunden, auf Wunsch mit Einweisung des Bedienpersonals',
            ],
            [
              { text: 'Visualisierung (HMI):', strong: true },
              ' Bedienoberflächen und Störmeldungen im Klartext statt Fehlercodes',
            ],
            [
              { text: 'Nachdokumentation:', strong: true },
              ' bestehende Programme analysieren, kommentieren und nachvollziehbar dokumentieren',
            ],
            [
              { text: 'Maschinendaten nutzen:', strong: true },
              ' über OPC UA in Auswertungen, ERP oder Cloud – damit Kennzahlen nicht mehr von Hand erfasst werden',
            ],
            [
              { text: 'Prüfstände und Testautomatisierung:', strong: true },
              ' Software, die Abläufe automatisiert und Ergebnisse zuverlässig erfasst',
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
            src: '/assets/sps-schaltschrank-32.webp',
            srcset: '/assets/sps-schaltschrank-32-800.webp 800w, /assets/sps-schaltschrank-32.webp 1200w',
            sizes: '(max-width: 760px) 100vw, 720px',
            alt: 'Geöffneter Schaltschrank mit SPS-CPU, E/A-Baugruppen und Bedienpanel in einer Produktionshalle',
            width: 1200,
            height: 800,
            loading: 'lazy',
            decoding: 'async',
          },
          caption: 'Steuerung, Bedienpanel, Verdrahtung – wir arbeiten dort, wo die Anlage läuft',
        },
      ],
    },
    {
      id: 'zusammenarbeit',
      title: 'Wie wir mit Ihrem Team arbeiten',
      content: [
        {
          type: 'p',
          text: 'Wir halten uns an Ihren Programmierstandard, stimmen uns in kurzen Abständen ab und testen, bevor wir in die laufende Anlage eingreifen. Abgegrenzte Pakete – ein Programm, eine Erweiterung, eine Nachdokumentation – bekommen Sie zum Festpreis, Fehlersuche und laufende Unterstützung nach Aufwand mit vorab genanntem Stundensatz. Übergeben werden vollständige Projektdateien ohne geschützte Bausteine.',
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
            { label: 'SPS-Programmierung', href: '/sps-programmierung' },
            { label: 'Externer SPS-Programmierer', href: '/sps-programmierer' },
            { label: 'SPS-Fehlersuche', href: '/sps-fehlersuche' },
            { label: 'Engineering & Automotive-Software', href: '/automotive-software' },
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: 'Können Sie kurzfristig einspringen?',
      a: 'Für Fehlersuche und kleinere Änderungen in der Regel innerhalb weniger Tage, per Fernzugriff oft am selben Tag. Größere Projekte planen wir gemeinsam – sagen Sie uns Ihren Termin, wir sagen Ihnen ehrlich, ob er zu halten ist.',
    },
    {
      q: 'Arbeiten Sie mit unseren Bibliotheken und Vorgaben?',
      a: 'Ja. Wir übernehmen bestehende Projekte, halten uns an Ihre Programmierrichtlinien und Bibliotheken und dokumentieren jede Änderung, damit Ihr Team später ohne uns weiterarbeiten kann.',
    },
    {
      q: 'Wem gehört der Quellcode?',
      a: 'Ihnen. Sie bekommen das vollständige Projekt mit Symbolen, Kommentaren und Dokumentation – ohne Passwortschutz auf Bausteinen. Vertraulichkeit sichern wir auf Wunsch per Geheimhaltungsvereinbarung zu.',
    },
  ],
  faqInToc: true,
  cta: {
    title: 'Kapazität gesucht? Reden wir.',
    text: 'Anlage, Steuerung, Aufgabe, Termin – mehr brauchen wir nicht, um Ihnen innerhalb von 24 Stunden zu sagen, ob wir liefern können.',
    mailSubject: 'Anfrage maschinen-anlagenbau',
  },
};

export default seite;
