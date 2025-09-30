import { experiences, linkedInUrl } from "../../constants";
import Section from "../Section";

export default function Experiences() {
	return (
		<Section className="bg-blue-100 text-blue-400" id="experiences">
			<div className="flex flex-col gap-5 md:gap-8 items-center">
				<h2 className="pb-[30px] md:pb-[80px]">Experiences</h2>
				{experiences.map((experience, index) => (
					<div
						className="w-full flex flex-col md:flex-row gap-10 items-center md:items-start"
						key={index}
					>
						<div className="max-w-[250px] w-full flex flex-col items-center gap-5">
							<p className="leading-[40px] text-center">
								{experience.company}
							</p>
							<img
								src={experience.logo}
								alt={experience.company + " logo"}
								className="rounded-[30px] w-full"
							></img>
						</div>
						<div className="w-full flex flex-col gap-7">
							<div className="flex justify-between">
								<div className="text-xl md:text-2xl lg:text-3xl font-medium">
									{experience.position}
								</div>
								<div className="text-xl md:text-2xl lg:text-3xl">
									{experience.duration}
								</div>
							</div>

							<ul className="list-disc list-inside flex flex-col gap-3">
								{experience.description.map(
									(desc, descIndex) => (
										<li
											className="list-none"
											key={descIndex}
										>
											<div className="flex gap-5">
												<p className="font-medium">•</p>
												<span className="text-xl md:text-2xl" key={descIndex}>{desc}</span>
											</div>
										</li>
									)
								)}
							</ul>

							<div className="flex flex-wrap gap-5">
								{experience.skills.map((skill, skillIndex) => (
									<div
										key={skillIndex}
										className="text-2xl px-[60px] py-1 bg-blue-200 text-white rounded-full"
									>
										{skill}
									</div>
								))}
							</div>
						</div>
					</div>
				))}
				<div className="flex w-full justify-end">
					<a
						href={linkedInUrl}
						target="_blank"
						className="hover-text"
					>
						<h3>Go to My LinkedIn</h3>
					</a>
				</div>
			</div>
		</Section>
	);
}
