// project.types.ts

// Tipos base para enumeraciones
export type TaskStatus = 'TO_DO' | 'IN_PROGRESS' | 'COMPLETED' | 'BLOCKED';
export type ProjectPriority = 'HIGH' | 'MEDIUM' | 'LOW';

// Tipo de Objeto Anidado 1: Los detalles del usuario
export interface TeamMember {
  id: string;
  name: string;
  role: 'Developer' | 'Designer' | 'Tester' | 'Manager';
}

// Tipo de Objeto Anidado 2: Las tareas (un array dentro de otro objeto)
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: ProjectPriority;
  assignedTo: TeamMember[]; // 🎯 ARRAY de OBJETOS (asignada a varios miembros)
  estimatedHours: number;
}

// Tipo de Objeto Raíz: El Proyecto
export interface Project {
  projectId: string;
  name: string;
  description: string;
  priority: ProjectPriority;
  isActive: boolean;
  startDate: string; // 'YYYY-MM-DD'
  dueDate: string;   // 'YYYY-MM-DD'
  client: { // 🎯 OBJETO dentro del objeto Project
    clientName: string;
    contactEmail: string;
  };
  team: TeamMember[]; // 🎯 ARRAY de OBJETOS (miembros del equipo)
  // 🎯 ARRAY de OBJETOS anidado: la parte más compleja
  stages: {
    stageName: string;
    stageProgress: number; // Porcentaje de completado
    tasks: Task[]; // 🎯 ARRAY de OBJETOS (la lista de tareas de esa etapa)
  }[];
}