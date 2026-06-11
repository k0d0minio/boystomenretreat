import { Reveal } from "@/components/motion/reveal";
import { why } from "@/lib/content";

export function Why() {
  return (
    <section id="why" className="scroll-mt-20 border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">The mission</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              {why.heading}
            </h2>
            <p className="mt-5 text-xl font-medium text-foreground text-balance">{why.lead}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {why.ageGroups.map((group) => (
                <div key={group.range} className="rounded-xl border border-border bg-background px-5 py-3">
                  <div className="font-heading text-2xl font-bold text-primary">{group.range}</div>
                  <div className="text-sm text-muted-foreground">{group.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="space-y-6">
            {why.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-lg leading-relaxed text-muted-foreground">{paragraph}</p>
              </Reveal>
            ))}

            <Reveal delay={why.paragraphs.length * 0.08}>
              <blockquote className="border-l-2 border-accent pl-5 font-heading text-xl font-medium leading-relaxed text-foreground text-balance">
                {why.closing}
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
