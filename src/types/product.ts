import { type Category } from "@/types/category";

export type Product = {
	id: number;
	title: string;
	price: number;
	description: string;
	category: Category;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
};
