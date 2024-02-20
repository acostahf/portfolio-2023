import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TextChat`.
 */
export type TextChatProps = SliceComponentProps<Content.TextChatSlice>;

/**
 * Component for "TextChat" Slices.
 */
const TextChat = ({ slice }: TextChatProps): JSX.Element => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="absolute z-10 top-0 left-0 w-full h-full flex "
		>
			Placeholder component for text_chat (variation: {slice.variation})
			Slices
		</section>
	);
};

export default TextChat;
