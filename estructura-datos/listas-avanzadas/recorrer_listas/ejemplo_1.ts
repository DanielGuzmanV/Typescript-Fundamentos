import { MOCK_PROJECTS } from "../../../MOCKS/projects.mocks";
// 1. Bucles de control 
// Bucle for
// Ejemplo 1:
type DataTarea = {
  tarea: string;
  complete: boolean;
}

const listTask: DataTarea[] = [
  {tarea: 'Lavar', complete: true},
  {tarea: 'Cocinar', complete: false},
  {tarea: 'Programar', complete: true},
  {tarea: 'Desayunar', complete: true},
  {tarea: 'Caminar', complete: false},
  {tarea: 'Bañarse', complete: true},
]

for(let idx = 0; idx < listTask.length; idx++) {
  let isComplete = listTask[idx].complete
  if(isComplete) {
    console.log(`La tarea completada es: ${listTask[idx].tarea}`)
  }
}

console.log('--------------------------------------------')

// Ejemplo 2:
const listTareas = ['Lavar', 'Cocinar', 'Programar', 'Desayunar', 'Caminar', 'Bañarse'];
for(let idx = 0; idx < listTareas.length; idx ++) {
  let elemento = idx + 1;
  if(elemento % 2 === 0) {
    console.log(`Tarea pares son: ${elemento}: ${listTareas[idx]}`);
  }
}

console.log('--------------------------------------------')

// Ejemplo 3:
for(let idx = 0; idx < MOCK_PROJECTS.length; idx++) {
  console.log(`${idx + 1}. ${MOCK_PROJECTS[idx].name}`)
}

console.log('--------------------------------------------')
// ********************************************************

// Bucle for... of
// Ejemplo 1:
for(const proyecto of MOCK_PROJECTS) {
  if(!proyecto.isActive) continue;
  console.log('ID: ', proyecto.projectId)
  console.log(`Proyecto activo: ${proyecto.name}`)
}

console.log('--------------------------------------------')

// Ejemplo 2:
for(const tarea of listTask) {
  if(!tarea.complete) {
    console.log(`Realizando la tarea de: ${tarea.tarea}`)
  }
}

console.log('--------------------------------------------')

// Bucle forEach()
// Ejemplo 1:
MOCK_PROJECTS.forEach((proyecto, index) => {
  console.log(`Procesando ${proyecto.projectId} en posicion ${index}`)
})

console.log('--------------------------------------------');

// Ejemplo 2:
listTask.forEach((tarea, index) => {
  console.log(`Tarea: ${tarea.tarea} - ${tarea.complete ? "Completada" : "No completada"}`)
})

console.log('--------------------------------------------');

// Bucle while
// Ejemplo 1:
let index = 0;
while(index < listTareas.length) {
  console.log(`While: ${listTareas[index]}`);
  index++;
}

console.log('--------------------------------------------');
// Bucle do while
// Ejemplo 1:
let jindex = 0;
do {
  console.log(`Do-while: ${listTareas[jindex]}`);
  jindex++;
} while(jindex < listTareas.length)
  
console.log('--------------------------------------------');
// *************************************************************************

// Ejercicio 1: Procesador de colas
const pendientes = [...listTask]; // Copia del array para no destruir el original
const listHistorial: string[] = [];

while(pendientes.length > 0) {
  const tareaActual = pendientes.shift();

  if(tareaActual?.complete) {
    listHistorial.push(tareaActual.tarea);
    console.log(`Tarea: ${tareaActual.tarea} procesado`);
  } else {
    console.log(`Omitido por incompleto: ${tareaActual?.tarea}`);
  }
}

console.log('Historial final:', listHistorial);
console.log('Pendientes restantes:', pendientes.length === 0 ? "No hay tareas pendientes" : "Aun quedan tareas")
console.log('--------------------------------------------');

// Ejercicio 2: Limpieza quirurgica
const listTaskCopy = [...listTask]
for(let idx = listTaskCopy.length - 1; idx >= 0; idx--) {
  if(!listTaskCopy[idx].complete) {
    console.log(`Eliminando tarea incompleta: ${listTaskCopy[idx].tarea}`)
    listTaskCopy.splice(idx, 1);
  }
}
console.log('Lista limpia (solo completadas):', listTaskCopy);
console.log('--------------------------------------------');

// Ejercicio 3: Reorganizacion por prioridad
const listPriorizada: string[] = [];

for(const item of listTask) {
  if(item.complete) {
    listPriorizada.push(item.tarea);
  } else {
    listPriorizada.unshift(item.tarea);
  }
}
console.log('Lista de trabajo (Urgentes primero):', listPriorizada);