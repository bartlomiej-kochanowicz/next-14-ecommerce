import { type Product } from "@/types/product";
import { createApiUrl } from "@/utlis/createApiUrl";

export const getProduct = async (id: number | string): Promise<Product> => {
	try {
		const response = await fetch(createApiUrl(`/products/${id}`));

		const product = (await response.json()) as Product;

		return product;
	} catch {
		throw new Error("Error while fetching product.");
	}
};
