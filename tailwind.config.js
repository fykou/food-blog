const defaultTheme = require('tailwindcss/defaultTheme')

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
				m_text_dark: '#1A1A1A',
				m_text_dark_hover: '#1A1A1A',
				m_text_light: '#FFFFFF',
				m_text_light_hover: '#FFFFFF',
				m_dark: '#1D1B1E',
				m_light: '#EDEFF1',
				m_primary: '#D2DDBA',
				m_secondary: '#BFAE8F',
				m_tertiary: '#8A949D',
				m_blue: '#6A7D97',
			},
			fontFamily: {
				serif: ['Lora', ...defaultTheme.fontFamily.serif],
			},
			screens: {
				pc: '1920px', // 1920px
				laptop: '1440px', // 1440px
				tablet: '1024px', // 1024px
				mobile: '768px', // 768px
				smobile: '640px', // 640px
			},
		},
	},
	variants: {},
	plugins: [require('@tailwindcss/typography')],
}
