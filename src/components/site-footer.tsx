import Link from "next/link";
import { AtSign, MessageCircle, Phone } from "lucide-react";

import { BrandMark } from "@/components/brand-logo";
import { site } from "@/lib/site";
import { withLocale, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/dictionaries/en";

export function SiteFooter({
  lang,
  footer,
  tagline,
}: {
  lang: Locale;
  footer: Dictionary["footer"];
  tagline: string;
}) {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <Link href={withLocale(lang, "/")} className="flex items-center gap-3 font-heading text-lg font-bold uppercase tracking-wide">
            <BrandMark className="size-14" />
            {site.shortName}
          </Link>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">{tagline}</p>
          <p className="mt-3 text-sm text-muted-foreground">{site.location}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">{footer.explore}</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link href={withLocale(lang, "/")} className="hover:text-foreground">{footer.home}</Link></li>
            <li><Link href={withLocale(lang, "/about")} className="hover:text-foreground">{footer.aboutFounder}</Link></li>
            <li><Link href={withLocale(lang, "/#included")} className="hover:text-foreground">{footer.included}</Link></li>
            <li><Link href={withLocale(lang, "/privacy")} className="hover:text-foreground">{footer.privacy}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">{footer.getInTouch}</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={site.whatsapp} className="flex items-center gap-2 hover:text-foreground" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone}`} className="flex items-center gap-2 hover:text-foreground">
                <Phone className="size-4" /> {site.phoneDisplay}
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
