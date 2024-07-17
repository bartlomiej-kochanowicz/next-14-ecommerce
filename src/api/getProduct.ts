import { type Product } from "@/types/product";
import { createApiUrl } from "@/utlis/createApiUrl";

export const getProduct = async (id: number | string): Promise<Product | null> => {
	try {
		const response = await fetch(createApiUrl(`/products/${id}`));

		if (!response.ok) {
			throw new Error("Error while fetching product.");
		}

		const product = (await response.json()) as Product;

		return product;
	} catch {
		return null;
	}
};
