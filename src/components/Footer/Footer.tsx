import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Footer = () => {
	return (
		<footer className="flex justify-between px-3 py-2">
			<div className="flex items-center gap-2">
				<Link href={ROUTES.HOME}>
					<Image
						className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
						src="/store-logo.svg"
						alt="Store Logo"
						width={35}
						height={35}
					/>
				</Link>
				<p>© Ecommerce - Store, Cracow</p>
			</div>
			<ThemeToggle />
		</footer>
	);
};
