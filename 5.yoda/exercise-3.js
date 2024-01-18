const getOrders = async () => {
  const data = await fetch("http://localhost:3000/orders")
  const orders = await data.json()

  getProductsInfo(orders)
}

const getProductsInfo = (orders) => {
  let products = []
  let productsIds = []
  orders.forEach(order => {
    const orderDate = order.date.split('-').join('/')
    const orderNumber = order.id
    order.products.forEach((productsInfo) => {
      products.push({ ...productsInfo, date: orderDate, order: orderNumber })
    })
  });
  products.forEach(({ productId }) => productsIds = [...productsIds, productId])
  getProductsNames(products, productsIds)
}

const checkIfThereIsRepeatedIdInOrders = (products) => {
  let productsIds = []
  products.forEach(({ productId }) => productsIds = [...productsIds, productId])
  const isThereIdRepeated = new Set(productsIds).size < productsIds.length
  productsIds = [...new Set(productsIds)]
  return [isThereIdRepeated, productsIds]
}

const getProductsNames = async (resumeProducts, ids) => {
  let productNames = []
  for (let i = 0; i < ids.length; i++) {
    const data = await fetch(`http://localhost:3000/products?id=${ids[i]}`)
    const resp = await data.json()
    const productName = resp[0].name
    productNames.push(productName)
  }
  completeProductsOrdedList(resumeProducts, productNames)
}

const completeProductsOrdedList = (resumeProducts, productNames) => {
  let productsList = []
  productNames.forEach((name, index) => {
    productsList.push({ ...resumeProducts[index], name })
  })
  orderProductsByDate(productsList)
}

const orderProductsByDate = (productsList) => {
  const newProductList = productsList.map(product => {
    return { ...product, date: new Date(product.date.split("/")) }
  })
  newProductList.sort((a, b) => b.date - a.date)
  const finalProductList = newProductList.map(product => {
    const day = (product.date.getDate()).toString()
    const month = (product.date.getMonth() + 1).toString()
    const year = (product.date.getFullYear()).toString()
    return { ...product, date: `${day}/${month.length === 1 ? `0${month}` : month}/${year}` }
  })
  createHTMLList(finalProductList)
}

const createHTMLList = (finalProductList) => {
  let ul = ""
  let lis = ""
  finalProductList.forEach(product => {
    lis += `
      <li>
        <p style="font-weight:700">PEDIDO #${product.order} | FECHA: ${product.date}</p>
        <p>PRODUCTO: ${product.name} => CANTIDAD: ${product.quantity}</p>
      </li>
      <hr>
    `
  })
  ul = `<ul>${lis}</ul>`

  renderList(ul)
}

const renderList = (orders) => {
  const app = document.querySelector("#app")
  const title = `<h1>PEDIDOS</h1>`
  app.innerHTML += title
  app.innerHTML += orders
}

getOrders()



