type LimitParams = {
	limit: string;
};

type SortParams = {
	sort: "asc" | "desc";
};

export type ApiListParams = LimitParams | SortParams;
