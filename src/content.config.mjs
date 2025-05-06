// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Define your collection(s)

const quotes = defineCollection({
  schema: z.object({
    quote: z.string(),
    person: z.string().optional(),
    organization: z.string().optional(),
    jobTitle: z.string(),
  }),
});
const people = defineCollection({
  schema: z.object({
    name: z.string(),
    jobTitle: z.string(),
    bioBrief: z.string(),
    order: z.number(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = { quotes, people };