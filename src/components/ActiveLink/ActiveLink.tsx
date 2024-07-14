"use client";

import Link from "next/link";
import { forwardRef, type ComponentProps, type Ref } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface ActiveLinkProps extends ComponentProps<typeof Link> {
	href: string;
	activeClassName?: string;
}

export const ActiveLink = forwardRef(
	(
		{ children, href, className, activeClassName, ...rest }: ActiveLinkProps,
		ref: Ref<HTMLAnchorElement>,
	) => {
		const pathname = usePathname();

		const isActive = pathname === href;

		return (
			<Link
				href={href}
				className={cn(className, isActive && activeClassName)}
				{...(isActive && { "aria-current": true })}
				{...rest}
				ref={ref}
			>
				{children}
			</Link>
		);
	},
);

ActiveLink.displayName = "ActiveLink";
