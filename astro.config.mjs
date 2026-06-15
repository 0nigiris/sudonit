// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Astro is static-first here. When Stripe / a Telegram webhook / other server
// endpoints are needed later, this becomes a config change (add the Node adapter
// + `output: 'server'|'hybrid'`), NOT a rewrite. See VISION / implementation plan.
export default defineConfig({
  // Single source of truth for the canonical site URL. Drives every
  // canonical / hreflang / og:url / sitemap entry.
  site: 'https://sudonit.com',

  // RU is the source of truth; EN and ES are translations.
  // prefixDefaultLocale:false => RU served at "/", EN at "/en/", ES at "/es/".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  // sitemap.xml — groups each page's locale variants with hreflang for crawlers.
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'ru',
        locales: { ru: 'ru', en: 'en', es: 'es' },
      },
    }),
  ],
});
