import { getProducts } from "@/api/getProducts";
import { ProductCard } from "@/components/ProductCard";

const Home = async () => {
	const products = await getProducts();

	return (
		<section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{products.map(product => (
				<ProductCard {...product} key={product.id} />
			))}
		</section>
	);
};

export default Home;
