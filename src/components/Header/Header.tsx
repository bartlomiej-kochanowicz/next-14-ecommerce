import Link from "next/link";
import Image from "next/image";
import { User, ShoppingBasket } from "lucide-react";
import {
	NavigationMenu,
	NavigationMenuContent,
	// NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
	// NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { HEADER } from "@/constants/header";
import { ROUTES } from "@/constants/routes";
import { Button } from "@/components/ui/button";

export const Header = () => (
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
				<NavigationMenuItem>
					<NavigationMenuTrigger>Categories</NavigationMenuTrigger>
					<NavigationMenuContent>
						<NavigationMenuLink>Link</NavigationMenuLink>
					</NavigationMenuContent>
				</NavigationMenuItem>
				{HEADER.map(({ name, href }) => (
					<NavigationMenuItem key={name}>
						<Link href={href} legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
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
