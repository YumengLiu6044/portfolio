import Section from "../Section";
import { headShot } from "../../assets/assets";

export default function About() {
	return (
		<Section className="bg-blue-100" id="about">
			<div className="w-full h-full flex flex-col md:flex-row md:gap-10 lg:gap-16 items-center">
				<div className="min-w-[250px] max-w-[320px] w-full h-fit bg-gradient-to-br from-blue-400 to-blue-200 p-2 rounded-[48px] self-center md:self-auto">
					<img src={headShot} className="w-full rounded-[48px]"></img>
				</div>
				<div className="flex flex-col h-full justify-between">
					<h2>Hi, I'm Yumeng Liu</h2>
					<p>
						I study Computer Science at UC Irvine. I have experience
						with iOS development, full-stack web development, as
						well as machine learning. Check out what I am working on
						right now.
					</p>
					<a href="#contact" className="w-full flex justify-end">
						<h2 className="hover-text">Contact Me</h2>
					</a>
				</div>
			</div>
		</Section>
	);
}
