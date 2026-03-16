// Validadores .some() y .every()
// No devuelven elementos, ni transforman la lista; 
// simplemente te responden Sí o No (true o false).

// Ejemplo 1 .some(): Ver si hay al menos un elemento
const listaEdades = [12, 15, 21, 14];

const hayAdultos = listaEdades.some(edad => edad >= 18);
console.log('Existen adultos?:', hayAdultos);
console.log('================================');

// Ejemplo 2 .every(): Ver si son todos
const listaNotas = [10, 9, 8, 10];

// Verificamos si todos aprobaron
const todosAprobados = listaNotas.every(n => n > 5);
console.log('Todos aprobaron?:', todosAprobados)
console.log('================================');

// **************************************************

// Ejercicio 1 validar antes de borrar
const listaTareas = [
  { desc: "Tarea 1", procesada: true },
  { desc: "Tarea 2", procesada: true }
];

// Verificamos si todo esta listo
const listoParaBorrar = listaTareas.every(t => t.procesada);

// Si todo esta listo, limpiamos el array;
if(listoParaBorrar) {
  listaTareas.splice(0, listaTareas.length);
  console.log('Lista vaciada con seguridad')
} else {
  console.log('Aun hay tareas pendientes')
}
console.log('================================');

// Ejercicio 2: Evitar duplicados
const listaUsers = ["Admin", "Editor", "Guest"];
const nuevoUser = "Admin";
console.log('Lista de usuarios:', listaUsers);

// Verificamos si existe ese nombre
const yaExiste = listaUsers.some(u => u === nuevoUser)

// Solo lo agregamos si el nombre no existe
if(!yaExiste) {
  listaUsers.push(nuevoUser);
  console.log('Nuevo user agregado:', listaUsers)
} else {
  console.log(`Error: El nombre ${nuevoUser} ya esta en uso`)
}
console.log('================================');

// Ejercicio 3: Verificar disponibilidad
const listaEnStock = ["Disponible", "Disponible", "Agotado", "Disponible"];

const hayAgotadosAlInicio = listaEnStock.slice(0, 3).some(s => s === "Agotado");
console.log(hayAgotadosAlInicio ? "Revisa los primeros estantes" : "Todo OK");