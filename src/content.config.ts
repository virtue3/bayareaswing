import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const lessons = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/lessons" }),
  schema: z.object({
    name: z.string(),
    day: z.enum([
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ]),
    location: z.string(),
    addressLine1: z.string().optional(),
    addressLine2: z.string().optional(),
    url: z.string().url(),
    styles: z.array(z.enum(["lindy", "balboa", "shag"])).default([]),
    description: z.string().optional(),
    links: z
      .array(z.object({ label: z.string(), url: z.string().url() }))
      .default([]),
    schedule: z
      .array(z.object({ time: z.string(), desc: z.string() }))
      .default([]),
    scheduleNote: z.string().optional(),
    cost: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .default([]),
    costNote: z.string().optional(),
  }),
});

export const collections = { lessons };
