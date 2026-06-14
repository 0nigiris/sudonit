// Locale-aware path builder. RU (default) is unprefixed; EN/ES are prefixed.
import { DEFAULT_LOCALE, type Locale } from '../data/site';

export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return locale === DEFAULT_LOCALE ? clean : `/${locale}${clean}`;
}
