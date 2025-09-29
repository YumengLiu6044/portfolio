import {
	humunLogo,
	matchaLogo,
	mengChatLogo,
	outlierLogo,
	stockDasherLogo,
	uciLogo,
	valueGlanceLogo,
} from "./assets/assets";
import type { Experience, NavBarItem, Project, SocialItem } from "./type";

export const baseGithubUrl = "https://github.com/YumengLiu6044/";
export const linkedInUrl = "https://www.linkedin.com/in/yumeng-liu-09731a2ab/";

export const projects: Project[] = [
	{
		name: "Matcha",
		image: matchaLogo,
		url: baseGithubUrl + "matcha",
	},
	{
		name: "MengChat",
		image: mengChatLogo,
		url: baseGithubUrl + "Chat-With-Meng",
	},
	{
		name: "Stock Dasher",
		image: stockDasherLogo,
		url: baseGithubUrl + "StockDasher",
	},
];
export const socialItems: SocialItem[] = [
	{
		name: "LinkedIn",
		href: linkedInUrl,
		icon: "bi bi-linkedin",
	},
	{
		name: "GitHub",
		href: baseGithubUrl,
		icon: "bi bi-github",
	},
	{
		name: "Email",
		href: "#contact",
		icon: "bi bi-envelope-fill",
	},
];
export const navBarItems: NavBarItem[] = [
	{ name: "About", href: "#about" },
	{ name: "Projects", href: "#projects" },
	{ name: "Experiences", href: "#experiences" },
	{ name: "Contact", href: "#contact" },
];

export const experiences: Experience[] = [
	{
		company: "ValueGlance",
		logo: valueGlanceLogo,
		position: "Frontend Developer Intern",
		duration: "May 2025 - Sep 2025",
		description: [
			"Engineered 5+ major frontend features in a ReactJS codebase, ensuring responsiveness and accessibility",
			"Diagnosed and resolved UI/UX and performance issues using Linear. Achieved Sprint success rate of 90%",
			"Refactored duplicated code blocks by utilizing Tailwind CSS breakpoints. Reduced 1000+ unnecessary lines of JSX",
			"Implemented in-memory and browser caching that reduced loading time by 25%",
			"Optimized backtester processing time by 30% through Python's ThreadpoolExecutor. Lowered Lambda execution costs",
			"Designed new backend endpoints and authored comprehensive unit and integration tests",
		],
		skills: [
			"ReactJS",
			"Tailwind CSS",
			"AWS Chalice"
		]
	},
	{
		company: "Software Engineering and Analysis Lab",
		logo: uciLogo,
		position:
			"Undergraduate Researcher",
		duration: "Dec 2024 - Mar 2025",
		description: [
			"Developed a Regex-based parser that extracts structured bug report information from unstructured text",
			"Created extensive unit and functional tests to validate performance",
			"Analyzed 15,000 bug reports from 6 large open-source Java projects using GitPython",
		],
		skills: [
			"Python",
			"GitPython",
			"Regular Expression"
		]
	},
	{
		company: "Humanity Unleashed",
		logo: humunLogo,
		position: "Frontend Developer",
		duration: "Nov 2024 - Mar 2025",
		description: [
			"Developed a responsive value elicitation page using ReactJS and Tailwind CSS",
			"Researched modern GenAI UI design patterns and implemented innovative methods to assess political leanings",
			"Collaborated with the frontend team on website designs using Figma",
		],
		skills: [
			"ReactJS",
			"Tailwind CSS",
			"Figma"
		]
	},
	{
		company: "Outlier",
		logo: outlierLogo,
		position: "Prompt Engineer",
		duration: "Aug 2024 - Sep 2024",
		description: [
			"Used RLHF to train LLMs in answering Swift coding questions",
			"Wrote creative prompts and responses that's used to train LLMs"
		],
		skills: [
			"Swift",
			"Reinforcement Learning"
		]
	},
];

export const emailJSPublicKey = import.meta.env.VITE_EMAILJS_PUB_KEY;
export const emailJSServiceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
export const emailJSTemplateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;