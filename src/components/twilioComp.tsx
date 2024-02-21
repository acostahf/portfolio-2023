"use client";
import React, { useEffect, useState } from "react";

const TwilioComponent = () => {
	let discordWebhook = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL || "";

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

	useEffect(() => {
		const visited = localStorage.getItem("visited");
		if (!visited) {
			handleButtonClick();
		}
	}, []);
};

export default TwilioComponent;
