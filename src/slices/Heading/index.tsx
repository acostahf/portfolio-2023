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
        >
            <div className="w-full mx-auto p-8">
                <div className="relative max-w-7xl h-[500px] aspect-video rounded-2xl mb-8">
                    {video ? (
                        <video
                            className="rounded-3xl"
                            style={{
                                objectFit: "cover",
                                objectPosition: "center",
                            }}
                            autoPlay={true}
                            playsInline
                            loop
                            muted
                        >
                            <source src={video.url} type="video/mp4" />
                        </video>
                    ) : (
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
                    )}
                </div>
                <div className="max-w-3xl flex flex-col gap-3">
                    <h1 className="text-4xl text-white font-bold">
                        {slice.primary.title}
                    </h1>
                    {linkType !== "Any" ? (
                        <PrismicNextLink
                            className="text-blue-500 hover:text-blue-400"
                            field={slice.primary.website}
                            target="_blank"
                        >
                            Visit Project
                        </PrismicNextLink>
                    ) : (
                        <p className="text-red-500">Pending...</p>
                    )}

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
