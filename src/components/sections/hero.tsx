"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { withLocale, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/dictionaries/en";

export function Hero({
  lang,
  dict: hero,
}: {
  lang: Locale;
  dict: Dictionary["hero"];
}) {
  const reduceMotion = useReducedMotion();
  const ease = [0.21, 0.47, 0.32, 0.98] as const;

  // The photograph is the hero: on load it reveals clean and unobstructed, then
  // the legibility scrim and copy settle in over it. `reveal` is the beat we wait
  // before any overlay appears, so the image reads first. Reduced motion skips
  // straight to the final state.
  const reveal = reduceMotion ? 0 : 0.9;

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: reveal + 0.1 } },
  };
  const stats = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: reveal + 0.45 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
  };

  return (
    <section className="relative isolate flex min-h-[90svh] items-center overflow-hidden border-b border-border">
      {/* Full-bleed hero photograph — slow ken-burns settle so it draws the eye on load */}
      <motion.div
        className="absolute inset-0 -z-20"
        initial={{ scale: reduceMotion ? 1 : 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: reduceMotion ? 0 : 2.4, ease }}
      >
        <Image
          src="/img/surfer-sunset-peace-sign.jpeg"
          alt="A surfer sits on their board at sunset, throwing a peace sign as the sun dips into the ocean"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Legibility scrims fade in only after the photo has had its clean moment, and
          are kept light + bottom-weighted so the image stays the focus. */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/15 to-transparent"
        initial={{ opacity: reduceMotion ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reveal, duration: reduceMotion ? 0 : 1.1, ease }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-black/45 to-transparent"
        initial={{ opacity: reduceMotion ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reveal, duration: reduceMotion ? 0 : 1.1, ease }}
      />

      <div className="mx-auto w-full max-w-6xl px-4 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-32">
        <motion.div variants={container} initial="hidden" animate="visible" className="mx-auto max-w-3xl text-center [text-shadow:0_2px_12px_rgb(0_0_0/0.55)]">
          <motion.div variants={item} className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-sm border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
              <CalendarDays className="size-3.5" />
              {hero.badge}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-heading text-4xl font-extrabold uppercase tracking-tight text-balance text-white drop-shadow-sm sm:text-6xl"
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
            <Button asChild size="lg" variant="accent" className="w-full sm:w-auto">
              <Link href={withLocale(lang, hero.primaryCta.href)}>
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
              <Link href={withLocale(lang, hero.secondaryCta.href)}>{hero.secondaryCta.label}</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.dl
          variants={stats}
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
