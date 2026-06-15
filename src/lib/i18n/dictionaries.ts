import "server-only";

import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/dictionaries/en";

/**
 * Lazily load the dictionary for a locale. Dictionaries are server-only and
 * code-split per locale, so only the active language's strings are ever loaded
 * — they never reach the client bundle.
 */
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("@/dictionaries/en").then((m) => m.en),
  nl: () => import("@/dictionaries/nl").then((m) => m.nl),
  pt: () => import("@/dictionaries/pt").then((m) => m.pt),
  fr: () => import("@/dictionaries/fr").then((m) => m.fr),
  es: () => import("@/dictionaries/es").then((m) => m.es),
};

export const getDictionary = (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]();

export type { Dictionary };
