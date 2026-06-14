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
