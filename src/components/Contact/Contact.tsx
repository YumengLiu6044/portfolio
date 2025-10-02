import { useEffect, useRef } from "react";
import {
	emailJSPublicKey,
	emailJSServiceID,
	emailJSTemplateID,
} from "../../constants";
import Section from "../Section";
import emailjs from "@emailjs/browser";

export default function Contact() {
	const resetRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		emailjs.init({
			publicKey: emailJSPublicKey,
		});
	}, []);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);

		emailjs
			.send(emailJSServiceID, emailJSTemplateID, {
				title: formData.get("subject") as string,
				message: formData.get("message") as string,
				email: formData.get("user_email") as string,
			})
			.then((_) => {
				alert("Message received! I will get back to you soon.");
			})
			.catch((error) => {
				console.error("Failed to send message:", error);
				alert("Failed to send message. Please try again later.");
			})
			.finally(() => {
				resetRef.current?.click();
			});
	};

	return (
		<Section className="bg-blue-200 text-white" id="contact">
			<div className="w-full items-center flex flex-col gap-10">
				<h2>Get In Touch</h2>
				<form
					className="w-full max-w-3xl flex flex-col gap-3 lg:gap-5"
					onSubmit={handleSubmit}
				>
					<div>
						<label htmlFor="user_email">Your Email</label>
						<input
							type="email"
							id="user_email"
							name="user_email"
							className="w-full"
							required
						/>
					</div>
					<div>
						<label htmlFor="subject">Subject</label>
						<input
							type="text"
							id="subject"
							name="subject"
							required
							className="w-full"
						/>
					</div>
					<div>
						<label htmlFor="message">Message</label>
						<textarea
							name="message"
							id="message"
							className="min-h-[70px] w-full"
							required
						/>
					</div>
					<div className="flex w-full justify-between">
						<button
							type="reset"
							className="btn-secondary"
							ref={resetRef}
						>
							Clear
							<i className="bi bi-trash3 font-medium"></i>
						</button>
						<button
							type="submit"
							className="btn-primary flex gap-3"
						>
							Send
							<i className="bi bi-send-fill"></i>
						</button>
					</div>
				</form>
			</div>
		</Section>
	);
}
