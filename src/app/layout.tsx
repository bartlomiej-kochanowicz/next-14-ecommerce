import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
	<html lang="en" suppressHydrationWarning>
		<body className={cn("font-sans min-h-screen bg-background antialiased", roboto.className)}>
			<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
				<Header />
				{children}
				<Footer />
			</ThemeProvider>
		</body>
	</html>
);

export default Root;
