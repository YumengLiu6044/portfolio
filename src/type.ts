export type Project = {
	name: string;
	image: string;
	url: string;
};

export type Experience = {
	company: string;
	position: string;
	duration: string;
	description: string[];
	logo: string;
	skills: string[];
};

export type SocialItem = {
	name: string;
	href: string;
	icon: string;
};

export type NavBarItem = {
	name: string;
	href: string;
};
