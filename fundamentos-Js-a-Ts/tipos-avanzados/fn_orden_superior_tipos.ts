// Una funcion de orden superior recibe una funcion como argumento
// y devuelve otra funcion 
// Ejemplo 1: (usamos genericos):
function aplicarFunction<T>(valor: T, functionCallback: (arg: T)=> T): T {
  return functionCallback(valor);
}
const valueDoble = (x: number) => x * 2;
console.log('Resultado: ', aplicarFunction(5, valueDoble));
console.log('====================================');


// Ejemplo 2: filtro tipado
function filtrarPares<T>(arrVal: T[], fnCallback: (valor: T) => boolean): T[] {
  return arrVal.filter(fnCallback);
}
const arrNumVal = [1,2,3,4,5,6];
const resultPares = filtrarPares(arrNumVal, (number) => number % 2 === 0);
console.log('Pares:', resultPares);
console.log('====================================');


// Ejemplo 3: Componer funciones
function componerFn<T>(fn1: (value: T) => T, fn2: (value: T) => T): (values: T) => T {
  return (values: T) => fn1(fn2(values))
}
const fnDoble = (num: number) => num * 2;
const fnSumarUno = (num: number) => num + 1;

const resultOperacion = componerFn(fnDoble, fnSumarUno)
console.log('Resultado: ',resultOperacion(3));
console.log('====================================');


// Ejemplo 4: Sin genericos
function procesarFn(array: number[], funtionOp: (values: number) => number): number[] {
  return array.map(funtionOp)
}
const arrNumVal2: number[] = [1,2,3,4,5];
const resultProcess = procesarFn(arrNumVal2, (number) => number * 3);
console.log('Resultado:', resultProcess);
