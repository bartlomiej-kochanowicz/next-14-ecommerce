import { type ApiListParams } from "@/types/apiListParams";
import { type Category } from "@/types/category";
import { type Product } from "@/types/product";
import { createApiUrl } from "@/utlis/createApiUrl";

export const getProductsByCategory = async (
	category: Category,
	params?: ApiListParams,
): Promise<Product[]> => {
	try {
		const response = await fetch(createApiUrl(`/products/category/${category}`, params));

		const products = (await response.json()) as Product[];

		return products;
	} catch {
		throw new Error("Error while fetching products by category.");
	}
};
