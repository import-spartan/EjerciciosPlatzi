function makePrefixer (prefijo) {
	return function Palabra (word) {
		console.log(`${prefijo}${word}`)
	}
}

const prefijoRe = makePrefixer("re")

prefijoRe("bueno")