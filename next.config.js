/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['img.icons8.com', 'localhost', 'emilyskitchenstrapi.herokuapp.com'],
	},
	env: {
		API_URL: process.env.API_URL,
	},
}

module.exports = nextConfig
