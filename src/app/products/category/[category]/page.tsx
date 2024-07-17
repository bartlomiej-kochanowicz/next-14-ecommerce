import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getCategoriesSlugs } from "@/api/getCategoriesSlugs";
import { getProductsByCategory } from "@/api/getProductsByCategory";
import { H1 } from "@/components/Heading";
import { ProductCard } from "@/components/ProductCard";
import { ProductsGrid } from "@/components/ProductsGrid";
import { toTitleCase } from "@/utlis/toTitleCase";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ROUTES } from "@/constants/routes";
import { getCategories } from "@/api/getCategories";
import { createSlug } from "@/utlis/createSlug";

type ProductsCategoryProps = {
	params: {
		category: string;
	};
};

export const generateStaticParams = async () => {
	const products = await getCategories();

	return products.map(category => ({ category: createSlug(category) }));
};

export const generateMetadata = async ({
	params: { category },
}: ProductsCategoryProps): Promise<Metadata> => {
	const categoriesSlugs = await getCategoriesSlugs();

	if (!categoriesSlugs[category]) {
		return {
			title: "Category not found",
			description: "Category not found",
		};
	}

	const title = toTitleCase(categoriesSlugs[category]);

	return {
		title,
		description: `Products in ${title} category`,
	};
};

const ProductsCategoryPage = async ({ params: { category } }: ProductsCategoryProps) => {
	const categoriesSlugs = await getCategoriesSlugs();
	const products = await getProductsByCategory(categoriesSlugs[category]);

	if (!categoriesSlugs[category]) {
		notFound();
	}

	return (
		<>
			<H1 className="capitalize">
				{categoriesSlugs[category]} ({products.length})
			</H1>
			<Breadcrumb className="my-3">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href={ROUTES.HOME}>Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink href={ROUTES.PRODUCTS.ALL}>All products</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage className="capitalize">{category}</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<ProductsGrid>
				{products.map(product => (
					<ProductCard {...product} key={product.id} />
				))}
			</ProductsGrid>
		</>
	);
};

export default ProductsCategoryPage;
