"use client";
import { cn } from "@/lib/utils";
import { PrismicNextImage } from "@prismicio/next";

import React from "react";
import { RichTextField, LinkField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { useRouter } from "next/navigation";

interface FocusCardProps {
	title: RichTextField;
	description: RichTextField;
	url: LinkField;
	status: RichTextField;
	role: RichTextField;
	tech: RichTextField;
	projectimg: any;
	index: number;
	feature: boolean;
	responsibilities: RichTextField;
	// card: any;
	hovered: number | null;
	setHovered: React.Dispatch<React.SetStateAction<number | null>>;
	slug: RichTextField;
}

const FocusCard = ({
	title,
	slug,
	projectimg,
	feature,
	// card,
	index,
	hovered,
	setHovered,
}: FocusCardProps) => {
	const router = useRouter();
	const handleSelect = () => {
		//use next link to redirect to the projects/[uid] page
		router.push(`/projects/${slug}`);
	};
	return (
		<div
			onMouseEnter={() => setHovered(index)}
			onMouseLeave={() => setHovered(null)}
			onClick={handleSelect}
			className={cn(
				"rounded-lg z-20 cursor-pointer relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-56 w-full transition-all duration-300 ease-out",
				hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
			)}
		>
			<PrismicNextImage
				className="z-0"
				fill={true}
				alt={title as any}
				fallbackAlt={`${title}-${index}` as any}
				field={projectimg}
				style={{
					objectFit: "cover",
					objectPosition: "center",
				}}
			/>
			<div
				className={cn(
					"absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
					hovered === index ? "opacity-100" : "opacity-0"
				)}
			>
				<div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
					<PrismicRichText field={title} />
				</div>
			</div>
		</div>
	);
};

export default FocusCard;
