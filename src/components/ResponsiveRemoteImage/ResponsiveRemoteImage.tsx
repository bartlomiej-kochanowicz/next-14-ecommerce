import Image from "next/image";
import { getBase64 } from "@/utlis/getBase64";
import { cn } from "@/lib/utils";

type ResponsiveRemoteImageProps = {
	src: string;
	alt: string;
	sizes: string;
	className?: string;
	imageClassName?: string;
};

export const ResponsiveRemoteImage = async ({
	src,
	alt,
	sizes,
	className,
	imageClassName,
}: ResponsiveRemoteImageProps) => {
	const blurData = await getBase64(src);

	if (!className?.match(/(h-|size-).*/)) {
		throw new Error("Please provide height or size of the container.");
	}

	return (
		<div className={cn("relative", className)}>
			<Image
				src={src}
				className={cn("object-contain", imageClassName)}
				blurDataURL={blurData}
				placeholder="blur"
				alt={alt}
				sizes={sizes}
				fill
			/>
		</div>
	);
};
