import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const role = z.object({
  company: z.string(),
  location: z.string(),
  from: z.string().regex(/^\d{4}-\d{2}$/),
  to: z.string().regex(/^\d{4}-\d{2}$/).nullable(),
  title: z.string(),
  current: z.boolean().optional(),
  summary: z.string(),
  projects: z.array(z.string()).optional(),
  responsibilities: z.array(z.string()),
  stack: z.array(z.string()),
});

const degree = z.object({
  institution: z.string(),
  location: z.string(),
  from: z.string().regex(/^\d{4}-\d{2}$/),
  to: z.string().regex(/^\d{4}-\d{2}$/),
  degree: z.string(),
  grade: z.string(),
  thesis: z.string(),
});

const cv = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/cv' }),
  schema: z.object({
    profile: z.object({
      firstName: z.string(),
      lastName: z.string(),
      role: z.string(),
      location: z.string(),
      birth: z.object({
        date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
        place: z.string(),
      }),
      positioning: z.string(),
    }),
    experience: z.array(role).min(1),
    education: z.array(degree).min(1),
    skills: z.object({
      programmiersprachen: z.array(z.string()),
      frontend: z.array(z.string()),
      backend: z.array(z.string()),
      devops: z.array(z.string()),
      tools: z.array(z.string()),
      vorgehensweisen: z.array(z.string()),
    }),
    languages: z.array(z.object({
      name: z.string(),
      level: z.string(),
    })),
    personal: z.array(z.string()),
  }),
});

export const collections = { cv };
