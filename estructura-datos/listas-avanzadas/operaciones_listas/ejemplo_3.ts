// Convertir entre array y string (join y split)

// Opcion A: De array a texto
// Convertimos todos los elementos en un solo string
// Ejemplo 1:
const fechaArray = [23, "03", 2026];

const fechaLimpia = fechaArray.join("/");
console.log('La fecha es:', fechaLimpia);
console.log('======================================');

// Ejemplo 2: 
const listaEtiquetas = ["React", "TS", "Node"];
console.log(listaEtiquetas.join(", "));
console.log('======================================');

// ***************************************************

// Opcion B: de texto a array
// Este es el proces inverso, cortamos un string cada vez que encuentra el separador 
// Ejemplo 1: 
const txtCSV = "Marco,25,Bolivia";

const datosCSV = txtCSV.split(",");

console.log(datosCSV);
console.log(datosCSV[0])
console.log('======================================');

// Ejemplo 2:
const inputUsuarios = "futbol, programacion, musica";

const tagsLimpios = inputUsuarios.split(",").map(tag => tag.trim());

console.log('Nueva lista:', tagsLimpios);
console.log('======================================');

// Ejemplo 3: 
const partesAuto = "Motor, Llantas, Asientos, retrovisor";

const partesOrden = partesAuto.split(",").map(tag => tag.trim());

const mostrarPartes = "#" + partesOrden.join(" #");
console.log(mostrarPartes)

