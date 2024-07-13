import { type Product } from "@/types/product";

/* type GetProducts = {
	limit?: number;
	sort?: "asc" | "desc";
}; */

export const getProducts = async (/* args?: GetProducts */): Promise<Product[]> => {
	const response = await fetch("https://fakestoreapi.com/products");

	const products = (await response.json()) as Product[];

	return products;
};
