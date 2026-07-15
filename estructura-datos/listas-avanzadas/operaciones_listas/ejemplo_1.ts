// Ordenar con .sort() y eliminar con .set() o .filter()

// El método .sort() organiza los elementos de un array. Sin embargo,
// tiene una trampa: por defecto, ordena todo como si fueran textos (orden alfabético).

// Ejemplo 1: Ordenar Strings
const frutasListas = ["Pera", "Manzana", "Ananá"];
console.log("Lista no ordenada:", frutasListas);

frutasListas.sort();

console.log("Lista ordenada:", frutasListas);
console.log('======================================');

// Ejemplo 2: Ordenar numeros
// Si ordenamos números sin ayuda, se vera algo extraño: [1, 10, 2, 20]. 
// Esto pasa porque "10" empieza con "1", así que .sort() lo pone antes que el "2".
// La solución: Usar una función de comparación (a, b) => a - b.

const numerosSinOrden = [10, 5, 80, 1];

// Orden ascendente
numerosSinOrden.sort((a, b) => a - b);
console.log('Orden ascendente:', numerosSinOrden);

numerosSinOrden.sort((a, b) => b - a);
console.log('Orden descendente:', numerosSinOrden);
console.log('======================================');

// Ejemplo 3: ordenar objetos
const usuariosObj = [
  { nombre: "Carlos", edad: 30 },
  { nombre: "Ana", edad: 25 },
  { nombre: "Beto", edad: 35 }
];

usuariosObj.sort((a, b) => a.edad - b.edad);
console.log('User ordenados por edad:', usuariosObj);
console.log('======================================');

// Ejemplo 4: ordenar numeros pero sin cambiar el array original
const arrOrigin = [2,3,6,1,8,4];
const arrOrdenado = [...arrOrigin].sort((a, b) => a - b);

console.log('Lista original:', arrOrigin);
console.log('Lista ordenada:', arrOrdenado);
console.log('======================================');

// Ejemplo 5: ordenar por prioridad
type PrioridadData = "ALTA" | "MEDIA" | "BAJA";

interface TareaObj {
  t: string;
  p: PrioridadData;
}

const prioridadObj = { ALTA: 1, MEDIA: 2, BAJA: 3 };
const tareasPrio: TareaObj[] = [
  { t: "Lavar", p: "BAJA" },
  { t: "Programar", p: "ALTA" },
  { t: "Cocinar", p: "MEDIA" }
];

tareasPrio.sort((a, b) => prioridadObj[a.p] - prioridadObj[b.p]);
console.log('Orden por prioridad:', tareasPrio);
console.log('======================================');

// Ejemplo 6: ordenar strings con acentos
const listaPalabras = ["Zapato", "Árbol", "Avión"];

listaPalabras.sort((a, b) => a.localeCompare('es'));
console.log(listaPalabras);
console.log('======================================');

// ==============================================================================


// Uso del .Set():
// Un Set es una estructura que no permite duplicados. Al convertir un array
// a Set y luego volverlo array, los duplicados desaparecen mágicamente.
// Ejemplo 1:
const ids = [1, 2, 2, 3, 4, 4, 5];
console.log('Ids repetidos:', ids);

const idsUnicos = [...new Set(ids)];

console.log('Ids unicos:', idsUnicos);
console.log('======================================');

// Ejemplo 2: obtener letras unicas de una palabra
const palabraRnd = "Banana";
const letrasUnicas = [...new Set(palabraRnd)];

console.log(`Palabras unicas de ${palabraRnd} son:`, letrasUnicas)
console.log('======================================');

// Ejemplo 3: Union de dos listas sin repetidos
const listaAmigosJohn = ["Ana", "Jose"];
const listaAmigosMaria = ["Jose", "Miguel"];

const amigosNoRepetidos = [...new Set([...listaAmigosJohn, ...listaAmigosMaria])]
console.log('Todos los amigos son:', amigosNoRepetidos);
console.log('======================================');

// Ejemplo 4: verificar si hay duplicados
const listaEntrada = [1, 2, 3, 1, 4, 2];
const tiendaDuplicados = new Set(listaEntrada).size !== listaEntrada.length
console.log('La lista tiene duplicados:', tiendaDuplicados);
console.log('======================================');

// Ejemplo 5: Limpiar categorias de una db
const productosCat = [
  { name: "A", cat: "Tech" },
  { name: "B", cat: "Hogar" },
  { name: "C", cat: "Tech" }
]

const categoriasUnicas = [...new Set(productosCat.map(p => p.cat))];
console.log(categoriasUnicas)
console.log('======================================');


// ==============================================================================


// Uso del .filter() para ordenar
// Ejemplo 1:
const listaABC = ["A", "B", "A", "C", "B"];
console.log('ABC original:', listaABC);

const sinRepetidos = listaABC.filter((valor, indice, self) => {
  return self.indexOf(valor) === indice
})
console.log('ABC sin repetidos:', sinRepetidos);
console.log('======================================');

// Ejemplo 2: filtrar objetos unicos por ID
const usuariosID = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Luis" },
  { id: 1, name: "Ana duplicada" }
];

const unicosPorId = usuariosID.filter((user, idx, self) => 
  idx === self.findIndex((u) => u.id === user.id)
);

console.log('Unicos ID:', unicosPorId);
console.log('======================================');

// Ejemplo 3: Unicidad ignorando mayusculas/minusculas
const arrCorreos = ["juan@test.com", "JUAN@test.com", "ana@test.com"];

const correosLimpios = arrCorreos.filter((email, index, self) => {
  const normalizado = email.toLowerCase();
  return self.findIndex(e => e.toLowerCase() === normalizado) === index;
})
console.log('Los correos son:', correosLimpios);
console.log('======================================');

// Ejemplo 4: quedarse con la ultima version 
const listaVersiones = ["v1", "v2", "v1", "v3"];

const ultimasVersiones = listaVersiones.filter((v, index, self) => {
  return self.lastIndexOf(v) === index;
})

console.log('Las ultimas versiones son:', ultimasVersiones);