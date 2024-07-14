import { type Product } from "@/types/product";

export const getProduct = async (id: number | string): Promise<Product> => {
	try {
		const response = await fetch(`https://fakestoreapi.com/products/${id}`);

		const product = (await response.json()) as Product;

		return product;
	} catch {
		throw new Error("Error while fetching product.");
	}
};
