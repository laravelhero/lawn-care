import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Obscura Lawn Care'),
    category: z.string(),
    readTime: z.string(),
    image: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
