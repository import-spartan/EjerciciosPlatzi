function makePrefixer (prefijo) {
	return function Palabra (word) {
		console.log(`${prefijo}${word}`)
	}
}

const prefijoRe = makePrefixer("re")

prefijoRe("bueno")

/*
const prefijoRE = 're';
const prefijoIN = 'in';

const makePrefixer = (prefijo, palabra) => prefijo + palabra;

console.log(makePrefixer(prefijoRE, "malo"));
*/
