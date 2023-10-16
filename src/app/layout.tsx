import ".././styles/global.css";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import Navbar from "@/components/navbar";

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
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossorigin
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Concert+One&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className="dark:bg-cyan-950 min-h-screen relative flex flex-col item-center justify-center">
				{/* <Navbar /> */}
				{children}

				<PrismicPreview repositoryName={repositoryName} />
			</body>
		</html>
	);
}
