//*!-------------------------------------------------------------------------------------------------------------------------------------
//*? Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.
//*!-------------------------------------------------------------------------------------------------------------------------------------

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const makeList = (array) => {
  let li = []
  array.forEach(item => {
    li += `<li>${item}</li>`
  })
  const ul = `<ul class="list">${li}</ul>`

  renderList(ul)
}

const renderList = (ul) => {
  document.getElementById("app").innerHTML = ul
}

makeList(albums)