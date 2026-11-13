/** Unterseite /sps-programmierer */
import type { SubPage } from '../types';

const seite: SubPage = {
  path: '/sps-programmierer',
  title: 'Externer SPS-Programmierer gesucht? | Alpine Atlantic',
  description: 'SPS-Programmierer auf Zeit für Maschinenbau, Instandhaltung und Betreiber: kurzfristig, per Fernzugriff oder vor Ort. Quellcode und Doku gehören Ihnen.',
  waText: 'Hallo! Wir suchen einen externen SPS-Programmierer.',
  breadcrumb: [
    { name: 'SPS-Programmierung', href: '/sps-programmierung' },
  ],
  breadcrumbName: 'Externer SPS-Programmierer',
  pathline: {
    links: [
      { label: 'Leistungen', href: '/#leistungen' },
      { label: 'SPS-Programmierung', href: '/sps-programmierung' },
    ],
    current: 'Externer Programmierer',
  },
  hero: {
    title: 'Externer SPS-Programmierer: Kapazität, wenn Sie sie brauchen',
    lead: 'Das Projekt wartet, der eigene Programmierer ist ausgelastet, die Stelle bleibt unbesetzt: Wir übernehmen Steuerungsaufgaben auf Zeit – kurzfristig, per Fernzugriff oder vor Ort, zum Festpreis oder nach Aufwand.',
  },
  layoutLabel: 'Leistungsbeschreibung',
  facts: [
    { label: 'Preis', value: 'Festpreis oder Stundensatz' },
    { label: 'Ansprechpartner', value: 'Ambrosius Schmidt' },
    { label: 'Erreichbar', value: '24/7 per Telefon und WhatsApp' },
  ],
  blocks: [
    {
      id: 'fuer-wen-wir-arbeiten',
      title: 'Für wen wir arbeiten',
      content: [
        {
          type: 'checks',
          items: [
            [
              { text: 'Maschinen- und Anlagenbauer', strong: true },
              ', bei denen gerade mehr Aufträge als Programmierer da sind – Auslegung, Programmierung, Inbetriebnahme beim Endkunden',
            ],
            [
              { text: 'Betreiber und Instandhaltung', strong: true },
              ', die Änderungen an der Anlage brauchen, aber keinen eigenen SPS-Programmierer haben',
            ],
            [
              { text: 'Systemintegratoren und Schaltschrankbauer', strong: true },
              ', die für ein Projekt zusätzliche Programmierkapazität zukaufen',
            ],
            [
              { text: 'Betriebe mit Wissenslücke', strong: true },
              ': Der langjährige Steuerungstechniker geht in Pension und niemand kennt seine Programme',
            ],
          ],
        },
      ],
    },
    {
      id: 'was-sie-von-uns-bekommen',
      title: 'Was Sie von uns bekommen',
      content: [
        {
          type: 'checks',
          items: [
            [
              { text: 'Programmierung nach Ihren Vorgaben:', strong: true },
              ' Ihre Bibliotheken, Ihre Namenskonventionen, Ihr Programmierstandard – oder, wenn es keinen gibt, ein sauberer Vorschlag',
            ],
            [
              { text: 'Neuentwicklung und Erweiterung', strong: true },
              ' von SPS-Programmen inklusive Visualisierung und Schnittstellen zu übergeordneten Systemen',
            ],
            [
              { text: 'Inbetriebnahme', strong: true },
              ' bei Ihnen oder bei Ihrem Endkunden, auf Wunsch mit Einweisung des Bedienpersonals',
            ],
            [
              { text: 'Dokumentation', strong: true },
              ', die den Namen verdient: Funktionsbeschreibung, Bausteinübersicht, Schnittstellenliste, Änderungsprotokoll',
            ],
            [
              { text: 'Übergabe ohne Abhängigkeit:', strong: true },
              ' Quellcode, Projektdateien und Doku gehören Ihnen – keine geschützten Bausteine, keine Lizenzfallen',
            ],
          ],
        },
      ],
    },
    {
      id: 'extern-freelancer-oder-hersteller',
      title: 'Extern, Freelancer oder Hersteller?',
      content: [
        {
          type: 'p',
          text: 'Wer kurzfristig Steuerungskapazität braucht, hat im Wesentlichen drei Wege. Jeder hat seine Berechtigung – wir sagen Ihnen ehrlich, wann wir die richtige Wahl sind und wann nicht.',
        },
        { type: 'h3', text: 'Der Maschinenhersteller' },
        {
          type: 'p',
          text: 'Kennt seine Anlage am besten, ist aber oft teuer, langsam in der Terminfindung und an seine eigenen Prioritäten gebunden. Bei Garantiefällen und sicherheitsrelevanten Änderungen führt trotzdem kein Weg an ihm vorbei – das sagen wir Ihnen dann auch.',
        },
        { type: 'h3', text: 'Der einzelne Freelancer' },
        {
          type: 'p',
          text: 'Flexibel und günstig, aber ein einzelner Mensch: Bei Krankheit, Urlaub oder dem nächsten großen Auftrag stehen Sie wieder ohne da. Und die Dokumentation ist Verhandlungssache.',
        },
        { type: 'h3', text: 'Ein externer Dienstleister wie wir' },
        {
          type: 'p',
          text: 'Verbindlich, mit Festpreisangebot und Erreichbarkeit auch außerhalb der Bürozeiten. Wir bringen neben der Steuerungstechnik auch Software-Know-how mit – für alles, was über die SPS hinausgeht: Datenanbindung, Fernwartung, Auswertungen. Und wir dokumentieren so, dass Sie uns beim nächsten Mal nicht brauchen müssen.',
        },
      ],
    },
    {
      id: 'so-beginnt-die-zusammenarbeit',
      title: 'So beginnt die Zusammenarbeit',
      content: [
        {
          type: 'ablauf',
          items: [
            [
              { text: 'Anfrage.', strong: true },
              ' Kurz beschreiben: Anlage, Steuerungstyp, Aufgabe, Wunschtermin. Zwei Sätze reichen für den Anfang.',
            ],
            [
              { text: 'Erstgespräch.', strong: true },
              ' Innerhalb von 24 Stunden melden wir uns, klären Rückfragen und sagen Ihnen, ob und bis wann wir liefern können.',
            ],
            [
              { text: 'Angebot.', strong: true },
              ' Festpreis für abgegrenzte Projekte, Stundensatz für Fehlersuche und laufende Unterstützung – in beiden Fällen schriftlich und ohne Kleingedrucktes.',
            ],
            [
              { text: 'Zugang.', strong: true },
              ' Fernzugriff auf die Steuerung, Projektdateien, Schaltpläne, Ihr Programmierstandard. Auf Wunsch vorher eine Geheimhaltungsvereinbarung.',
            ],
            [
              { text: 'Umsetzung und Übergabe.', strong: true },
              ' Regelmäßige kurze Abstimmung, Test vor dem Eingriff in die laufende Anlage, Übergabe mit Dokumentation und Einweisung.',
            ],
          ],
        },
      ],
    },
    {
      id: 'fernzugriff-oder-vor-ort',
      title: 'Fernzugriff oder vor Ort?',
      content: [
        {
          type: 'p',
          text: 'Den Großteil der Programmierung erledigen wir per Fernzugriff – das spart Ihnen Reisekosten und uns Zeit, die wir in Ihr Projekt stecken. Inbetriebnahmen, Arbeiten mit der Mechanik und alles, bei dem man die Anlage sehen und hören muss, machen wir vor Ort. Wir sind in Österreich, Deutschland und der Schweiz tätig.',
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
            { label: 'SPS-Fehlersuche: Anlage steht still', href: '/sps-fehlersuche' },
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: 'Wie kurzfristig sind Sie verfügbar?',
      a: 'Für Fehlersuche und kleinere Änderungen in der Regel innerhalb weniger Tage, per Fernzugriff oft am selben Tag. Größere Projekte planen wir gemeinsam mit Ihnen – sagen Sie uns Ihren Termin, wir sagen Ihnen ehrlich, ob er zu halten ist.',
    },
    {
      q: 'Stundensatz oder Festpreis?',
      a: 'Beides, je nach Aufgabe. Klar abgegrenzte Projekte – ein neues Programm, eine Erweiterung, eine Nachdokumentation – machen wir zum Festpreis. Fehlersuche und laufende Unterstützung rechnen wir nach Aufwand ab, den Stundensatz kennen Sie vorab.',
    },
    {
      q: 'Wem gehört der Quellcode?',
      a: 'Ihnen. Sie bekommen das vollständige Projekt mit Symbolen, Kommentaren und Dokumentation übergeben – ohne Passwortschutz auf Bausteinen, ohne Abhängigkeit von uns. Vertraulichkeit sichern wir auf Wunsch per Geheimhaltungsvereinbarung zu.',
    },
    {
      q: 'Arbeiten Sie auch in bestehendem Code anderer Programmierer?',
      a: 'Ja, das ist der Normalfall. Wir übernehmen bestehende Projekte, halten uns an Ihre Programmierrichtlinien und Bibliotheken und dokumentieren jede Änderung – damit Ihr Team später weiterarbeiten kann, ohne uns zu fragen.',
    },
  ],
  cta: {
    title: 'Kapazität gesucht? Reden wir.',
    text: 'Anlage, Steuerung, Aufgabe, Termin – mehr brauchen wir nicht, um Ihnen innerhalb von 24 Stunden zu sagen, ob wir liefern können.',
    mailSubject: 'Anfrage SPS-Programmierer',
  },
};

export default seite;
