/** Schema.org-Knoten, erzeugt aus den Inhaltsdateien – Änderungen dort landen automatisch im Markup. */
import { site, ui } from '../data/site';
import { allServices, catalogExtra } from '../data/services';
import type { FaqItem } from '../data/faq';
import { absUrl } from './links';

type Node = Record<string, unknown>;

const home = absUrl('/');
export const ids = {
  organisation: `${home}#organisation`,
  website: `${home}#website`,
  founder: `${home}#gruender`,
};

export function organisation(): Node {
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ids.organisation,
    name: site.name,
    legalName: site.name,
    alternateName: site.brand,
    url: home,
    logo: { '@type': 'ImageObject', url: absUrl(site.schema.logoPng), width: 512, height: 512 },
    image: absUrl(site.schema.image),
    description: site.schema.description,
    email: site.email,
    telephone: site.phone.e164,
    address: { '@type': 'PostalAddress', ...site.address },
    founder: { '@id': ids.founder },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: site.phone.e164,
      email: site.email,
      areaServed: ['AT', 'DE', 'CH'],
      availableLanguage: ['German', 'English'],
      hoursAvailable: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' },
    },
    sameAs: [site.linkedin, site.github],
    openingHours: site.schema.openingHours,
    priceRange: site.schema.priceRange,
    knowsLanguage: [...site.schema.knowsLanguage],
    areaServed: site.schema.areaServed.map((name) => ({ '@type': 'Country', name })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: site.schema.offerCatalogName,
      itemListElement: [allServices[0], ...catalogExtra, ...allServices.slice(1)].map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: ('schemaName' in s && s.schemaName) || s.title,
          ...(s.page ? { url: absUrl(s.page) } : {}),
        },
      })),
    },
  };
}

/** Gründer als eigener Knoten – Organisation und Seiten verweisen per @id darauf. */
export function founder(): Node {
  return {
    '@type': 'Person',
    '@id': ids.founder,
    name: site.founder.name,
    jobTitle: site.founder.jobTitle,
    image: absUrl(site.schema.image),
    worksFor: { '@id': ids.organisation },
    sameAs: [site.linkedin],
    knowsAbout: ['SPS-Programmierung', 'Steuerungstechnik', 'Softwareentwicklung', 'KI-Automatisierung', 'Webentwicklung', 'Suchmaschinenoptimierung'],
  };
}

/** WebPage-Knoten für die aktuelle Seite. */
export function webPage(url: string, name: string, description: string): Node {
  return {
    '@type': 'WebPage',
    '@id': `${url}#seite`,
    url,
    name,
    description,
    inLanguage: site.lang,
    isPartOf: { '@id': ids.website },
    about: { '@id': ids.organisation },
    publisher: { '@id': ids.organisation },
  };
}

export function website(): Node {
  return {
    '@type': 'WebSite',
    '@id': ids.website,
    url: home,
    name: site.name,
    inLanguage: site.lang,
    publisher: { '@id': ids.organisation },
  };
}

/** @param pageUrl absolute Adresse der Seite, auf der die Fragen stehen */
export function faqPage(items: FaqItem[], pageUrl: string = home): Node {
  return {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

/** Breadcrumb einer Unterseite: Startseite › Zwischenstufen › Seite. */
export function breadcrumbList(steps: { name: string; href: string }[]): Node {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: ui.sub.breadcrumbHome, href: '/' }, ...steps].map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.name,
      item: absUrl(s.href),
    })),
  };
}

export function service(s: { name: string; serviceType: string; description: string }, path: string): Node {
  return {
    '@type': 'Service',
    name: s.name,
    serviceType: s.serviceType,
    provider: { '@id': ids.organisation },
    areaServed: [...ui.sub.serviceArea],
    url: absUrl(path),
    description: s.description,
  };
}

/** Fügt die Knoten zu einem @graph zusammen; „<“ wird maskiert, damit kein Text das <script> beenden kann. */
export function graphJson(nodes: Node[]): string {
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes }, null, 2);
  return json.replace(/</g, '\\u003c');
}
