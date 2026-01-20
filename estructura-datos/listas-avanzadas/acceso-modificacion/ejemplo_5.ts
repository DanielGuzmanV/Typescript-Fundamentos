// ** Acceso y modificación básica **
// 1. Cortar con slice, modificar con splice

import { MOCK_PROJECTS } from "../../../MOCKS/projects.mocks";

// A. slice() Inmutable - No cambia el original
// Crea una copia superficial (shallow copy) de una porción del array dentro de un nuevo objeto array. 
// El array original permanece intacto.
// Sintaxis: array.slice(inicio, fin)
// inicio: Índice donde empieza (incluido).
// fin: Índice donde termina (no incluido).
console.log('Uso del SLICE:')
const primerPagina = MOCK_PROJECTS.slice(0, 2);

console.log(`Proyectos en pagina 1: ${primerPagina.length}`);
console.log(`Proyectos totales (arr. Original): ${MOCK_PROJECTS.length}`);
console.log('===========================================');

// Ejemplo 1: (mostrar proyectos)
const listaProyectos = ['P1', 'P2', 'P3', 'P4', 'P5',];

const fotoProyectos = listaProyectos.slice(0, 2);

console.log(`Hay '${fotoProyectos.length}' proyectos y son: ${fotoProyectos.join(', ')}`);
console.log(`Lista original sin cambios: ${listaProyectos.join(', ')}`)
console.log('===========================================');

// Ejemplo 2: ultimos ganadores
const listaEquipos = ['Ana', 'Pedro', 'Carmen', 'David'];
const ultimosDosEquipos = listaEquipos.slice(-2); // -2 significa = cuenta 2 desde el final
console.log(`Los ultimos ${ultimosDosEquipos.length} son: ${ultimosDosEquipos.join(', ')}`)
console.log('===========================================');

// Ejemplo 3: Capia de seguridad
const listaDatosOriginales = ['Dato1', 'Dato2', 'Dato3', 'Dato4', 'Dato5']
const copiaSegura = listaDatosOriginales.slice(); // Ni no se pasa numeros, se copia todo el array

console.log(`Esta es la copia de la lista: ${copiaSegura.join(', ')}`)
console.log(`Esta es la lisa original: ${listaDatosOriginales.join(', ')}`)
console.log('===========================================');

console.log('*******************************************');


console.log('Uso del SLICE:')
// B. splice() Mutable - Cambia el original
// Cambia el contenido de un array eliminando elementos existentes y/o 
// agregando nuevos elementos en cualquier posición.
// Sintaxis: array.splice(inicio, cantidadAEliminar, item1, item2, ...)
// inicio: Índice donde comenzar a cambiar.
// cantidadAEliminar: Cuántos elementos quitar (0 si solo quieres insertar).
// item1, ...: Elementos a agregar (opcional).
const etapaFrontProject = MOCK_PROJECTS[1].stages[1]

console.log(`Tareas restantes en la etapa: ${etapaFrontProject.tasks.length}`)
const tareaEliminada = etapaFrontProject.tasks.splice(0,1);

console.log(`Tarea eliminada: ${tareaEliminada[0].title}`);
console.log(`Tareas restantes en la etapa: ${etapaFrontProject.tasks.length}`)
console.log('===========================================');

// Ejemplo 1: Eliminar en medio
const equipoProyecto = ['Marco', 'Alberto', 'Jose', 'Carlos'];
console.log(`Equipo: ${equipoProyecto.join(', ')}`)

// Vamos al indice 1 y quitamos el elemento 1
const eliminarMiembro = equipoProyecto.splice(1, 1)

console.log(`Miembro eliminado del equipo: ${eliminarMiembro}`)
console.log(`Equipo actualizado: ${equipoProyecto.join(', ')}`)
console.log('===========================================');

// Ejemplo 2: Reemplazar un jugador
const nuevoJugador = equipoProyecto.splice(1, 1, 'Sebastian');
console.log(`El jugador que se quito es: ${nuevoJugador}`);
console.log(`Reemplazo de un miembro: ${equipoProyecto.join(', ')}`);
console.log('===========================================');

// Ejemplo 3: Insertar sin borrar
const listaPersonas = ['Persona A', 'Persona C'];
console.log(`Lista de peronas: ${listaPersonas.join(', ')}`)

// Ir al indice 1, quitar 0 elementos y poner a 'Persona B'
listaPersonas.splice(1, 0, 'Persona B');
console.log(`Lista de personas actualizada: ${listaPersonas.join(', ')}`)
console.log('===========================================');

// Ejemplo 4: MOver un elemento de una posicion a otra
const listaTareas = ['Tarea A', 'Tarea B', 'Tarea C'];
console.log('Lista de tareas: ' + listaTareas.join(', '))

const tareaMovida = listaTareas.splice(2, 1)[0];
console.log(`Tarea removida: ${tareaMovida}`)

listaTareas.splice(0, 0, tareaMovida)
console.log(`Lista de tareas cambiada: ${listaTareas.join(', ')}`)
