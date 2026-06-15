import type { Metadata } from "next";

import { about, pricing, site } from "@/lib/content";

/**
 * Canonical site origin. Prefer an explicit env override, then the Vercel
 * production URL (so preview deployments resolve correctly), then the known
 * production domain as a safe default. No trailing slash.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://www.boystomenretreat.com")
).replace(/\/$/, "");

/** Site-wide default title (also the home <title> and OG title). */
export const SITE_TITLE = `${site.name} — ${site.location}`;

/** Site-wide default description, reused for OG/Twitter when a page omits one. */
export const SITE_DESCRIPTION =
  "A 4 day / 4 night retreat in Ericeira, Portugal guiding young men (9–16) through challenge, adventure and self-discovery — surfing, skateboarding, beach challenges, cold plunges and campfire circles.";

type BuildMetadataArgs = {
  /** Page title (templated by the root layout). Omit on the home page. */
  title?: string;
  /** Page description; falls back to {@link SITE_DESCRIPTION}. */
  description?: string;
  /** Route path, e.g. "/about". Used for the canonical + OG url. */
  path: string;
};

/**
 * Build a complete, consistent Metadata object for a route.
 *
 * Next merges `openGraph`/`twitter` as whole-object replacement across segments
 * (not a deep merge), so every page must emit a *complete* object or it loses
 * `siteName`/`locale`/`type`. This helper guarantees that. The actual share
 * image tags are supplied automatically by each segment's `opengraph-image` /
 * `twitter-image` files, so we deliberately do not set `openGraph.images` here.
 */
export function buildMetadata({
  title,
  description,
  path,
}: BuildMetadataArgs): Metadata {
  const desc = description ?? SITE_DESCRIPTION;
  const shareTitle = title ? `${title} | ${site.name}` : SITE_TITLE;

  return {
    ...(title ? { title } : {}),
    description: desc,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
      url: path,
      title: shareTitle,
      description: desc,
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description: desc,
    },
  };
}

/* --------------------------------- JSON-LD -------------------------------- */
// Builders return plain objects rendered via <JsonLd>. Absolute URLs use siteUrl
// (metadataBase only resolves <meta> URLs, not JSON-LD strings).

const ORG_ID = `${siteUrl}/#organization`;

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.name,
    alternateName: site.shortName,
    url: siteUrl,
    logo: `${siteUrl}/apple-icon`,
    description: site.tagline,
    sameAs: [site.instagram],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "customer service",
      availableLanguage: ["English", "Spanish"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ericeira",
      addressCountry: "PT",
    },
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: site.name,
    url: siteUrl,
    inLanguage: "en",
    publisher: { "@id": ORG_ID },
  };
}

export function retreatProductLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: site.name,
    description: SITE_DESCRIPTION,
    image: `${siteUrl}/opengraph-image`,
    brand: { "@type": "Brand", name: site.name },
    offers: {
      "@type": "Offer",
      price: "700",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/#contact`,
      category: pricing.duration,
    },
  };
}

export function personLd() {
  const founder = about;
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Maxim Rettich",
    jobTitle: "Founder & Host",
    description: founder.intro,
    image: `${siteUrl}/img/max-richter.jpg`,
    worksFor: { "@id": ORG_ID },
    url: `${siteUrl}/about`,
  };
}
