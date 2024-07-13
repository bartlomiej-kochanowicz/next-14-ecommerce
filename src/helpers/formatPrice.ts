export const formatPrice = (price: number) =>
	new Intl.NumberFormat("en-EN", { style: "currency", currency: "EUR" }).format(price);
