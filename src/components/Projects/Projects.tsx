import Section from "../Section";
import { baseGithubUrl, projects } from "../../constants";
import { useMemo } from "react";

export default function Projects() {
	const handleClick = useMemo(() => {
		return (url: string) => {
			window.open(url, "_blank");
		};
	}, []);

	return (
		<Section className="bg-blue-200 text-white" id="projects">
			<div className="w-full flex flex-col items-center gap-8">
				<h2>Top Projects</h2>
				<div className="w-full flex flex-col gap-10 lg:flex-row">
					{projects.map((project, index) => (
						<div
							key={index}
							className="w-full flex flex-col justify-between items-center bg-white rounded-[40px] p-2
                hover:scale-105 transition-transform
              "
							onClick={() => handleClick(project.url)}
						>
							<div className="p-5 w-full max-w-[220px] aspect-square">
								<img
									src={project.image}
									className="w-full"
								></img>
							</div>
							<h3 className="bg-blue-200 w-full rounded-b-[35px] text-center p-2">
								{project.name}
							</h3>
						</div>
					))}
				</div>
				<div className="w-full flex justify-end">
					<a
						href={baseGithubUrl}
						className="hover-text hover:border-b-white"
						target="_blank"
						rel="noreferrer"
					>
						<h3 className="">Go to My Github</h3>
					</a>
				</div>
			</div>
		</Section>
	);
}
