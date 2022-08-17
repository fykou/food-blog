module.exports = {
	purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
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
