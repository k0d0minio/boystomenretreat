import { AtSign, MessageCircle, Phone } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { contact, site } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-28">
        <Reveal>
          <p className="eyebrow">Get in touch</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {contact.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground text-balance">
            {contact.subheading}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />
                {contact.whatsappLabel}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <a href={`tel:${site.phone}`}>
                <Phone className="size-4" />
                {contact.phoneLabel}
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="w-full sm:w-auto">
              <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                <AtSign className="size-4" />
                {contact.instagramLabel}
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
