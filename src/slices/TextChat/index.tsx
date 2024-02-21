// "use client";
import TwilioComponent from "@/components/twilioComp";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useEffect } from "react";

/**
 * Props for `TextChat`.
 */
export type TextChatProps = SliceComponentProps<Content.TextChatSlice>;

/**
 * Component for "TextChat" Slices.
 */
const TextChat = ({ slice }: TextChatProps): JSX.Element => {
	let discordWebhook = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL || "";

	useEffect(() => {
		const visited = localStorage.getItem("visited");
		if (!visited && discordWebhook) {
			const handleButtonClick = async () => {
				try {
					const response = await fetch(discordWebhook, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							/* Add your request body here */
						}),
					});

					localStorage.setItem("visited", "true");
				} catch (error) {
					console.error("Error:", error);
				}
			};
			handleButtonClick();
		}
	}, [discordWebhook]);
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="absolute z-10 top-0 left-0 w-full h-full flex "
		>
			{/* <TwilioComponent /> */}
		</section>
	);
};

export default TextChat;
