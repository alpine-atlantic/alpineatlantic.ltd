/** Häufige Fragen – speisen die Liste auf der Startseite und das FAQPage-Markup. */

export interface FaqItem {
  q: string;
  a: string;
}

export const faq: FaqItem[] = [
  {
    q: 'Was kostet die Zusammenarbeit mit Alpine Atlantic?',
    a: 'Die Erstberatung ist kostenlos und unverbindlich. Danach erhalten Sie ein Konzept mit klarem Umfang, Zeitplan und Festpreis – ohne laufende Überraschungen.',
  },
  {
    q: 'Arbeiten Sie auch mit kleinen Betrieben?',
    a: 'Ja, kleine und mittlere Betriebe sind unsere Zielgruppe. Wir übernehmen auch kompakte Projekte, für die größere Dienstleister keine Zeit haben.',
  },
  {
    q: 'In welchen Ländern sind Sie tätig?',
    a: 'Wir betreuen Kunden im gesamten deutschsprachigen Raum – Österreich, Deutschland und die Schweiz. Die Zusammenarbeit läuft remote, auf Deutsch, mit einem festen Ansprechpartner.',
  },
  {
    q: 'Wie schnell bekomme ich eine Antwort?',
    a: 'Auf Anfragen über das Formular, per E-Mail oder WhatsApp melden wir uns innerhalb von 24 Stunden. Bei Störungen an laufenden Systemen erreichen Sie uns rund um die Uhr.',
  },
  {
    q: 'Alpine Atlantic ist eine US-LLC – welches Recht gilt für den Vertrag?',
    a: 'Österreichisches Recht mit Gerichtsstand Innsbruck, so steht es in unseren AGB. Sie bekommen ein Angebot in Textform mit Festpreis, Umfang und Zeitplan; der Vertrag kommt mit Ihrer Annahme zustande, ganz ohne US-Formalitäten. Ansprechpartner ist in jeder Phase Ambrosius Schmidt.',
  },
  {
    q: 'Wie läuft die Rechnungsstellung?',
    a: 'Sie erhalten eine Rechnung der Alpine Atlantic LLC in Euro, zahlbar per Banküberweisung. Als Unternehmen außerhalb der EU weisen wir keine Umsatzsteuer aus; für Unternehmer in Österreich, Deutschland und der Schweiz gilt das Reverse-Charge-Verfahren, Sie führen die Steuer also wie bei anderen Auslandsdienstleistern selbst ab. Websites bezahlen Sie auf Wunsch erst nach Fertigstellung.',
  },
  {
    q: 'Wie halten Sie die DSGVO ein – auch bei KI-Automatisierung?',
    a: 'Wir haben einen Vertreter in der EU nach Art. 27 DSGVO benannt und schließen mit Ihnen auf Wunsch einen Auftragsverarbeitungsvertrag. Bei KI-Automatisierung legen wir gemeinsam fest, welche Daten ein KI-Dienst überhaupt sieht; personenbezogene Daten bleiben, wo immer möglich, in Ihren eigenen Systemen, und wir setzen nur Anbieter mit Auftragsverarbeitungsvertrag ein. Details stehen in unserer Datenschutzerklärung.',
  },
];

/** Kasten neben den Fragen auf der Startseite */
export const faqHint = {
  title: 'Ihre Frage ist nicht dabei?',
  text: 'Fragen Sie uns direkt. Wir antworten innerhalb von 24 Stunden – bei Störungen rund um die Uhr.',
};
