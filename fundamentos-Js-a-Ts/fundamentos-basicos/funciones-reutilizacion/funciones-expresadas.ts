// Funciones expresadas
// Estas funciones se asignan a variables, no tienen hoisting
// Osea no pueden usarse antes de ser declarados

// Ejemplo:
const fnResta = function(): void {
    console.log('Resultado:', (20 - 10));
}
fnResta();
console.log('=================================');

const fnResta2 = () => {
    return 48 - 13;
}
console.log(`El resultado es: ${fnResta2()}`);
console.log('=================================');

// Estas funciones tambien pueden tener parametros:
let fnSum = function(number1: number, number2: number): number {
    return number1 + number2;
}
let rsltFnSum = fnSum(30, 58);
console.log('El resultado es:', rsltFnSum);
console.log('=================================');

let fnSum2 = (number1: number, number2: number) => {
    console.log('Resultado de suma:', (number1 + number2));
}
fnSum2(29, 72);
console.log('=================================');

// Tambien estan las funciones flecha con retorno implicito:
// Ejemplo sin parametro:
let fnMul = (): number => 3 * 2;
console.log('Resultado implicito 1:', fnMul())
console.log('=================================');

let fnMul2 = () => console.log('Resultado implicito 2:',(12 * 4));
fnMul2();
console.log('=================================');

// Ejemplo con parametro
let fnMul3 = (value1: number, value2: number): number => value1 * value2;
console.log('Resultado implicito 3:', fnMul3(42, 10))
console.log('=================================');

let fnMul4 = (value1: number, value2: number) => console.log('Resultado implicito 4:', (value1 * value2))
fnMul4(45, 3);

