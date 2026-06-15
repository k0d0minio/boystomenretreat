import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { about } from "@/lib/content";

export const metadata: Metadata = {
  title: "About the founder",
  description:
    "A message from Maxim Rettich, founder of Boys To Men Retreat — his story, his values, and the intention behind the retreat.",
};

export default function AboutPage() {
  return (
    <article>
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-secondary/60 to-background" />
        <div className="mx-auto max-w-5xl px-4 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-28">
          <div className="grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <p className="eyebrow">About</p>
              <h1 className="mt-3 font-heading text-4xl font-extrabold uppercase tracking-tight text-balance sm:text-5xl">
                {about.heading}
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-muted-foreground text-balance">
                {about.intro}
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mx-auto w-full max-w-xs md:max-w-none">
              <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-border bg-muted">
                <Image
                  src="/img/max-richter.jpg"
                  alt="Maxim Rettich, founder of Boys To Men Retreat, smiling outdoors in a cap"
                  fill
                  priority
                  sizes="(min-width: 768px) 33vw, 80vw"
                  className="object-cover object-top"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="space-y-12">
          {about.sections.map((section, i) => (
            <Reveal key={section.title} delay={i * 0.05}>
              <div>
                <h2 className="font-heading text-2xl font-bold uppercase tracking-tight">{section.title}</h2>
                <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{section.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <blockquote className="relative rounded-2xl border border-border bg-card p-8 sm:p-10">
            <Quote className="size-8 text-accent" />
            <p className="mt-4 font-heading text-xl font-medium leading-relaxed text-balance sm:text-2xl">
              {about.mission}
            </p>
          </blockquote>
        </Reveal>

        <Reveal className="mt-12 flex justify-center">
          <Button asChild size="lg" variant="accent">
            <Link href="/#contact">
              Join the next retreat
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </section>
    </article>
  );
}
