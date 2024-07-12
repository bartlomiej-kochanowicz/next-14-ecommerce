"use client";

import { Check, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const ThemeToggle = () => {
	const { setTheme, theme: currentTheme, themes } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					<Sun
						size={24}
						className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
					/>
					<Moon
						size={24}
						className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
					/>
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{themes.map(theme => (
					<DropdownMenuItem
						key={theme}
						onClick={() => setTheme(theme)}
						className="flex w-full items-center justify-between capitalize"
					>
						{theme}

						{theme === currentTheme && <Check className="size-4" />}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

ThemeToggle.displayName = "ThemeToggle";
