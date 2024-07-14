import { type Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { ProductsGrid } from "@/components/ProductsGrid";
import { getProducts } from "@/api/getProducts";
import { H1 } from "@/components/Heading";

export const metadata: Metadata = {
	title: "Products",
	description: "Products page with list of all products",
};

const ProductsPage = async () => {
	const products = await getProducts();

	return (
		<>
			<H1 className="mb-3">All Products ({products.length})</H1>
			<ProductsGrid>
				{products.map(product => (
					<ProductCard {...product} key={product.id} />
				))}
			</ProductsGrid>
		</>
	);
};

export default ProductsPage;
