import { PrismicNextImage } from "@prismicio/next";
import React from "react";

const Project = ({ item }: any) => {
	return (
		<div className="relative h-60 overflow-hidden rounded-lg">
			{/* Gradient overlay */}
			<div className="h-full w-full absolute top-0 left-0 bg-gradient-to-l from-cyan-950 to-transparent opacity-90 z-10 hover:opacity-0 transition-opacity duration-500"></div>
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
