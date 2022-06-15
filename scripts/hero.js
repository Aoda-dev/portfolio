import anime from 'animejs'

function start(resolve) {
	const heroTimeLine = anime.timeline({
		easing: 'easeOutExpo',
	})

	heroTimeLine
		.add({
			targets: '.hero-square',
			easing: 'easeOutElastic(1, .8)',
			scale: [0.2, 0.8],
			duration: 700,
		})
		.add(
			{
				targets: '.hero-square',
				background: '#27272a',
				duration: 1400,
				rotate: [0, 45],
			},
			'-=200'
		)
		.add(
			{
				targets: '.hero-text',
				opacity: [0, 1],
				translateY: [30, 0],
				duration: 700,
			},
			'-=1000'
		)
		.add(
			{
				targets: '.hero-subtext',
				opacity: [0, 0.9],
				translateY: [30, 0],
				duration: 500,
			},
			'-=300'
		)
		.add(
			{
				targets: '.hero-header',
				opacity: [0, 1],
				duration: 1000,

				complete: function () {
					const node = document.querySelector('html')
					node.classList.remove('overflow-hidden')
					node.classList.add('overflow-x-hidden')

					resolve()
				},
			},
			'-=500'
		)
}

export const hero = (el) => {
	const node = document.querySelector(el)
	node.classList.remove('flex')
	node.innerHTML = `
		<div class="hero relative w-screen h-screen flex items-center justify-center bg-zinc-900">
			<div class="hero-header absolute top-0 flex container py-10 px-32 justify-between">
				<span class="hero-number text-white text-3xl font-main">01/04</span>

				<nav class="hero-nav text-sm font-main">
					<ul class="flex text-white/70 space-x-12 list-disc">
						<li><a href="#" class="hover:text-white">Projects</a></li>
						<li><a href="#" class="hover:text-white">About</a></li>
					</ul>
				</nav>
			</div>

			<div class="hero-square relative flex items-center justify-center w-[27rem] h-[27rem] bg-zinc-500 shadow-2xl">
				<div class="absolute -rotate-45 text-center space-y-4">
					<span class="hero-text text-white text-5xl font-main">Tolegen Kulseitov</span>
					<p class="hero-subtext font-main text-rose-500/90 font-medium">UI UX DESIGNER AND DEVELOPER</p>
				</div>
			</div>
		</div>

		<div class="projects w-screen h-screen bg-white">
			<div class="hero-header flex container py-10 px-32 justify-between">
				<span class="hero-number text-black text-3xl font-main">02/04</span>

				<nav class="hero-nav text-sm font-main">
					<ul class="flex text-black/70 space-x-12 list-disc">
						<li><a href="#" class="hover:text-black/80">Projects</a></li>
					</ul>
				</nav>
			</div>
		</div>	
	`

	return new Promise((resolve) => {
		start(resolve)
	})
}
