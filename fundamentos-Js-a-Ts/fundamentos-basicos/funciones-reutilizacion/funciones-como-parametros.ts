// Las funciones pueden pasarse como argumentos a otras funciones
// igual que en Js

// Ejemplo 1:
// Creamos la funcion:
function sld(nombrePerson: string): void{
    console.log(`Hola ${nombrePerson}`);
}

// Creamos la funcion que tendra una funcion como argumento:
function processNm(callback: (nombre: string)=>void): void{
    const varNombre = "Albert";
    callback(varNombre);
}
processNm(sld);
console.log('==================================');

// Ejemplo 2:
// creamos la funcion para que tenga una funcion:
function operSumCallBack(number1: number, number2: number, callback: (val1: number, val2:number)=> number): number {
    return callback(number1, number2);
}

// Realizamos la funcion
let smval = (num1: number, num2: number) => num1 + num2;

let rstlOperSum = operSumCallBack(20, 40, smval);
console.log('Resultado de suma:', rstlOperSum);
console.log('==================================');

// Ejemplo 3:
function operSumCallBack2(number1: number, number2: number, callback: (val1: number, val2:number)=> number): number {
    return callback(number1, number2);
}

// Realizamos la funcion
function mult(num1:number, num2: number) {
    return num1 * num2;
}

let rstlOperSum2 = operSumCallBack2(30, 5, mult);
console.log('Resultado de la multi:', rstlOperSum2);
console.log('==================================');

function operSm(number1: number, number2: number, callback: (valor1: number, valor2: number) => void): void {
    callback(number1, number2); 
}

operSm(2, 3, (val1: number, val2: number): void =>{
    console.log("Resultado:", mult(val1, val2)); 
});




