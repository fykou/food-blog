/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		deviceSizes: [320, 420, 768, 1024, 1200],
		loader: 'default',
		domains: [
			'img.icons8.com',
			'localhost',
			'em-strapi-bucket.s3.eu-north-1.amazonaws.com',
			'res.cloudinary.com',
			'dummyimage.com',
		],
	},
	env: {
		API_URL: process.env.API_URL,
	},
}

module.exports = nextConfig
