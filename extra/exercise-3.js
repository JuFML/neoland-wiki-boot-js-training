//*!-------------------------------------------------------------------------------------------------------------------------------------
//*? En base al siguiente array cuenta cuantas letras "a" tenemos. El resultado debería ser 9.
//*!-------------------------------------------------------------------------------------------------------------------------------------
const animals = [
  "Rintintín",
  "Cosmo",
  "Gato con botas",
  "Asno",
];

let amountOfA = 0
animals.forEach(animal => {
  if (animal.toLowerCase().includes("a")) {
    const splitedAnimal = [...animal.toLowerCase()]
    splitedAnimal.forEach(letter => {
      letter === "a" && ++amountOfA
    })
  }
})

console.log(amountOfA);