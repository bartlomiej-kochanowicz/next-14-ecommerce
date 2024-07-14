import { Menu } from "lucide-react";
import {
	Sheet,
	SheetClose,
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
import { ThemeToggle } from "@/components/ThemeToggle";

type HamburgerMenuProps = Readonly<{ children: React.ReactNode }>;

export const HamburgerMenu = ({ children }: HamburgerMenuProps) => (
	<Sheet>
		<SheetTrigger
			className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "lg:hidden")}
			aria-label="Navigation menu"
		>
			<Menu />
		</SheetTrigger>
		<SheetContent side="left" className="flex w-72 flex-col items-start justify-between">
			<div>
				<SheetHeader className="mb-2">
					<SheetTitle>
						<SheetClose asChild>
							<Logo className="flex items-center">
								<span className="font-bold">Ecommerce - Store</span>
							</Logo>
						</SheetClose>
					</SheetTitle>

					<SheetDescription className="hidden">Navigation menu</SheetDescription>
				</SheetHeader>
				<NavigationMenu>
					<NavigationMenuList className="flex-col items-start space-x-0">
						{children}
					</NavigationMenuList>
				</NavigationMenu>
			</div>
			<ThemeToggle className="self-end" />
		</SheetContent>
	</Sheet>
);
