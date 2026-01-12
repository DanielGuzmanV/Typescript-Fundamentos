// ** Acceso y modificación básica **
// 1. Acceder por índice (arr[0], .at(), .length)?

import { MOCK_PROJECTS } from "../../../MOCKS/projects.mocks";

// A. Acceso por indice tradicional arr[i]
// Accedes a un elemento indicando su posición (empezando desde 0) y si el índice no existe, devuelve undefined
const primerProyecto = MOCK_PROJECTS[0]; // Accedemos al primer proyecto
console.log(primerProyecto.name);
console.log('========================================');

// B. Acceso moderno con .at()
// Su gran ventaja es que permite índices negativos para contar desde el final hacia atrás.
const segundaEtapa = MOCK_PROJECTS.at(0)?.stages.at(0)
console.log(`Primer etapa: ${segundaEtapa?.stageName}`)

const ultimaEtapa = MOCK_PROJECTS.at(0)?.stages.at(-1)
console.log(`Utlima etapa: ${ultimaEtapa?.stageName}`)
console.log('========================================');

// C. Medir con .length
// Propiedad que devuelve la cantidad de elementos en el array.
const cantidadProyectos = MOCK_PROJECTS.length;
console.log(`Hay ${cantidadProyectos} proyectos en total`)

// D. Seguridad con Optional Chaining (?)
// Codigo con riesgos si el indice 5 no existe:
const nombreProjects = MOCK_PROJECTS[5].name;

// Codigo sin riesgos, si el indice 5 no existe retorna undefined
const nombreSeguro = MOCK_PROJECTS[5]?.name;

// Combinacion 
const nombreProjectsEnd = MOCK_PROJECTS.at(-1)?.name;