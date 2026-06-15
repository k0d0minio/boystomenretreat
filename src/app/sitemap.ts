import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/seo";
import { defaultLocale, locales } from "@/lib/i18n/config";

/** Pages, expressed as locale-relative paths with their crawl hints. */
const PAGES = [
  { path: "/", changeFrequency: "monthly" as const, priority: 1 },
  { path: "/about", changeFrequency: "yearly" as const, priority: 0.8 },
  { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
];

/** Build the absolute URL for a locale + locale-relative path. */
function localeUrl(locale: string, path: string): string {
  return `${siteUrl}/${locale}${path === "/" ? "" : path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return PAGES.flatMap((page) => {
    // hreflang alternates: every locale for this page, plus x-default.
    const languages: Record<string, string> = Object.fromEntries(
      locales.map((l) => [l, localeUrl(l, page.path)]),
    );
    languages["x-default"] = localeUrl(defaultLocale, page.path);

    return locales.map((locale) => ({
      url: localeUrl(locale, page.path),
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: { languages },
    }));
  });
}
