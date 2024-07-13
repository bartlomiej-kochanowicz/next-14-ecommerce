import { Menu } from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Logo } from "@/components/Logo";

type HamburgerMenuProps = Readonly<{ children: React.ReactNode }>;

export const HamburgerMenu = ({ children }: HamburgerMenuProps) => (
	<Sheet>
		<SheetTrigger
			className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "lg:hidden")}
			aria-label="Navigation menu"
		>
			<Menu />
		</SheetTrigger>
		<SheetContent side="left" className="w-64">
			<SheetHeader className="mb-2">
				<SheetTitle>
					<Logo className="flex items-center">
						<span className="font-bold">Ecommerce - Store</span>
					</Logo>
				</SheetTitle>
				<SheetDescription className="hidden">Navigation menu</SheetDescription>
			</SheetHeader>
			<NavigationMenu>
				<NavigationMenuList className="flex-col items-start space-x-0">
					{children}
				</NavigationMenuList>
			</NavigationMenu>
		</SheetContent>
	</Sheet>
);
