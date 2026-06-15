import type { Metadata } from "next";

import { site } from "@/lib/site";
import {
  defaultLocale,
  locales,
  ogLocale,
  type Locale,
} from "@/lib/i18n/config";
import type { Dictionary } from "@/dictionaries/en";

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

/** Site-wide default title (brand + location — identical across locales). */
export const SITE_TITLE = `${site.name} — ${site.location}`;

/** Prefix a locale-relative path with its locale, e.g. `/about` → `/nl/about`. */
function localePath(lang: Locale, path: string): string {
  return `/${lang}${path === "/" ? "" : path}`;
}

type BuildMetadataArgs = {
  /** Active locale. */
  lang: Locale;
  /** Active dictionary (used for the fallback description). */
  dict: Dictionary;
  /** Page title — already localized by the caller. Omit on the home page. */
  title?: string;
  /** Page description; falls back to the locale's site description. */
  description?: string;
  /** Locale-relative route path, e.g. "/about". Used for canonical + OG url. */
  path: string;
};

/**
 * Build a complete, consistent Metadata object for a localized route.
 *
 * Next merges `openGraph`/`twitter` as whole-object replacement across segments
 * (not a deep merge), so every page must emit a *complete* object. This helper
 * guarantees that, sets the locale-aware canonical, the `hreflang` alternates
 * for every supported language, and the correct `og:locale`. The share image
 * tags themselves come from each segment's `opengraph-image` / `twitter-image`.
 */
export function buildMetadata({
  lang,
  dict,
  title,
  description,
  path,
}: BuildMetadataArgs): Metadata {
  const desc = description ?? dict.seo.siteDescription;
  const shareTitle = title ? `${title} | ${site.name}` : SITE_TITLE;

  const languages: Record<string, string> = Object.fromEntries(
    locales.map((l) => [l, localePath(l, path)]),
  );
  languages["x-default"] = localePath(defaultLocale, path);

  return {
    ...(title ? { title } : {}),
    description: desc,
    alternates: {
      canonical: localePath(lang, path),
      languages,
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: ogLocale[lang],
      url: localePath(lang, path),
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

export function organizationLd(dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.name,
    alternateName: site.shortName,
    url: siteUrl,
    logo: `${siteUrl}/apple-icon`,
    description: dict.meta.tagline,
    sameAs: [site.instagram],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "customer service",
      availableLanguage: ["English", "Dutch", "Portuguese", "French", "Spanish"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ericeira",
      addressCountry: "PT",
    },
  };
}

export function websiteLd(lang: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: site.name,
    url: `${siteUrl}/${lang}`,
    inLanguage: lang,
    publisher: { "@id": ORG_ID },
  };
}

export function retreatProductLd(dict: Dictionary, lang: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: site.name,
    description: dict.seo.siteDescription,
    image: `${siteUrl}/${lang}/opengraph-image`,
    brand: { "@type": "Brand", name: site.name },
    offers: {
      "@type": "Offer",
      price: "700",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/${lang}#contact`,
      category: dict.pricing.duration,
    },
  };
}

export function personLd(dict: Dictionary, lang: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Maxim Rettich",
    jobTitle: dict.team.members[0]?.role ?? "Founder & Host",
    description: dict.about.intro,
    image: `${siteUrl}/img/max-richter.jpg`,
    worksFor: { "@id": ORG_ID },
    url: `${siteUrl}/${lang}/about`,
  };
}
