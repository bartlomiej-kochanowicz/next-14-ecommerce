import { getCategories } from "@/api/getCategories";
import { type Category } from "@/types/category";
import { createSlug } from "@/utlis/createSlug";

export const getCategoriesSlugs = async (): Promise<Record<string, Category>> => {
	const categories = await getCategories();

	return categories.reduce(
		(acc, category) => ({
			...acc,
			[createSlug(category)]: category,
		}),
		{},
	);
};
