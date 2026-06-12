import { Reveal } from "@/components/motion/reveal";
import { ApplicationForm } from "@/components/application-form/application-form";
import { applicationIntro } from "@/lib/application-form";

export function Application() {
  return (
    <section
      id="apply"
      className="scroll-mt-20 border-t border-border bg-gradient-to-b from-secondary/40 to-background"
    >
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Apply now</p>
            <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-balance sm:text-4xl">
              {applicationIntro.heading}
            </h2>
            <p className="mx-auto mt-4 text-lg text-muted-foreground text-balance">
              {applicationIntro.subheading}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <ApplicationForm />
        </Reveal>
      </div>
    </section>
  );
}
