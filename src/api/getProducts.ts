import { type Product } from "@/types/product";
import { createApiUrl } from "@/utlis/createApiUrl";

export const getProducts = async (): Promise<Product[]> => {
	try {
		const response = await fetch(createApiUrl("/products"));

		if (!response.ok) {
			throw new Error("Error while fetching products.");
		}

		const products = (await response.json()) as Product[];

		return products;
	} catch {
		throw new Error("Error while fetching products.");
	}
};
