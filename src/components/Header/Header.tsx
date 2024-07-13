import { User, ShoppingBasket } from "lucide-react";
import React from "react";
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { HamburgerMenu } from "@/components/Header/HamburgerMenu";
import { NavigationItems } from "@/components/Header/NavigationItems";
import { Logo } from "@/components/Logo";

export const Header = () => {
	const navigationItems = <NavigationItems />;

	return (
		<header className="flex justify-between px-3 py-2">
			<HamburgerMenu>{navigationItems}</HamburgerMenu>
			<NavigationMenu className="hidden lg:flex">
				<Logo priority className="mr-2" />
				<NavigationMenuList>{navigationItems}</NavigationMenuList>
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
