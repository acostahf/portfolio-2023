"use client"; // Make sure to include this directive at the top

import React, { useCallback, useState } from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false); // Track whether the navigation bar is open

	const handleNavToggle = useCallback(() => {
		setIsOpen((prevIsOpen) => !prevIsOpen); // Toggle the isOpen state
	}, []);

	return (
		<div
			className={`absolute z-10 -right-20 top-20 transform transition-transform duration-500 flex  ${
				isOpen ? "-translate-x-24" : ""
			}`}
		>
			<div
				onClick={handleNavToggle}
				className={`w-1 h-20 pl-3 mr-6 dark:bg-white hover:bg-orange-500 transition-colors duration-300 hover:animate-none rounded-full animate-pulse hover:cursor-pointer ${
					isOpen ? "" : ""
				}`}
			></div>
			{/* Show navigation links when the button is clicked */}

			<div
				className={`text-white font-concert-one text-xl uppercase duration-500 flexw-full flex-col`}
			>
				<a
					href="#"
					className="block -mt-1 pb-2 transition-colors duration-300 hover:text-fuchsia-600"
				>
					Home
				</a>
				<a
					href="#"
					className="block py-2 transition-colors duration-300 hover:text-red-600"
				>
					About
				</a>
				<a
					href="#"
					className="block py-2 transition-colors duration-300 hover:text-blue-600"
				>
					Services
				</a>
			</div>
		</div>
	);
};

export default Navbar;
