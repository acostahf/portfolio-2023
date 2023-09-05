"ues client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import React, { useState } from "react";

const Project = ({ item }: any) => {
	const [hoverColor, setHoverColor] = useState(""); // State to hold the hover color

	const colors = ["blue", "red", "fuchsia"];

	const handleMouseEnter = () => {
		const randomIndex = Math.floor(Math.random() * colors.length);
		setHoverColor(colors[randomIndex]);
	};

	const handleMouseLeave = () => {
		setHoverColor(""); // Reset the hover color when mouse leaves
	};

	return (
		<div className="relative text-white h-60 overflow-scroll">
			<div className="-z-10">
				<PrismicNextImage
					fill={true}
					alt={item.title}
					field={item.projectimg}
					style={{ objectFit: "cover", objectPosition: "center" }}
				/>
			</div>

			<div
				className={`z-2 opacity-0 hover:opacity-90 hover:bg-${hoverColor}-700 duration-500 flex justify-start flex-col p-2 w-full h-full`}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div className="text-xl font-concert-one pb-2">
					<PrismicRichText field={item.title} />
				</div>
				<div className="flex flex-col justify-between h-full">
					<div>
						<PrismicRichText field={item.description} />
					</div>
					<div>
						<p className="pb-1 text-xs font-bold">My Role:</p>
						<PrismicRichText field={item.role} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
