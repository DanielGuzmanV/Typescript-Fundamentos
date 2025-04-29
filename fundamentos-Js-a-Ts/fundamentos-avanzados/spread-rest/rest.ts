// REST: Agrupa elementos en un solo parametro
// Se usa en funciones o desestructuracion

// Creamos la funcion:
console.log('REST');
function sumarValores(...valores:number[]) {
    return valores.reduce( (acc, numeros) => acc + numeros, 0);
}

// Pasamos valores directos:
console.log(sumarValores(1,2,3,4));
console.log('=================================');

// Usamos numeros enteros:
let agruparValores = sumarValores(1,2,42,15,51);
console.log('El resultado es:', agruparValores);
console.log('=================================');

const arrayNumbers: number[] = [40, 20, 60];
let sumarArray = sumarValores(...arrayNumbers);
console.log('Sumar array: ', sumarArray);
console.log('=================================');

// Usamos "rest" en destructuring
// Ejemplo en un array destructuring:
const arrayValues: number[] = [10,20,50,30];

let [primerValue, ...resto] = arrayValues;

console.log('Primer numero del array:', primerValue);
console.log('Resto del array:', resto);
console.log('=================================');

// Ejemplo en un objeto destructuring:
type datos = {
    id: number,
    nombre: string,
    edad: number
};

const usuarioValue: datos = {
    id: 101,
    nombre: 'Ana',
    edad: 25
}

let {id, ...info} = usuarioValue;
console.log('Id user:', id);
console.log('Datos user:', info);


