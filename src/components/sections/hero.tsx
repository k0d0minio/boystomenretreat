"use client";

import Image from "next/image";
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
    <section className="relative isolate flex min-h-[90svh] items-center overflow-hidden">
      {/* Full-bleed hero photograph */}
      <Image
        src="/img/surfer-sunset-peace-sign.jpeg"
        alt="A surfer sits on their board at sunset, throwing a peace sign as the sun dips into the ocean"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      {/* Legibility scrims: darken overall, deepen the bottom, and add a top scrim behind the header */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/45 to-black/55" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-black/60 to-transparent" />

      <div className="mx-auto w-full max-w-6xl px-4 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-32">
        <motion.div variants={container} initial="hidden" animate="visible" className="mx-auto max-w-3xl text-center">
          <motion.div variants={item} className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              <Sparkles className="size-4" />
              {hero.badge}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-balance text-white drop-shadow-sm sm:text-6xl"
          >
            {hero.title}
          </motion.h1>

          <motion.p variants={item} className="mx-auto mt-5 max-w-2xl text-lg text-white/85 text-balance sm:text-xl">
            {hero.subtitle}
          </motion.p>

          <motion.div variants={item} className="mt-4 flex items-center justify-center gap-1.5 text-sm text-white/75">
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
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white sm:w-auto"
            >
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
              className="rounded-xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur-md"
            >
              <dt className="font-heading text-2xl font-bold text-white">{stat.value}</dt>
              <dd className="mt-1 text-sm text-white/75">{stat.label}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
