import { socialItems } from "../../constants";

export function SocialSection() {
	return (
		<div className="flex gap-8 lg:gap-10">
			{socialItems.map((item, index) => (
				<a
					key={index}
					href={item.href}
					className="text-[50px] hover:scale-110 transition-transform duration-300 "
					target={item.name !== "Email" ? "_blank" : ""}
					aria-label={item.name}
				>
					<i className={item.icon}></i>
				</a>
			))}
		</div>
	);
}
