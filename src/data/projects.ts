/** Referenzprojekte. Die Nummerierung („Projekt 01“ …) entsteht automatisch aus der Reihenfolge. */
import type { Image, Rich } from './types';

export const projectLabel = 'Projekt';
export const factLabels = { branche: 'Branche', leistung: 'Leistung', website: 'Website' };

export interface Project {
  title: string;
  text: Rich;
  branche: string;
  leistung: string;
  website: { label: string; href: string };
  image: Image;
}

/** Projektbilder liegen als name.webp (1400 px) und name-800.webp vor. */
function screenshot(name: string, alt: string): Image {
  return {
    src: `/assets/${name}.webp`,
    srcset: `/assets/${name}-800.webp 800w, /assets/${name}.webp 1400w`,
    sizes: '(max-width: 1100px) 100vw, 680px',
    alt,
    width: 1400,
    height: 875,
    loading: 'lazy',
    decoding: 'async',
  };
}

export const projects: Project[] = [
  {
    title: 'VPU-Vorbereitung',
    text: 'Online-Trainingsplattform für die verkehrspsychologische Untersuchung in Österreich: Vorbereitung auf Gespräch und Computer-Leistungstests – 100 % online, mit interaktiven Übungen.',
    branche: 'Verkehrspsychologie, E-Learning',
    leistung: 'Webentwicklung, Online-Training, Bezahlabwicklung',
    website: { label: 'vpu-vorbereitung.com', href: 'https://vpu-vorbereitung.com' },
    image: screenshot('projekt-vpu-2026', 'Startseite der Online-Plattform VPU-Vorbereitung mit Testplatz-Foto und Erstgespräch-Knopf'),
  },
  {
    title: 'Alpine Ride',
    text: 'Website mit Fixpreis-Rechner und Online-Buchung für einen Tiroler Transferdienst: Strecke wählen, Preis sehen, in zwei Minuten buchen – dreisprachig in Deutsch, Englisch und Niederländisch.',
    branche: 'Tourismus, Transferdienst',
    leistung: 'Website, Preisrechner, Online-Buchung',
    website: { label: 'alpine-ride.at', href: 'https://alpine-ride.at' },
    image: screenshot('projekt-alpineride', 'Screenshot der Transfer-Website Alpine Ride mit Preisrechner'),
  },
  {
    title: 'Beet & Wasser',
    text: 'Ratgeberseite rund ums Hochbeet für Balkon, Terrasse und kleine Gärten: Auswahlhilfe, Ratgeber zu Befüllen und Bewässern und ein Rechner, der die nötige Füllmenge ausrechnet. Themen und Aufbau nach Suchdaten geplant.',
    branche: 'Garten, Ratgeber-Portal',
    leistung: 'Website, Füllmengen-Rechner, SEO',
    website: { label: 'beetundwasser.de', href: 'https://beetundwasser.de' },
    image: screenshot('projekt-beetundwasser', 'Startseite des Ratgebers Beet & Wasser mit illustriertem Hochbeet auf einem Balkon'),
  },
  {
    title: 'Volksbegehren THC-Grenzwert',
    text: 'Kampagnenseite für ein österreichisches Volksbegehren: Forderung, Hintergründe und Presse an einem Ort, mit klarer Anleitung zum Unterschreiben online per ID Austria.',
    branche: 'Politische Initiative, Kampagne',
    leistung: 'Kampagnen-Website, SEO',
    website: { label: 'maryjaneaustria.at', href: 'https://www.maryjaneaustria.at' },
    image: screenshot('projekt-maryjane-2026', 'Startseite der Kampagnenseite zum Volksbegehren für faire THC-Grenzwerte im Straßenverkehr'),
  },
  {
    title: 'Prince Properties',
    text: 'Dreisprachige Website (Deutsch, Englisch, Thai) für eine Immobilienagentur in Pattaya – mit eigenem CRM: Objekte mit Fotos, Kontakte von Käufern, Mietern und Eigentümern, Terminkalender. Was im CRM freigegeben ist, erscheint automatisch als Anzeige auf der Website.',
    branche: 'Immobilien, Thailand',
    leistung: 'Website, CRM nach Maß, Server & Hosting',
    website: { label: 'prince.properties', href: 'https://www.prince.properties' },
    image: screenshot('projekt-prince-properties-2026', 'Startseite von Prince Properties mit nächtlichem Blick auf die Bucht von Pattaya'),
  },
  {
    title: 'Schadensbörse',
    text: [
      'Verbraucher-Ratgeber für Deutschland mit über 70 Seiten zu Kündigungen, Schäden, Wohnen, Auto und Firmengründung, darunter eine Anleitung, wie man als Deutscher ',
      { text: 'eine US-LLC gründet', href: 'https://schadensboerse.de/us-llc-gruenden' },
      '. Statisch gebaut, mit Sofortsuche, Vorlagen und eigenem Kleinanzeigenmarkt.',
    ],
    branche: 'Verbraucher-Ratgeber',
    leistung: 'Website, Suchfunktion, Kleinanzeigen, SEO',
    website: { label: 'schadensboerse.de', href: 'https://schadensboerse.de/' },
    image: screenshot('projekt-schadensboerse', 'Startseite des Verbraucher-Ratgebers Schadensbörse mit Suchfeld über alle Ratgeber'),
  },
];
