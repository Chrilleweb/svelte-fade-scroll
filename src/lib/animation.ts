export interface FadeOnScrollOptions {
	threshold?: number;
	delay?: number;
	duration?: number;
	easing?: string;
	once?: boolean;
}

export function fadeOnScroll(node: HTMLElement, options: FadeOnScrollOptions = {}) {
	const { threshold = 0.1, delay = 0, duration = 700, easing = 'ease', once = false } = options;

	// Set initial styles
	node.style.opacity = '0';
	node.style.transition = `opacity ${duration}ms ${easing} ${delay}ms`;

	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				node.style.opacity = '1';
				if (once) observer.disconnect();
			} else {
				if (!once) {
					node.style.opacity = '0';
				}
			}
		},
		{ threshold }
	);

	// Observe element
	observer.observe(node);

	// Clean up
	return {
		destroy() {
			observer.disconnect();
		}
	};
}
