// ** Acceso y modificación básica **
// 1. Eliminar elementos (pop, shift) "Comentar algunso ejemplos para ver los resultados"
import { MOCK_PROJECTS } from "../../../MOCKS/projects.mocks";
import { TeamMember } from "../../../types/project.types";

// A. pop(): Eliminar al Final
// Ejemplo 1:
const etapaImp = MOCK_PROJECTS[0].stages[0];
console.log(`Tareas iniciales: ${etapaImp.tasks.length}`);

// Eliminamos la ultima tarea 
const tareaCancelada = etapaImp.tasks.pop();

console.log(`Tarea eliminada: ${tareaCancelada?.title}`);
console.log(`Tareas restantes: ${etapaImp.tasks.length}`);
console.log('========================================')

// Ejemplo 2: para ver el resultado comentar las tareas del stageName "Frontend"
const ejemplo2Proyecto = MOCK_PROJECTS[1];
const ultimaEtapa = ejemplo2Proyecto.stages[ejemplo2Proyecto.stages.length - 1]

console.log(`---Verificando etapa: ${ultimaEtapa.stageName}`)

if(ultimaEtapa.tasks.length === 0) {
  const etapaBorrada = ejemplo2Proyecto.stages.pop();
  console.log(`Se elimino la etapa vacia: ${etapaBorrada?.stageName}`)
} else {
  console.log(`No se elimino nada. La etapa tiene ${ultimaEtapa.tasks.length}`)
}
console.log('========================================')

// Ejemplo 3:
const historialCambios = ['Update Name', 'Change Priority', 'Add Task'];
console.log(`Cambios que hay en el historial: ${historialCambios.join(', ')}`)

while(historialCambios.length > 0) {
  const ultimoCambio = historialCambios.pop();
  console.log(`Revirtiendo cambio: ${ultimoCambio}`)
}

console.log(`El historial de cambios hay: ${historialCambios.length}`)
console.log('========================================')

// B. shift(): Eliminar al Inicio
// Ejemplo 1:
const tareasProject = MOCK_PROJECTS[0].stages[0].tasks;
console.log(`Tareas restantes en cola: ${tareasProject.length}`);
const tareaAprocesar = tareasProject.shift();

console.log(`Empezando a trabajar en: ${tareaAprocesar?.title}`);
console.log(`Tareas restantes en ahora: ${tareasProject.length}`);
console.log('========================================')

// Ejemplo 2: 
const equipoP2 = MOCK_PROJECTS[1].team;

let listaEquipo2: string[] = []
for(let idx = 0; idx < equipoP2.length; idx++) {
  listaEquipo2.push(equipoP2[idx].name);
}

console.log(`Los usuarios son: ${listaEquipo2.join(', ')}`)
const exLider = equipoP2.shift();
console.log(`El usuario ${exLider?.name}`)
console.log('========================================')

// Ejemplo 3:
const logs = ['Notif 1', 'Notif 2', 'Notif 3'];
logs.push('Notif 4');

if(logs.length > 3) {
  const antiguaLogs = logs.shift();
  console.log(`Log antiguo descartado: ${antiguaLogs}`)
}