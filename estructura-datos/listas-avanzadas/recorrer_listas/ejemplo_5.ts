// Uso de Find y FindIndex
// Mientras que filter te devuelve todos los que cumplen una condición, 
// find y findIndex se detienen en cuanto encuentran al primero que encaje.

// Ejemplo 1 .find(): Obtener el objeto/valor
const listaNombres = ["Ana", "Luis", "Maria", "David"];

const valorEncontrado = listaNombres.find( n => n === "Maria");
console.log('El nombre es:', valorEncontrado);

const valorNoExiste = listaNombres.find(n => n === "Bob");
console.log('El nombre es:', valorNoExiste);
console.log('==========================================');

// Ejemplo 2 .findIndex(): Obtener la posicion
const listCarrito = ["Pan", "Leche", "Huevos"];

const posicionHuevos = listCarrito.findIndex(item => item === "Huevos");
console.log('Posicion de la leche es:', posicionHuevos);

const posicionCarne = listCarrito.findIndex(item => item === "Carne");
console.log('Poscion de la carne:', posicionCarne); // Si no lo encuentra devuelve -1
console.log('==========================================');

// **********************************************************

// Ejercicio 1: Editar un objeto especifico (find + modificacion)
const listMisTareas = [
  { id: 1, tarea: "Lavar", status: "pending" },
  { id: 2, tarea: "Cocinar", status: "pending" }
];
console.log('Tareas antes:', listMisTareas);

const tareaParaEditar = listMisTareas.find(t => t.id === 2);

if(tareaParaEditar) {
  tareaParaEditar.status = "Completed"; // Aqui cambiamos el valor directamente
}


console.log('Tareas despues:', listMisTareas);
console.log('==========================================');

// Ejercicio 2: Eliminar un elemento especifico
const listInventario = ["Laptop", "Mouse", "Teclado", "Monitor"];
console.log('Inventario antes:', listInventario);

const idxBorrar = listInventario.findIndex(prod => prod === "Teclado");
if(idxBorrar !== -1) {
  listInventario.splice(idxBorrar, 1);
}

console.log('Inventario despues:', listInventario)
console.log('==========================================');

// Ejercicio 3: Buscar el mayor de la lista
const valueNumbers = [5, 12, 8, 130, 44];

const numeroGrande = valueNumbers.find(n => n > 5 && n < 10);
console.log('El numero grande es:', numeroGrande)



