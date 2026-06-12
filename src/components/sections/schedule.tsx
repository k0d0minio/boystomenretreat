import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { schedule } from "@/lib/content";

export function Schedule() {
  return (
    <section id="schedule" className="scroll-mt-20 border-t border-border bg-card">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">The rhythm</p>
          <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-balance sm:text-4xl">
            {schedule.heading}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-balance">{schedule.subheading}</p>
        </Reveal>

        <ol className="relative mt-14 space-y-8 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-1rem)] before:w-0.5 before:bg-border sm:before:left-[9px]">
          {schedule.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <li className="relative pl-9 sm:pl-12">
                <span className="absolute left-0 top-1.5 size-3.5 rounded-full border-2 border-primary bg-background sm:size-[18px]" />
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                  <Badge variant="secondary" className="text-xs">{item.time}</Badge>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
