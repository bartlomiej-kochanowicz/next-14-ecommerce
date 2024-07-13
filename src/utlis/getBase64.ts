import { getPlaiceholder } from "plaiceholder";

export const getBase64 = async (url: string) => {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error("Failed while fetching image");
		}
		const buffer = await response.arrayBuffer();
		const { base64 } = await getPlaiceholder(Buffer.from(buffer));

		return base64;
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.stack);
		}
	}
};
