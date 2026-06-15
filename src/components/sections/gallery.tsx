import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/dictionaries/en";

export function Gallery({ dict: gallery }: { dict: Dictionary["gallery"] }) {
  return (
    <section className="scroll-mt-20 border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{gallery.eyebrow}</p>
          <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-balance sm:text-4xl">
            {gallery.heading}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-balance">{gallery.subheading}</p>
        </Reveal>

        <div className="mt-14 grid auto-rows-[11rem] grid-cols-2 gap-3 sm:auto-rows-[13rem] sm:gap-4 md:grid-cols-4">
          {gallery.tiles.map((tile, i) => {
            const feature = i % 5 === 0;
            return (
              <Reveal
                key={tile.src}
                delay={(i % 4) * 0.06}
                className={cn(feature ? "col-span-2 row-span-2" : "")}
              >
                <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border bg-muted">
                  <Image
                    src={tile.src}
                    alt={tile.alt}
                    fill
                    sizes={feature ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                  <span className="absolute bottom-3 left-3 right-3 text-sm font-semibold text-white drop-shadow-sm">
                    {tile.label}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
