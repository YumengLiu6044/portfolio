import { experiences, linkedInUrl } from "../../constants";
import Section from "../Section";

export default function Experiences() {
	return (
		<Section className="bg-blue-100 text-blue-400" id="experiences">
			<div className="flex flex-col gap-8 md:gap-10 items-center">
				<h2 className="pb-[10px] lg:pb-[30px] large-text font-semibold">Experiences</h2>
				{experiences.map((experience, index) => (
					<div
						className="w-full flex flex-col md:flex-row gap-10 items-center md:items-start"
						key={index}
					>
						<div className="max-w-[250px] w-full hidden lg:flex flex-col items-center gap-5">
							<p className="leading-[35px] text-center small-text">
								{experience.company}
							</p>
							<img
								src={experience.logo}
								alt={experience.company + " logo"}
								className="rounded-[30px] w-full"
							></img>
						</div>
						<div className="w-full flex flex-col gap-7">
							<div className="flex h-[60px] gap-3">
								<img
									src={experience.logo}
									alt={experience.company + " logo"}
									className="block lg:hidden rounded-[15px] h-full w-auto object-contain"
								></img>

								<div className="h-full flex flex-col justify-between">
									<div className="font-medium medium-text">
										{experience.position}
									</div>
									<div className="small-text">
										{experience.duration}
									</div>
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
												<span
													className="small-text"
													key={descIndex}
												>
													{desc}
												</span>
											</div>
										</li>
									)
								)}
							</ul>

							<div className="flex flex-wrap gap-3 lg:gap-5">
								{experience.skills.map((skill, skillIndex) => (
									<div
										key={skillIndex}
										className="small-text px-5 py-0.5 lg:px-[60px] lg:py-1 bg-blue-200 text-white rounded-full"
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
						className="hover-text large-text font-medium"
					>
						<h3>Go to My LinkedIn</h3>
					</a>
				</div>
			</div>
		</Section>
	);
}
