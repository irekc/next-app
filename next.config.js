/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["ts", "tsx", "mdx"],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
	redirects: async () => {
		return [
			{
				source: "/products",
				destination: "/products/1",
				permanent: true,
			},
			{
				source: "/category/t-shirts",
				destination: "/category/t-shirts/1",
				permanent: false,
			},
		];
	},
};
const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
// module.exports = nextConfig;
