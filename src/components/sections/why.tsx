import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import type { Dictionary } from "@/dictionaries/en";

export function Why({ dict: why }: { dict: Dictionary["why"] }) {
  return (
    <section id="why" className="scroll-mt-20 border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">{why.eyebrow}</p>
            <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-balance sm:text-4xl">
              {why.heading}
            </h2>
            <p className="mt-5 text-xl font-medium text-foreground text-balance">{why.lead}</p>

            <div className="mt-8">
              <p className="eyebrow">{why.ageGroupsHeading}</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {why.ageGroups.map((group) => (
                  <div key={group.range} className="rounded-xl border border-border bg-background px-5 py-3">
                    <div className="font-heading text-2xl font-bold text-primary">{group.range}</div>
                    <div className="text-sm text-muted-foreground">{group.label}</div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-balance">
                {why.ageGroupsNote}
              </p>
            </div>

            <div className="relative mt-8 aspect-4/5 overflow-hidden rounded-2xl border border-border bg-muted">
              <Image
                src="/img/coach-and-boys-group-portrait.jpg"
                alt={why.imageAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
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
