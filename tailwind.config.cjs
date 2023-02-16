/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage:{
				'noise': "URL('./public/noise.png')",
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
	daisyui: {
		styled: false,
		themes: true,
		base: false,
		utils: true,
		logs: true,
		rtl: false,
		prefix: "",
		darkTheme: "light",
	  },
}
