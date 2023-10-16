/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			keyframes: {
				"fade-in-down": {
					"0%": {
						transform: "translate(0, 0)",
					},
					"50%": {
						transform: "translate(100px, 100px)",
					},
					"100%": {
						transform: "translate(0, 0)",
					},
				},
				"move-to-bottom-left": {
					"0%": {
						transform: "translate(0, 0)",
					},
					"50%": {
						transform: "translate(-100vw, 100vh)",
					},
					"100%": {
						transform: "translate(0, 0)",
					},
				},
				"right-to-left": {
					"0%": {
						transform: "translate(0, 0)",
					},
					"50%": {
						transform: "translate(-600px, 0)",
					},
					"100%": {
						transform: "translate(0, 0)",
					},
				},
				"left-to-right": {
					"0%": {
						transform: "translate(0, 0)",
					},
					"50%": {
						transform: "translate(100vw, 0)",
					},
					"100%": {
						transform: "translate(0, 0)",
					},
				},
			},
			animation: {
				move: "fade-in-down 44s infinite",
				rightLeft: "right-to-left 20s infinite",
				leftRight: "left-to-right 30s infinite",
				bottomLeft: "move-to-bottom-left 12s infinite",
			},
			fontFamily: {
				sans: ["var(--font-opensans)"],
			},
		},
	},
	plugins: [],
};
