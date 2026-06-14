# OniT

Personal website for **Alexander** (OniT) — Alicante.

> Alexander is the main character. The identity is **Fix · Teach · Build · Create**.
> Scroll-first, story-first. The project showcase is a *showcase*, not navigation.
> Personality comes from typography, photography, storytelling and voice.
> Simpler maintenance is preferred over cooler effects. **Everything works without JavaScript.**

See `CLAUDE.md`, `VISION.md`, `REFERENCES.md`, `OPUS_BRIEF.md` for the full brief.

## Stack

- **Astro** (static-first; ships ~0 JS by default)
- **Vanilla TypeScript islands** (only the project showcase is interactive)
- **Plain CSS + design tokens** (`src/styles/tokens.css`) — no Tailwind
- **i18n**: RU (default, source of truth) · EN · ES

## Commands

```sh
npm install      # install dependencies
npm run dev      # local dev server
npm run build    # static build -> dist/
npm run preview  # preview the built site
```

## Structure

```
src/
  components/   Header, Footer, WarmMark, LanguageSwitch (+ Showcase, VerbCard… later)
  data/         contact.ts (WhatsApp/email — single source) · site.ts
  i18n/         ui.ts (UI strings; long-form content -> collections in Phase 1)
  layouts/      BaseLayout.astro
  pages/        index (ru) · en/ · es/  (story sections added Phase 2)
  styles/       tokens.css · fonts.css · base.css
public/
  fonts/        self-hosted webfonts (see fonts/README.md)
  favicon.svg
```

## Build phases (each stops at a review gate)

0. **Scaffold** ✅ — stack, tokens, fonts, layout, header/footer, i18n, contact config
1. Content model (collections: services / projects / future blog)
2. Homepage — static, zero-JS, full story
3. Service + project pages from collections
4. Motion layer + complete reduced-motion mode
5. Showcase enhancement (desktop ring scrub · mobile carousel) over a static fan
6. Real copy (Alexander's voice) + photography
7. A11y audit · performance gates · self-host docs · final QA

## Future (architected for, not built yet)

Stripe payments · Telegram bot · self-hosting (static or Node adapter, Dockerizable)
· custom domain. None of these require a rewrite — see `astro.config.mjs` and
`src/data/contact.ts`.
