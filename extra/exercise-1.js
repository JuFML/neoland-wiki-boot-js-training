//*!-------------------------------------------------------------------------------------------------------------------------------------
//*? Crea una función llamada splitName que divida un nombre completo en nombre y apellido. Tengamos en cuenta que este string siempre va a tener solo un nombre y un apellido.
//*? De tal modo que si tenemos el texto "Peter Parker" obtendremos dos variables...una con el valor "Peter" y otra con el valor "Parker".
//*? En este ejercicio seria recomendable que investigueis las funciones .substring() y .findIndexOf()
//*!-------------------------------------------------------------------------------------------------------------------------------------

function splitName(fullName) {
  const spaceIndex = fullName.indexOf(" ")
  const firsTName = fullName.substring(0, spaceIndex)
  const surname = fullName.substring(spaceIndex + 1)
  console.log(firsTName);
  console.log(surname);
}

splitName("Pedro Oliveira")



