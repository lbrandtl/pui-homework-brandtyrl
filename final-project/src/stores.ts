import { readable } from "svelte/store";

interface coordinate {
	x: number;
	y: number;
}

export const scrollPosition = readable<coordinate>({ x: 0, y: 0 }, (set) => {
	window.addEventListener("scroll", () => {
		set({ x: window.scrollX, y: window.scrollY });
	});
});

// mouse position
export const mousePosition = readable<coordinate>({ x: 0, y: 0 }, (set) => {
	window.addEventListener("mousemove", (e) => {
		set({ x: e.clientX, y: e.clientY });
	});
});

export const windowSize = readable<{ width: number; height: number }>(
	{
		width: window.innerWidth,
		height: window.innerHeight,
	},
	(set) => {
		window.addEventListener("resize", (e) => {
			set({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		});
	},
);
