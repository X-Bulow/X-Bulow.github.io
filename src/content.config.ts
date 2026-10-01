import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const link = z.object({ label: z.string(), url: z.string() });

// Research projects, software and course projects (src/content/research/).
// An entry gets its own page when its Markdown body is not empty.
const research = defineCollection({
  loader: glob({ base: './src/content/research', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum(['research', 'software', 'course']).default('research'),
    status: z.enum(['ongoing', 'completed']).default('completed'),
    period: z.string().optional(),
    role: z.string().optional(),
    affiliation: z.string().optional(),
    advisors: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    links: z.array(link).default([]),
    featured: z.boolean().default(false), // also shown on the home page
    order: z.number().default(100), // lower comes first
  }),
});

// Notes and writing (src/content/notes/). Drafts are visible only in `npm run dev`.
const notes = defineCollection({
  loader: glob({ base: './src/content/notes', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Pages under Misc (src/content/misc/): interests, hobbies, anything outside research.
// Each file becomes /misc/<file-name>/. Drafts are visible only in `npm run dev`.
const misc = defineCollection({
  loader: glob({ base: './src/content/misc', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    order: z.number().default(100), // lower comes first
    draft: z.boolean().default(false),
  }),
});

export const collections = { research, notes, misc };
