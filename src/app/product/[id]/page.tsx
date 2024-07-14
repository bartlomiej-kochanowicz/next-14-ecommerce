import { getProduct } from "@/api/getProduct";

type ProductPageProps = {
	params: {
		id: string;
	};
};

const ProductPage = async ({ params: { id } }: ProductPageProps) => {
	const product = await getProduct(id);

	console.log(product);

	return <div>Product page</div>;
};

export default ProductPage;
