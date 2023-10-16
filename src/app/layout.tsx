import ".././styles/global.css";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react";
import { Concert_One } from "next/font/google";

const openSans = Concert_One({
	subsets: ["latin"],
	display: "swap",
	weight: "400",
	variable: "--font-opensans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${openSans.variable} font-sans`}>
			<head>
				<link
					rel="icon"
					type="image/png"
					sizes="any"
					href="https://prismic.io/favicon.ico"
				/>
				{/* <link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Concert+One&display=swap"
					rel="stylesheet"
				/> */}
			</head>
			<body className="dark:bg-purple-700 min-h-screen relative flex flex-col items-center justify-center">
				<div className="max-w-7xl">{children}</div>
				<Analytics />
				<PrismicPreview repositoryName={repositoryName} />
			</body>
		</html>
	);
}
