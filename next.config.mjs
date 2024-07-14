import withMdx from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "fakestoreapi.com",
			},
		],
	},
	pageExtensions: ["mdx", "ts", "tsx"],
};

export default withMdx()(nextConfig);
