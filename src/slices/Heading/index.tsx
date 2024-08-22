import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Heading`.
 */
export type HeadingProps = SliceComponentProps<Content.HeadingSlice>;

/**
 * Component for "Heading" Slices.
 */
const Heading = ({ slice }: HeadingProps): JSX.Element => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<div className="w-full mx-auto p-8">
				<div className="relative max-w-7xl h-[500px] rounded-2xl mb-8">
					<PrismicNextImage
						className="rounded-3xl"
						fill={true}
						alt={slice.primary.title as any}
						fallbackAlt={`${slice.primary.title}` as any}
						style={{
							objectFit: "cover",
							objectPosition: "center",
						}}
						field={slice.primary.image}
					/>
				</div>
				<div className="max-w-3xl">
					<h1 className="text-4xl text-white font-bold mb-4">
						{slice.primary.title}
					</h1>
					<span className="text-white text-md">
						{slice.primary.description}
					</span>
				</div>
				<div className="flex flex-row gap-4 mt-4">
					{slice.items.map((item, index) => (
						<div key={index} className="text-white/80">
							<h3>{item.stack}</h3>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Heading;
