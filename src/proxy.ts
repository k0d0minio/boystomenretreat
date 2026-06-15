import { NextResponse, type NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

import { defaultLocale, locales } from "@/lib/i18n/config";

/**
 * Locale routing (Next.js 16 "Proxy" — the renamed Middleware).
 *
 * Every page lives under a `/[lang]` segment. If an incoming request has no
 * locale prefix, we detect the visitor's preferred language from the
 * `Accept-Language` header and redirect to the matching locale (falling back to
 * the default). Requests that already carry a supported locale pass through.
 */
function getLocale(request: NextRequest): string {
  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    headers[key] = value;
  });

  const languages = new Negotiator({ headers }).languages();
  try {
    return match(languages, locales as readonly string[], defaultLocale);
  } catch {
    return defaultLocale;
  }
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Skip Next internals, the API, the extensionless metadata routes
  // (`/icon`, `/apple-icon`) and anything with a file extension (static assets
  // like /img/*.jpg, plus /sitemap.xml, /robots.txt, /manifest.webmanifest).
  // Segments are anchored with `(?:/|$)` so real pages like `/iconography`
  // would still be localized.
  matcher: [
    "/((?!_next|api(?:/|$)|icon(?:/|$)|apple-icon(?:/|$)|.*\\.).*)",
  ],
};
