//*!-------------------------------------------------------------------------------------------------------------------------------------
//*? Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.
//*!-------------------------------------------------------------------------------------------------------------------------------------
const places = [
  {
    title: "Random title",
    imgUrl:
      "https://images.unsplash.com/photo-1506466010722-395aa2bef877?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bG9yZCUyMG9mJTIwdGhlJTIwcmluZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Random title",
    imgUrl:
      "https://images.unsplash.com/photo-1570610155223-66279ba81b41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bG9yZCUyMG9mJTIwdGhlJTIwcmluZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Random title",
    imgUrl:
      "https://images.unsplash.com/photo-1570888233388-35d777042d9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGxvcmQlMjBvZiUyMHRoZSUyMHJpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Random title",
    imgUrl:
      "https://images.unsplash.com/photo-1490440101319-4c8eb3880432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGxvcmQlMjBvZiUyMHRoZSUyMHJpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Random title",
    imgUrl:
      "https://images.unsplash.com/photo-1460453429228-912eec8be349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGxvcmQlMjBvZiUyMHRoZSUyMHJpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];

function createList(infos) {
  let itemListComponent = ""

  infos.forEach(({ title, imgUrl }) => {
    itemListComponent +=
      `<div class="list-item">
        <h4>${title}</h4>
        <img src=${imgUrl} alt=${title}>
      </div>
      `
  });

  renderList(itemListComponent)
}

function renderList(list) {
  document.querySelector("body").innerHTML = list
}

function createButton() {
  const button = "<button>DELETE THE LAST LIST ITEM</button>"
  renderBtn(button)
  addButtonClickEvent()
}

function addButtonClickEvent() {
  document.querySelector("button").addEventListener("click", () => removeLastListItem())
}

function renderBtn(btn) {
  document.querySelector("body").innerHTML += btn
}

function removeLastListItem() {
  document.querySelectorAll(".list-item").forEach((item, index, array) => {
    if (index == array.length - 1) {
      item.remove()
    }
  })
}

createList(places)
createButton()

