import { type Product } from "@/types/product";

/* type GetProducts = {
	limit?: number;
	sort?: "asc" | "desc";
}; */

export const getProducts = async (/* args?: GetProducts */): Promise<Product[]> => {
	try {
		const response = await fetch("https://fakestoreapi.com/products");

		const products = (await response.json()) as Product[];

		return products;
	} catch {
		throw new Error("Error while fetching products.");
	}
};
