import { z, defineCollection } from "astro:content";

function removeDupsAndLowerCase(array: string[]) {
	if (!array.length) return array;
	const lowercaseItems = array.map((str) => str.toLowerCase());
	const distinctItems = new Set(lowercaseItems);
	return Array.from(distinctItems);
}

const posts = defineCollection({
	schema: z.object({
		title: z.string().max(100),
		description: z.string().min(50).max(260),
		draft: z.boolean().optional(),
		publishDate: z.string().transform((str) => new Date(str)),
		tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
		ogImage: z.string().optional(),
	}),
});

export const collections = { posts };
