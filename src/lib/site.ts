/**
 * Locale-invariant site constants — brand name, contact details and social
 * links that are identical in every language. Translatable copy lives in the
 * per-locale dictionaries under `src/dictionaries/` instead.
 */
export const site = {
  name: "Boys To Men Retreat",
  shortName: "Boys To Men",
  /** "Ericeira, Portugal" reads the same across all supported locales. */
  location: "Ericeira, Portugal",
  phone: "+34600235207",
  /** Human-formatted phone, used in copy and the application form. */
  phoneDisplay: "+34 600 235 207",
  whatsapp: "https://wa.me/34600235207",
  instagram: "https://www.instagram.com/boystomenretreat",
  instagramHandle: "@boystomenretreat",
  year: 2026,
} as const;
