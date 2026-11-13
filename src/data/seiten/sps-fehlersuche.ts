/** Unterseite /sps-fehlersuche */
import type { SubPage } from '../types';

const seite: SubPage = {
  path: '/sps-fehlersuche',
  title: 'SPS-Fehlersuche: Anlage steht still? | Alpine Atlantic',
  description: 'Steuerung meldet Fehler, Anlage steht: systematische SPS-Fehlersuche per Fernzugriff oder vor Ort, rund um die Uhr erreichbar. Ursachen und Vorgehen.',
  waText: 'Hallo! Unsere Anlage steht – ich brauche Hilfe bei der SPS-Fehlersuche.',
  waLabel: 'Störung melden',
  breadcrumb: [
    { name: 'SPS-Programmierung', href: '/sps-programmierung' },
  ],
  breadcrumbName: 'SPS-Fehlersuche',
  pathline: {
    links: [
      { label: 'Leistungen', href: '/#leistungen' },
      { label: 'SPS-Programmierung', href: '/sps-programmierung' },
    ],
    current: 'Fehlersuche',
  },
  hero: {
    title: 'SPS-Fehlersuche: Wenn die Anlage steht',
    lead: 'Jede Stunde Stillstand kostet. Wir finden Fehler in Steuerungen systematisch – per Fernzugriff meist noch am selben Tag, sonst vor Ort. Erreichbar rund um die Uhr, auch am Wochenende.',
  },
  layoutLabel: 'Leistungsbeschreibung',
  facts: [
    { label: 'Preis', value: 'Nach Aufwand, Stundensatz vorab' },
    { label: 'Ansprechpartner', value: 'Ambrosius Schmidt' },
    { label: 'Erreichbar', value: '24/7 per Telefon und WhatsApp' },
  ],
  blocks: [
    {
      id: 'bevor-sie-anrufen-fuenf-dinge-die-uns-sc',
      title: 'Bevor Sie anrufen: fünf Dinge, die uns schneller machen',
      content: [
        {
          type: 'p',
          text: 'Sie müssen nichts reparieren – aber ein paar Informationen sparen bei der Fehlersuche oft Stunden. Wenn Sie die folgenden Punkte griffbereit haben, können wir sofort loslegen.',
        },
        {
          type: 'ablauf',
          items: [
            [
              { text: 'Fehlermeldung festhalten.', strong: true },
              ' Foto vom Bedienpanel oder der Steuerungs-LEDs, bevor jemand quittiert. Der genaue Wortlaut ist Gold wert.',
            ],
            [
              { text: 'Was war zuletzt anders?', strong: true },
              ' Programmänderung, neuer Sensor, Stromausfall, Wartung, neues Produkt auf der Linie – der Fehler kommt selten aus dem Nichts.',
            ],
            [
              { text: 'Wann tritt er auf?', strong: true },
              ' Immer an derselben Stelle im Ablauf, nur bei einer Betriebsart, nur nach dem Einschalten, sporadisch?',
            ],
            [
              { text: 'Steuerungstyp und Zugang.', strong: true },
              ' Typenschild der CPU fotografieren. Gibt es einen Fernwartungszugang oder ein Programmiergerät vor Ort?',
            ],
            [
              { text: 'Programm und Dokumentation.', strong: true },
              ' Liegt das Projekt vor (Datei, Programmiergerät, beim Hersteller)? Gibt es Schaltpläne? Auch „nein" ist eine nützliche Antwort.',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Arbeiten an der elektrischen Anlage selbst – Sicherungen, Klemmen, Netzteile – gehören in die Hände Ihrer Elektrofachkraft. Wir kümmern uns um das, was im Programm und in der Kommunikation passiert, und arbeiten dabei eng mit Ihrer Instandhaltung zusammen.',
        },
      ],
    },
    {
      id: 'typische-ursachen-die-wir-immer-wieder-s',
      title: 'Typische Ursachen, die wir immer wieder sehen',
      content: [
        {
          type: 'checks',
          items: [
            [
              { text: 'Sensor oder Aktor:', strong: true },
              ' Ein verschmutzter Initiator, ein gebrochenes Kabel, ein Ventil, das nicht mehr schaltet – die Steuerung wartet ewig auf ein Signal, das nie kommt',
            ],
            [
              { text: 'Kommunikation:', strong: true },
              ' Teilnehmer am PROFINET, PROFIBUS oder EtherCAT fällt aus, Busfehler nach einem Gerätetausch, falsche Adresse oder Gerätename',
            ],
            [
              { text: 'Logikfehler nach einer Änderung:', strong: true },
              ' Eine „kleine Anpassung" hat eine Verriegelung ausgehebelt oder eine Schrittkette blockiert',
            ],
            [
              { text: 'Zeitüberschreitungen:', strong: true },
              ' Mechanik wird langsamer, Überwachungszeiten passen nicht mehr – die Anlage meldet Fehler, obwohl nichts kaputt ist',
            ],
            [
              { text: 'Datenverlust:', strong: true },
              ' Leere Pufferbatterie, verlorene Rezepturdaten oder Istwerte nach Spannungsausfall',
            ],
            [
              { text: 'Versteckte Zustände:', strong: true },
              ' Ein Merker, der nach einem Not-Halt nicht zurückgesetzt wird und die Anlage im Neustart hängen lässt',
            ],
          ],
        },
      ],
    },
    {
      id: 'wie-wir-vorgehen',
      title: 'Wie wir vorgehen',
      content: [
        {
          type: 'ablauf',
          items: [
            [
              { text: 'Erstkontakt und Einschätzung.', strong: true },
              ' Sie schildern das Problem, wir stellen gezielte Rückfragen und sagen Ihnen, ob Fernzugriff reicht oder ein Vor-Ort-Einsatz nötig ist.',
            ],
            [
              { text: 'Online-Diagnose.', strong: true },
              ' Wir gehen mit dem Programmiergerät online auf die Steuerung, lesen Diagnosepuffer und Baugruppenzustände aus und beobachten den Ablauf live.',
            ],
            [
              { text: 'Eingrenzen statt raten.', strong: true },
              ' Vom Symptom zur Ursache: Welche Bedingung fehlt, welcher Baustein blockiert, welches Signal bleibt aus? Bei sporadischen Fehlern zeichnen wir mit Diagnosebausteinen auf.',
            ],
            [
              { text: 'Beheben und absichern.', strong: true },
              ' Programmkorrektur, Parameteranpassung oder klare Anweisung an Ihre Elektrofachkraft. Danach testen wir, dass der Fehler wirklich weg ist – nicht nur die Meldung.',
            ],
            [
              { text: 'Kurzbericht.', strong: true },
              ' Was war die Ursache, was wurde geändert, was sollten Sie beobachten. Damit ist der Fall auch für Ihre Kollegen nachvollziehbar.',
            ],
          ],
        },
      ],
    },
    {
      id: 'fernwartung-schneller-guenstiger-ohne-an',
      title: 'Fernwartung: schneller, günstiger, ohne Anfahrt',
      content: [
        {
          type: 'p',
          text: 'Ein großer Teil der Fehlersuche braucht keinen Techniker im Schaltschrank, sondern jemanden, der online auf die Steuerung schaut. Mit einem gesicherten Fernwartungszugang – VPN-Router oder Fernwartungsgerät im Schaltschrank – sind wir in Minuten auf Ihrer Anlage. Sie behalten die Kontrolle: Der Zugang wird nur freigeschaltet, wenn Sie es wollen. Fehlt so ein Zugang, richten wir ihn nach dem Einsatz auf Wunsch ein, damit die nächste Störung nicht wieder einen halben Tag kostet.',
        },
      ],
    },
    {
      id: 'nach-der-reparatur-damit-es-nicht-wieder',
      title: 'Nach der Reparatur: damit es nicht wieder passiert',
      content: [
        {
          type: 'p',
          text: [
            'Oft ist der akute Fehler nur ein Symptom: unkommentierter Code, fehlende Schaltpläne, Änderungen, die niemand dokumentiert hat. Wenn Sie wollen, bringen wir im Anschluss Ordnung hinein – mit einer ',
            { text: 'Nachdokumentation Ihrer Steuerung', href: '/sps-programmierung' },
            ', verständlichen Störmeldungen auf dem Panel und einer Datensicherung des Programms, die auch nach einem CPU-Tausch noch funktioniert.',
          ],
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
            { label: 'SPS-Programmierung im Überblick', href: '/sps-programmierung' },
            { label: 'Externen SPS-Programmierer buchen', href: '/sps-programmierer' },
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: 'Was kostet ein Einsatz zur Fehlersuche?',
      a: 'Fehlersuche rechnen wir nach Aufwand ab, den Stundensatz nennen wir Ihnen vor dem Einsatz. Per Fernzugriff entfallen Anfahrt und Reisezeit, deshalb ist das fast immer der günstigere Weg. Nach der ersten Analyse sagen wir Ihnen, wie lange wir voraussichtlich brauchen.',
    },
    {
      q: 'Brauchen Sie das Originalprogramm der Steuerung?',
      a: 'Es hilft, ist aber nicht zwingend. Bei vielen Steuerungen lässt sich das laufende Programm aus der CPU auslesen. Fehlen Symbole und Kommentare, dauert die Analyse länger – dann lohnt sich im Anschluss eine Nachdokumentation, damit Sie beim nächsten Mal nicht wieder bei null anfangen.',
    },
    {
      q: 'Was, wenn die Anlage keinen Fernzugang hat?',
      a: 'Dann kommen wir zu Ihnen. Für die Zeit danach richten wir auf Wunsch einen gesicherten Fernwartungszugang ein, damit künftige Störungen schneller und ohne Anfahrt behoben werden können.',
    },
    {
      q: 'Können Sie auch Fehler finden, die nur sporadisch auftreten?',
      a: 'Ja, das ist die klassische Königsdisziplin. Wir bauen Diagnosebausteine ein, die Zustände und Signalverläufe im Moment der Störung aufzeichnen. So lässt sich auch ein Fehler eingrenzen, der nur alle paar Tage auftritt – ohne dass jemand daneben stehen muss.',
    },
  ],
  cta: {
    title: 'Anlage steht? Jetzt melden.',
    text: 'Schicken Sie uns ein Foto der Fehlermeldung und zwei Sätze zur Situation – wir antworten schnellstmöglich, auch nachts und am Wochenende.',
    mailSubject: 'SPS-Fehlersuche',
  },
};

export default seite;
