const melina = {
	nombre: 'Melina',
	apellido: 'Mejia'
}

function saludar(veces, uppercase) {
	let str = `Hola ${this.nombre} ${this.apellido}`
	str = uppercase ? str.toUpperCase() : str
	for (let i = 0; i < veces; i++) {
		console.log(str)
	}
}

//saludar.call(melina, 3, true)
saludar.apply(melina, [3, true])