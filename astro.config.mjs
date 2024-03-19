import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import icon from "astro-icon";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
	site: "https://jakepixl.dev/",
	integrations: [
		tailwind(),
		prefetch(),
		mdx(),
		sitemap(),
		svelte(),
		icon({
			include: {
				mdi: ["*"],
				ic: ["*"],
				"simple-icons": ["*"],
				"fa6-brands": ["*"],
			},
		}),
	],
	markdown: {
		remarkPlugins: [remarkReadingTime],
	},
	vite: {
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"],
		},
	},
});
