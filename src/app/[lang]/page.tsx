import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { retreatProductLd } from "@/lib/seo";
import { hasLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { Hero } from "@/components/sections/hero";
import { Why } from "@/components/sections/why";
import { Outcomes } from "@/components/sections/outcomes";
import { Gallery } from "@/components/sections/gallery";
import { Included } from "@/components/sections/included";
import { Pricing } from "@/components/sections/pricing";
import { Team } from "@/components/sections/team";
import { Application } from "@/components/sections/application";
import { Contact } from "@/components/sections/contact";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <JsonLd data={retreatProductLd(dict, lang)} />
      <Hero lang={lang} dict={dict.hero} />
      <Why dict={dict.why} />
      <Outcomes dict={dict.outcomes} />
      <Gallery dict={dict.gallery} />
      <Included dict={dict.included} />
      <Pricing lang={lang} dict={dict.pricing} />
      <Team dict={dict.team} />
      <Application application={dict.application} formUi={dict.formUi} />
      <Contact dict={dict.contact} />
    </>
  );
}
