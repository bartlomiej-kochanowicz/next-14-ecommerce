import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const roboto = Roboto({
	weight: ["300", "400", "700"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		template: "%s  | Next ecommerce store",
		default: "Next ecommerce store",
	},
	description: "Nice ecommerce store built with Next.js",
};

const Root = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => (
	<html lang="en" suppressHydrationWarning>
		<body className={cn("font-sans min-h-screen bg-background antialiased", roboto.className)}>
			<NextTopLoader color="hsl(var(--foreground))" showSpinner={false} />
			<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
				<Header />
				<main className="mx-auto mt-16 max-w-screen-xl px-5 py-3">{children}</main>
				<Footer />
			</ThemeProvider>
		</body>
	</html>
);

export default Root;
