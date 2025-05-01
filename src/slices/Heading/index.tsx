import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import * as prismic from "@prismicio/client";

/**
 * Props for `Heading`.
 */
export type HeadingProps = SliceComponentProps<Content.HeadingSlice>;

//extend the LinkToMediaField type with the url
type ExtendedLinkToMediaField = prismic.LinkToMediaField & {
    url?: string;
};

/**
 * Component for "Heading" Slices.
 */
const Heading = ({ slice }: HeadingProps): JSX.Element => {
    const linkType = slice.primary.website.link_type;
    const video = slice.primary.video as ExtendedLinkToMediaField;

    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="relative w-full py-10"
        >
            {/* Media Section */}
            <div className="relative w-full aspect-video">
                {video.url ? (
                    <video
                        className="w-full h-full object-cover rounded-2xl"
                        autoPlay={true}
                        playsInline
                        loop
                        muted
                    >
                        <source src={video.url} type="video/mp4" />
                    </video>
                ) : (
                    <PrismicNextImage
                        className="w-full h-full object-cover rounded-2xl"
                        fill={true}
                        alt={slice.primary.title as any}
                        fallbackAlt={`${slice.primary.title}` as any}
                        field={slice.primary.image}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 -mt-16 relative z-10">
                <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {slice.primary.title}
                    </h1>

                    <p className="text-lg text-white/90 mb-6">
                        {slice.primary.description}
                    </p>

                    {linkType !== "Any" ? (
                        <PrismicNextLink
                            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                            field={slice.primary.website}
                            target="_blank"
                        >
                            Visit Project
                            <svg
                                className="w-4 h-4 ml-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </PrismicNextLink>
                    ) : (
                        <span className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg">
                            Coming Soon
                        </span>
                    )}

                    {/* Tech Stack */}
                    <div className="mt-8">
                        <h3 className="text-sm font-semibold text-white/70 mb-3 uppercase tracking-wider">
                            Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {slice.items.map((item, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white rounded-lg text-sm"
                                >
                                    {item.stack}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Heading;
