// Filter():
// Al igual que en Js filter es una funcion que filtra elementos segun una condicion
// Con filter creamos una nueva lista, no modificamos la original

let ltNum: number[] = [10, 23, 34, 45, 56, 67, 78, 89];
let ltFrutas: string[] = ["Manzana", "Banana", "Melon", "Kiwi"];

// Filtramos las frutas que solo llevan A
let frutasConA: string[] = ltFrutas.filter((fruta: string) => fruta.includes("a"));
console.log(frutasConA);
console.log('=========================================');

// Filtramos solo los numeros impares:
let nwLstImpar: number[] = ltNum.filter((num: number) => num % 2 !== 0);
console.log('Los impares son:', nwLstImpar);
console.log('=========================================');

// Filter con una funcion externa:
function lstNumPar(valueNumber: number): boolean {
    return valueNumber % 2 === 0;
}
const nwLstPar: number[] = ltNum.filter(lstNumPar);
console.log('Los pares son:', nwLstPar);
console.log('=========================================');

function esCuarenton(valorEdad: number): boolean {
    return valorEdad >= 40;
}

// Tenemos dos formas de usar el filter con funciones externas:
// Primera forma:
const nwLstAdulto1 = ltNum.filter((num: number) => esCuarenton(num))
// Segunda forma:
const nwLstAdulto2 = ltNum.filter(esCuarenton)

console.log('Forma 1:', nwLstAdulto1);
console.log('Forma 2:', nwLstAdulto2);
console.log('=========================================');

// Retorno de una funcion, dentro de otra funcion
let ltEdades: number[] = [15,45,32,27,40,18,39,10];

function filterEdad(valueLimit: number): (valueList: number[])=> number[] {
    return function (valueList: number[]): number[] {
        return valueList.filter((edad: number) => edad >= valueLimit);
    }
}

let limiteList = filterEdad(30);
const evaluarList = limiteList(ltEdades);

console.log(evaluarList);


