// import { Twilio } from "twilio";

// const accountSid = process.env.TWILIO_ACCOUNT_SID || "";
// const authToken = process.env.TWILIO_AUTH_TOKEN || "";
// const twilioNumber = process.env.TWILIO_NUMBER || "";
// const personalNumber = process.env.PERSONAL_NUMBER || "";

// const discordWebhook = process.env.DISCORD_WEBHOOK || "";
// // const client = new Twilio(accountSid, authToken);

// export async function POST() {
// 	try {
// 		// console.log("fired");

// 		// const res = client.messages.create({
// 		// 	from: twilioNumber,
// 		// 	body: "body",
// 		// 	to: personalNumber as string,
// 		// });
// 		// const data = await res;
// 		// console.log(data);

// 		const res = await fetch(
// 			"https://hook.us1.make.com/ojx618anafmj50fg9s3ynoqrbvw5af6x",
// 			{
// 				method: "POST",
// 				headers: {
// 					"Content-Type": "application/json",
// 				},
// 				body: JSON.stringify({
// 					content: "Hello, World!",
// 				}),
// 			}
// 		);
// 		console.log(res.json());
// 	} catch (error) {
// 		console.error("Twilio API", error);
// 	}

// 	// const data = await res.json();

// 	return Response.json("data");
// }
