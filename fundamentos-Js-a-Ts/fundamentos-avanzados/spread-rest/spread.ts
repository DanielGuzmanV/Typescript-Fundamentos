// SPREAD: expande elementos de un array un objeto en otro
// Spread en arrays
const numerosListas1: number[] = [12,3,44,52];
const numerosListas2: number[] = [...numerosListas1, 5, 6];
console.log(numerosListas2);
console.log('==================================');

// Combinamos dos arrays
const numerosListas3: number[] = [10, 20, 30, 40];
let arrayUnido = [...numerosListas1, ...numerosListas3];
console.log(arrayUnido);
console.log('==================================');

// Spread en objetos
type datosUser = {
    nombre: string,
    edad: number
}
const datosPerson1: datosUser = {
    nombre: 'Alberto',
    edad: 23
}

const datosPerson2 = {
    ...datosPerson1, ciudad: 'Buenos vientos'
};
console.log(datosPerson2);
console.log('==================================');

// Copiar o clonar arrays/objetos:
let frutas: string[] = ['manzana', 'pera', 'frutilla'];

type vehiculoDatos = {
    marca: string,
    precio: number,
}
let vehiculo: vehiculoDatos = {
    marca: 'toyota',
    precio: 10000,
}

const copiaFrutas = [...frutas];
const copiaVehiculo = {...vehiculo};

console.log('Esta es la copia del array:', copiaFrutas);
console.log('Esta es la copia del objeto:', copiaVehiculo);
console.log('-------------------------------------------');

console.log('Array original:', frutas);
console.log('Objeto original:', vehiculo);
console.log('==================================');

// Llamadas en funciones:
function saludarArr(saludo: string, nombre: string, pregunta: string): void {
    console.log(saludo, nombre, pregunta);
}

const arrayArguments: [string, string, string] = ['Hola', 'Marco', 'Como estas?'];
saludarArr(...arrayArguments);

