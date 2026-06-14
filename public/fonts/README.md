# Fonts

Self-hosted webfonts go in this folder. Until they're added, the site falls back
to the stacks defined in `src/styles/tokens.css` and remains fully legible —
nothing breaks.

Expected files (referenced by `src/styles/fonts.css`):

| File | Family | Source |
|------|--------|--------|
| `ClashDisplay-Variable.woff2` | Clash Display (display) | Fontshare (free) — fontshare.com/fonts/clash-display |
| `GeneralSans-Variable.woff2` | General Sans (body) | Fontshare (free) — fontshare.com/fonts/general-sans |
| `JetBrainsMono-Regular.woff2` | JetBrains Mono (tiny labels) | jetbrains.com/lp/mono / Google Fonts |

> ⚠️ **CYRILLIC GAP (open decision).** The installed Clash Display + General Sans
> (and the latin JetBrains Mono subset) cover **Latin + Spanish but NOT Cyrillic**.
> Russian is the PRIMARY language, so as-is, RU text falls back to system-ui (not
> the brand type). Decision pending: either (a) switch the display/body faces to
> Cyrillic-capable ones (e.g. Unbounded / Geologica / Onest / Manrope / Golos),
> or (b) pair a Cyrillic companion face for RU only. To be decided visually in the
> browser after the MCP restart. These files stay as the Latin reference meanwhile.

How to add:
1. Download the family, take the **variable** `.woff2` (or subset it).
2. Drop the file here with the exact filename above.
3. (Optional) subset to Latin + Cyrillic to keep payload small — the site is
   trilingual (RU/EN/ES), so Cyrillic coverage matters for the display + body
   faces.

Keep weights minimal. Performance budget: fonts should not blow the LCP < 2s
mobile target.
