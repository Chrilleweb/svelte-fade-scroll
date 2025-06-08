export interface FadeOnScrollOptions {
       threshold?: number;
       delay?: number;
       duration?: number;
       easing?: string;
       once?: boolean;
       root?: Element | null;
       rootMargin?: string;
       classes?: string[];
}

export function fadeOnScroll(node: HTMLElement, options: FadeOnScrollOptions = {}) {
       let {
               threshold = 0.1,
               delay = 0,
               duration = 700,
               easing = 'ease',
               once = false,
               root = null,
               rootMargin = '0px',
               classes = []
       } = options;

	// Set initial styles
	node.style.opacity = '0';
	node.style.transition = `opacity ${duration}ms ${easing} ${delay}ms`;

       let observer = new IntersectionObserver(
               ([entry]) => {
                       if (entry.isIntersecting) {
                               node.style.opacity = '1';
                               classes.forEach((c) => node.classList.add(c));
                               if (once) observer.disconnect();
                       } else {
                               if (!once) {
                                       node.style.opacity = '0';
                                       classes.forEach((c) => node.classList.remove(c));
                               }
                       }
               },
               { threshold, root, rootMargin }
       );

       function observe() {
               observer.observe(node);
       }

       // Observe element
       observe();

       return {
               update(newOptions: FadeOnScrollOptions) {
                       ({
                               threshold = threshold,
                               delay = delay,
                               duration = duration,
                               easing = easing,
                               once = once,
                               root = root,
                               rootMargin = rootMargin,
                               classes = classes
                       } = newOptions);
                       node.style.transition = `opacity ${duration}ms ${easing} ${delay}ms`;
                       observer.disconnect();
                       observer = new IntersectionObserver(
                               ([entry]) => {
                                       if (entry.isIntersecting) {
                                               node.style.opacity = '1';
                                               classes.forEach((c) => node.classList.add(c));
                                               if (once) observer.disconnect();
                                       } else {
                                               if (!once) {
                                                       node.style.opacity = '0';
                                                       classes.forEach((c) => node.classList.remove(c));
                                               }
                                       }
                               },
                               { threshold, root, rootMargin }
                       );
                       observe();
               },
               destroy() {
                       observer.disconnect();
               }
       };
}
