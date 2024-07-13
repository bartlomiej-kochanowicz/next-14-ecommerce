import { type Category } from "@/types/category";
import { type Product } from "@/types/product";

export const getProductsByCategory = async (category: Category): Promise<Product[]> => {
	try {
		const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);

		const products = (await response.json()) as Product[];

		return products;
	} catch {
		throw new Error("Error while fetching products.");
	}
};
