import { CheckCircle2 } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { outcomes } from "@/lib/content";

export function Outcomes() {
  return (
    <section className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">The outcomes</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {outcomes.heading}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-balance">{outcomes.subheading}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.items.map((outcome, i) => (
            <Reveal key={outcome.title} delay={(i % 3) * 0.08}>
              <Card className="h-full border-border/70 transition-colors hover:border-primary/40">
                <CardContent className="flex h-full flex-col gap-3 p-6">
                  <CheckCircle2 className="size-7 text-primary" />
                  <h3 className="font-heading text-lg font-semibold">{outcome.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{outcome.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
