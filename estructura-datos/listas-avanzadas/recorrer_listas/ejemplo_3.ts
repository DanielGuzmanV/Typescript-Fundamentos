// Método .filter()
// Se utiliza para crear un nuevo array que contiene únicamente 
// los elementos que cumplen con una condición específica.

// Ejemplo 1: filtrar numeros mayores a un valor
const listEdades = [
  {nombre: 'David', edad: 12},
  {nombre: 'Dante', edad: 18},
  {nombre: 'Carlos', edad: 25},
  {nombre: 'Marco', edad: 10},
  {nombre: 'Jose', edad: 30},
];
const listaAdultos = listEdades.filter(data => data.edad >= 18);

console.log(listaAdultos);
console.log('--------------------------------------');

// Ejemplo 2: Buscar palabras que contienen una letra
const listaFrutas = ["Manzana", "Pera", "Mango", "Uva"];
const listConM = listaFrutas.filter(fruta => fruta.startsWith("M"));

console.log('La lista es:', listConM);
console.log('--------------------------------------');

// Ejemplo 3: Eliminar valores nulos o vacios
const ListValNull = [null, "Tarea 1", "", null, "Tarea 2", null, "Tarea 3", ""];
const listaLimpia = ListValNull.filter(item => item !== "" && item !== null);

console.log(listaLimpia)
console.log('--------------------------------------');

// ********************************************************************

// Ejercicio 1: Filtrar y medir resultados
const misTareas = [
  { id: 1, priority: "HIGH", done: false },
  { id: 2, priority: "LOW", done: true },
  { id: 3, priority: "HIGH", done: false },
  { id: 4, priority: "HIGH", done: true },
  { id: 5, priority: "LOW", done: true },
  { id: 6, priority: "LOW", done: false },
];

const criticasPendientes = misTareas.filter(t => t.priority === "HIGH" && !t.done)
console.log(`Tienes ${criticasPendientes.length} tareas criticas sin terminar`)
console.log('--------------------------------------');

// Ejercicio 2: Busqueda por ID
const bdUsuarios = [
  { id: "u1", role: "admin" },
  { id: "u2", role: "editor" },
  { id: "u3", role: "admin" }
];

const listAdmins = bdUsuarios.filter(user => user.role === 'admin');

console.log(`El segundo admin es: ${listAdmins[1].id}`)
console.log('--------------------------------------');

// Ejercicio 3: LImpieza 
const logs = ["Error 404", "Log 200", "Error 500", "Log 200", "Error 403"];

const erroresRecientes = logs.slice(-4).filter(log => log.includes("Log"));

console.log(erroresRecientes);
console.log('--------------------------------------');

// ********************************************************************

// Ejemplos combinados:

// Ejemplo 1: Lista de pendientes
const listTaskData = [
  {tarea: 'Lavar', complete: true},
  {tarea: 'Cocinar', complete: false},
  {tarea: 'Programar', complete: true},
  {tarea: 'Desayunar', complete: true},
  {tarea: 'Caminar', complete: false},
  {tarea: 'Bañarse', complete: true},
]

const pendientesReporte = listTaskData
.filter(t => !t.complete)
.map(t => t.tarea.toUpperCase());

console.log('Lo que falta realizar:', pendientesReporte);
console.log('--------------------------------------');

// Ejemplo 2: Formateo de IDs para la interfaz
const badgesCompletados = listTaskData
.filter(t => t.complete)
.map(t => ({
    label: `Listo: ${t.tarea}`,
    color: `green`
  }))

console.log(badgesCompletados[0])
console.log('--------------------------------------');

// Ejemplo 3: Limpieza y numeracion 
const tareasLargas = listTaskData
  .filter(t => t.tarea.length > 6)
  .map((t, index) => `${index + 1}. ${t.tarea}`);

console.log(tareasLargas);
