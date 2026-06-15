// Locale-aware path builder. RU (default) is unprefixed; EN/ES are prefixed.
import { DEFAULT_LOCALE, LOCALES, type Locale } from '../data/site';

export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return locale === DEFAULT_LOCALE ? clean : `/${locale}${clean}`;
}

/**
 * Strip a leading locale prefix → the shared path (the same key across locales,
 * e.g. "/es/repair/" → "/repair/"). Lets us map the current page to its
 * equivalent in another locale (language switch + hreflang alternates).
 */
export function barePath(pathname: string): string {
  for (const l of LOCALES) {
    if (l === DEFAULT_LOCALE) continue;
    if (pathname === `/${l}` || pathname.startsWith(`/${l}/`)) {
      return pathname.slice(l.length + 1) || '/';
    }
  }
  return pathname || '/';
}
