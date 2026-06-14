# OniT — MASTER PLAN (Project Bible)

> **Purpose of this file:** the single, complete reference for the entire OniT
> website — philosophy, identity, design, content, motion, photography,
> architecture, build plan, guardrails and open questions. If you read only one
> file, read this one. Everything here is the *current intended* design; code
> follows it phase by phase.
>
> **The one sentence:** A scroll-first, story-first personal website that makes a
> stranger understand and remember **Alexander** in under 30 seconds — and know
> how to contact him. Person first, story second, projects third, interface last.

---

## 0. How to read this document

- **Section 1–6** = the *why* and the *who* (don't skip — every visual decision flows from here).
- **Section 7–16** = the *design* (concept, visuals, IA, wireframes, content, motion, mobile, photography, i18n).
- **Section 17–22** = the *build* (stack, content model, showcase, performance, a11y, future-proofing).
- **Section 23–27** = the *plan & state* (phases, guardrails, open items, status, risks).

---

## 1. What this project IS and IS NOT

**IS:** a personal website that introduces Alexander, his work, his projects and his services.

**IS NOT:** a developer portfolio · a dashboard · an operating-system simulation ·
an experimental-UI showcase · a terminal · an admin panel · a startup/SaaS template.

The website exists to introduce **Alexander** — not a navigation system.

It should answer, in order:
1. Who is Alexander?
2. What does he do?
3. What is he building?
4. Why should a visitor care?
5. How do they contact him?

---

## 2. Core principles (non-negotiable)

1. **Alexander is the main character.** Person → story → projects → interface.
2. **Identity = Fix · Teach · Build · Create.** These four verbs are the spine.
3. **Scroll-first, story-first.** The primary interaction is scrolling. Nothing to learn.
4. **The showcase is a showcase, not navigation.** Visitors must remember the *projects*, never the rotation.
5. **Personality comes from typography, photography, storytelling and voice** — never from navigation gimmicks.
6. **Color supports the experience; it does not define it.**
7. **The warm mark is a subtle recurring signature, not a dominant theme.**
8. **Simpler maintenance beats cooler effects.** Always.
9. **Everything works without JavaScript.** JS only *enhances*.
10. **Every decision must answer:** "Does this help the visitor understand Alexander?" If no → remove it.

---

## 3. Why V1 failed + lessons

**V1 ("STARLIGHT")** was technically fine and still failed. Root cause: **the interface
became the main character instead of Alexander.** Visitors spent more time decoding a
custom orbit/solar-system navigation than understanding the person. It was a concept
presentation cosplaying as a personal site.

**What V1 got right (KEEP):** minimalism, strong structure, clear project separation,
premium feel, disciplined motion philosophy.

**What V1 got wrong (DISCARD forever):** orbit-as-navigation · Ctrl+K command palette ·
hidden interactions · OS/dashboard/terminal metaphors · panels replacing real pages ·
any navigation a visitor must learn · letting a concept name become a UI feature.

**Lessons:**
- Optimize for *clarity*, not "impressive."
- A wow moment is allowed; a *puzzle* is not.
- A single metaphor must never become the whole identity (this killed V1; we will not
  let "bringing things back to life" become the new orbit).
- Alexander's own taste includes "experimental navigation" — that instinct is exactly
  what produced V1. **Clarity overrules it.** Experimentation lives in craft (type,
  motion, voice, photography), never in navigation.

---

## 4. The person: Alexander

- **Alicante, Spain.** Trilingual: **Russian (primary), English, Spanish.**
- Wants to be seen as a genuinely interesting, non-herd thinker ("не стадное мышление")
  with many ideas. Cares about making *useful* things, not looking successful.
- **Active ventures / revenue:** computer **Repair / IT** (primary revenue, local
  Alicante clients) and **Tutoring** (Math / CS / Programming, 1-on-1, online/offline,
  students & teens — under the OniT brand).
- **YouTube:** handle `Sudo_0nigiri` (sudo = run as admin; onigiri = his cat). The public
  record / heartbeat of the journey — a "follow along" link, not a showcase card.
- **Building:** an **English-learning project** and a **Smart Glasses project** (both early/in-progress).
- **OniT** = his "company" name, layered meaning (On It / On IT / power On / nit = light /
  Oni from onigiri). Logo = a ringed planetary mark + wordmark.
- **Taste:** Apple, Nothing, Teenage Engineering, Framework, Porsche, Nintendo, Valve;
  Persona 3 UI energy, Arc, Codédex; Catppuccin palette; modern sans with personality;
  premium-not-luxury; futuristic-but-human; dark-themed.
  **Dislikes:** SaaS/startup/dev-portfolio templates, corporate or childish design,
  generic space/sci-fi, Tailwind/Inter/Geist defaults.
- **Working style:** design-first, phase-gated (concepts → art direction → wireframes →
  docs → code). He directs; Claude executes. Performance matters a lot; every animation
  must justify itself.
- **Private:** he does NOT want his personal origin story / how he came to Spain on the
  site. So "Story" = his *thinking and standards*, never biography.

**Voice anchor — Alexander's own words (use as guidance, not literal copy):**
- I like understanding how things work.
- I don't like throwing things away before trying to fix them.
- I prefer learning by building.
- I enjoy explaining difficult things in a simple way.
- I'm interested in technology, projects and creating things.
- I care more about making useful things than looking successful.

---

## 5. Identity: the four verbs

| Verb | Project / area | Type | "Heat" of the warm mark | Section tint |
|------|----------------|------|--------------------------|--------------|
| **FIX** | Computer Repair | Service (hire now) | hottest — full glow lives here | amber `--c-fix` |
| **TEACH** | Tutoring | Service (hire now) | warm | sky `--c-teach` |
| **BUILD** | Smart Glasses | Project (building) | cool | mauve `--c-build` |
| **CREATE** | English project | Project (building) | cool | teal `--c-create` |

- **Services (Fix + Teach)** = "hire me now," given primacy in the flow.
- **Projects (Build + Create)** = "what I'm building," shown honestly as in-progress.
- **"Ideas & planning" (thinking, sketching, prototyping)** is NOT a fifth verb — it's the
  connective tissue *behind* all four, shown via photography + the "Why" section.

---

## 6. Voice & tone

- **First person.** Alexander talks to you. Confident, a little blunt, warm. Short,
  declarative sentences. Occasional dry humour.
- **NOT** corporate, motivational, agency-like, or salesy. Sounds like a real person.
- RU is the source of truth; EN/ES are faithful translations (not machine-flat).
- Trilingual is *personality*, not just a switcher: a signature line may appear in all
  three languages once or twice.
- Examples of register (placeholders, final copy in Phase 6):
  - *"I fix the computer everyone told you to throw away."*
  - *"School made this boring. I make it click."*
  - *"I'd rather make something useful than look successful."*

---

## 7. Concept & creative direction

**Chosen direction:** a **Keynote-structured, first-person scroll story** with a **Bold
Editorial** visual language, warmed with real photography.

- **Structure = Apple-keynote calm:** one idea per screen, scroll reveals everything,
  zero navigation to learn. (This is what prevents a repeat of V1.)
- **Voice = first person:** carries personality without depending on a photoshoot.
- **Theme (accent only) = "light / bring things back to life":** true to his repair work,
  ties to the ring-of-light logo and `nit` = illumination. Runs hot at Repair, fades at
  the build projects. **A recurring signature, never the identity.**
- **Personality > Apple:** Apple lends only structure and clarity. Character comes from a
  characterful display typeface, warm palette, real photography, human texture, and his
  voice. The result should feel *made by a real person*, not "a nice modern website."

---

## 8. Visual system (LOCKED — Direction B, blended)

Implemented in `src/styles/tokens.css`. Personality = TYPE + PHOTO + VOICE. Color supports.

### Color
```
Base / warmth (from T2)
  --c-base    #15130F   warm near-black (page bg)
  --c-surface #211D16   raised surfaces / cards
  --c-text    #F2EDE4   warm off-white (body text)
  --c-muted   #9A9286   secondary text
  --c-line    #2C2820   hairlines / borders

Warm mark / brand light (SIGNATURE, not theme)
  --c-light     #FF9D4D rich amber  (brand mark, primary CTA, full glow @ Repair+Contact ONLY)
  --c-light-dim #5A3F25 resting low-glow

Verb tints (Catppuccin DNA, harmonized) — blocks/labels/accents only, NOT body text
  --c-fix    #FAB387 amber   (Repair)
  --c-teach  #84A9D6 sky     (Tutoring)
  --c-build  #BBA0E0 mauve   (Smart Glasses)
  --c-create #8FCFBF teal    (English)
```

### Typography
- **Display:** Geologica (confident modern grotesk with character, full Cyrillic).
- **Body:** Onest (clean humanist, very readable, full Cyrillic).
- *(History: Clash Display + General Sans were tried first but have no Cyrillic — dropped, since RU is primary. Chosen visually in-browser.)*
- **Mono:** JetBrains Mono — *tiny* technical labels only, scarce. NOT a terminal aesthetic.
- Fallback stacks chosen so the site is fully legible before/without webfonts.
- Fluid `clamp()` type scale (display down to label) — responsive without breakpoint churn.
- Self-hosted per-subset `.woff2` (latin / latin-ext / cyrillic / cyrillic-ext) with `unicode-range`.

### The warm mark
- A small SVG: planet body + a single quiet orbit ring (nod to the logo, NOT navigation).
- Resting = dim. `glow` = full amber + soft drop-shadow, used ONLY at Repair + Contact.
- `breath` = one gentle scale pulse, used once (hero); disabled under reduced-motion.
- **Hard ceilings:** never a hero element, never full-screen, never the subject of a section.

### Texture (anti-corporate vaccine)
- Subtle film grain, one or two bits of real handwriting as accents, real (slightly messy)
  photography, real numbers ("X machines brought back"). Imperfection = humanity.

---

## 9. Information architecture

```
GLOBAL (every page)
  Header: OniT◦ logo (→home) · RU/EN/ES (RU default) · quiet Contact
  Contact: WhatsApp (primary) + Email (secondary). NO contact form anywhere.
  Mobile: sticky bottom bar → WhatsApp (one tap) + Email
  Warm mark: faint thread, full glow only @ Repair + Contact

HOME (single scroll story)
  1 Hero            Alexander + Fix·Teach·Build·Create in one breath
  2 Who             Who he is (Alicante, trilingual maker)
  3 Why             How he thinks (his 6 thoughts) — NOT biography
  4 Services (now)  Fix (Repair) + Teach (Tutoring)        → real pages
  5 Showcase (wow)  4 projects on the ring (showcase, NOT nav)
  6 Projects (build) Build (Smart Glasses) + Create (English) → real pages
  7 Contact         WhatsApp primary · email secondary (full-glow payoff)
  8 Footer          channel · languages · Alicante · tiny onigiri

DEDICATED PAGES (real long-form pages — never panels/modals)
  /repair    Service · "request a quote"
  /tutoring  Service · placeholder pricing structure
  /glasses   Project · in progress (Build)
  /english   Project · in progress (Create)
```

**Navigation model:** scroll + plain links only. No menu, no command palette, no orbit.

---

## 10. Wireframes

### Home — desktop
```
[ OniT◦            RU EN ES        Contact ]
HERO:    I FIX. I TEACH. / I BUILD. I CREATE.   ◦warm mark(breath)
         Alexander · Alicante · 3 languages   [A1 portrait]
WHO:     [A2]  "I make things work — and make them make sense."
WHY:     pull-quote in his voice   [F1 sketching] [F4 thinking]
SERVICES (AVAILABLE NOW):
         [ FIX ▰amber  Repair  [B1] → /repair ] [ TEACH ▰sky Tutoring [C1] → /tutoring ]
         [ Fix my computer → WhatsApp ]
SHOWCASE (pinned, 1 cycle, then releases):
         [card] [ FRONT CARD ] [card]  ◦depth   name+1line always legible
         Repair · Tutoring · Smart Glasses · English
PROJECTS (WHAT I'M BUILDING):
         [ BUILD ▰mauve Glasses [E1] in progress → /glasses ] [ CREATE ▰teal English [E3] → /english ]
CONTACT: "Let's bring it back to life."  ◦full glow  [ WhatsApp ]  email
FOOTER:  OniT◦  Alicante · RU/EN/ES · @Sudo_0nigiri  🐱
```

### Home — mobile (purpose-built, not shrunk)
```
[ OniT◦  RU EN ES ]
HERO (type reflows, stays big) [A1 vertical]
WHO / WHY stacked
FIX ▰ [Repair] / TEACH ▰ [Tutoring]   (full-width verb blocks)
SHOWCASE = swipe carousel:  ‹ [ REPAIR ] ›   ● ○ ○ ○   (neighbors peek, NO scroll-hijack)
BUILD ▰ [Glasses] / CREATE ▰ [English]
CONTACT (full glow)
[ WhatsApp ]  Email     ← STICKY bottom bar
```

### Service page template (/repair, /tutoring)
```
← OniT                                   Contact
PAGE NAME (verb tint) · one-line promise (his voice) · [hero B1/C1]
The problem  →  How I approach it     (before→after)
What you get · How it works
Repair:   [ Request a quote → WhatsApp ]
Tutoring: [ pricing placeholder: format/tiers TBD ]
← back to OniT             [ WhatsApp · Email ]
```

### Project page template (/glasses, /english)
```
← OniT                                   Contact
PAGE NAME (verb tint) · IN PROGRESS · one-line what/why · [hero E1/E2/E3]
The idea · Why I'm building it   [F3 prototyping]
Where it is now · What's next
Follow along (YouTube) · [ Get in touch ]
← back to OniT             [ WhatsApp · Email ]
```

---

## 11. Page structure (modules)

- **Home:** `Header` · `Hero` · `WhoBlock` · `WhyQuote` · `ServicesGroup`(2×`VerbCard`) ·
  `PrimaryCTA(WhatsApp)` · `Showcase`(`RingDesktop`/`CarouselMobile`, 4×`ProjectCard`) ·
  `ProjectsGroup`(2×`VerbCard`) · `ContactBlock` · `Footer`
- **Service page:** `Header` · `PageHero(verbTint)` · `ProblemApproach` · `WhatYouGet` ·
  `HowItWorks` · `ActionBlock`(Repair=`QuoteCTA` / Tutoring=`PricingPlaceholder`) · `ContactFooter`
- **Project page:** `Header` · `PageHero(verbTint,"in progress")` · `TheIdea` ·
  `WhyBuilding` · `StatusNext` · `FollowAlong(YouTube)` · `ContactFooter`
- **Shared:** `Header`, `LanguageSwitch`, `WhatsAppButton`, `EmailButton`,
  `MobileStickyBar`, `WarmMark`, `VerbCard`, `PhotoFrame`, `ContactFooter`, `Footer`

---

## 12. Content map (intent + voice, not final copy)

**HOME**
- **Hero** — understand him in <15s. 4-verb headline + name/Alicante/3 languages. Photo A1. Plain, confident.
- **Who** — establish the person. 1–2 lines. Photo A2.
- **Why** — how he thinks. Pull-quote (understanding how things work; don't discard before fixing). Photos F1, F4. Honest, not motivational.
- **Services** — hire-me-now. Fix + Teach cards, 1 line each. Photos B1, C1. CTA: Fix my computer → WhatsApp.
- **Showcase** — remember the projects. 4 cards: name + 1-line value (legible always). Covers B/C/E. Front card → page. Project-first wording.
- **Projects** — show he's building. Build + Create cards, "in progress." Photos E1, E3. (learning by building; useful over successful.)
- **Contact** — easy reach. WhatsApp + email. Warm, direct.
- **Footer** — quiet wrap. Channel, langs, onigiri.

**/repair** — Hero (promise) · Problem→Approach (*don't throw away before fixing* = the ethos) · What you get · How it works · **Request a quote (WhatsApp)** · footer. Media B1/B2/B3. Practical, trustworthy, local.

**/tutoring** — Hero (promise) · Problem→Approach (*explain hard things simply*) · What you get · How it works · **Pricing placeholder (format/tiers TBD)** · footer. Media C1/C2/C3. Patient, clear, not salesy.

**/glasses** — Hero ("in progress") · The idea · Why building (*learning by building*) · Where it is now/next · Follow on YouTube · contact. Media E1/E2/F3. Curious, candid it's early.

**/english** — Hero ("in progress") · The idea · Why building (*useful over successful*) · Status/next · Follow · contact. Media E3/E4/F1. Thoughtful, forming.

---

## 13. Motion system

**Philosophy:** motion you feel but don't notice. Guides the eye; never performs. If
removing it makes the site *calmer*, it was a gimmick — cut it.

**Foundation tokens** (`tokens.css`):
```
DURATIONS  micro 140ms · entrance 480ms · reveal 560ms · showcase = scroll-scrubbed
EASING     settle cubic-bezier(0.22,1,0.36,1) ; exit cubic-bezier(0.4,0,1,1)
PROPS      transform + opacity ONLY (GPU). No layout/color/shadow/filter animation.
TRIGGER    entrances fire once at ~15% in view (IntersectionObserver), no replay on scroll-up
STAGGER    60–80ms, max 3–4 steps
SIGNATURE  one reused transition (clip + 12px rise) so the whole site feels authored
```

**Per section:**
- Hero: headline reveals line-by-line (clip + rise); warm mark one slow breath.
- Who/Why: fade+rise; the pull-quote arrives slightly larger/slower (the emotional beat).
- Services: verb label + color block wipe in (clip L→R); photo fades up.
- Showcase: scroll-scrubbed ring (see §19).
- Projects: same language, cooler tints, fainter mark (signals "in progress").
- Contact: warm mark ramps to full glow with scroll; CTA press-state 140ms.
- Global: warm mark opacity/scale faintly linked to scroll; nav/contact 140ms show/hide.

**Reduced motion = a complete mode:** entrances become instant or ≤120ms fade; warm mark
static at resting glow; **showcase becomes a static angled fan** (no pin/scrub); no
parallax anywhere. Story survives entirely on type + photography.

---

## 14. Mobile strategy (designed for mobile, not shrunk)

- Mobile is most visitors; the desktop pin+scrub showcase would feel janky/hijacked on a phone.
- Type stays big and confident (more powerful in a narrow column).
- Verb blocks stack full-width, thumb-scrollable.
- **Sticky bottom contact bar:** one-tap WhatsApp/Call (the money action) + email.
- Language switch in top bar (RU default), never a buried menu.
- **Showcase on mobile = native horizontal swipe carousel with depth** (peeked neighbors
  scaled/dimmed). The gesture everyone knows; no scroll-hijack. Tap centered card → page.
  Dots show position. Reduced-motion → simple vertical stack of 4 cards.
- Performance: mobile-specific crops, lazy below-fold, modern formats, prioritized hero.

---

## 15. Photography system (authentic > perfect)

**Principle:** real bench, real mess, real warm light, candid over posed. Phone camera in
good light is fine. Shoot every frame with **crop room on all sides** so one image serves a
wide desktop slot AND a portrait/square mobile crop. Warm practical light must be *in-camera*
(it's the same idea as the warm mark) — not added in post.

### A — Portraits ⭐⭐⭐
- **A1** Hero portrait, looking toward camera, work environment behind, warm light. *(home hero; shoot landscape + vertical)*
- **A2** Candid at the bench, not looking at camera, focused. *(Who)*
- **A3** Quiet/confident half-profile. *(Why pull-quote)*

### B — Repair (Fix — hottest verb, the revenue) ⭐⭐⭐
- **B1** Hands working inside a laptop/PC, warm task light. *(/repair hero + Services)*
- **B2** A "dead" device — dark, off. *(before)*
- **B3** Same device working/lit. *(after — proof of "back to life")*
- **B4** Detail: tools, components, screwdriver mid-task. *(texture)*

### C — Tutoring (Teach) ⭐⭐⭐
- **C1** Explaining at a screen/whiteboard, gesturing. *(/tutoring hero + Services)*
- **C2** Over-the-shoulder: code/math on screen. *(supporting)*
- **C3** Notebook/diagram with handwriting. *(accent + handwriting motif)*

### D — Workspace / environment ⭐⭐
- **D1** Wide desk/workshop, warm lamp, slightly messy. *(About / section breaks)*
- **D2** Detail vignettes: cables, mug, the cat passing through. *(onigiri easter egg)*

### E — Projects in progress (Build + Create) ⭐⭐
- **E1** Smart glasses: prototype / parts / on bench. *(/glasses + Build)*
- **E2** Smart glasses: worn or held, in use. *(/glasses hero)*
- **E3** English project: screen / sketches / wireframe of the idea. *(/english + Create)*
- **E4** "Thinking" shot: notes, sketches spread out. *(Create / non-herd thinker)*

### F — Ideas & Planning (the thinker behind the four verbs) ⭐⭐⭐
*(Not a fifth verb — the connective tissue behind all four.)*
- **F1** Sketching/wireframing on paper/whiteboard, mid-thought. *(Why, /english)*
- **F2** Planning surface: notes, diagrams, ideas spread out. *(non-herd thinker, Create)*
- **F3** Prototyping/researching a future project (notebook + device + parts). *(/glasses, /english)*
- **F4** Candid "thinking" portrait — studying notes. *(About / Why)*

**Non-negotiable minimum set (8 frames):** A1, A2, B1, B2+B3 (pair), C1, E1, F1.

---

## 16. Trilingual / i18n strategy

- Locales: **ru (default, source of truth), en, es.** RU served at `/`, EN `/en/`, ES `/es/`.
- UI strings in a small dictionary (`src/i18n/ui.ts`); long-form content in collections.
- Translations should be faithful and natural, not machine-flat (Alexander is trilingual).
- Fonts must cover **Cyrillic + Latin**.

---

## 17. Technical architecture & stack

- **Astro** (static-first; ships ~0 JS by default).
- **Vanilla TypeScript islands** — only the showcase is interactive. Minimal dependencies;
  no heavy animation library unless one truly earns its place.
- **Plain CSS + design tokens** (`tokens.css`). No Tailwind. CSS `@layer` for predictable cascade.
- **i18n** via Astro's built-in routing.
- **Why this stack:** matches every constraint — content-file updates, ~0 JS, easy
  self-hosting, real-HTML showcase fallback, low long-term maintenance, no framework churn.

**Folder layout** (current + planned):
```
src/
  components/  Header Footer WarmMark LanguageSwitch (+ Showcase/ VerbCard PhotoFrame … later)
  content/     services/ projects/ posts/(future)  + config.ts  (Phase 1)
  data/        contact.ts (WhatsApp/email single source) · site.ts
  i18n/        ui.ts
  layouts/     BaseLayout.astro (+ PageLayout later)
  pages/       index(ru) en/ es/  (+ repair tutoring glasses english — Phase 3)
  styles/      tokens.css fonts.css base.css
public/        fonts/ favicon.svg onit-logo.jpg
```

---

## 18. Content model (Phase 1 plan)

Astro Content Collections, typed frontmatter. **"Add a project/service = add a file."**
- `services/` — `repair.md`, `tutoring.md`
- `projects/` — `glasses.md`, `english.md`
- `posts/` — empty stub now; future blog/news uses the same pattern.

**Proposed frontmatter fields:**
```
name           string          # display name
verb           fix|teach|build|create
tint           (derived from verb)
kind           service | project
status         available | in-progress
slug           /repair etc.
oneLine        short value (showcase card + hero)
order          number          # ordering in showcase / lists
cover          image           # showcase card + page hero
gallery        image[]         # page media
# service-specific:
pricing        quote | tiers   # repair=quote, tutoring=tiers placeholder
tiers          [{name, detail, price?}]  # tutoring; price optional/placeholder
# project-specific:
nextSteps      string[]        # "what's next"
youtube        url?            # follow-along
```

---

## 19. Showcase implementation (3-tier progressive enhancement)

The opposite of V1: the mechanic is *not* the content. Built on a real HTML baseline.

- **Tier 0 — baseline (no JS / JS-fails / reduced-motion):** server-rendered **static
  angled "fan"** of the 4 cards, all visible, each `name + one-line value`, each a plain
  `<a>` to its page. Fully understandable. *This ships in the HTML.*
- **Tier 1 — desktop (JS ok):** a small TS island upgrades the fan into a scroll-scrubbed
  ring — pinned ~1.2–1.5vh, one cycle, then releases. Depth: front scale≈1.0/opaque/sharp;
  sides ≈0.8/0.7; back ≈0.6/0.4/slightly blurred. Hand-rolled IntersectionObserver + light
  scroll handler, no GSAP unless proven necessary. Only the front card is clickable.
- **Tier 1 — mobile (JS ok):** native swipe carousel with peeked neighbors (depth), snap,
  no scroll-hijack. Tap centered card → page. Dots for position.
- If the island errors/never loads, **Tier 0 stays.** The 4 projects are always reachable as
  links for keyboard/screen-reader users.

**QA gates (blocking):**
1. A mid-scroll screenshot still explains the projects.
2. JS disabled → projects still visible and clickable.

---

## 20. Performance budgets (gates, not hopes)

- Homepage JS payload **< ~35 KB** (showcase island + tiny helpers only).
- **LCP < 2.0s** on mid-tier mobile; **CLS ≈ 0**; **Lighthouse ≥ 95**.
- Motion = transform/opacity only. Fonts subset + display face preloaded + tuned fallback
  metrics (no layout shift). Images responsive `srcset`, AVIF/WebP, lazy below fold.
- Each phase ends with a Lighthouse + bundle-size check; regressions block merge.

---

## 21. Accessibility

- Visible keyboard focus everywhere (`:focus-visible`).
- Skip link to `#main`.
- Showcase: 4 projects reachable as plain links regardless of visual tier.
- Verb tints used for blocks/labels only; **text stays `--c-text` to hit WCAG AA**.
- Complete `prefers-reduced-motion` mode.
- Semantic HTML, proper `lang` per locale, alt text on all photography.

---

## 22. Future-proofing (architected for, NOT built now)

- **Stripe payments:** switch Astro to the Node adapter (config change) + add a server
  endpoint (e.g. `/api/checkout`) + Stripe Checkout. Tutoring pricing module already
  structured to become purchasable.
- **Telegram bot:** runs as its own small service; the site can host a webhook (Node
  adapter) or stay static with the bot independent. Contact is abstracted in `contact.ts`,
  so adding a Telegram CTA is one edit everywhere.
- **Self-hosting:** `npm run build` → static files behind nginx, or a Node process;
  Dockerizable. No host lock-in.
- **Custom domain:** DNS + reverse proxy + one `site` value in `astro.config.mjs`.
- **Blog / news:** the `posts` collection + the same page pattern; no rearchitecting.

None of these require a rewrite.

---

## 23. Build phases (each STOPS at a review gate)

0. **Scaffold** ✅ DONE — stack, tokens, fonts(+fallbacks), BaseLayout, Header/Footer,
   WarmMark, LanguageSwitch, i18n skeleton, contact/site config. Builds clean, 3 locale
   routes, ZERO JS shipped, works without JS.
1. **Content model** — collections + typed schemas (services/projects, posts stub), pricing
   & contact data wired as a typed source.
2. **Homepage — static, zero JS** — all sections (Hero→…→Contact), real structure, person-first,
   fully usable with JS off. *(The milestone proving the no-JS principle.)*
3. **Service + project pages** from collections (quote / pricing placeholder / in-progress).
4. **Motion layer** — entrances, warm-mark behavior, signature transition + complete reduced-motion mode.
5. **Showcase enhancement** — desktop ring scrub + mobile carousel over the static fan; both QA gates pass.
6. **Real copy (Alexander's voice, RU→EN/ES) + photography integration.**
7. **A11y audit · performance gates · Dockerfile/self-host docs · final QA** (incl. revisiting the dev-only npm audit items).
8. *(Future, on request):* Stripe · Telegram · SSR adapter switch · blog.

---

## 24. Guardrails (the mistakes that must never happen again)

- **Showcase shows projects, not rotation.** Card meaning legible before/during motion.
  Acceptance test: a mid-scroll screenshot still explains the projects. No particles, no
  "look what scrolling does." Pin capped + releases after one cycle; if it ever feels like a
  demo to wait through → cut to the static fan.
- **Warm mark stays a signature.** Size ceiling (small accent), frequency ceiling (hero
  breath + faint thread + full glow only at Repair+Contact). Never the subject of a section.
  If a reviewer calls it "the glowing light website," dial it back.
- **No navigation to learn.** No command palette, no orbit-nav, no OS/dashboard/terminal.
- **No concept name becomes a UI feature.** Internal codenames stay internal.
- **Personality from type/photo/voice/story — never from gimmicks.**

---

## 25. Open decisions / what's needed from Alexander

- **Real WhatsApp number** (currently placeholder `34000000000`).
- **Font files** — ✅ RESOLVED. Type system locked to **Geologica (display) + Onest
  (body) + JetBrains Mono (labels)**, self-hosted with Latin + Cyrillic subsets in
  `public/fonts/`. Verified in-browser: Russian renders in-brand.
- **Voice copy** — answer the voice prompts (why you fix what others discard; what most
  tutors get wrong; what each project really is). RU is fine; Claude shapes EN/ES.
- **Real project details** — what *exactly* is the Smart Glasses project and the English
  project (so content isn't generic).
- **Tutoring pricing** — real tiers/format when ready (module already structured for it).
- **Photography** — the shot list above (even rough phone shots as placeholders to start).
- **Self-hosting target** — server details when we reach deployment.

---

## 26. Current status & file inventory

**Phase 0 complete.** Astro 5.18.2; `npm run build` passes; routes `/`, `/en/`, `/es/`;
0 JS files / 0 `<script>` tags; correct `lang` per locale; ~72 KB output.

Files in place: `package.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`,
`README.md`, `src/data/{contact,site}.ts`, `src/i18n/ui.ts`,
`src/styles/{tokens,fonts,base}.css`,
`src/components/{WarmMark,LanguageSwitch,Header,Footer}.astro`,
`src/layouts/BaseLayout.astro`, `src/pages/{index,en/index,es/index}.astro`,
`public/{favicon.svg,onit-logo.jpg,fonts/README.md}`.

Known notes: font `.woff2` files not yet added (fallbacks active); WhatsApp number is a
placeholder; `npm audit` shows 3 high-severity issues in dev-only esbuild/vite (not in
shipped output) — deferred to Phase 7.

---

## 27. Risks (honest)

1. **Voice/copy is the #1 unproven asset.** Beautiful type + generic copy = "nice modern
   website" — the exact failure to avoid. Needs Alexander's real words.
2. **Build pages (/glasses, /english) risk looking thin** if there's little to show.
   Mitigation: honest "in progress" framing + process/idea photography + follow-along.
3. **Showcase is the one thing to watch in build** — guardrail acceptance test is a literal QA check.
4. **Trilingual = 3× content** to write/maintain; RU is source of truth.
5. **Photography timeline** — can launch with tasteful placeholders and slot real shots in,
   but shouldn't ship with both voice and photos missing.

---

*End of MASTER. This file is the source of truth for intent; code follows it phase by phase.*
