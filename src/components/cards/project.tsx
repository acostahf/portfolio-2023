import { PrismicNextImage } from "@prismicio/next";
import React from "react";

interface ProjectProps {
	item: any;
	isSelected: boolean;
}

const Project = ({ item, isSelected }: ProjectProps) => {
	return (
		<div className="relative h-60 overflow-hidden rounded-lg">
			{/* Gradient overlay */}
			<div
				className={`h-full w-full absolute top-0 left-0 bg-gradient-to-l from-purple-700 to-transparent opacity-90 z-10  transition-opacity duration-500 ${
					isSelected ? "opacity-0 " : " hover:opacity-0"
				}`}
			></div>

			<PrismicNextImage
				fill={true}
				alt={item.title}
				fallbackAlt={item.title}
				field={item.projectimg}
				style={{ objectFit: "cover", objectPosition: "center" }}
				className=""
			/>
		</div>
	);
};

export default Project;
