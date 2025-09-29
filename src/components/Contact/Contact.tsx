import { useEffect } from "react";
import {
	emailJSPublicKey,
	emailJSServiceID,
	emailJSTemplateID,
} from "../../constants";
import Section from "../Section";
import emailjs from "@emailjs/browser";

export default function Contact() {
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
				e.currentTarget.reset();
			});
	};

	return (
		<Section className="bg-blue-200 text-white" id="contact">
			<div className="w-full items-center flex flex-col gap-10">
				<h2>Get In Touch</h2>
				<form
					className="w-full max-w-3xl flex flex-col gap-5"
					onSubmit={handleSubmit}
				>
					<label htmlFor="user_email">Your Email</label>
					<input
						type="email"
						id="user_email"
						name="user_email"
						required
					/>
					<label htmlFor="subject">Subject</label>
					<input type="text" id="subject" name="subject" required />
					<label htmlFor="message">Message</label>
					<textarea name="message" id="message" className="min-h-[70px]"required />
					<div className="flex w-full justify-between">
            <button type="reset" className="btn-secondary">
              Clear
              <i className="bi bi-trash3 font-medium"></i>
            </button>
					  <button type="submit" className="btn-primary flex gap-3">
              Send
              <i className="bi bi-send-fill"></i>
  					</button>
					</div>
				</form>
			</div>
		</Section>
	);
}
