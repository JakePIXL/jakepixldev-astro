/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ["Roboto Mono", "monospace"],
			},
		},
	},
	plugins: [
		require("daisyui"),
	],
};
