import Link from "next/link";
import { Earth, type LucideIcon } from "lucide-react";
import {
	NavigationMenuItem,
	NavigationMenuLink,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { getCategories } from "@/api/getCategories";
import { HEADER } from "@/constants/header";
import { categoriesIcons } from "@/constants/categoriesIcons";
import { cn } from "@/lib/utils";
import { createSlug } from "@/utlis/createSlug";
import { SheetClose } from "@/components/ui/sheet";
import { ROUTES } from "@/constants/routes";

type NavigationItemsProps = {
	hambugerMenu?: boolean;
};

export const NavigationItems = async ({ hambugerMenu }: NavigationItemsProps) => {
	const categories = await getCategories();

	const [allProducts, ...restHeader] = HEADER;

	const navigationMenuList: { name: string; href: string; icon?: LucideIcon }[] = [
		{ ...allProducts, icon: Earth },
		...categories.map(category => ({
			name: category,
			href: `${ROUTES.PRODUCTS.CATEGORY}${createSlug(category)}`,
			icon: categoriesIcons[category],
		})),
		...restHeader,
	];

	return (
		<>
			{navigationMenuList.map(({ name, href, icon: Icon }) => {
				if (hambugerMenu) {
					return (
						<NavigationMenuItem key={name}>
							<SheetClose asChild>
								<Link href={href} className={cn(navigationMenuTriggerStyle(), "capitalize")}>
									{Icon && <Icon size={20} className="mr-2" />}
									{name}
								</Link>
							</SheetClose>
						</NavigationMenuItem>
					);
				}

				return (
					<NavigationMenuItem key={name}>
						<Link href={href} legacyBehavior passHref>
							<NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "capitalize")}>
								{Icon && <Icon size={20} className="mr-2" />}
								{name}
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				);
			})}
		</>
	);
};
