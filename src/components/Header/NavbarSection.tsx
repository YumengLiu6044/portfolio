import { useState, useRef, useEffect } from "react";
import { navBarItems } from "../../constants";

export function NavbarSection() {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div>
			<div className="block lg:hidden" ref={ref}>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="w-[50px] h-[50px] border-2 rounded-xl border-blue-300 text-blue-300 hover:text-blue-400 hover:border-blue-400 flex items-center justify-center"
				>
					<i className="bi bi-list text-[40px]"></i>
				</button>
				{isOpen && (
					<div className="absolute top-[90px] bg-blue-100 border-2 border-blue-400 rounded-xl flex flex-col gap-5 p-4 font-bold text-xl">
						{navBarItems.map((item, index) => (
							<a
								key={index}
								href={item.href}
								className="hover-text"
								onClick={() => setIsOpen(false)}
							>
								{item.name}
							</a>
						))}
					</div>
				)}
			</div>

			<div className="hidden lg:flex gap-3 lg:gap-10 font-semibold text-3xl">
				{navBarItems.map((item, index) => (
					<a key={index} href={item.href} className="hover-text">
						{item.name}
					</a>
				))}
			</div>
		</div>
	);
}
