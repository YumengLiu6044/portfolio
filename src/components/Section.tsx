import React from "react";

interface SectionProps {
	className: string;
	children: React.ReactNode;
}
export default function Section({ className, children }: SectionProps) {
	return (
		<div
			className={
				"w-full py-3 px-5 lg:py-[36px] lg:px-[128px] " + className
			}
		>
			{children}
		</div>
	);
}
