//*!-------------------------------------------------------------------------------------------------------------------------------------
//*? En base al siguiente javascript, modifícalo para crea una función para que podamos enviarle como parametro el precio y la función nos calcule y retorne el precio con iva + los gastos de envio (4.95). De esta forma estaremos optimizando el codigo y reutilizandolo.
//*!-------------------------------------------------------------------------------------------------------------------------------------

const price1 = 8;
const ivaPrice1 = price1 * 1.21;
const totalPrice1 = ivaPrice1 + 4.95;

const price2 = 20;
const ivaPrice2 = price2 * 1.21;
const totalPrice2 = ivaPrice2 + 4.95;

function calculateFullPrice(price) {
  const ivaPrice = price * 1.21;
  const totalPrice = (ivaPrice + 4.95).toFixed(2);
  return totalPrice
}

console.log(calculateFullPrice(20));
console.log(calculateFullPrice(8));