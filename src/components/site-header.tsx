"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Waves } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { nav, site } from "@/lib/content";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Transparent header sits over the dark hero photo only on the homepage at the top.
  const onDark = isHome && !scrolled;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className={cn(
            "flex items-center gap-2 font-heading text-lg font-bold tracking-tight",
            onDark ? "text-white" : "text-foreground",
          )}
        >
          {onDark ? (
            <span className="flex size-8 items-center justify-center rounded-lg bg-white/15 text-white backdrop-blur-sm">
              <Waves className="size-4" />
            </span>
          ) : (
            <Image
              src="/img/boys-to-men-logo.jpg"
              alt="Boys To Men Surf Skate Retreat logo"
              width={36}
              height={36}
              className="size-9 rounded-lg object-cover"
            />
          )}
          <span>{site.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                onDark
                  ? "text-white/80 hover:bg-white/10 hover:text-white"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button
            asChild
            size="sm"
            variant={onDark ? "outline" : "default"}
            className={cn("ml-2", onDark && "border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white")}
          >
            <Link href="/#contact">Book a place</Link>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className={cn(onDark && "text-white hover:bg-white/10 hover:text-white")}
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 font-heading">
                  <Image
                    src="/img/boys-to-men-logo.jpg"
                    alt="Boys To Men Surf Skate Retreat logo"
                    width={28}
                    height={28}
                    className="size-7 rounded-lg object-cover"
                  />
                  {site.shortName}
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-2 flex flex-col gap-1 px-4">
                {nav.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="rounded-md px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-muted"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild className="mt-3">
                    <Link href="/#contact">Book a place</Link>
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
