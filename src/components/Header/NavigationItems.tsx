import Link from "next/link";
import { type LucideIcon } from "lucide-react";
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

type NavigationItemsProps = {
	hambugerMenu?: boolean;
};

export const NavigationItems = async ({ hambugerMenu }: NavigationItemsProps) => {
	const categories = await getCategories();

	const navigationMenuList: { name: string; href: string; icon?: LucideIcon }[] = [
		...categories.map(category => ({
			name: category,
			href: `/products/category/${createSlug(category)}`,
			icon: categoriesIcons[category],
		})),
		...HEADER,
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
