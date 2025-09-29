import React from "react";

interface SectionProps {
	className: string;
	children: React.ReactNode;
	id?: string;
}
export default function Section({ className, children, id }: SectionProps) {
	return (
		<div
			className={
				"w-full py-3 px-5 md:py-6 md:px-16 lg:py-10 lg:px-32 " + className
			}
			id={id}
		>
			{children}
		</div>
	);
}
