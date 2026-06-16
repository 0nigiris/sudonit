# sudonit.com

Personal website for **Alexander (OniT)** — a maker in Alicante who fixes
computers, tutors, and builds his own projects.

🌐 **Live:** [sudonit.com](https://sudonit.com)

The site is built around four things he does: **Fix · Teach · Build · Create**.
It's scroll-first and story-first — you read about Alexander, then his work, then
how to reach him. No dashboards, no command palettes, nothing to "learn."

Available in **Russian · English · Spanish**.

## Stack

- **[Astro](https://astro.build)** — static-first, ships almost no JavaScript
- **Plain CSS + design tokens** — no Tailwind, no UI framework
- **Content collections** — each service/project is a Markdown file per language
- **i18n** — RU (default), EN (`/en/`), ES (`/es/`)

The whole site is static HTML/CSS and works without JavaScript.

## Develop

```sh
npm install      # install dependencies
npm run dev      # local dev server at localhost:4321
npm run build    # static build -> dist/
npm run preview  # preview the built site
```

## Project layout

```
src/
  components/   sections (Hero, About, Services, Projects, Contact) + UI pieces
  content/      services & projects as Markdown, in ru/ en/ es/
  data/         site config, contact details, verb definitions
  i18n/         interface strings
  layouts/      page shell
  pages/        routes — / (ru), /en/, /es/
  styles/       design tokens, fonts, base styles
public/
  fonts/        self-hosted webfonts
  CNAME         custom domain
```

## Deploy

Pushing to `master` triggers a GitHub Actions workflow
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) that builds the
site and publishes it to GitHub Pages on the custom domain.

---

© Alexander (OniT)
