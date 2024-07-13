import { getCategoriesSlugs } from "@/api/getCategoriesSlugs";
import { getProductsByCategory } from "@/api/getProductsByCategory";
import { H1 } from "@/components/Heading";
import { ProductCard } from "@/components/ProductCard";
import { ProductsGrid } from "@/components/ProductsGrid";

type ProductsCategoryProps = {
	params: {
		category: string;
	};
};

const ProductsCategory = async ({ params: { category } }: ProductsCategoryProps) => {
	const categoriesSlugs = await getCategoriesSlugs();
	const products = await getProductsByCategory(categoriesSlugs[category]);

	return (
		<>
			<H1 className="mb-4 capitalize">{categoriesSlugs[category]}</H1>
			<ProductsGrid>
				{products.map(product => (
					<ProductCard {...product} key={product.id} />
				))}
			</ProductsGrid>
		</>
	);
};

export default ProductsCategory;
