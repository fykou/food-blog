module.exports = {
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: ['./components/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
		options: {
			safelist: [],
		},
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				// primary: '#5c6ac4',
				secondary: '#f5f2f0',
			},
		},
	},
	variants: {},
	plugins: [require('@tailwindcss/typography')],
}
