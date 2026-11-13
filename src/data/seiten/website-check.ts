/**
 * Unterseite /website-check – kostenloser technischer Website-Check.
 * Rechtsangaben am 02.11.2026 im RIS geprüft: § 165 Abs. 3 iVm § 188 Abs. 4 Z 24 TKG 2021 (bis 50.000 €),
 * § 26 ECG (bis 3.000 €), § 27 ECG (straflos bei fristgerechter Behebung), § 27 MedienG (bis 20.000 €),
 * § 12 FAGG (Rücktrittsfrist + 12 Monate). Praxisbeispiele bewusst anonymisiert (keine Namen, keine Adressen).
 */
import type { SubPage } from '../types';

const seite: SubPage = {
  path: '/website-check',
  title: 'Kostenloser Website-Check für Betriebe | Alpine Atlantic',
  description: 'Kostenloser Website-Check: Wir prüfen Cookie-Banner, Impressum, Datenschutz und Widerrufsbelehrung auf typische Fehler – mit schriftlicher Mängelliste.',
  waText: 'Hallo! Ich hätte gerne den kostenlosen Website-Check für meine Website.',
  breadcrumb: [
    { name: 'Leistungen', href: '/#leistungen' },
  ],
  breadcrumbName: 'Kostenloser Website-Check',
  pathline: {
    links: [
      { label: 'Leistungen', href: '/#leistungen' },
    ],
    current: '07 · Website-Check',
  },
  hero: {
    title: 'Kostenloser Website-Check: Fehler finden, bevor sie teuer werden',
    lead: [
      'Ein fehlender „Ablehnen“-Knopf im Cookie-Banner, ein unvollständiges Impressum, ein veralteter Link: Meistens steckt keine böse Absicht dahinter, sondern Schlampigkeit – und im Ernstfall kostet sie viel Geld. Wir sehen uns Ihre Website an und schicken Ihnen eine verständliche Mängelliste. ',
      { text: 'Kostenlos und unverbindlich.', strong: true },
    ],
  },
  heroCta: { label: 'Website-Check anfordern', href: '/#kontakt' },
  layoutLabel: 'Leistungsbeschreibung',
  facts: [
    { label: 'Preis', value: 'Kostenlos und unverbindlich' },
    { label: 'Ergebnis', value: 'Schriftliche Mängelliste' },
    { label: 'Umfang', value: 'Technische Prüfung, keine Rechtsberatung' },
    { label: 'Ansprechpartner', value: 'Ambrosius Schmidt' },
  ],
  blocks: [
    {
      id: 'haeufige-fehler',
      title: 'Häufige Fehler – und was sie kosten können',
      toc: 'Häufige Fehler',
      content: [
        {
          type: 'checks',
          items: [
            [
              { text: 'Cookie-Banner ohne „Ablehnen“-Knopf:', strong: true },
              ' Nicht notwendige Cookies und Dienste dürfen erst nach aktiver Einwilligung laden. Verstöße gegen § 165 Abs. 3 TKG 2021 kosten bis zu 50.000 € (§ 188 Abs. 4 TKG 2021).',
            ],
            [
              { text: 'Unvollständiges Impressum:', strong: true },
              ' bis zu 3.000 € nach § 26 E-Commerce-Gesetz, bis zu 20.000 € nach § 27 Mediengesetz.',
            ],
            [
              { text: 'Widersprüchliche Angaben zum Widerruf:', strong: true },
              ' Fehlt im Webshop die richtige Belehrung über das Rücktrittsrecht, verlängert sich die Rücktrittsfrist um zwölf Monate (§ 12 FAGG).',
            ],
            [
              { text: 'Kopierte Texte:', strong: true },
              ' Übernommene Produktbeschreibungen samt fremden Markennamen sind ein Risiko nach Marken- und Wettbewerbsrecht.',
            ],
            [
              { text: 'Datenschutzerklärung nach deutschem Recht:', strong: true },
              ' Verweis auf das deutsche BDSG statt auf das österreichische DSG – oder die Erklärung steckt nur am Ende des Impressums statt eigenständig verlinkt.',
            ],
            [
              { text: 'Link zur EU-Streitbeilegungsplattform:', strong: true },
              ' Die OS-Plattform gibt es seit 20. Juli 2025 nicht mehr. Der Hinweis in Impressum oder AGB ist überholt.',
            ],
            [
              { text: 'Kundenfotos mit Namen und Datum:', strong: true },
              ' Hochzeits- oder Eventfotos mit Vornamen, Datum und Ort nur mit dokumentierter Einwilligung der Abgebildeten.',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Die gute Nachricht: Bei einem unvollständigen Impressum bleibt man straflos, wenn man den Fehler nach Aufforderung der Behörde fristgerecht behebt (§ 27 E-Commerce-Gesetz). Billiger ist es, ihn gar nicht erst zu haben.',
        },
      ],
    },
    {
      id: 'beispiele',
      title: 'Zwei Beispiele aus der Praxis',
      content: [
        {
          type: 'p',
          text: 'So sehen typische Ergebnisse aus. Beide Betriebe sind anonymisiert.',
        },
        {
          type: 'h3',
          text: 'Online-Shop eines Handelsbetriebs in Tirol',
        },
        {
          type: 'checks',
          items: [
            'Die Widerrufsbelehrung nennt ein anderes Unternehmen als das Impressum, der Fließtext ein drittes.',
            'Im FAQ-Bereich stehen übernommene Texte samt fremden Markennamen.',
            'Im Impressum der KG fehlen Firmenbuchnummer, Firmenbuchgericht, Gewerbebehörde und Kammerzugehörigkeit.',
            'Das Cookie-Banner bietet nur „Zustimmen“ und „Einstellungen“ – kein „Ablehnen“.',
            'Die Datenschutzerklärung verweist auf das deutsche BDSG; Shopsystem und eingebettete Google-Karte fehlen.',
            'Die AGB verlinken noch die eingestellte EU-OS-Plattform.',
          ],
        },
        {
          type: 'h3',
          text: 'Website eines Event-Dienstleisters in der Steiermark',
        },
        {
          type: 'checks',
          items: [
            'Kein Cookie-Banner, obwohl Google Fonts, Font Awesome, YouTube-Videos und ein Instagram-Feed geladen werden.',
            'Kein eigener Link zur Datenschutzerklärung – sie steht nur am Ende des Impressums.',
            'Im Impressum fehlen Gewerbebehörde und Kammerzugehörigkeit, dazu der veraltete Hinweis auf die OS-Plattform.',
            'Hochzeitsfotos mit Vornamen, Datum und Location – das ist nur mit dokumentierter Einwilligung der Brautpaare zulässig.',
          ],
        },
      ],
    },
    {
      id: 'ablauf',
      title: 'So läuft der kostenlose Check ab',
      toc: 'Ablauf',
      content: [
        {
          type: 'ablauf',
          items: [
            [
              { text: 'Adresse schicken.', strong: true },
              ' Per Formular, E-Mail oder WhatsApp. Zugangsdaten oder Passwörter brauchen wir nicht.',
            ],
            [
              { text: 'Prüfung.', strong: true },
              ' Wir sehen uns Impressum, Datenschutzerklärung, Cookie-Banner und Formulare an, bei Shops auch Widerrufsbelehrung und AGB – und prüfen, welche Dienste schon vor einer Einwilligung laden.',
            ],
            [
              { text: 'Mängelliste.', strong: true },
              ' Sie bekommen eine verständliche Liste: was auffällt, warum es ein Problem sein kann und wie es sich technisch beheben lässt.',
            ],
            [
              { text: 'Umsetzung – wenn Sie wollen.', strong: true },
              ' Beheben können Sie selbst, Ihre Agentur oder wir zum Festpreis. Der Check verpflichtet zu nichts.',
            ],
          ],
        },
      ],
    },
    {
      id: 'grenzen',
      title: 'Was der Check ist – und was nicht',
      toc: 'Was der Check ist',
      content: [
        {
          type: 'p',
          text: 'Der Website-Check ist eine technische Prüfung auf häufige, bekannte Fehler. Er ist keine Rechtsberatung und ersetzt nicht die Prüfung durch eine Rechtsanwältin oder einen Rechtsanwalt. Wo eine rechtliche Bewertung nötig ist, sagen wir Ihnen das offen.',
        },
        {
          type: 'p',
          text: 'Die genannten Beispiele und Strafrahmen beziehen sich auf österreichisches Recht (Stand November 2026). Für Websites in Deutschland gelten teils andere Vorschriften, etwa TDDDG und DDG statt TKG und E-Commerce-Gesetz.',
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
            { label: 'Website, Shop, CRM & App', href: '/webentwicklung' },
            { label: 'Serverwartung für Onlineshops', href: '/serverwartung' },
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: 'Ist der Website-Check wirklich kostenlos?',
      a: 'Ja. Sie bekommen die Mängelliste ohne Kosten und ohne Verpflichtung. Wenn Sie die Behebung von uns möchten, erhalten Sie dafür ein eigenes Festpreisangebot.',
    },
    {
      q: 'Ist der Website-Check eine Rechtsberatung?',
      a: 'Nein. Wir prüfen technisch, ob typische Pflichtangaben und Einstellungen vorhanden sind und welche Dienste vor einer Einwilligung laden. Für eine verbindliche rechtliche Bewertung wenden Sie sich an eine Rechtsanwältin oder einen Rechtsanwalt.',
    },
    {
      q: 'Was brauchen Sie von mir?',
      a: 'Nur die Adresse Ihrer Website. Zugangsdaten oder Passwörter brauchen wir für den Check nicht.',
    },
    {
      q: 'Wie oft sollte ich meine Website prüfen lassen?',
      a: 'Einmal im Jahr und nach jeder größeren Änderung – etwa einem neuen Shopsystem, neu eingebundenen Diensten wie Karten oder Videos oder einer Gesetzesänderung wie dem Wegfall der EU-OS-Plattform 2025.',
    },
  ],
  faqInToc: true,
  cta: {
    title: 'Website kostenlos prüfen lassen',
    text: 'Schicken Sie uns die Adresse Ihrer Website – Sie bekommen eine verständliche Mängelliste, kostenlos und unverbindlich.',
    mailSubject: 'Kostenloser Website-Check',
  },
  service: {
    name: 'Kostenloser Website-Check',
    serviceType: 'Website-Check',
    description: 'Kostenlose technische Prüfung von Websites auf häufige Fehler bei Cookie-Banner, Impressum, Datenschutzerklärung und Widerrufsbelehrung.',
  },
};

export default seite;
