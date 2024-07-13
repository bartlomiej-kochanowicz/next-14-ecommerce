type ProductsGridProps = Readonly<{
	children: React.ReactNode;
}>;

export const ProductsGrid = ({ children }: ProductsGridProps) => (
	<section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
		{children}
	</section>
);
