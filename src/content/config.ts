import { z, defineCollection } from "astro:content";

function removeDupsAndLowerCase(array: string[]) {
	if (!array.length) return array;
	const lowercaseItems = array.map((str) => str.toLowerCase());
	const distinctItems = new Set(lowercaseItems);
	return Array.from(distinctItems);
}

const postsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string().max(100),
		description: z.string().min(50).max(260),
		draft: z.boolean().optional(),
		publishDate: z.string().transform((str) => new Date(str)),
		tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
		ogImage: z.string().optional(),
	}),
});

const projectsCollection = defineCollection({
	type: 'content',
    schema: ({ image }) => z.object({
        title: z.string().max(100),
        description: z.string().min(50).max(900),
        cover: image().refine((img) => img.width >= 2000, {
			message: "Cover image must be at least 2000 pixels wide!",
		}),
        coverAlt: z.string().optional(),
		projectLink: z.string().url(),
    }),
});

export const collections = {
	'posts': postsCollection,
	'projects': projectsCollection
};
