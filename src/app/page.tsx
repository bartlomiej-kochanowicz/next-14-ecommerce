import { type Metadata } from "next";
import { H1 } from "@/components/Heading";

export const metadata: Metadata = {
	title: "Homepage | Next ecommerce store",
	description: "Main page with categories and products",
};

const HomePage = () => {
	return (
		<>
			<article className="mt-6 w-full bg-foreground py-10 text-white">
				<H1 className="text-center text-6xl">SALE</H1>
				<p className="text-center">up to 90%</p>
			</article>
			<section className="my-12 grid grid-cols-1 gap-6 md:grid-cols-3">
				<div className="text-center text-sm hover:underline">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nunc at aliquam
					tincidunt, nunc nunc ultricies nunc, nec lacinia nunc nunc at mauris.
				</div>
				<div className="text-center text-sm hover:underline">
					Sed euismod, nunc at aliquam tincidunt, nunc nunc ultricies nunc, nec lacinia nunc nunc at
					mauris.
				</div>
				<div className="text-center text-sm hover:underline">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nunc at aliquam
					tincidunt, nunc nunc ultricies nunc, nec lacinia nunc nunc at mauris.
				</div>
			</section>
		</>
	);
};

export default HomePage;
