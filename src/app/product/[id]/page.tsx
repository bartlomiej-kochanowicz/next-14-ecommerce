import { getProduct } from "@/api/getProduct";

type ProductPageProps = {
	params: {
		id: string;
	};
};

const ProductPage = async ({ params: { id } }: ProductPageProps) => {
	const product = await getProduct(id);

	console.log(product);

	return (
		<>
			<section>Product page</section>
			<section>similar in this category</section>
		</>
	);
};

export default ProductPage;
