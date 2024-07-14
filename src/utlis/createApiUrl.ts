const base = "https://fakestoreapi.com";

type Params = Record<string, string>;

export const createApiUrl = (path: string, params?: Params): string => {
	const url = new URL(path, base);

	if (!params) return url.toString();

	const searchParams = new URLSearchParams(Object.entries(params));

	return `${url.toString()}?${searchParams.toString()}`;
};
