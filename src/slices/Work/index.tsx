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
	const [selected, setSelected] = useState(slice.items[0] as any);
	const handleSelection = (item: any) => {
		setSelected(item);
	};
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="flex flex-col justify-center items-center min-h-screen p-4 md:p-20 w-full"
		>
			<div className="md:grid md:grid-cols-3 border-gray-100 border-4 rounded-lg gap-4 p-4 w-full md:overflow-y-auto overflow-x-auto">
				{/* Left Column */}
				<div className="snap-x md:snap-y overflow-x-auto max-h-[600px] md:overflow-y-auto whitespace-nowrap md:whitespace-normal">
					{slice.items.map((item, index) => (
						<div
							key={index}
							onClick={() => handleSelection(item)}
							className={`snap-center inline-block aspect-video w-full cursor-pointer mr-4 ${
								selected === item ? "bg-gray-800" : "hover:bg-gray-700"
							}`}
						>
							<Project
								key={index}
								item={item}
								isSelected={selected === item ? true : false}
							/>
						</div>
					))}
				</div>

				{/* Right Column */}
				<div className="md:col-span-2 flex flex-col text-white mt-4 md:mt-0">
					{selected && (
						<>
							<div className="flex md:flex-row flex-col gap-4 mb-4">
								<h1 className="text-3xl font-bold">
									<PrismicRichText field={selected.title} />
								</h1>
								{selected.url?.url && (
									<PrismicNextLink
										className="text-blue-400 z-20 border-2 rounded-lg px-4 py-1 text-center h-full hover:bg-blue-400 hover:text-white transition-all duration-300"
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
								{selected?.techStack?.map((tech: string, idx: number) => (
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
