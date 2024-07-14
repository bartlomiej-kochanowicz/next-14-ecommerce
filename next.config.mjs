import withMdx from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["fakestoreapi.com"],
	},
	pageExtensions: ["mdx", "ts", "tsx"],
};

export default withMdx()(nextConfig);
