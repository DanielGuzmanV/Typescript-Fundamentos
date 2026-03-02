// Metodo map() para transformar
// Su función principal es transformar un array en otro nuevo, manteniendo 
// siempre la misma cantidad de elementos.
// map() es inmutable. No cambia el array original, sino que te devuelve uno 
// nuevo con los resultados.

// Ejemplo 1: Transformar numeros
const listNum = [1,2,3,4,5];
const listDobles = listNum.map(num => num * 2);
console.log('La lista de dobles es:', listDobles)
console.log('----------------------------------------');

// Ejemplo 2: Convertir a Mayusculas
const listNombres = ['Marco', 'Pedro', 'Carlos', 'Sebastian'];
const nombresMay = listNombres.map(nombre => nombre.toUpperCase());
console.log('los nombres son:', nombresMay)
console.log('----------------------------------------');

//  Ejemplo 3: Extraer solo una propiedad
const listUsers = [
  {id: 1, name: "Ana"},
  {id: 2, name: "Marcelo"},
  {id: 3, name: "Alberto"},
]

const soloNombres = listUsers.map(user => user.name)
console.log('Nombres de usuarios:', soloNombres)
console.log('----------------------------------------');

// ********************************************************************
// Ejercicio 1: Crear etiquetas de UI
const tareas = ["Lavar", "Cocinar", "Programar"];
const etiquetas = tareas.map((tarea, index) => {
  return `${index + 1}. Tarea: ${tarea}`
})

console.log('Las tareas son:', etiquetas)
console.log('----------------------------------------');

// Ejercicio 2: Limpieza de objetos 
const rawData = [
  { id: "A1", info: "...", status: true, secret: "123" },
  { id: "B2", info: "...", status: false, secret: "456" },
  { id: "C3", info: "...", status: true, secret: "789" },
];

const cleanData = rawData.map(item => ({
  id: item.id,
  isActive: item.status
}))
console.log('Datos limpios:', cleanData);
console.log('----------------------------------------');

// Ejercicio 3: Modificacion selectiva
const tareasOriginales = [
  { desc: "Tarea 1", complete: true },
  { desc: "Tarea 2", complete: false }
]

const tareasConEstado = tareasOriginales.map(tareas => {
  return {
    ...tareas,
    label: tareas.complete ? 'Lista' : 'Pendiente',
    priority: 'Alta'
  }
})
const descTarea = tareasConEstado[0]
const completaTask = tareasConEstado[0].label

console.log('----------------------------------------');
console.log(tareasConEstado);
console.log(`La ${descTarea.desc} esta:`, completaTask);
console.log('----------------------------------------');
console.log(tareasOriginales);