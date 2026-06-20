// Content model (Phase 1). "Add a service/project/post = add a file."
//
// i18n: content lives in locale subfolders (ru/ en/ es/). The entry `id` is the
// path-based id, e.g. "ru/repair" — locale is the first segment. RU is the source
// of truth; EN/ES are translations. Long-form prose lives in the Markdown body;
// frontmatter holds the structured bits the design needs.

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Services are the "hire-me-now" verbs.
const serviceVerb = z.enum(['fix', 'teach']);
// Projects are the "what I'm building" verbs.
const projectVerb = z.enum(['build', 'create']);

// Tutoring pricing tier — structured now, real numbers dropped in later (zero
// layout change). `price` is a string so "—"/"от X€"/"договорная" all fit.
const tier = z.object({
  name: z.string(),
  detail: z.string().optional(),
  price: z.string().optional(),
  group: z.string().optional(), // optional category heading (e.g. "Phones & tablets")
  // Optional expandable detail (click a tier to reveal it). All optional, so a
  // tier without these simply renders as a plain, non-expandable row.
  when: z.array(z.string()).optional(), // "when this is you"
  what: z.array(z.string()).optional(), // "what I'll do"
  gives: z.array(z.object({ t: z.string(), d: z.string() })).optional(), // "what you get"
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: ({ image }) =>
    z.object({
      key: z.string(), // shared id across locales, e.g. "repair"
      name: z.string(),
      verb: serviceVerb,
      oneLine: z.string(), // showcase card + page hero
      order: z.number(),
      status: z.enum(['available', 'in-progress']).default('available'),
      cover: image().optional(),
      // Repair = "quote"; Tutoring = "tiers" (placeholder until real pricing).
      pricing: z.enum(['quote', 'tiers']).default('quote'),
      tiers: z.array(tier).optional(),
      // Small caveat shown under a tiers price list (e.g. "from-prices, final
      // price discussed"). Falls back to the generic quote note.
      priceNote: z.string().optional(),
      // Dedicated-page body (optional — falls back to a holding line until written).
      problem: z.string().optional(),
      approach: z.string().optional(),
      whatYouGet: z.string().optional(),
      howItWorks: z.string().optional(),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      key: z.string(),
      name: z.string(),
      verb: projectVerb,
      oneLine: z.string(),
      order: z.number(),
      status: z.enum(['available', 'in-progress']).default('in-progress'),
      cover: image().optional(),
      gallery: z.array(image()).optional(),
      youtube: z.string().url().optional(),
      nextSteps: z.array(z.string()).optional(),
      // Dedicated-page body (optional — "next" is nextSteps above).
      idea: z.string().optional(),
      why: z.string().optional(),
      now: z.string().optional(),

      // Rich "deep project" page (currently only the Smart Glasses page uses
      // these). All optional, so simpler projects (English) ignore them and keep
      // the plain ProjectPage layout. Rendered by GlassesPage.astro.
      lead: z.string().optional(), // what it is, leading paragraph(s)
      points: z.array(z.object({ t: z.string(), d: z.string() })).optional(), // differentiators
      howSteps: z.array(z.string()).optional(), // V1 camera -> AI -> audio loop
      howNote: z.string().optional(), // "alive without a phone" note
      v1Included: z.array(z.string()).optional(),
      v1Excluded: z.array(z.string()).optional(),
      v1Hardware: z.string().optional(),
      principles: z.array(z.object({ t: z.string(), d: z.string() })).optional(),
      aiLead: z.string().optional(),
      aiOptions: z.array(z.object({ t: z.string(), d: z.string() })).optional(),
      roadmap: z
        .array(z.object({ ver: z.string(), title: z.string(), body: z.string() }))
        .optional(),
      ecosystem: z.array(z.string()).optional(),
      faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
    }),
});

// Future blog/news. Stub for now; same add-a-file pattern.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { services, projects, posts };
