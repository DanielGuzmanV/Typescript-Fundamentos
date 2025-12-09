// Ejercicio 1: Extracción de Tareas Pendientes
// Objetivo: Obtener una lista única y plana (un solo array) que contenga todas las tareas que se encuentran en estado TO_DO (Pendiente) de todos los proyectos.
// Estructura del Dato:
// Tenemos un Array de Proyectos: Project[].
// Cada Project contiene un Array de Etapas: stages[].
// Cada stage contiene un Array de Tareas: tasks[].
// Necesitamos "aplanar" esta estructura de tres niveles (Project -> Stage -> Task) hasta conseguir un simple array de Task[].

import { MOCK_PROJECTS } from "../../../../MOCKS/projects.mocks";
import { Task } from "../../../../types/project.types";

// Solución 1: Usando flatMap (La forma moderna y eficiente)
const tareasPendientes = MOCK_PROJECTS
  .flatMap(project => project.stages)
  .flatMap(stage => stage.tasks)
  .filter(task => task.status === 'TO_DO')

console.log(`Total de tareas pendientes: ${tareasPendientes.length}`);

if(tareasPendientes.length > 0) {
  console.log('Tareas encontradas:');
  tareasPendientes.forEach(task => {
    console.log(`-[${task.id}] ${task.title} (Prioridad: ${task.priority})`);
  })
} else{
  console.log('Sin tareas encontradas')
}


// Solución 2: Usando reduce (La forma más flexible/clásica)
const tareasPendientesReduce = MOCK_PROJECTS.reduce((acumuladorTareas, project) => {
  project.stages.forEach(stage => {
    stage.tasks.forEach(task => {
      if(task.status === 'TO_DO') {
        acumuladorTareas.push(task);
      }
    })
  })
  return acumuladorTareas;
}, [] as Task[])

console.log('\n-- Usando Reduce --');
console.log(`Total de tareas pendientes (Reduce): ${tareasPendientesReduce.length}`)