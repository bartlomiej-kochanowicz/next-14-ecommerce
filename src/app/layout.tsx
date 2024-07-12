import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const roboto = Roboto({
	weight: ["300", "400", "700"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Next 13 ecommerce store",
	description: "Nice ecommerce store built with Next.js",
};

const Root = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => (
	<html lang="en">
		<body className={cn("min-h-screen bg-background font-sans antialiased", roboto.className)}>
			{children}
		</body>
	</html>
);

export default Root;
