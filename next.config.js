/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack5: false,
	reactStrictMode: true,
	images: {
		domains: [
			'img.icons8.com',
			'localhost',
			'em-strapi-bucket.s3.eu-north-1.amazonaws.com',
			'res.cloudinary.com',
		],
	},
	env: {
		API_URL: process.env.API_URL,
	},
}

module.exports = nextConfig
