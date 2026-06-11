import Link from "next/link";
import { AtSign, MessageCircle, Phone, Waves } from "lucide-react";

import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <Link href="/" className="flex items-center gap-2 font-heading text-lg font-bold tracking-tight">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Waves className="size-4" />
            </span>
            {site.shortName}
          </Link>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">{site.tagline}</p>
          <p className="mt-3 text-sm text-muted-foreground">{site.location}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link href="/" className="hover:text-foreground">Home</Link></li>
            <li><Link href="/about" className="hover:text-foreground">About the founder</Link></li>
            <li><Link href="/#included" className="hover:text-foreground">What&apos;s included</Link></li>
            <li><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Get in touch</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={site.whatsapp} className="flex items-center gap-2 hover:text-foreground" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone}`} className="flex items-center gap-2 hover:text-foreground">
                <Phone className="size-4" /> {site.phone}
              </a>
            </li>
            <li>
              <a href={site.instagram} className="flex items-center gap-2 hover:text-foreground" target="_blank" rel="noopener noreferrer">
                <AtSign className="size-4" /> {site.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>© {site.year} by {site.shortName.toUpperCase()}.</p>
        </div>
      </div>
    </footer>
  );
}
