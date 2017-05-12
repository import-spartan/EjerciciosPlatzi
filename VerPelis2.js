const lordodr = "El señor de los anillos"
const pglordodr = 13

const nameMelina = "Melina"
const ageMelina = 21

const nameAndrea = "Andrea"
const ageAndrea = 11

let canWatchLordodr = (name, age, isWithAdult = false) => {
	if (age > pglordodr) {
		alert(`${name} puede pasar a ver ${lordodr}`)
	} else if (isWithAdult) {
		alert(`${name} puede pasar a ver ${lordodr}.
			Aunque su edad es ${age}, se encuentra acompañada/o por un adulto`)
	} else {
		alert(`${name} no puede pasar a ver ${lordodr}.
			Tiene ${age} años y necesita tener ${pglordodr}`)
	}
}

canWatchLordodr(nameMelina, ageMelina)
canWatchLordodr(nameAndrea, ageAndrea, true)