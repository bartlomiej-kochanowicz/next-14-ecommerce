import { notFound } from "next/navigation";
import { type ComponentType } from "react";

const StaticPage = async ({ params }: { params: { filename: string } }) => {
	const Content = await import(`./${params.filename}.mdx`).then(
		(m: { default: ComponentType }) => m.default,
		() => notFound(),
	);

	return (
		<article className="prose">
			<Content />
		</article>
	);
};

export default StaticPage;
