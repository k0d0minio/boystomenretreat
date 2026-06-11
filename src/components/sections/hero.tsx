"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { hero, site } from "@/lib/content";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const } },
  };

  return (
    <section className="relative overflow-hidden">
      {/* Ambient ocean gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-background to-background" />
        <div className="absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute right-[-10%] top-20 size-80 rounded-full bg-accent/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24">
        <motion.div variants={container} initial="hidden" animate="visible" className="mx-auto max-w-3xl text-center">
          <motion.div variants={item} className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent-foreground">
              <Sparkles className="size-4" />
              {hero.badge}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-balance sm:text-6xl"
          >
            {hero.title}
          </motion.h1>

          <motion.p variants={item} className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground text-balance sm:text-xl">
            {hero.subtitle}
          </motion.p>

          <motion.div variants={item} className="mt-4 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4" />
            {site.location}
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.dl
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {hero.stats.map((stat) => (
            <motion.div
              key={stat.value + stat.label}
              variants={item}
              className="rounded-xl border border-border bg-card/70 p-4 text-center backdrop-blur-sm"
            >
              <dt className="font-heading text-2xl font-bold text-primary">{stat.value}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
