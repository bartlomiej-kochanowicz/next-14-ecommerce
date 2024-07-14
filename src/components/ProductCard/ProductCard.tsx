import Image from "next/image";
import Link from "next/link";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { type Product } from "@/types/product";
import { getBase64 } from "@/utlis/getBase64";

import { formatPrice } from "@/helpers/formatPrice";
import { ROUTES } from "@/constants/routes";
import { ProductRate } from "@/components/ProductRate";

export const ProductCard = async ({
	title,
	description,
	image,
	category,
	rating,
	price,
	id,
}: Product) => {
	const blurData = await getBase64(image);

	return (
		<Link href={`${ROUTES.PRODUCT}/${id}`}>
			<Card className="group transition hover:border-neutral-400">
				<CardHeader>
					<CardTitle className="sm:h-12 sm:overflow-hidden">{title}</CardTitle>
					<CardDescription className="capitalize">{category}</CardDescription>
				</CardHeader>
				<CardContent className="overflow-hidden">
					<Image
						className="mx-auto h-60 object-contain transition duration-500 group-hover:scale-105"
						src={image}
						alt={description}
						width={180}
						height={240}
						blurDataURL={blurData}
						placeholder="blur"
					/>
				</CardContent>
				<CardFooter className="flex items-center justify-between">
					<span className="text-lg font-bold">{formatPrice(price)}</span>
					<ProductRate {...rating} />
				</CardFooter>
			</Card>
		</Link>
	);
};
