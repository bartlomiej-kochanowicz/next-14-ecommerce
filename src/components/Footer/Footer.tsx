import { ThemeToggle } from "@/components/ThemeToggle";
import { Logo } from "@/components/Logo";

export const Footer = () => {
	return (
		<footer className="flex justify-between px-3 py-2">
			<div className="flex items-center gap-2">
				<Logo className="mr-2" />
				<p>© Ecommerce - Store, Cracow</p>
			</div>
			<ThemeToggle />
		</footer>
	);
};
