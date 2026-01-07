// ** Acceso y modificación básica **
// 1. Crear y Agregar Elementos (push, unshift, spread)

import { MOCK_PROJECTS } from "../../../MOCKS/projects.mocks";
import { Project, Task, TeamMember } from "../../../types/project.types";

const proyectoActual = MOCK_PROJECTS[0];

// Lista completa del equipo
console.log('== Datos del equipo completo en P-001 ==')
console.log(JSON.stringify(proyectoActual.team, null, 1))
console.log('=========================================');

// Datos de un miembro del equipo:
const equipoLength = proyectoActual.team;
for(let idx = 0; idx < equipoLength.length; idx++) {
  const miembros = proyectoActual.team[idx];

  const user = equipoLength[idx]
  console.log(`Datos de: ${user.name}`)
  console.log(miembros);
}
console.log('=========================================');

// ===================================================================

// A. push() (Añadir al Final)
// Ejemplo 1: Añade uno o más elementos al final del array original.
const nuevoMiembro: TeamMember = {
  id: 'u6',
  name: 'Andres Lopez',
  role: 'Designer'
}

// Miembros antes:
console.log(`Miembros antes en P-001: ${proyectoActual.team.map(value => value.name).join(', ')}`);
console.log(`Total de miembros: ${proyectoActual.team.length}`);
console.log('=========================================');

// Miembros despues:
proyectoActual.team.push(nuevoMiembro); // aqui lo agregamos
console.log(`Miembros despues en P-001: ${proyectoActual.team.map(value => value.name).join(', ')}`);
console.log(`Total de miembros: ${proyectoActual.team.length}`);
console.log('=========================================');

// Ejemplo 2: Crear una Lista de Tareas de Alta Prioridad Asignadas a un Usuario
const userId = 'u2';
const highPriorityTask: string[] = [];
let nameUserHighTask: string =  '';

MOCK_PROJECTS.forEach(project => {
  project.stages.forEach(stage => {
    stage.tasks.forEach(task => {

      const isHighPriority = task.priority === "HIGH";
      const isAssignedToUser = task.assignedTo.some(member => member.id === userId)
      const listUserTask = task.assignedTo.find(value => value.id === userId)
      
      if(isHighPriority && isAssignedToUser) {
        highPriorityTask.push(task.title);
        nameUserHighTask = listUserTask ? listUserTask.name : 'usuario no encontrado'
      }
      
    })
  })
})

console.log(`--Ejemplo intermedio: Tareas HIGH de ${nameUserHighTask} ${userId}--`);
console.log(highPriorityTask);
console.log('=========================================');

// Ejemplo 3: Añadir una Tarea Basada en el Estado del Proyecto
function addTaskToProject(projectId: string, newTask: any) {
  const project = MOCK_PROJECTS.find(p => p.projectId === projectId);

  if(!project || !project.isActive) {
    console.warn(`No se puede añadir tarea. Proyecto ${projectId} no encontrado o inactivo`);
    return;
  }

  // Encontramos la etapa de "Implementacion"
  const implementationStage = project.stages.find(s => s.stageName === 'Implementación')

  if(implementationStage) {
    implementationStage.tasks.push(newTask);
    console.log(`Tarea "${newTask.title}" agregada al proyecto ${project.projectId}`)
  } else {
    const newStage = {
      stageName: 'Implementación',
      stageProgress: 0,
      tasks: [] as any[],
    };
    newStage.tasks.push(newTask)
    project.stages.push(newStage)
    console.log(`Etapa 'Implementación' y tarea "${newTask.title}" creadas en ${projectId}.`);
  }
}

const NEW_USER = {
  id: 'u1',
  name: 'David Martinez',
  role: 'Developer'
}

const NEW_TASK = {
  id: 't10',
  title: 'Revision de dependencias',
  status: 'TO_DO',
  priority: 'LOW',
  estimateHours: 5,
  assignedTo: [NEW_USER],
  description: 'Actualizar paquetes de terceros'
}

console.log('Push condicional')
addTaskToProject('P-001', NEW_TASK)
const newValueTaskData = proyectoActual.stages
console.log(newValueTaskData);
console.log('=========================================');
// ===================================================================


// B. unshift() (Añadir al Principio)
// Ejemplo 1: agregar un nuevo proyecto al principio
const proyectoCritico: Project = {
  projectId: 'P-004', 
  name: 'Parche de Seguridad Crítico',
  description: 'Realizar el parche lo mas antes posible',
  priority: 'HIGH', 
  isActive: true, 
  startDate: '2025-12-10', 
  dueDate: '2025-12-15', 
  client: { clientName: 'Emergencia', contactEmail: '' },
  team: [{ id: 'u1', name: 'Ana Rodríguez', role: 'Manager' }],
  stages: []
}
console.log("\n--- Antes de unshift ---");
console.log(`Primer proyecto: ${MOCK_PROJECTS[0].name}`);
console.log(`Total de proyectos: ${MOCK_PROJECTS.length}`)

MOCK_PROJECTS.unshift(proyectoCritico);
console.log("\n--- Despues de unshift ---");
console.log(`Primer proyecto: ${MOCK_PROJECTS[0].name}`);
console.log(`Total de proyectos: ${MOCK_PROJECTS.length}`)
console.log('=========================================');

// Ejemplo 2: tareas bloqueantes o urgentes
const etapaFrontend = MOCK_PROJECTS[1].stages[1];
const URGENT_BUG: Task = {
  id: 't-911', 
  title: 'CRITICAL: Fuga de datos en QR', 
  status: 'TO_DO', 
  priority: 'HIGH', 
  estimatedHours: 2,
  assignedTo: [], 
  description: 'Se filtran tokens en la consola'
}
console.log('\n--- Ejemplo Intermedio: Bug Urgente ---');
console.log(`La primera tarea antes es: ${etapaFrontend.tasks[0].title}`);

etapaFrontend.tasks.unshift(URGENT_BUG)
console.log(`La primera tarea ahora es: ${etapaFrontend.tasks[0].title}`);
console.log('=========================================');

// Ejemplo 3: sistema de vistos recientemente:
const proyectoAbierto = MOCK_PROJECTS[3];
const proyectoCopia = {...proyectoAbierto};

MOCK_PROJECTS.unshift(proyectoCopia);
console.log('\n--- Ejemplo Avanzado: Proyectos Recientes ---');
console.log(`El proyecto en la cima de la lista es: ${MOCK_PROJECTS[0].name}`);

