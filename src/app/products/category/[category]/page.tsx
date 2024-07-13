import { type Metadata } from "next";
import { getCategoriesSlugs } from "@/api/getCategoriesSlugs";
import { getProductsByCategory } from "@/api/getProductsByCategory";
import { H1 } from "@/components/Heading";
import { ProductCard } from "@/components/ProductCard";
import { ProductsGrid } from "@/components/ProductsGrid";
import { toTitleCase } from "@/utlis/toTitleCase";

type ProductsCategoryProps = {
	params: {
		category: string;
	};
};
export const generateMetadata = async ({
	params: { category },
}: ProductsCategoryProps): Promise<Metadata> => {
	const categoriesSlugs = await getCategoriesSlugs();

	const title = toTitleCase(categoriesSlugs[category]);

	return {
		title,
		description: `Products in ${title} category`,
	};
};

const ProductsCategoryPage = async ({ params: { category } }: ProductsCategoryProps) => {
	const categoriesSlugs = await getCategoriesSlugs();
	const products = await getProductsByCategory(categoriesSlugs[category]);

	return (
		<>
			<H1 className="mb-4 capitalize">
				{categoriesSlugs[category]} ({products.length})
			</H1>
			<ProductsGrid>
				{products.map(product => (
					<ProductCard {...product} key={product.id} />
				))}
			</ProductsGrid>
		</>
	);
};

export default ProductsCategoryPage;
