import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().optional(),
    lang: z.enum(['zh', 'en']).default('zh'),
    pairSlug: z.string().optional(),
    tags: z.array(z.string()).optional(),
    heroImage: z.string().optional(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = { blog };