import { matchaLogo, mengChatLogo, stockDasherLogo } from "./assets/assets";

export const baseGithubUrl = "https://github.com/YumengLiu6044/"

export const projects = [
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
export const socialItems = [
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/yumeng-liu-09731a2ab/",
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
export const navBarItems = [
	{ name: "About", href: "#about" },
	{ name: "Projects", href: "#projects" },
	{ name: "Experience", href: "#experience" },
	{ name: "Contact", href: "#contact" },
];
