import ".././styles/global.css";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link
					rel="icon"
					type="image/png"
					sizes="any"
					href="https://prismic.io/favicon.ico"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Concert+One&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className="dark:bg-purple-700 min-h-screen relative flex flex-col items-center justify-center">
				{/* <Navbar /> */}
				<div className="max-w-7xl">{children}</div>
				<Analytics />

				<PrismicPreview repositoryName={repositoryName} />
			</body>
		</html>
	);
}
