import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { hasLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return buildMetadata({
    lang,
    dict,
    title: dict.seo.privacy.title,
    description: dict.seo.privacy.description,
    path: "/privacy",
  });
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const privacy = dict.privacy;

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="font-heading text-4xl font-extrabold uppercase tracking-tight">{privacy.heading}</h1>
      <p className="mt-2 text-sm text-muted-foreground">{privacy.updated}</p>
      <div className="mt-8 space-y-5">
        {privacy.body.map((paragraph, i) => (
          <p key={i} className="text-lg leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
