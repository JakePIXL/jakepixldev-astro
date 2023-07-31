import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export const get = async () => {
	const posts = await getCollection("posts");

	return rss({
		title: "JakePIXL's Dev Blog",
		description: "A personal blog for Jake 'PIXL' Evans.",
		site: import.meta.env.SITE,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.publishDate,
			link: `posts/${post.slug}`,
		})),
	});
};
