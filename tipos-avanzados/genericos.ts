// Los genericos permiten crear funciones, clases o interfaces que funcionan
//  con multiples tipos sin perder el tipado
// Funcion que retorna un valor, ya sea number o string
function envolverArr<T>(valor: T): T {
  return valor
}
const fnNumber = envolverArr(23);
const fnString = envolverArr('TypeScript');
console.log(fnNumber);
console.log(fnString);
console.log('====================================');


// Funcion que retorna un array, ya sea number o string
function valuesArr<T>(arr: T[]): T[] | undefined{
  return arr
}

let valuesNumberArr: number[] = [1,2,3,4,5];
let valuesStringArr: string[] = ['Hola','Type','Script'];

const responseArr1 = valuesArr(valuesNumberArr);
const responseArr2 = valuesArr(valuesStringArr);
console.log(responseArr1);
console.log(responseArr2);
console.log('====================================');


// Clase generica
class claseCaja<T> {
  private contentido: T;

  constructor(paramValor: T) {
    this.contentido = paramValor;
  }

  obtenerContenido(): T {
    return this.contentido;
  }

}
const cajaNumber = new claseCaja<number>(1234); // Podemos poner el tipo de dato aunque Ts lo infiere
const cajaString = new claseCaja('Genericos');

console.log(cajaNumber.obtenerContenido());
console.log(cajaString.obtenerContenido());


