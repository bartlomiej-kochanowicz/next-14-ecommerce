import Image from "next/image";
import { getProduct } from "@/api/getProduct";
import { getProductsByCategory } from "@/api/getProductsByCategory";
import { H2 } from "@/components/Heading";
import { ProductCard } from "@/components/ProductCard";
import { ProductsGrid } from "@/components/ProductsGrid";
import { getBase64 } from "@/utlis/getBase64";
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

type ProductPageProps = {
	params: {
		id: string;
	};
};

const ProductPage = async ({ params: { id } }: ProductPageProps) => {
	const { image, category, description, title, price, rating } = await getProduct(id);
	const blurData = await getBase64(image);
	const similarProducts = await getProductsByCategory(category, { limit: "4" });

	return (
		<>
			<span>back to category list</span>
			<section className="mb-8">
				<Card className="md:flex">
					<CardContent className="p-6">
						<Image
							className="mx-auto size-96 object-contain"
							src={image}
							alt={description}
							width={384}
							height={384}
							blurDataURL={blurData}
							placeholder="blur"
						/>
					</CardContent>
					<div className="w-auto">
						<CardHeader>
							<CardTitle className="sm:h-12 sm:overflow-hidden">{title}</CardTitle>
							<CardDescription className="capitalize">{description}</CardDescription>
						</CardHeader>
						<CardFooter className="flex items-center justify-between">
							<span className="text-lg font-bold">{formatPrice(price)}</span>
							<ProductRate {...rating} />
						</CardFooter>
					</div>
				</Card>
			</section>

			<section>
				<H2 className="mb-4">Other products in {category}</H2>
				<ProductsGrid>
					{similarProducts.map(product => (
						<ProductCard {...product} key={product.id} />
					))}
				</ProductsGrid>
			</section>
		</>
	);
};

export default ProductPage;
