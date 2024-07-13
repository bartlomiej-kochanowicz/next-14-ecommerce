import { type Category } from "@/types/category";

export const getCategoriesList = async (): Promise<Category[]> => {
	try {
		const response = await fetch("https://fakestoreapi.com/products/categories");

		const categories = (await response.json()) as Category[];

		return categories;
	} catch {
		throw new Error("Error while fetching categories list.");
	}
};
