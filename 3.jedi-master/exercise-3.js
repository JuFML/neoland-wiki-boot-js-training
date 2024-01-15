//*!-------------------------------------------------------------------------------------------------------------------------------------
//*? Dado el siguiente html y javascript. Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
//*!-------------------------------------------------------------------------------------------------------------------------------------

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

function createList(array) {
  let listItem = ""
  array.forEach(item => {
    listItem += `<li>${item}</li>`
  })
  const listContainer = `<ul>${listItem}</ul>`
  renderList(listContainer);
}

function renderList(list) {
  document.querySelector('[data-function="printHere"]').innerHTML = list
}

createList(places)