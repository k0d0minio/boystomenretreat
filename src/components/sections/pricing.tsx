import Link from "next/link";
import { Check } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { pricing } from "@/lib/content";

export function Pricing() {
  return (
    <section className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary to-chart-5 text-primary-foreground">
            <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:gap-12">
              <div>
                <p className="eyebrow">Reserve your week</p>
                <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                  {pricing.heading}
                </h2>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-heading text-5xl font-extrabold">{pricing.price}</span>
                  <span className="text-primary-foreground/70">/ {pricing.duration}</span>
                </div>
                <p className="mt-4 max-w-sm text-primary-foreground/80">{pricing.note}</p>
                <Button asChild size="lg" variant="accent" className="mt-8">
                  <Link href={pricing.cta.href}>{pricing.cta.label}</Link>
                </Button>
              </div>

              <ul className="space-y-3">
                {pricing.includes.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-foreground/20">
                      <Check className="size-3.5" />
                    </span>
                    <span className="text-primary-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
