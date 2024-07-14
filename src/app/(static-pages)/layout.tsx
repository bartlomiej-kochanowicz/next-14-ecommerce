type StaticPagesLayoutProps = {
	children: React.ReactNode;
};

const StaticPagesLayout = ({ children }: StaticPagesLayoutProps) => (
	<article className="prose mx-auto max-w-3xl">{children}</article>
);

export default StaticPagesLayout;
