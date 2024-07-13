import { Star } from "lucide-react";

type ProductRateProps = Readonly<{
	rate: number;
	count: number;
}>;

export const ProductRate = ({ rate, count }: ProductRateProps) => (
	<div className="flex items-center">
		{Array.from({ length: 5 }, (_, index) => (
			<Star
				key={index}
				width={20}
				height={20}
				fill={`hsl(var(--card${index < rate ? "-foreground" : ""}))`}
			/>
		))}
		<span className="ml-1 text-xs text-muted-foreground">{count}</span>
	</div>
);
