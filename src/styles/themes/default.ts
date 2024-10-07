export const defaultTheme = {
	colors: {
		white: "#FFF",

		"gray-100": "#FAFAFA",
		"gray-200": "#EFF0F0",
		"gray-300": "#DDDEDF",
		"gray-400": "#B9BBBC",
		"gray-500": "#5C6265",
		"gray-600": "#333638",
		"gray-700": "#1B1D1E",

		"red-dark": "#BF3B44",
		"red-mid": "#F3BABD",
		"red-light": "#F4E6E7",

		"green-dark": "#639339",
		"green-mid": "#CBE4B4",
		"green-light": "#E5F0DB",
	},

	font: {
		family: {
			regular: "NunitoSans_400Regular",
			bold: "NunitoSans_700Bold",
		},
		size: {
			xs: 12,
			sm: 14,
			base: 16,
			lg: 18,
			xl: 20,
			"2xl": 24,
			"3xl": 30,
		},
	},
} as const;

export type ThemeType = typeof defaultTheme;
