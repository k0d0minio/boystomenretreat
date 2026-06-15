"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

import { BrandMark } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { site } from "@/lib/site";
import { withLocale, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/dictionaries/en";

export function SiteHeader({
  lang,
  nav,
  header,
}: {
  lang: Locale;
  nav: Dictionary["nav"];
  header: Dictionary["header"];
}) {
  const [open, setOpen] = useState(false);

  // The header is always solid so its text uses the theme foreground colour —
  // consistently dark in light mode (and light in dark mode), always legible.
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href={withLocale(lang, "/")}
          className="flex items-center gap-2 font-heading text-lg font-bold uppercase tracking-wide text-foreground"
        >
          <BrandMark className="size-9" />
          <span>{site.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={withLocale(lang, item.href)}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher lang={lang} label={header.languageLabel} className="ml-1" />
          <ThemeToggle className="ml-1" />
          <Button asChild variant="accent" size="sm" className="ml-1">
            <Link href={withLocale(lang, "/#contact")}>{header.bookAPlace}</Link>
          </Button>
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <LanguageSwitcher lang={lang} label={header.languageLabel} />
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label={header.openMenu}>
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 font-heading uppercase tracking-wide">
                  <BrandMark className="size-7" />
                  {site.shortName}
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-2 flex flex-col gap-1 px-4">
                {nav.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={withLocale(lang, item.href)}
                      className="rounded-md px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-muted"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild variant="accent" className="mt-3">
                    <Link href={withLocale(lang, "/#contact")}>{header.bookAPlace}</Link>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
