import { Frown } from "lucide-react";
import { H1 } from "@/components/Heading";

const NotFound = () => (
	<div className="mt-12 flex justify-center gap-4">
		<H1>Page not found</H1>
		<Frown size={48} />
	</div>
);

export default NotFound;
