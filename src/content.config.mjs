// 1. Import utilities from their dedicated modern entry points
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders'; // The modern loader for local files
import { z } from 'astro/zod';      // The dedicated schema validation import

// Starlight specific imports
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// 2. Define your collection(s)

// Starlight collection: Always use the built-in docsLoader
const docs = defineCollection({ 
  loader: docsLoader(), 
  schema: docsSchema(),
});

const quotes = defineCollection({
  // Explicitly tell Astro where to find these files
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/quotes" }),
  schema: z.object({
    quote: z.string(),
    person: z.string().optional(),
    organization: z.string().optional(),
    jobTitle: z.string(),
  }),
});

const people = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/people" }),
  schema: z.object({
    name: z.string(),
    jobTitle: z.string(),
    bioBrief: z.string(),
    photo: z.string().optional(),
    order: z.number(),
  }),
});

const technologies = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/technologies" }),
  schema: z.object({
    title: z.string(),
    icon: z.string().default('mdi:rocket'),
    order: z.number().optional(),
  }),
});

// 3. Export the collections object
export const collections = { 
  docs,
  quotes, 
  people,
  technologies,
};