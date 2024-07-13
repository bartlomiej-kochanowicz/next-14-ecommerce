import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

type LogoProps = Readonly<{
	children?: React.ReactNode;
	className?: string;
	priority?: boolean;
	size?: number;
}>;

export const Logo = ({ children, className, priority = false, size = 35 }: LogoProps) => (
	<Link href={ROUTES.HOME} className={className}>
		<Image
			className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
			src="/store-logo.svg"
			alt="Store Logo"
			width={size}
			height={size}
			priority={priority}
		/>
		{children}
	</Link>
);
