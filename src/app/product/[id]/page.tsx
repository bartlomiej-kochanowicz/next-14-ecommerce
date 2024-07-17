import { type Metadata } from "next";
import { Frown } from "lucide-react";
import { getProduct } from "@/api/getProduct";
import { getProductsByCategory } from "@/api/getProductsByCategory";
import { H1, H2 } from "@/components/Heading";
import { ProductCard } from "@/components/ProductCard";
import { ProductsGrid } from "@/components/ProductsGrid";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { formatPrice } from "@/helpers/formatPrice";
import { ProductRate } from "@/components/ProductRate";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ROUTES } from "@/constants/routes";
import { createSlug } from "@/utlis/createSlug";
import { getProducts } from "@/api/getProducts";
import { ResponsiveRemoteImage } from "@/components/ResponsiveRemoteImage";

type ProductPageProps = {
	params: {
		id: string;
	};
};

export const generateStaticParams = async () => {
	const products = await getProducts();

	return products.map(({ id }) => ({ id: String(id) }));
};

export const generateMetadata = async ({ params: { id } }: ProductPageProps): Promise<Metadata> => {
	const product = await getProduct(id);

	if (!product) {
		return {
			title: "Product not found",
			description: "Product not found",
		};
	}

	const { description, title } = product;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			images: [
				{
					url: product.image,
					alt: description,
				},
			],
		},
	};
};

const ProductPage = async ({ params: { id } }: ProductPageProps) => {
	const product = await getProduct(id);

	if (!product) {
		return (
			<div className="mt-12 flex justify-center gap-4">
				<H1>Product not found</H1>
				<Frown size={48} />
			</div>
		);
	}

	const { image, category, description, title, price, rating } = product;

	const similarProducts = await getProductsByCategory(category, { limit: "4" });

	return (
		<>
			<Breadcrumb className="pb-3">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href={ROUTES.PRODUCTS.ALL}>All products</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink
							href={`${ROUTES.PRODUCTS.CATEGORY}/${createSlug(category)}`}
							className="capitalize"
						>
							{category}
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>{title}</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<Card className="mb-8 md:flex" as="article">
				<CardContent className="p-6">
					<ResponsiveRemoteImage
						className="mx-auto h-72 md:size-80 lg:size-96"
						sizes="(min-width: 1040px) 384px, (min-width: 780px) 320px, calc(100vw - 90px)"
						src={image}
						alt={description}
					/>
				</CardContent>
				<div className="w-auto">
					<CardHeader>
						<CardTitle className="sm:h-12 sm:overflow-hidden" as="h1">
							{title}
						</CardTitle>
						<CardDescription className="capitalize">{description}</CardDescription>
					</CardHeader>
					<CardFooter className="flex items-center justify-between">
						<span className="text-lg font-bold">{formatPrice(price)}</span>
						<ProductRate {...rating} />
					</CardFooter>
				</div>
			</Card>

			<aside>
				<H2 className="mb-4">Other products in {category}</H2>
				<ProductsGrid>
					{similarProducts.map(product => (
						<ProductCard {...product} key={product.id} />
					))}
				</ProductsGrid>
			</aside>
		</>
	);
};

export default ProductPage;
