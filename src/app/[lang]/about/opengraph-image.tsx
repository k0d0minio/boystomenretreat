import { site } from "@/lib/site";
import { defaultLocale, hasLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { OG_CONTENT_TYPE, OG_SIZE, renderShareCard } from "@/lib/og-card";

export const alt = `${site.name} — Message from the founder`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(hasLocale(lang) ? lang : defaultLocale);
  return renderShareCard({
    eyebrow: dict.og.about.eyebrow,
    title: dict.og.about.title,
    subtitle: dict.og.about.subtitle,
  });
}
