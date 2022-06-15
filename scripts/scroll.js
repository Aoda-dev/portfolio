import anime from 'animejs'

// TODO: add more sections
export const scrollInit = () => {
	return new Promise((resolve, reject) => {
		window.addEventListener('scroll', () => {
			const y = window.scrollY

			anime({
				targets: '.hero',
				translateY: `${y * 0.05}%`,
			})

			anime({
				targets: '.projects',
				translateY: `-${y * 0.07}%`,
			})
		})
	})
}
