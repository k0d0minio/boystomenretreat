/**
 * Internationalisation configuration — the supported locales and small helpers
 * shared by the routing proxy, layouts, metadata and components.
 *
 * Follows the native Next.js App Router i18n pattern (a `[lang]` segment +
 * `proxy.ts` for detection); no runtime i18n library is involved.
 */

export const locales = ["en", "nl", "pt", "fr", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Native language names, shown in the language switcher. */
export const localeNames: Record<Locale, string> = {
  en: "English",
  nl: "Nederlands",
  pt: "Português",
  fr: "Français",
  es: "Español",
};

/** Open Graph `og:locale` codes (and `<html lang>` is the bare locale). */
export const ogLocale: Record<Locale, string> = {
  en: "en_US",
  nl: "nl_NL",
  pt: "pt_PT",
  fr: "fr_FR",
  es: "es_ES",
};

/** Type guard that narrows an arbitrary string to a supported {@link Locale}. */
export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Prefix a locale-relative href with the active locale.
 *
 * - `/about`  + `nl` → `/nl/about`
 * - `/#why`   + `nl` → `/nl#why`   (same-page anchor)
 * - `/`       + `nl` → `/nl`
 */
export function withLocale(locale: Locale, href: string): string {
  if (href.startsWith("/#")) return `/${locale}${href.slice(1)}`;
  if (href === "/") return `/${locale}`;
  if (href.startsWith("/")) return `/${locale}${href}`;
  return href;
}
