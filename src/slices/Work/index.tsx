"use client";
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
	const [selected, setSelected] = useState(null);
	const handleSelection = (item) => {
		setSelected(item);
	};
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="flex flex-col justify-center items-center h-screen p-20"
		>
			<div className="grid grid-cols-3 border-gray-100 border-4 rounded-lg gap-4 p-4 h-[600px] w-full">
				{/* Left Column */}
				<div className="overflow-y-auto max-h-[600px]">
					{slice.items.map((item, index) => (
						<div
							key={index}
							onClick={() => handleSelection(item)}
							className="hover:bg-gray-100 cursor-pointer transition-all duration-300"
						>
							<Project key={index} item={item} />
						</div>
					))}
				</div>

				{/* Right Column */}
				<div className="col-span-2 flex flex-col text-white">
					{selected && (
						<>
							<div className="flex gap-4 mb-4">
								<h1 className="text-3xl font-bold">
									<PrismicRichText field={selected.title} />
								</h1>
								{selected.url.url && (
									<PrismicNextLink
										className="text-blue-400 border-2 rounded-lg px-4 py-1 hover:bg-blue-400 hover:text-white transition-all duration-300"
										target="_blank"
										field={selected.url}
									>
										Visit
									</PrismicNextLink>
								)}
							</div>
							<div className="flex flex-row gap-2">
								<p className="font-bold text-lg">Status:</p>
								<PrismicRichText field={selected.status} />
							</div>
							<div className="flex flex-row gap-2">
								<p className="font-bold text-lg">Role:</p>
								<p className="text-lg">
									<PrismicRichText field={selected.role} />
								</p>
							</div>

							<div className="mt-4">
								<h3 className="text-2xl font-bold mb-2">Overview:</h3>
								<p className="text-lg">
									<PrismicRichText field={selected.description} />
								</p>
							</div>

							<div className="mt-4">
								<h3 className="text-2xl font-bold mb-2">Technologies:</h3>
								<p className="text-lg">
									<PrismicRichText field={selected.tech} />
								</p>
							</div>

							{/* Add more fields like Description and Tech Stack if they exist */}
							<div className="mt-4 flex space-x-4">
								{selected.techStack?.map((tech, idx) => (
									<span
										key={idx}
										className="bg-gray-200 rounded-full px-3 py-1 text-sm"
									>
										{tech}
									</span>
								))}
							</div>
						</>
					)}
				</div>
			</div>
		</section>
	);
};

export default Work;
