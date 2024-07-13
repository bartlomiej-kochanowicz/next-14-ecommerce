import slugify from "slugify";
import { type Category } from "@/types/category";

export const createSlug = (category: Category) =>
	slugify(category, {
		replacement: "-",
		remove: /'/g,
	});
