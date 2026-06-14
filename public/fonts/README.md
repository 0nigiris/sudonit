# Fonts

Self-hosted webfonts (good for self-hosting + performance + privacy). The site is
trilingual with **Russian as the primary language**, so the display + body faces
must cover **Cyrillic**.

## Installed (chosen)

| Family | Role | Subsets | Source |
|--------|------|---------|--------|
| **Geologica** | Display (headings) | latin, latin-ext, cyrillic, cyrillic-ext | Google Fonts (OFL) |
| **Onest** | Body text | latin, latin-ext, cyrillic, cyrillic-ext | Google Fonts (OFL) |
| **JetBrains Mono** | Tiny technical labels only | latin | jsDelivr (Fontsource) |

Files are per-subset variable `.woff2` (e.g. `geologica-cyrillic.woff2`,
`onest-latin.woff2`). `src/styles/fonts.css` declares them with `unicode-range`,
so the browser downloads only the subset a page actually needs.

## How fonts.css was generated

Pulled from the Google Fonts CSS2 API (source of truth for subsets +
`unicode-range`), with the `src` URLs rewritten to local `/fonts/` paths and only
the latin / latin-ext / cyrillic / cyrillic-ext blocks kept. To refresh or add a
weight/subset, re-run that fetch and drop the new `.woff2` files here.

> History: an earlier attempt used Clash Display + General Sans (Fontshare) — they
> have **no Cyrillic**, so they were dropped in favour of Geologica + Onest, which
> render Russian (the primary language) in-brand. Decision made visually in-browser.
