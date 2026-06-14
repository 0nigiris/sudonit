// @ts-check
import { defineConfig } from 'astro/config';

// Astro is static-first here. When Stripe / a Telegram webhook / other server
// endpoints are needed later, this becomes a config change (add the Node adapter
// + `output: 'server'|'hybrid'`), NOT a rewrite. See VISION / implementation plan.
export default defineConfig({
  // Single source of truth for the canonical site URL. Change this when the
  // custom domain is wired up — nothing else depends on the hardcoded value.
  site: 'https://onit.example',

  // RU is the source of truth; EN and ES are translations.
  // prefixDefaultLocale:false => RU served at "/", EN at "/en/", ES at "/es/".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
