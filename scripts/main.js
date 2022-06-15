import '../style.css'

import { init } from './init'
import { hero } from './hero'
import { scrollInit } from './scroll'

const className = '.app'

const start = async () => {
	await init(className)
	await hero(className)
	await scrollInit()
}

setTimeout(start, 1500)
