export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				productsans: ['"Product Sans"', "sans-serif"],
			},
			colors: {
				primary: "#0b57d0",
				"primary-100": "#C2E7FE",
				grayPrimary: "#1f1f1f",
				graySecondary: "#444746",
			},
			gridTemplateColumns: { "1/5": "1fr 5fr" },
		},
	},
	plugins: [],
};
