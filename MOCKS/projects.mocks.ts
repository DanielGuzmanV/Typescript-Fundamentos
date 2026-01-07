import { Project, ProjectPriority, TaskStatus, TeamMember } from '../types/project.types';

const U_MARIA: TeamMember = { id: 'u4', name: 'María Vaca', role: 'Tester' };
const U_DAVID: TeamMember = { id: 'u5', name: 'David Roca', role: 'Developer' };

export const MOCK_PROJECTS: Project[] = [
  // Proyecto 1: Complejidad alta (múltiples etapas y tareas, diferentes statuses)
  {
    projectId: 'P-001',
    name: 'Migración a TypeScript',
    description: 'Actualizar todo el codebase a TS para mejorar el tipado.',
    priority: 'HIGH',
    isActive: true,
    startDate: '2025-10-01',
    dueDate: '2025-12-31',
    client: { clientName: 'Interno', contactEmail: 'devops@company.com' },
    team: [{ id: 'u1', name: 'Ana Rodríguez', role: 'Manager' }, { id: 'u2', name: 'Luis Pérez', role: 'Developer' }],
    stages: [
      {
        stageName: 'Implementación',
        stageProgress: 30,
        tasks: [
          {
            id: 't2', title: 'Tipar Módulos de Login', status: 'IN_PROGRESS', priority: 'HIGH', estimatedHours: 20, 
            assignedTo: [{ id: 'u1', name: 'Ana Rodríguez', role: 'Manager' }, { id: 'u2', name: 'Luis Pérez', role: 'Developer' }],
            description: 'Revisar interfaces de autenticación'
          },
          {
            id: 't3', title: 'Tipar Componentes de UI', status: 'TO_DO', priority: 'MEDIUM', estimatedHours: 15, 
            assignedTo: [], 
            description: 'Revisar tipado en formularios'
          },
        ],
      },
      {
        stageName: 'Testing',
        stageProgress: 0,
        tasks: [
          {
            id: 't5', title: 'Test de Integración', status: 'TO_DO', priority: 'HIGH', estimatedHours: 8,
            assignedTo: [U_MARIA],
            description: 'Crear suite de pruebas E2E'
          },
        ],
      },
    ],
  },
  
  // 2. Proyecto 'MEDIUM' (P-002) - Focus en COMPLETED y BLOCKED
  {
    projectId: 'P-002',
    name: 'Integración de Pagos Móviles',
    description: 'Añadir QR y otros métodos de pago locales.',
    priority: 'MEDIUM',
    isActive: true,
    startDate: '2025-11-15',
    dueDate: '2026-01-30',
    client: { clientName: 'Servicios Bancarios S.A.', contactEmail: 'contacto@bancosv.com' },
    team: [U_DAVID, U_MARIA],
    stages: [
      {
        stageName: 'Backend',
        stageProgress: 100,
        tasks: [
          {
            id: 't6', title: 'Implementación de API de QR', status: 'COMPLETED', priority: 'HIGH', estimatedHours: 40,
            assignedTo: [U_DAVID],
            description: 'Conexión exitosa con el endpoint bancario'
          },
        ],
      },
      {
        stageName: 'Frontend',
        stageProgress: 50,
        tasks: [
          {
            id: 't7', title: 'Diseño de Interfaz de Pago', status: 'IN_PROGRESS', priority: 'MEDIUM', estimatedHours: 10, 
            assignedTo: [U_DAVID, U_MARIA],
            description: 'Crear componente de selección de pago'
          },
          {
            id: 't8', title: 'Validación legal', status: 'BLOCKED', priority: 'LOW', estimatedHours: 5, 
            assignedTo: [U_MARIA],
            description: 'Esperando aprobación de términos y condiciones'
          },
        ],
      },
    ],
  },

  // 3. Proyecto 'LOW' (P-003) - Focus en LOW Priority e Inactivo
  {
    projectId: 'P-003',
    name: 'Refactorización de CSS',
    description: 'Limpieza de estilos antiguos y migración a CSS Modules.',
    priority: 'LOW',
    isActive: false,
    startDate: '2026-02-01',
    dueDate: '2026-03-30',
    client: { clientName: 'Interno', contactEmail: 'design@company.com' },
    team: [{ id: 'u3', name: 'Marta Gómez', role: 'Designer' }],
    stages: [
      {
        stageName: 'Análisis',
        stageProgress: 0,
        tasks: [
          {
            id: 't9', title: 'Inventario de Clases', status: 'TO_DO', priority: 'LOW', estimatedHours: 12,
            assignedTo: [{ id: 'u3', name: 'Marta Gómez', role: 'Designer' }],
            description: 'Contar todas las clases CSS usadas'
          },
        ],
      },
    ],
  },
];