import anime from 'animejs'

function start(resolve) {
	const firstPartTimeLine = anime.timeline({
		targets: '.start-first-part',
		easing: 'easeOutExpo',
	})

	const secondPartTimeLine = anime.timeline({
		targets: '.start-second-part',
		easing: 'easeOutExpo',
	})

	const secondPartTextTimeline = anime.timeline({
		easing: 'easeOutExpo',
	})

	const transitionTime = '+=1500'

	firstPartTimeLine
		.add({ translateX: ['-100%', '-80%'] })
		.add(
			{
				translateX: '-60%',
				complete: function () {
					const node = document.querySelector('.app')
					node.classList.remove('bg-white')
					node.classList.add('bg-zinc-900')
				},
			},
			transitionTime
		)
		.add({ translateX: '-50%' }, transitionTime)
		.add({
			targets: '.loading',
			delay: 800,
			opacity: 0,
			duration: 1000,
			complete: function () {
				document.querySelector('.loading').style.display = 'none'
			},
		})
		.add({
			translateX: '0%',
			complete: function () {
				resolve()
			},
		})

	secondPartTimeLine
		.add({
			translateX: '20%',
		})
		.add({ translateX: '40%' }, transitionTime)
		.add({ translateX: '50%' }, transitionTime)
		.add({ translateX: '100%' }, transitionTime)

	secondPartTextTimeline
		.add(
			{
				targets: '.is',
				opacity: [0, 1],
				translateY: [30, 0],
				duration: 300,
				begin: function () {
					document.querySelector('.is').style.display = 'block'
					document.querySelector('.name').style.display = 'block'
				},
			},
			800
		)
		.add({
			targets: '.name',
			opacity: [0, 1],
			translateY: [30, 0],
			duration: 200,
		})
		.add({
			targets: '.is',
			opacity: 0,
			translateY: -30,
			delay: 1000,
			duration: 200,
		})
		.add({
			targets: '.name',
			opacity: 0,
			translateY: -30,
			duration: 200,
			complete: function () {
				document.querySelector('.is').style.display = 'none'
				document.querySelector('.name').style.display = 'none'
			},
		})
		.add({
			targets: '.iam',
			opacity: [0, 1],
			translateY: [30, 0],
			duration: 200,
			begin: function () {
				document.querySelector('.iam').style.display = 'block'
			},
		})
		.add({
			targets: '.webdeveloper',
			opacity: [0, 1],
			translateY: [30, 0],
			duration: 200,
			begin: function () {
				document.querySelector('.webdeveloper').style.display = 'block'
			},
		})
		.add({
			targets: '.based',
			opacity: [0, 1],
			translateY: [30, 0],
			begin: function () {
				document.querySelector('.based').style.display = 'block'
			},
		})
		.add({
			targets: '.iam',
			opacity: 0,
			translateY: -30,
			delay: 500,
			duration: 200,
		})
		.add({
			targets: '.webdeveloper',
			opacity: 0,
			translateY: -30,
			duration: 200,
		})
		.add({
			targets: '.based',
			opacity: 0,
			translateY: -30,
			duration: 200,

			complete: function () {
				document.querySelector('.iam').style.display = 'none'
				document.querySelector('.webdeveloper').style.display = 'none'
				document.querySelector('.based').style.display = 'none'
			},
		})
		.add({
			targets: '.youare',
			opacity: [0, 1],
			translateY: [30, 0],
			duration: 200,
			begin: function () {
				document.querySelector('.youare').style.display = 'block'
				document.querySelector('.very').style.display = 'block'
				document.querySelector('.welcome').style.display = 'block'
			},
		})
		.add({
			targets: '.very',
			opacity: [0, 1],
			translateY: [30, 0],
			duration: 200,
		})
		.add({
			targets: '.welcome',
			opacity: [0, 1],
			translateY: [30, 0],
			duration: 200,
		})
}

export const init = (el) => {
	document.querySelector(el).innerHTML = `
		<div class="absolute start-first-part -translate-x-full w-screen h-screen bg-zinc-900 text-white flex items-center justify-end">
			<div class="loading text-lg font-main flex items-center justify-center space-x-3 px-10">
					<div class="animate-spin w-2.5 h-2.5 bg-white"></div>
					<span>LOADING</span>
				</div>
		</div>

		<div class="absolute start-second-part bg-white text-lg font-main font-medium space-x-3 text-black w-screen h-screen flex items-center justify-start px-8">
			<span class="is hidden">MY NAMES IS</span>
			<span class="name text-rose-500 hidden">KULSEITOV TOLEGEN</span>

			<span class="iam hidden">I'M A</span>
			<span class="webdeveloper hidden text-rose-500">UI/UX DESIGNER AND WEB DEVELOPER</span>
			<span class="based hidden">BASED ON KAZAKHSTAN</span>

			<span class="youare hidden">AND YOU'RE</span>
			<span class="very hidden text-rose-500">VERY</span>
			<span class="welcome hidden">WELCOME ON MY PORTFOLIO</span>
		</div>
	`

	return new Promise((resolve) => {
		start(resolve)
	})
}
