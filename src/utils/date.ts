import type { CollectionEntry } from "astro:content";

const defaultOptions: Intl.DateTimeFormatOptions = {
	day: "numeric",
	month: "short",
	year: "numeric",
};

const defaultDateFormat = new Intl.DateTimeFormat("en-CA", defaultOptions);

export function formatDate(date: string | number | Date, options?: Intl.DateTimeFormatOptions) {
	if (options) {
		const mergedOptions: Intl.DateTimeFormatOptions = {
			...defaultOptions,
			...options,
		};
		return new Date(date).toLocaleDateString("en-CA", mergedOptions);
	}

	return defaultDateFormat.format(new Date(date));
}

export function sortByDate(posts: CollectionEntry<"posts">[] = []) {
	return posts.sort(
		(a, b) => new Date(b.data.publishDate).valueOf() - new Date(a.data.publishDate).valueOf()
	);
}
