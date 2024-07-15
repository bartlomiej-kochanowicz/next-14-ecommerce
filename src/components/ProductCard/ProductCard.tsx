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
import { formatPrice } from "@/helpers/formatPrice";
import { ROUTES } from "@/constants/routes";
import { ProductRate } from "@/components/ProductRate";
import { ResponsiveRemoteImage } from "@/components/ResponsiveRemoteImage";

export const ProductCard = async ({
	title,
	description,
	image,
	category,
	rating,
	price,
	id,
}: Product) => (
	<Link href={`${ROUTES.PRODUCT}/${id}`}>
		<Card className="group transition hover:border-neutral-400">
			<CardHeader>
				<CardTitle as="h2" className="sm:h-12 sm:overflow-hidden">
					{title}
				</CardTitle>
				<CardDescription className="capitalize">{category}</CardDescription>
			</CardHeader>
			<CardContent>
				<ResponsiveRemoteImage
					className="h-60"
					sizes="(min-width: 1280px) 248px, (min-width: 1040px) calc(33.18vw - 72px), (min-width: 640px) calc(50vw - 78px), calc(100vw - 90px)"
					imageClassName="transition duration-500 group-hover:scale-105"
					src={image}
					alt={description}
				/>
			</CardContent>
			<CardFooter className="flex items-center justify-between">
				<span className="text-lg font-bold">{formatPrice(price)}</span>
				<ProductRate {...rating} />
			</CardFooter>
		</Card>
	</Link>
);
