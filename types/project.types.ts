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
  assignedTo: TeamMember[];
  estimatedHours: number;
}

// Tipo de Objeto Raíz: El Proyecto
export interface Project {
  projectId: string;
  name: string;
  description: string;
  priority: ProjectPriority;
  isActive: boolean;
  startDate: string;
  dueDate: string;  
  client: {
    clientName: string;
    contactEmail: string;
  };
  team: TeamMember[];
  stages: {
    stageName: string;
    stageProgress: number;
    tasks: Task[];
  }[];
}