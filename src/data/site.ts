// Site-wide constants. Keep this small and boring — it's read everywhere.

export const SITE = {
  name: 'OniT',
  /** Who the site is about. Alexander is the main character. */
  owner: 'Alexander',
  location: 'Alicante',
  /** The identity. NOT a tagline to decorate — the actual spine of the site. */
  verbs: ['Fix', 'Teach', 'Build', 'Create'] as const,
  youtubeHandle: 'Sudo_0nigiri',
} as const;

export const LOCALES = ['ru', 'en', 'es'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'ru';

export const LOCALE_NAMES: Record<Locale, string> = {
  ru: 'Русский',
  en: 'English',
  es: 'Español',
};
