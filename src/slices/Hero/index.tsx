import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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

			<h6 className="text-xl md:text-3xl">
				<PrismicRichText field={slice.primary.second} />
			</h6>

			<div className="w-full flex justify-center pt-4">
				<a
					href="https://www.linkedin.com/in/fabianacostadev/"
					target="_blank"
					className="w-4 md:w-10 h-4 md:h-10 text-gray-400 mr-4 hover:text-blue-700"
				>
					<FontAwesomeIcon
						icon={faLinkedin}
						style={{ width: "100%", height: "100%" }}
					/>
				</a>
				<a
					href="https://github.com/acostahf"
					target="_blank"
					className="w-4 md:w-10 h-4 md:h-10 text-gray-400 hover:text-fuchsia-700"
				>
					<FontAwesomeIcon
						icon={faGithub}
						style={{ width: "100%", height: "100%" }}
					/>
				</a>
			</div>
		</section>
	);
};

export default Hero;
