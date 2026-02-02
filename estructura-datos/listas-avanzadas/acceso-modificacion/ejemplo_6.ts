// Ejemplo 1: Intercambio
// Objetivo: Intercambiar el primer song con el último de la lista y 
// actualizar el nombre del que ahora es el primero.

const playLista: string[] = ["Song A", "Song B", "Song C", "Song D"];
console.log("Lista de musicas original:", playLista)

// Guardar las referencias:
const firstElement = playLista[0]
const lastElement = playLista.at(-1);

// Intercambiamos usando los indices
if(lastElement) {
  playLista[0] = lastElement;
  playLista[playLista.length - 1] = firstElement;
}

console.log("Lista con diferente orden:", playLista)

// Cambiamos el nombre
playLista[0] = 'Playing ' + playLista[0]
console.log("Lista modificada:",  playLista)
console.log('============================================');

// *****************************************************************************

// Ejemplo 2: Movimiento de inventario
// Objetivo: Sacamos el ultimo producto que llego al almacen y lo ponemos 
// de primero en el estante de la tienda
const listaAlmacen = ['Laptop', 'Mouse', 'Teclado'];
const estanteTienda = ['Monitor', 'Webcam'];
console.log('Almacen:', listaAlmacen, 'y estante:', estanteTienda)

// 1. Sacamos del final del almacen
const productoAlmacen = listaAlmacen.pop();

// 2. Lo ponemos al inicio de la tienda
if(productoAlmacen) {
  estanteTienda.unshift(productoAlmacen);
}

console.log("Almacen actualizado: ", listaAlmacen);
console.log("Tienda actualizado:", estanteTienda);
console.log('============================================');

// *****************************************************************************

// Ejemplo 3: Reemplazo en modo edicion
// Objetivo: Tomar una foto de los usuarios actuales, reemplazamos a uno 
// en el medio y agregamos un invitado al final.
const listaUsuarios = ['Admin', 'User1', 'User2', 'User3'];

// 1. Creamos una copia de seguridad de los primeros 3
const copiaUsuarios = listaUsuarios.slice(0, 3);
console.log('Primer copia sin modificar:', copiaUsuarios);

// 2. En la copia reemplazamos al "User1" por "SuperUser"
copiaUsuarios.splice(1, 1, "SuperUser");

// 3. Agregamos un invitado al final de nuestra copia
copiaUsuarios.push('Guest');

console.log('Lista original:', listaUsuarios);
console.log('Copia editada:', copiaUsuarios);
console.log('============================================');

// *****************************************************************************

// Ejemplo 4: Sistema de cola VIP
// Objetivo: Cliente VIP que debe ir al inicio, y atendemos al siguiente
// en la fila normal.
const listaFila = ['Cliente 1', 'Cliente 2', 'Cliente 3'];
console.log('Fila de clientes:', listaFila);

listaFila.unshift('VIP Cliente');
console.log('Cliente VIP va al principio:', listaFila)

const atendido = listaFila.shift();

console.log(`Atendiendo a: ${atendido}`);
console.log(`Faltan ${listaFila.length} personas en la fila`)
console.log("Y son:", listaFila)
console.log('============================================');

// *****************************************************************************

// Ejemplo 5: Historial de deshacer
// Objetivo; Cada acción se guarda al final. Si el usuario presiona 
// Ctrl+Z, eliminamos la última.
const listaHistorial = ["Escribir 'Hola'", "Cambiar color", "Negrita"];
console.log('Historial:', listaHistorial)

// EL usuario presiona deshacer
const accionEliminada = listaHistorial.pop();
console.log('Historial actualizado:', listaHistorial);

console.log(`Accion revertida: ${accionEliminada}`);
listaHistorial.push(accionEliminada!);
console.log(`Estado actual del historial:`, listaHistorial);
console.log('============================================');

// *****************************************************************************

// Ejemplo 6: Ranking dinamico
// Objetivo: Un jugador nuevo entra directamente al segundo lugar (índice 1) desplazando a los demás.
const topJugadores = ['MagoOscuro', 'DragonAzul', 'GuerreroZ'];
console.log('Top de jugadores:', topJugadores)

// Entra un nuevo jugador sin eliminar a nadie
topJugadores.splice(1, 0, "NewPlayer");
console.log('Nueva lista de jugadores:', topJugadores);

// Ahora si el ultimo es eliminado del ranking
const playerLosser = topJugadores.pop();
console.log(`Jugador elimiando: ${playerLosser}`);
console.log('Nuevo top 3:', topJugadores);
console.log('============================================');

// *****************************************************************************

// Ejemplo 7: Limitado de notificaciones
const listaNotificaciones = ['Email', 'Like', 'Update'];
console.log('Lista de notificaicones:', listaNotificaciones);

// Nueva notificacion
listaNotificaciones.push("New message");
console.log('Nueva notificacion:', listaNotificaciones);

// Si excedemos 3, eliminamos la mas antigua (la primera)
if(listaNotificaciones.length > 3) {
  listaNotificaciones.shift();
}

console.log('Notificaciones actualizadas:', listaNotificaciones)
console.log('============================================');

// *****************************************************************************

// Ejemplo 8: Correccion de pasos
// Objetivo: Olvidamos un paso importante en medio de la receta
const listaRecetas = ['Cortar cebolla', 'Freir', 'Servir'];
console.log('Receta que falta un paso:', listaRecetas);

// 1. Olvidamos sasonar antes de freir
listaRecetas.splice(1, 0, "Sasonar");

// 2. Queremos ver solo los pasos de preparacion
const preparacionReceta = listaRecetas.slice(0, 3);

console.log('Receta completa:', listaRecetas);
console.log('Pasos de preparacion:', preparacionReceta)




