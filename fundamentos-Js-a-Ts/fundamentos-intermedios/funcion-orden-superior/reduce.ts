// Reduce():
// Al igual que en Js es otra funcion que reduce los elementos 
// de un array a un solo valor
// Igual que filter este no modifica la lista original, solo crea otra nueva

const lstPrecios: number[] = [10,40,30,20,50]
const arrNum: number[] =[23, 51, 76, 90, 10, 12];

// Sumamos todos los precios de la lista:
const lstRes = lstPrecios.reduce( (acumulador: number, valores: number) => acumulador + valores, 0)
console.log(lstRes);
console.log('======================================');

// Reduce con funcion externa:
function sumar(val1: number, val2: number): number {
    return val1 + val2;
}

let resSum = arrNum.reduce(sumar, 0);
console.log(resSum);
console.log('======================================');

// Retornar una funcion, dentro de otra:
function funcionCrearSumador(valorInicial: number) {
    return function(listArray: number[]) {
        return listArray.reduce( (total, valores) =>  total + valores, valorInicial)
    }
}

let valInit = funcionCrearSumador(10);
const valList = valInit(lstPrecios);

console.log(valList);

