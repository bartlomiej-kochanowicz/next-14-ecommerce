import { getProduct } from "@/api/getProduct";
import { getProductsByCategory } from "@/api/getProductsByCategory";
import { H2 } from "@/components/Heading";
import { ProductCard } from "@/components/ProductCard";
import { ProductsGrid } from "@/components/ProductsGrid";

type ProductPageProps = {
	params: {
		id: string;
	};
};

const ProductPage = async ({ params: { id } }: ProductPageProps) => {
	const product = await getProduct(id);
	const similarProducts = await getProductsByCategory(product.category, { limit: "4" });

	return (
		<>
			<section>Product page</section>
			<section>
				<H2 className="mb-4">Other products in {product.category}</H2>
				<ProductsGrid>
					{similarProducts.map(product => (
						<ProductCard {...product} key={product.id} />
					))}
				</ProductsGrid>
			</section>
		</>
	);
};

export default ProductPage;
