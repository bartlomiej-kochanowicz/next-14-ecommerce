import { Frown } from "lucide-react";
import { H1 } from "@/components/Heading";

type NotFoundProps = {
	title: string;
};

export const NotFound = ({ title }: NotFoundProps) => (
	<div className="mt-12 flex justify-center gap-4">
		<H1>{title}</H1>
		<Frown size={48} />
	</div>
);
