import Link from "next/link";
import { Earth, type LucideIcon } from "lucide-react";
import { NavigationMenuItem, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { getCategories } from "@/api/getCategories";
import { HEADER } from "@/constants/header";
import { categoriesIcons } from "@/constants/categoriesIcons";
import { cn } from "@/lib/utils";
import { createSlug } from "@/utlis/createSlug";
import { SheetClose } from "@/components/ui/sheet";
import { ROUTES } from "@/constants/routes";
import { ActiveLink } from "@/components/ActiveLink/ActiveLink";

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
			href: `${ROUTES.PRODUCTS.CATEGORY}/${createSlug(category)}`,
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
								<ActiveLink
									href={href}
									className={cn(navigationMenuTriggerStyle(), "capitalize")}
									activeClassName="font-bold"
								>
									{Icon && <Icon size={20} className="mr-2" />}
									{name}
								</ActiveLink>
							</SheetClose>
						</NavigationMenuItem>
					);
				}

				return (
					<NavigationMenuItem key={name}>
						<Link href={href} legacyBehavior passHref>
							<ActiveLink
								href={href}
								className={cn(navigationMenuTriggerStyle(), "capitalize")}
								activeClassName="font-bold"
							>
								{Icon && <Icon size={20} className="mr-2" />}
								{name}
							</ActiveLink>
						</Link>
					</NavigationMenuItem>
				);
			})}
		</>
	);
};
