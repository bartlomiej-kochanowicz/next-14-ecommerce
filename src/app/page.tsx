import { type Metadata } from "next";
import Link from "next/link";
import { H1, H2 } from "@/components/Heading";
import { getCategories } from "@/api/getCategories";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ROUTES } from "@/constants/routes";
import { categoriesIcons } from "@/constants/categoriesIcons";
import { createSlug } from "@/utlis/createSlug";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
	title: "Homepage | Next ecommerce store",
	description: "Main page with categories and products",
};

const HomePage = async () => {
	const categories = (await getCategories()).map(category => ({
		name: category,
		href: `${ROUTES.PRODUCTS.CATEGORY}/${createSlug(category)}`,
		icon: categoriesIcons[category],
	}));

	return (
		<>
			<article className="relative mt-6 flex h-[60vh] min-h-96 w-full flex-col items-center justify-end bg-foreground py-4 text-center text-background">
				<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
					<H1 className="inline-block bg-gradient-to-r from-primary-brand to-secondary-brand bg-clip-text text-8xl font-extrabold text-transparent">
						SALE
					</H1>
					<H2>up to 90%*</H2>
				</div>
				<div>
					<NavigationMenu className="hidden md:flex">
						<NavigationMenuList>
							{categories.map(({ href, icon: Icon, name }) => (
								<NavigationMenuItem key={href}>
									<Link
										href={href}
										className={cn(
											buttonVariants({ variant: "outline" }),
											"bg-foreground capitalize",
										)}
									>
										{Icon && <Icon size={20} className="mr-2" />}
										{name}
									</Link>
								</NavigationMenuItem>
							))}
						</NavigationMenuList>
					</NavigationMenu>
					<p className="mt-4 text-xs">*only for members with &quot;moja biedronka&quot; card</p>
				</div>
			</article>
			<section className="my-12 grid grid-cols-1 gap-6 md:grid-cols-3">
				<div className="text-center text-sm hover:underline">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nunc at aliquam
					tincidunt, nunc nunc ultricies nunc, nec lacinia nunc nunc at mauris.
				</div>
				<div className="text-center text-sm hover:underline">
					Sed euismod, nunc at aliquam tincidunt, nunc nunc ultricies nunc, nec lacinia nunc nunc at
					mauris.
				</div>
				<div className="text-center text-sm hover:underline">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nunc at aliquam
					tincidunt, nunc nunc ultricies nunc, nec lacinia nunc nunc at mauris.
				</div>
			</section>
		</>
	);
};

export default HomePage;
