/**
 * Kundenstimmen für die Startseite. Nur echte, wörtliche Zitate mit Einwilligung der Kundin/des Kunden eintragen.
 * Solange die Liste leer ist, erscheint der Abschnitt nicht.
 */
export interface Testimonial {
  /** Wörtliches Zitat, ohne Anführungszeichen */
  quote: string;
  name: string;
  /** Funktion und Betrieb, z. B. „Geschäftsführer, Alpine Ride“ */
  role: string;
  /** Verlinktes Projekt (optional), z. B. 'https://alpine-ride.at' */
  href?: string;
}

export const testimonials: Testimonial[] = [];
