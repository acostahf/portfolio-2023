import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="text-white relative font-concert-one text-4xl md:text-8xl uppercase h-96 md:min-h-screen w-full flex items-center justify-center flex-col"
		>
			<div className="hidden md:inline-block left-0 absolute w-[700px] h-2 bg-red-700 animate-leftRight blur-lg"></div>
			<div className="hidden md:inline-block bottom-20 right-0 absolute w-[700px] h-2 bg-blue-700 animate-rightLeft blur-lg"></div>
			<div className="hidden md:inline-block top-20 right-200 absolute w-[700px] h-2 bg-fuchsia-700 animate-rightLeft blur-lg"></div>

			<PrismicRichText field={slice.primary.heading} />
			<div className="text-xl md:text-5xl">
				<PrismicRichText field={slice.primary.second} />
			</div>
		</section>
	);
};

export default Hero;
