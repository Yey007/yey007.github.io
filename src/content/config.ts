import { z, defineCollection } from "astro:content";

const personalSoftwareCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        link: z.string().url().optional(),
        order: z.number(),
    }),
});

const contribSoftwareCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        link: z.string().url().optional(),
        order: z.number(),
    }),
});

export const collections = {
    "software-personal": personalSoftwareCollection,
    "software-contrib": contribSoftwareCollection,
};
