import Link from "next/link";
import Image from "next/image";
import { User, ShoppingBasket } from "lucide-react";
import React from "react";
import slugify from "slugify";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { HEADER } from "@/constants/header";
import { ROUTES } from "@/constants/routes";
import { Button } from "@/components/ui/button";
import { getCategoriesList } from "@/api/getCategoriesList";
import { cn } from "@/lib/utils";
import { categoriesIcons } from "@/constants/categoriesIcons";

export const Header = async () => {
	const categories = await getCategoriesList();

	const navigationMenuList: { name: string; href: string; icon?: React.ElementType }[] = [
		...categories.map(category => ({
			name: category,
			href: `/products/category/${slugify(category, {
				replacement: "-",
				remove: /'/g,
			})}`,
			icon: categoriesIcons[category],
		})),
		...HEADER,
	];

	return (
		<header className="flex justify-between px-3 py-2">
			<NavigationMenu>
				<Link href={ROUTES.HOME}>
					<Image
						className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
						src="/store-logo.svg"
						alt="Store Logo"
						width={35}
						height={35}
						priority
					/>
				</Link>
				<NavigationMenuList className="ml-4">
					{navigationMenuList.map(({ name, href, icon: Icon }) => (
						<NavigationMenuItem key={name}>
							<Link href={href} legacyBehavior passHref>
								<NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "capitalize")}>
									{Icon && <Icon size={20} className="mr-2" />}
									{name}
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					))}
				</NavigationMenuList>
			</NavigationMenu>

			<div className="flex gap-2">
				<Button variant="ghost" size="icon">
					<ShoppingBasket />
				</Button>
				<Button variant="ghost" size="icon">
					<User />
				</Button>
			</div>
		</header>
	);
};
