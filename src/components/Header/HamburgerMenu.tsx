import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Logo } from "@/components/Logo";

type HamburgerMenuProps = Readonly<{ children: React.ReactNode }>;

export const HamburgerMenu = ({ children }: HamburgerMenuProps) => (
	<Sheet>
		<SheetTrigger className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "lg:hidden")}>
			<Menu />
		</SheetTrigger>
		<SheetContent side="left" className="w-64">
			<SheetHeader className="mb-2">
				<Logo className="flex items-center">
					<span className="font-bold">Ecommerce - Store</span>
				</Logo>
			</SheetHeader>
			<NavigationMenu>
				<NavigationMenuList className="flex-col items-start space-x-0">
					{children}
				</NavigationMenuList>
			</NavigationMenu>
		</SheetContent>
	</Sheet>
);
