// Bucl for (simple):
// Usado para recorrer arrays con control sobre el indice o iterar 
// un numero fijo de veces

// Ejemplo simple:
// Mostrar los numeros del 0 al 5
for(let idx: number = 0; idx <= 5; idx++) {
    console.log('Los numeros son:', idx);
}
console.log('===================================');

// Imprimir numeros impares del 1 al 10 con for:
for(let numero: number = 1; numero <= 10; numero++) {
    if(numero % 2 !== 0) {
        console.log('Numeros impares:', numero);
    }
}
console.log('===================================');

// Ejemplo con listas:
let listPar: number[] = [4,6,2,10,8];
let listImpar: number[] = [1,3,7,9,5];
let listOrden: number[] = [1,2,3,4,5,6,7,8,9,10];
let listDesorden: number[] = [3,1,6,5,8,2,4,10,7,9];

// For pares de lista:
for(let idx: number = 0; idx < listPar.length; idx++) {
    console.log('Pares:', listPar[idx]);
}
console.log('===================================');

// For impares de lista:
for(let idx: number = 0; idx < listImpar.length; idx++) {
    console.log('Impares:', listImpar[idx]);
}
console.log('===================================');

// For impar o par lista Odenada:
for(let idx: number = 0; idx < listOrden.length; idx++) {
    if(listOrden[idx] % 2 === 0) {
        console.log('Es par:', listOrden[idx]);
    } else {
        console.log('Es impar:', listOrden[idx]);
    }
}
console.log('===================================');

// For impar o par lista Desordenada:
for(let idx: number = 0; idx < listDesorden.length; idx++) {
    if(listDesorden[idx] % 2 === 0) {
        console.log('Es par:', listDesorden[idx]);
    } else {
        console.log('Es impar:', listDesorden[idx]);
    }
}
console.log('===================================');

// For para sumar los elementos de una lista:
let tot = 0;
for(let idx: number = 0; idx < listDesorden.length; idx++) {
    tot += listDesorden[idx];
}
console.log('Suma total:', tot);


