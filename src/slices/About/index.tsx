"use client";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Player } from "@lottiefiles/react-lottie-player";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="p-4 mt-20 md:mt-0 md:p-20"
		>
			<div className="md:grid md:grid-cols-2">
				<div>
					<h1 className="text-3xl text-white font-bold mb-4">About Me</h1>
					<p className="text-white text-xl">
						<PrismicRichText field={slice.primary.content} />
					</p>
				</div>
				<div>
					<Player
						src="https://lottie.host/6cd08412-0153-4a3b-98a1-e7ddea0148ef/OM3FSuwJ6d.json"
						autoplay
						loop
						style={{ height: "300px", width: "300px" }}
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
