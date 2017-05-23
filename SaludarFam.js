function saludarFamilia(apellido) {
	return function saludarMiembro(nombre) {
		console.log(`Hola ${nombre} ${apellido}`)
	}
}

const saludarMejia = saludarFamilia("Mejía")
const saludarBedoya = saludarFamilia("Bedoya")

saludarMejia("Carlos")
saludarMejia("Stella")
saludarMejia("Melina")
saludarBedoya("Diana")
saludarBedoya("Nancy")
saludarBedoya("Nora")
