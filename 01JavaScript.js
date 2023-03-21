console.log("Fuck World");
console.log("Fuck World");
let n1 = "nombre1";
console.log(n1);


//! ------------------- Template string ----------------------------
// En este caso se usa la interpolación Js sabe que dentro de la plantilla voy a usar otras variables
// no es necesario concatenar con el +.

const nombrePasajero = "Gustavo"
const apellidoPAsajero = "Minchiotti"

let nombreCompleto = `${nombrePasajero} ${apellidoPAsajero}`; //* uso esta sintaxis, toma en cuenta los espacios 

console.log(nombreCompleto);

let segundoPasajero = "Aye Garcia"
console.log(`El segundo pasajero es: ${segundoPasajero}`); //se puede usar en el clg también
segundoPasajero = 30602644
console.log(segundoPasajero);

//! ----------------- arrays ------------------------
// Un método interesantes es consultar la lista dentro de una plantilla :

const arrayPaíses = ["Argentina", "Uruguay", "Brazil", "Paraguay"];
console.log(`Uso de plantillas mas arrays, cantidad de elementos = ${arrayPaíses.length}`); //* estoy imprimiendo una String y a la vez consulto el array

