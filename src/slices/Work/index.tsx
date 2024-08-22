"use client";
import FocusCard from "@/components/cards/FocusCard";
import Project from "../../components/cards/project";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { useState } from "react";

/**
 * Props for `Work`.
 */
export type WorkProps = SliceComponentProps<Content.WorkSlice>;

/**
 * Component for "Work" Slices.
 */
const Work = ({ slice }: WorkProps): JSX.Element => {
	const [hovered, setHovered] = useState<number | null>(null);

	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<h1 className="text-white text-4xl font-bold p-8">Projects</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto md:px-8 w-full z-20">
				{slice.items.map((item, index) => (
					<FocusCard
						{...item}
						key={index}
						index={index}
						hovered={hovered}
						setHovered={setHovered}
					/>
				))}
			</div>
		</section>
	);
};

export default Work;
