import { Reveal } from "@/components/motion/reveal";
import { ApplicationForm } from "@/components/application-form/application-form";
import type { Dictionary } from "@/dictionaries/en";

export function Application({
  application,
  formUi,
}: {
  application: Dictionary["application"];
  formUi: Dictionary["formUi"];
}) {
  return (
    <section
      id="apply"
      className="scroll-mt-20 border-t border-border bg-gradient-to-b from-secondary/40 to-background"
    >
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">{application.eyebrow}</p>
            <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-balance sm:text-4xl">
              {application.intro.heading}
            </h2>
            <p className="mx-auto mt-4 text-lg text-muted-foreground text-balance">
              {application.intro.subheading}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <ApplicationForm steps={application.steps} ui={formUi} />
        </Reveal>
      </div>
    </section>
  );
}
