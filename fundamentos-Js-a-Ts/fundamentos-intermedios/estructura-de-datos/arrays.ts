// Las listas son similares a Js solo con pequeñas diferencias
// Estas listas pueden ser de tipo: string, number, boolean, etc

// Podemos crear array de dos formas
// Primera forma:
let listaVacia1: string[] = []
let listaVacia2: number[] = []
let listaVacia3: boolean[] = []

// Segunda forma:
let miArr1: string[] = new Array();
let miArr2: number[] = new Array();
let miArr3: boolean[] = new Array();

// Inicializacion de los arrays:
// Al principio paracen iguales, pero la diferencia es que uno ocupa espacios 
// directamente y el otro reserva espacios

// Arrays de la primera forma:
// Estos almacenan datos de acuerdo al tipo de dato que tenga
// Aqui ya estamos ocupando los espacios de los arrays
listaVacia1 = ['Hola mundo'];
listaVacia2 = [23];
listaVacia3 = [true];

// Vemos los datos:
console.log(listaVacia1, listaVacia2, listaVacia3);
console.log('====================================');

// Array de la segunda forma:
// Igual almacenan datos de acuerdo al tipo, pero tambien pueden
// almacenar datos directamente

// Ocupamos espacios directamente, de acuerdo al tipo de dato:
// miArr1 = new Array('Hola', 'Mundo');
// miArr2 = new Array(1,2,3);
// miArr3 = new Array(true, false);

// console.log(miArr1);
// console.log(miArr2);
// console.log(miArr3);

// Aunque vamos a reservar espacios para entender:
// Aqui le dijimos que los arrays tendran una longitud de 5
miArr1 = new Array(5);
miArr2 = new Array(5);
miArr3 = new Array(5);
console.log(miArr1);
console.log(miArr2);
console.log(miArr3);
// Vemos que nos dice que hay 5 espacios vacios
// Ahora ocuparemos esos espacios reservados
console.log('====================================');

miArr1[0] = 'Pablo';
miArr1[1] = 'Carlos';
miArr1[2] = 'Albert';
miArr1[3] = 'Manuel';
miArr1[4] = 'Patricio';
console.log(miArr1);
// Vemos que ocupamos los 5 espacios:
console.log('====================================');

// Tambien ocupara algunos espacios y otros no:
miArr2[0] = 32;
miArr2[1] = 10;
miArr2[3] = 49;
console.log(miArr2);
// Vemos que nos sale:  32, 10, <1 empty item>, 49, <1 empty item> ]
// osea ocupamos 3 espacios pero 2 estan vacios
console.log('====================================');

// Tambien podemos agregar elementos sin importar los espacios que reservamos
miArr1[8] = 'Martin';
miArr1[10] = 'Alvaro';
console.log(miArr1);
// Vemos que sale que tenemos 4 espacios vacios

// No se recomienda usar "new Array()" solo cuando se quiere un array vacio
// de ciertas dimensiones
console.log('====================================');

// Ahora usemos los arrays normales:
let lstAnimales: string[] = ['Perro', 'Pony', 'Gato', 'Vaca']
// Vemos los datos de la lista:
console.log('Los animales son:', lstAnimales);
console.log('====================================');

// Podemos acceder a un dato de la lista de dos maneras:
// con variable:
let amls1 = lstAnimales[0];
let amls2 = lstAnimales[1];

console.log(amls1);
console.log(amls2);
console.log('====================================');

// directamente:
console.log(lstAnimales[2]);
console.log(lstAnimales[3]);
console.log('====================================');

// Podemos agregar mas datos a la lista:
lstAnimales[4] = 'Tigre';
lstAnimales[5] = 'Caballo';
console.log(lstAnimales);
console.log('====================================');

// Tener cuidado al agregar valores incorrectos o que no existen
// Ya que agregaremso espacios que no se ocuparan y estos daran undefined
lstAnimales[10] = 'Alpaca';
console.log(lstAnimales);
console.log('====================================');

console.log(lstAnimales[7]);
// Vemos que sale undefined
console.log('====================================');

// Verificamos el tipo de dato:
console.log('El array es de tipo:', typeof lstAnimales);
console.log('====================================');

// Vemos la longitud de la lista:
console.log('La longitud es de:', lstAnimales.length);
console.log('====================================');

// Tambien podemos agregar Objetos a las listas:
type Persona = {nombre: string, edad: number};

const lstPersona: Persona[] = [
    {nombre: 'Ana', edad: 42},
    {nombre: 'Pedro', edad: 25},
    {nombre: 'Carlos', edad: 32},
];
console.log(lstPersona);
console.log('====================================');

// Tambien podemos agregar funciones (Sin parametros):
const lstAcciones: (()=>void) [] = [
    ()=> console.log('Hola'),
    ()=> console.log('Mundo'),
];
console.log(lstAcciones[0]());
console.log(lstAcciones[1]());
console.log('====================================');

// Tambien funciones con parametros:
const lstAccionParam: ((num: number)=> number)[] = [
    (paramNumber) => paramNumber * 2,
    (paramNumber) => paramNumber + 10,
];
console.log('El doble de 10 es:',lstAccionParam[0](10));
console.log('La suma es:',lstAccionParam[1](90));


console.log('====================================');

// Y tambien arrays dentro de arrays:
const LstMatriz: number[][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
console.log(LstMatriz);






