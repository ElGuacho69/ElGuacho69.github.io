export function setUpObservers(): void {
	const options: any = {
		root: null,
		rootMargin: '0px',
		threshold: 0.1
	};
	

	const callback: IntersectionObserverCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
		entries.forEach((entry: IntersectionObserverEntry) => {
			if(entry.isIntersecting) {
				entry.target.classList.add('g--fade-in');
				observer.unobserve(entry.target);
			}
		});
	};

	const observer: IntersectionObserver = new IntersectionObserver(callback, options);
	const unlockTexts = document.querySelectorAll('.c-statblock__unlock-condition--locked');
	unlockTexts.forEach((element: Element) => {
		console.log('pom');
		observer.observe(element);
	});
}
