import { Hero } from "@/components/sections/hero";
import { Why } from "@/components/sections/why";
import { Outcomes } from "@/components/sections/outcomes";
import { Gallery } from "@/components/sections/gallery";
import { Included } from "@/components/sections/included";
import { Schedule } from "@/components/sections/schedule";
import { Pricing } from "@/components/sections/pricing";
import { Team } from "@/components/sections/team";
import { Application } from "@/components/sections/application";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Why />
      <Outcomes />
      <Gallery />
      <Included />
      <Schedule />
      <Pricing />
      <Team />
      <Application />
      <Contact />
    </>
  );
}
