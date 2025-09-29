import Section from "../Section";
import { NavbarSection } from "./NavbarSection";
import { SocialSection } from "./SocialSection";

export default function Header() {
	return (
		<Section className="bg-blue-100 text-blue-400">
			{/* Nav Bar */}
			<div className="flex items-center w-full justify-between">
				<NavbarSection></NavbarSection>
				<SocialSection></SocialSection>
			</div>
		</Section>
	);
}
