// Variables:
let numero1:number = 20;
let numero2:number = 10;
let numeroString: string = '20';

// Realizamos la comparacion:
console.log('Comparadores relacionales:');
console.log(numero1, " > ", numero2, (numero1 > numero2));
console.log(numero1, " >= ", numero2, (numero1 >= numero2));
console.log(numero1, " > ", numero1, (numero1 > numero1));
console.log(numero1, " < ", numero1, (numero1 < numero1));
console.log(numero1, " <= ", numero1, (numero1 <= numero1));
console.log("---------------------------------------------");

console.log("Operadores de igualdad (=):");
console.log(numero1, " == ", numero1, (numero1 == numero1));
console.log(numero1, " == ", numero2, (numero1 == numero2));
console.log(numero1, " != ", numero1, (numero1 != numero1));
console.log(numero1, " != ", numero2, (numero1 != numero2));
console.log("---------------------------------------------");

// comparadores (==) y (===):
// En typescript soporta los comparadores == y === como en Js
// Pero, no permite la comparacion con valores de distinto tipo
// como un number con un string, Esto lanzaria un error

let varNumber: number = 5;
let varString: string = '5';

console.log("verificamos el tipo de dato:")
console.log(`${varNumber} es de tipo: ${typeof varNumber}`)
console.log(`${varString} es de tipo: ${typeof varString}`);
console.log("---------------------------------------------");

console.log("Operadores de igualdad (== y ===) convertidos:");
// console.log(varNumber, " == ", varString, (varNumber == varString)); // No compara la igualdad por valor
// console.log(varNumber, " === ", varString, (varNumber === varString)); // No compara la igualdad por identidad(por tipo y valor)
// console.log(varNumber, " !== ", varString, (varNumber !== varString)); // Incluso la negacion no lo compara

// Para evitar estos errores, debemos convertirlos a string o number:
console.log(varNumber, " == ", varString, (varNumber == Number(varString))); 
console.log(varNumber, " === ", varString, (String(varNumber) === varString));


