import { type Category } from "@/types/category";
import { createApiUrl } from "@/utlis/createApiUrl";

export const getCategories = async (): Promise<Category[]> => {
	try {
		const response = await fetch(createApiUrl("/products/categories"));

		const categories = (await response.json()) as Category[];

		return categories;
	} catch {
		throw new Error("Error while fetching categories list.");
	}
};
