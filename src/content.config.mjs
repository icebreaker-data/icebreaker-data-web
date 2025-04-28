// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Define your collection(s)

const quotes = defineCollection({
  schema: z.object({
    quote: z.string(),
    person: z.string().optional(),
    organization: z.string().optional(),
    jobTitle: z.string().optional(), // Made optional in case some quotes don't have job titles
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = { quotes };