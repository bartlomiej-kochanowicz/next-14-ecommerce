import Image from "next/image";
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

export const ProductCard = async ({ title, description, image }: Product) => {
	const blurData = await getBase64(image);

	return (
		<Card>
			<CardHeader>
				<CardTitle className="sm:h-12 sm:overflow-hidden">{title}</CardTitle>
				<CardDescription className="truncate">{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<Image
					className="mx-auto max-h-60 w-auto"
					src={image}
					alt={description}
					width={180}
					height={240}
					blurDataURL={blurData}
					placeholder="blur"
				/>
			</CardContent>
			<CardFooter className="flex justify-between">footer</CardFooter>
		</Card>
	);
};
