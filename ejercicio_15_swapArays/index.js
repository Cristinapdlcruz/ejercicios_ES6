/* Crea una función llamada swap que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.
Sugerencia de array: */

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]
const swap = (array, ind1, ind2) => {
  const temp = array[ind1]
  array[ind1] = array[ind2]
  array[ind2] = temp

  return array
}

const swappedFantasticFour = swap(fantasticFour, 0, 3)
console.log(swappedFantasticFour)
