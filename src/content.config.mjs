// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// 2. Define your collection(s)

const docs = defineCollection({ 
  loader: docsLoader(), 
  schema: docsSchema(),
});
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
    photo: z.string().optional(),
    order: z.number(),
  }),
});


// 3. Export a single `collections` object to register your collection(s)
export const collections = { 
  docs,
  quotes, 
  people,
 };