import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const lessons = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/lessons" }),
  schema: z.object({
    name: z.string(),
    style: z.enum(["balboa", "lindy", "shag"]),
    day: z.enum([
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ]),
    time: z.string(),
    venue: z.string(),
    address: z.string(),
    neighborhood: z.string().optional(),
    level: z.enum(["beginner", "intermediate", "advanced", "all-levels"]),
    instructor: z.string().optional(),
    cost: z.string().optional(),
    contact: z.string().url().optional(),
    notes: z.string().optional(),
  }),
});

export const collections = { lessons };
