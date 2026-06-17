import type { MetadataRoute } from "next";

import { brand } from "@/lib/brand";
import { site } from "@/lib/site";
import { defaultLocale } from "@/lib/i18n/config";
import { en } from "@/dictionaries/en";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: en.meta.tagline,
    start_url: `/${defaultLocale}`,
    display: "standalone",
    background_color: brand.seafoam,
    theme_color: brand.ocean,
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
