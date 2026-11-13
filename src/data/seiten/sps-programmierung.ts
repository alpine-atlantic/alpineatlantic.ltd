/** Unterseite /sps-programmierung */
import type { SubPage } from '../types';

const seite: SubPage = {
  path: '/sps-programmierung',
  title: 'SPS-Programmierung & Steuerungstechnik | Alpine Atlantic',
  description: 'SPS-Programmierung vom Dienstleister: Neuentwicklung, Erweiterung, Fehlersuche und Doku von Steuerungen. Festpreis nach Analyse, 24h erreichbar.',
  waText: 'Hallo! Ich habe eine Frage zur SPS-Programmierung.',
  breadcrumb: [
    { name: 'Leistungen', href: '/#leistungen' },
  ],
  breadcrumbName: 'SPS-Programmierung',
  pathline: {
    links: [
      { label: 'Leistungen', href: '/#leistungen' },
    ],
    current: '01 · SPS-Programmierung',
  },
  hero: {
    title: 'SPS-Programmierung: Steuerungen entwickeln, erweitern, retten',
    lead: 'Ob Neuentwicklung, Erweiterung einer bestehenden Anlage oder Fehlersuche unter Zeitdruck: Wir programmieren speicherprogrammierbare Steuerungen für Maschinen und Anlagen – sauber dokumentiert, zum Festpreis und mit Support rund um die Uhr.',
  },
  layoutLabel: 'Leistungsbeschreibung',
  facts: [
    { label: 'Preis', value: 'Festpreis nach Analyse' },
    { label: 'Ansprechpartner', value: 'Ambrosius Schmidt' },
    { label: 'Erreichbar', value: '24/7 per Telefon und WhatsApp' },
  ],
  blocks: [
    {
      id: 'wann-sie-uns-rufen-sollten',
      title: 'Wann Sie uns rufen sollten',
      content: [
        {
          type: 'checks',
          items: [
            'Die Anlage steht und der Fehler ist in der Steuerung nicht auffindbar',
            'Der ursprüngliche Programmierer ist nicht mehr erreichbar – und niemand versteht den Code',
            'Ihre Maschine soll erweitert werden, aber der Hersteller ruft Mondpreise auf',
            'Eine neue Anlage braucht eine komplette Steuerungslösung inklusive Visualisierung',
            'Die Dokumentation Ihrer Steuerung ist lückenhaft oder nicht vorhanden',
            'Ihr eigener Programmierer ist ausgelastet und ein Projekt wartet',
          ],
        },
      ],
    },
    {
      id: 'unsere-leistungen-in-der-steuerungstechn',
      title: 'Unsere Leistungen in der Steuerungstechnik',
      content: [
        {
          type: 'checks',
          items: [
            [
              { text: 'Neuentwicklung:', strong: true },
              ' Komplette SPS-Programme für Maschinen und Anlagen – von der Spezifikation bis zur Inbetriebnahme',
            ],
            [
              { text: 'Fehlerbehebung:', strong: true },
              ' Systematische ',
              { text: 'Fehlersuche in bestehenden Steuerungen', href: '/sps-fehlersuche' },
              ', auch per Fernzugriff',
            ],
            [
              { text: 'Erweiterung & Modernisierung:', strong: true },
              ' Neue Funktionen, neue Sensorik, Anbindung an übergeordnete Systeme',
            ],
            [
              { text: 'Nachdokumentation:', strong: true },
              ' Bestehende Programme analysieren, aufräumen und nachvollziehbar dokumentieren',
            ],
            [
              { text: 'Visualisierung (HMI):', strong: true },
              ' Bedienoberflächen, die Ihr Personal versteht – Störmeldungen im Klartext statt Fehlercodes',
            ],
            [
              { text: 'Anbindung an IT-Systeme:', strong: true },
              ' Maschinendaten in Ihre Auswertungen, Ihr ERP oder Ihre Cloud bringen',
            ],
            [
              { text: 'Externer SPS-Programmierer:', strong: true },
              ' ',
              { text: 'Kapazität auf Zeit', href: '/sps-programmierer' },
              ', wenn Ihr Team ausgelastet ist oder die Stelle unbesetzt bleibt',
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
            alt: 'Geöffneter Schaltschrank mit SPS-CPU, E/A-Baugruppen und Bedienpanel',
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
      id: 'sps-software-sprachen-plattformen-schnit',
      title: 'SPS-Software: Sprachen, Plattformen, Schnittstellen',
      content: [
        {
          type: 'p',
          text: 'Eine SPS ist nur so gut wie das Programm darin. Wir programmieren in den genormten Sprachen nach IEC 61131-3 – Strukturierter Text (ST), Funktionsplan (FUP), Kontaktplan (KOP) und Ablaufsprache (AS) – und wählen je Aufgabe die Sprache, die Ihr Instandhalter später auch lesen kann. Verständlicher Code ist für uns kein Schönheitsideal, sondern die Voraussetzung dafür, dass Sie nicht von uns abhängig werden.',
        },
        { type: 'h3', text: 'Plattformen' },
        {
          type: 'p',
          text: 'Wir arbeiten herstellerübergreifend mit den in Maschinen- und Anlagenbau üblichen Steuerungen und Entwicklungsumgebungen, darunter Siemens (TIA Portal, STEP 7), Beckhoff TwinCAT und CODESYS-basierte Systeme. Welche Steuerung bei Ihnen verbaut ist, klären wir im Erstgespräch – meist reicht ein Foto vom Typenschild.',
        },
        { type: 'h3', text: 'Schnittstellen und Vernetzung' },
        {
          type: 'p',
          text: 'Feldbusse wie PROFINET, PROFIBUS, EtherCAT und Modbus, dazu OPC UA für den Weg nach oben in Leitsystem, Datenbank oder Cloud. Weil wir neben der Steuerungstechnik auch Software entwickeln, endet unsere Arbeit nicht an der Schaltschranktür: Die Maschinendaten landen dort, wo Sie sie brauchen – in Ihrer Auswertung, Ihrem ERP oder auf dem Handy des Schichtleiters.',
        },
      ],
    },
    {
      id: 'so-laeuft-ein-sps-projekt-bei-uns-ab',
      title: 'So läuft ein SPS-Projekt bei uns ab',
      content: [
        {
          type: 'ablauf',
          items: [
            [
              { text: 'Erstgespräch.', strong: true },
              ' Sie beschreiben Anlage und Aufgabe – telefonisch, per WhatsApp oder im Formular. Kostenlos, unverbindlich, in der Regel am selben Tag.',
            ],
            [
              { text: 'Analyse.', strong: true },
              ' Wir sehen uns Programm, Dokumentation und Anlage an – per Fernzugriff oder vor Ort – und sagen Ihnen ehrlich, was machbar ist.',
            ],
            [
              { text: 'Festpreisangebot.', strong: true },
              ' Klar umrissener Leistungsumfang, fester Preis, realistischer Termin. Keine Überraschungen auf der Rechnung.',
            ],
            [
              { text: 'Umsetzung.', strong: true },
              ' Programmierung und, wo möglich, Test in der Simulation, bevor wir die laufende Anlage anfassen.',
            ],
            [
              { text: 'Inbetriebnahme und Dokumentation.', strong: true },
              ' Vor Ort oder aus der Ferne, mit Einweisung Ihres Personals und vollständiger Doku zur Übergabe.',
            ],
            [
              { text: 'Support.', strong: true },
              ' Danach sind wir erreichbar – auch nachts und am Wochenende, wenn es sein muss.',
            ],
          ],
        },
      ],
    },
    {
      id: 'warum-alpine-atlantic',
      title: 'Warum Alpine Atlantic?',
      content: [
        {
          type: 'p',
          text: 'Wir verbinden zwei Welten, die sonst selten zusammenkommen: klassische Steuerungstechnik und moderne Software-Entwicklung. Das heißt für Sie: Ihre SPS-Lösung ist nicht nur robust, sondern auf Wunsch auch vernetzt – mit sauberen Schnittstellen zu Datenauswertung, Fernwartung und Ihren Business-Systemen. Und wenn es brennt, erreichen Sie uns auch um drei Uhr früh.',
        },
      ],
    },
    {
      id: 'weiterfuehrend',
      title: 'Weiterführend',
      content: [
        {
          type: 'related',
          links: [
            { label: 'SPS-Fehlersuche: Anlage steht still', href: '/sps-fehlersuche' },
            { label: 'Externen SPS-Programmierer buchen', href: '/sps-programmierer' },
            { label: 'Engineering & Automotive-Software', href: '/automotive-software' },
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: 'Unsere Anlage steht still – wie schnell können Sie helfen?',
      a: 'Melden Sie sich jederzeit – auch nachts und am Wochenende. Viele Steuerungsprobleme lassen sich per Fernzugriff analysieren und beheben. Wir sagen Ihnen nach einer ersten Analyse ehrlich, was möglich ist und wie lange es dauert.',
    },
    {
      q: 'Mit welchen SPS-Systemen arbeiten Sie?',
      a: 'Wir arbeiten herstellerübergreifend mit den gängigen Plattformen und Entwicklungsumgebungen der Industrie, programmiert in den Sprachen nach IEC 61131-3. Nennen Sie uns Ihre Steuerung – in der kostenlosen Erstberatung klären wir, ob und wie wir helfen können.',
    },
    {
      q: 'Was kostet SPS-Programmierung?',
      a: 'Das hängt vom Umfang ab – eine Fehlersuche ist etwas anderes als eine komplette Neuentwicklung mit Visualisierung. Nach einer kurzen Analyse bekommen Sie von uns ein Festpreisangebot. Bei Notfalleinsätzen rechnen wir nach Aufwand ab und nennen den Stundensatz vorab.',
    },
    {
      q: 'Übernehmen Sie auch Anlagen, deren ursprünglicher Programmierer nicht mehr verfügbar ist?',
      a: 'Ja, das ist einer unserer häufigsten Fälle. Wir analysieren den bestehenden Code, dokumentieren ihn nach und übernehmen Wartung und Weiterentwicklung – damit Ihre Anlage nicht länger von einer einzelnen Person abhängt.',
    },
    {
      q: 'Arbeiten Sie auch per Fernwartung?',
      a: 'Ja. Wenn Ihre Steuerung über einen gesicherten Fernzugang erreichbar ist, können wir Diagnose, Programmänderungen und viele Fehlerbehebungen aus der Ferne erledigen – ohne Anfahrt und meist am selben Tag. Für Inbetriebnahmen und Arbeiten an der Hardware kommen wir zu Ihnen.',
    },
  ],
  cta: {
    title: 'Steuerungsproblem? Reden wir.',
    text: 'Beschreiben Sie kurz Anlage und Problem – wir melden uns schnellstmöglich mit einer ehrlichen Einschätzung.',
    mailSubject: 'SPS-Anfrage',
  },
  service: {
    name: 'SPS-Programmierung und Steuerungstechnik',
    serviceType: 'SPS-Programmierung',
    description: 'Neuentwicklung, Erweiterung, Fehlersuche und Nachdokumentation speicherprogrammierbarer Steuerungen für Maschinen und Anlagen.',
  },
};

export default seite;
