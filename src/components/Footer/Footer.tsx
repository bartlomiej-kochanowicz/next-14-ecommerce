import { ThemeToggle } from "@/components/ThemeToggle";
import { Logo } from "@/components/Logo";

export const Footer = () => {
	return (
		<footer className="mx-auto flex max-w-screen-xl justify-between px-5 py-3">
			<div className="flex items-center gap-2">
				<Logo className="mr-2" />
				<p>© 2024 Ecommerce - Store, Cracow</p>
			</div>
			<ThemeToggle />
		</footer>
	);
};
