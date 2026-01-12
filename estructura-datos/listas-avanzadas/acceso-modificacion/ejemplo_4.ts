// ** Acceso y modificación básica **
// 1. Cambiar valores y medir tamaño con .length
import { MOCK_PROJECTS } from "../../../MOCKS/projects.mocks";

// CAMBIO DE VALORES:
// A. Asignacion directa por indice (arr[i] = newValue)
// console.log(`Nombre antiguo: ${MOCK_PROJECTS[1].name}`)
// MOCK_PROJECTS[1].name = "Pasarela de Pagos Global";
// console.log(`Nombre actualizado: ${MOCK_PROJECTS[1].name}`)
// console.log('========================================');

// B. Modificacion de propiedades en objetos anidados
// console.log(`Progreso de etapa inicial: ${MOCK_PROJECTS[0].stages[1].stageProgress}%`)
// MOCK_PROJECTS[0].stages[1].stageProgress = 100;
// console.log(`Progreso de etapa final: ${MOCK_PROJECTS[0].stages[1].stageProgress}%`)
// console.log('========================================');

// ======================================================================

// MEDIR TAMAÑO CON .LENGTH:
// A. Uso Estándar: Conteo de Elementos
// console.log(`Elementos de Project-MOCK son: ${MOCK_PROJECTS.length}`)
// console.log('========================================');

// B. El "Truco" de la Mutación: Truncar el Array
// Si le asignas un valor menor al actual, eliminarás permanentemente los elementos sobrantes.
// console.log(`Longitud no truncada: ${MOCK_PROJECTS.length}`)
// MOCK_PROJECTS.length = 2;
// console.log(`Longitud truncada: ${MOCK_PROJECTS.length}`)
// console.log(`Verificamos: ${MOCK_PROJECTS[2]}`)
// console.log('========================================');

// C. Vaciar un array instantaneamente
// Si asignas 0 a la propiedad length, el array se vacía por completo de forma inmediata.
// console.log(`Array sin cambios: ${MOCK_PROJECTS}`)
// MOCK_PROJECTS.length = 0;
// console.log(`Array con cambios: ${MOCK_PROJECTS}`)
// console.log('========================================');

// D. Relacion con el acceso al ultimo elemento:
// Forma antigua
const ultimoElemento = MOCK_PROJECTS[MOCK_PROJECTS.length - 1].name;
console.log(`El ultimo elemento antiguo es: ${ultimoElemento}`)

// Forma moderna
const ultimoMOCK = MOCK_PROJECTS.at(-1)?.name;
console.log(`El ultimo elemento moderno es: ${ultimoMOCK}`)