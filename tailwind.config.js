export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				productsans: ['"Product Sans"', "sans-serif"],
			},
			colors: {
				primary: "#0b57d0",
				grayPrimary: "#1f1f1f",
				graySecondary: "#444746",
			},
		},
	},
	plugins: [],
};
