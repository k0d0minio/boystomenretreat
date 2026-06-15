"use client";

import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  hasLocale,
  localeNames,
  locales,
  type Locale,
} from "@/lib/i18n/config";

/**
 * Language switcher — swaps the leading `/[lang]` segment of the current path
 * and navigates, preserving the rest of the path and any anchor. A native
 * `<select>` keeps it fully keyboard- and screen-reader accessible.
 */
export function LanguageSwitcher({
  lang,
  label,
  className,
}: {
  lang: Locale;
  label: string;
  className?: string;
}) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: string) {
    const segments = pathname.split("/");
    if (segments[1] && hasLocale(segments[1])) {
      segments[1] = next;
    } else {
      segments.splice(1, 0, next);
    }
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    router.push((segments.join("/") || `/${next}`) + hash);
  }

  return (
    <div
      className={cn(
        "relative inline-flex items-center gap-1.5 rounded-md px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
        className,
      )}
    >
      <Globe className="size-4" aria-hidden />
      <select
        value={lang}
        onChange={(e) => switchTo(e.target.value)}
        aria-label={label}
        className="cursor-pointer appearance-none bg-transparent pr-1 outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {locales.map((l) => (
          <option key={l} value={l} className="text-foreground">
            {localeNames[l]}
          </option>
        ))}
      </select>
    </div>
  );
}
