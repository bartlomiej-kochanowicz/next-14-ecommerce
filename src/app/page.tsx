import { getProducts } from "@/api/getProducts";
import { ProductCard } from "@/components/ProductCard";
import { ProductsGrid } from "@/components/ProductsGrid";

const Home = async () => {
	const products = await getProducts();

	return (
		<ProductsGrid>
			{products.map(product => (
				<ProductCard {...product} key={product.id} />
			))}
		</ProductsGrid>
	);
};

export default Home;
