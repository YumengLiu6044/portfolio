const socialItems = [
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/yumeng-liu-09731a2ab/",
		icon: "bi bi-linkedin",
	},
	{
		name: "GitHub",
		href: "https://github.com/YumengLiu6044",
		icon: "bi bi-github",
	},
	{
		name: "Email",
		href: "#contact",
		icon: "bi bi-envelope-fill",
	},
];
export function SocialSection() {
	return (
		<div className="flex gap-8 lg:gap-10">
			{socialItems.map((item, index) => (
				<a
					key={index}
					href={item.href}
					className="text-[50px] hover:scale-110 transition-transform duration-300 "
					target="_blank"
				>
					<i className={item.icon}></i>
				</a>
			))}
		</div>
	);
}
