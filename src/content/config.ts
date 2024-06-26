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

const filmCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        link: z.string().url(),
        embed: z.string().url(),
        order: z.number(),
    }),
});

export const collections = {
    "software-personal": personalSoftwareCollection,
    "software-contrib": contribSoftwareCollection,
    film: filmCollection,
};
