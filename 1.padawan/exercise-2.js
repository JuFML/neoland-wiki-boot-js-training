//*!-------------------------------------------------------------------------------------------------------------------------------------
//*? Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.
//*!-------------------------------------------------------------------------------------------------------------------------------------

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true }
];

function replacesNonVeganFood(foods, fruits) {
  const nonVeganFoodSchedule = []

  for (let i = 0; i < foods.length; i++) {
    if (foods[i].isVegan === false) {
      const fruitToReplace = fruits.shift()
      fruitToReplace && nonVeganFoodSchedule.push({ ...foods[i], isVegan: true, name: fruitToReplace })
    } else {
      nonVeganFoodSchedule.push(foods[i])
    }
  }

  console.log(nonVeganFoodSchedule);
}

replacesNonVeganFood(foodSchedule, fruits)



