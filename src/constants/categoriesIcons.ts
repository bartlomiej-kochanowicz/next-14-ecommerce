import { BadgePercent, GemIcon, Laptop, Shirt, type LucideIcon } from "lucide-react";
import { type Category } from "@/types/category";

export const categoriesIcons: Record<Category, LucideIcon> = {
	electronics: Laptop,
	jewelery: GemIcon,
	"men's clothing": Shirt,
	"women's clothing": BadgePercent,
};
