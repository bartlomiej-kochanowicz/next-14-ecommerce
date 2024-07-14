import { createElement, type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const Heading = Object.fromEntries(
	new Map(
		(
			[
				["h1", "text-4xl font-extrabold"],
				["h2", "text-3xl font-bold"],
				["h3", "text-lg font-bold"],
				["h4", "text-base font-bold"],
				["h5", "text-base"],
				["h6", "text-base"],
			] as const
		).map(([level, className]) => [
			level.toUpperCase(),
			({ className: topClassName, ...rest }: HTMLAttributes<HTMLHeadingElement>) =>
				createElement(level, {
					className: twMerge(className, topClassName),
					...rest,
				}),
		]),
	),
) as unknown as Record<
	"H1" | "H2" | "H3" | "H4" | "H5" | "H6",
	(props: HTMLAttributes<HTMLHeadingElement>) => JSX.Element
>;
