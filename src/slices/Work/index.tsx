"use client";
import Project from "../../compoents/cards/project";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Work`.
 */
export type WorkProps = SliceComponentProps<Content.WorkSlice>;

/**
 * Component for "Work" Slices.
 */
const Work = ({ slice }: WorkProps): JSX.Element => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="flex flex-col justify-center items-center h-96"
		>
			<div className="md:grid md:grid-cols-3 gap-0 w-full p-6 sm:p-20 max-w-6xl">
				{slice.items.map((item, index) => (
					<Project key={index} item={item} />
				))}
			</div>
		</section>
	);
};

export default Work;
