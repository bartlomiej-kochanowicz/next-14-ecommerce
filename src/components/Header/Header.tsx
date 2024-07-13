import { User, ShoppingBasket } from "lucide-react";
import React from "react";
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { HamburgerMenu } from "@/components/Header/HamburgerMenu";
import { NavigationItems } from "@/components/Header/NavigationItems";
import { Logo } from "@/components/Logo";

export const Header = () => (
	<header className="mx-auto flex max-w-screen-xl justify-between px-5 py-3">
		<HamburgerMenu>
			<NavigationItems hambugerMenu />
		</HamburgerMenu>
		<NavigationMenu className="hidden lg:flex">
			<Logo priority className="mr-2" />
			<NavigationMenuList>
				<NavigationItems />
			</NavigationMenuList>
		</NavigationMenu>

		<div className="flex gap-2">
			<Button variant="ghost" size="icon" aria-label="Basket">
				<ShoppingBasket />
			</Button>
			<Button variant="ghost" size="icon" aria-label="Profile">
				<User />
			</Button>
		</div>
	</header>
);
