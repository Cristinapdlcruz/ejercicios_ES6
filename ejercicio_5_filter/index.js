/* 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean mayor que 18 */

const allAges = [22, 14, 24, 55, 65, 21, 12, 13, 90]

const olderAge = allAges.filter((age) => age > 18)

console.log(olderAge)

/* 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean par. */

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]

const evenAges = ages.filter((age) => age % 2 === 0)

console.log(evenAges)

/* 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'. */

const streamPeople = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

const LoL = streamPeople.filter(
  (stream) => stream.gameMorePlayed === 'League of Legends'
)

console.log(LoL)

/* MANERA CON IF:
const LoL = streamPeople.filter((stream) => {
  if ((stream.gameMorePlayed = 'League of Legends')) {
    return stream
  }
})

console.log(LoL) */

/* 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación. */
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

const streamersWithU = streamers.filter((stream) => stream.name.includes('u'))

console.log(streamersWithU)

/* Utilizando if & .includes
const streamersWithU = streamers.filter((stream) => {
  if (stream.name.includes('u')) {
    return stream
  }
})

console.log(streamersWithU) */

/* 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación. Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35. */

const legend = streamPeople.filter((stream) => {
  if (stream.gameMorePlayed.includes('Legends')) {
    return (stream.gameMorePlayed = stream.gameMorePlayed.toUpperCase())
  }
  if (stream.age > 35) {
    return stream
  }
})

console.log(legend)
