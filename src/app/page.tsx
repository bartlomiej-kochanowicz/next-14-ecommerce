import { type Metadata } from "next";
import { getProducts } from "@/api/getProducts";
import { ProductCard } from "@/components/ProductCard";
import { ProductsGrid } from "@/components/ProductsGrid";

export const metadata: Metadata = {
	title: "Homepage | Next ecommerce store",
	description: "Main page with categories and products",
};

const HomePage = async () => {
	const products = await getProducts();

	return (
		<ProductsGrid>
			{products.map(product => (
				<ProductCard {...product} key={product.id} />
			))}
		</ProductsGrid>
	);
};

export default HomePage;
