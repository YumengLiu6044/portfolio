import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experiences from "./components/Experiences/Experiences";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import { Analytics } from "@vercel/analytics/react";
import { emailJSPublicKey } from "./constants";
import emailjs from "@emailjs/browser";

// API Initialization
emailjs.init({
	publicKey: emailJSPublicKey,
});

function App() {
	return (
		<div className="flex flex-col w-full h-screen">
			<Header />
			<About />
			<Projects />
			<Experiences />
			<Contact />
			<Analytics />
		</div>
	);
}

export default App;
