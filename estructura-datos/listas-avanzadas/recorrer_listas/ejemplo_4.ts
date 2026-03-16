// Metodo .Reduce()
// El método reduce() es el más versátil de todos. A diferencia de map o filter, 
// su objetivo es procesar todo el array para devolver un único valor 
// (un número, un objeto, un string o incluso otro array)

// Ejemplo 1: Sumar numeros
const listPrecios = [10, 20, 30, 40];

const varTotal = listPrecios.reduce((acumulador, precioActual) => {
  return acumulador + precioActual
}, 0) // El 0 al final es el valor inicial del acumulador

console.log('Lista de precios:', listPrecios);
console.log('La suma total es:', varTotal);
console.log('===============================================');

// Ejemplo 2: Crear una frase
const listaPalabras = ["JavaScript", "es", "genial"];

const frase = listaPalabras.reduce((acc, valor) => `${acc} ${valor}`)

console.log('Lista de palabras:', listaPalabras);
console.log('La frase es:', frase);
console.log('===============================================');

// ******************************************************

// Ejercicio 1: Sumar horas estimadas
const tareasConTiempo = [
  { tarea: 'Lavar', horas: 2 },
  { tarea: 'Cocinar', horas: 1 },
  { tarea: 'Programar', horas: 5 }
];

const totalHoras = tareasConTiempo.reduce((acc, t) => acc + t.horas, 0);
console.log(`Tiempo total estimado: ${totalHoras} horas.`)
console.log('===============================================');

// Ejercicio 2: Contar ocurrencias
const newListTask = [
  {tarea: 'Lavar', complete: true},
  {tarea: 'Cocinar', complete: false},
  {tarea: 'Programar', complete: true},
  {tarea: 'Desayunar', complete: true},
  {tarea: 'Caminar', complete: false},
  {tarea: 'Bañarse', complete: true},
]

const reporteTareas = newListTask.reduce((acc, t) => {
  if(t.complete) {
    acc.completadas++;
  } else {
    acc.pendientes++;
  }
  return acc;
}, {completadas: 0, pendientes: 0})

console.log(reporteTareas);
console.log('===============================================');

// Ejercicio 3: Filtro + Map en un solo paso
const nombresCompletados = newListTask.reduce((acc, t) => {
  if(t.complete) {
    acc.push(t.tarea)
  }

  return acc;
}, [] as string[])

console.log('Lista de tareas completadas:', nombresCompletados);



