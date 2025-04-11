// Bucle while y do while
// Cuando se usa este tipo de bucles nunca olvidarse el ingrementador
// asi evitamos un loop infinito

// Bucle while
// Ejemplo: mostrar los numeros del 1 al 5:
let aggregator1: number = 1;
let numberLimit: number = 5;
while(aggregator1 <= numberLimit) {
    console.log(aggregator1);
    aggregator1++
}
console.log('=================================');

// Mostrar los numeros pares e impares:
let aggregator2: number = 1;
while(aggregator2 <= 10) {
    if(aggregator2 % 2 === 0) {
        console.log('Numero par:', aggregator2)
    } else {
        console.log('Numero impar:', aggregator2)
    }
    aggregator2++;
}
console.log('=================================');

// Bucle do while 
// Ejemplo basico, primero imprime luego evaluacion la condicion:
let numeroDato: number = 15;
let numeroMax: number = 15;
do {
    console.log('Primera ejecucion, esperando siguiente...');
} while (numeroDato < numeroMax)

// Numeros pares e impares usando do while:
let aggregator3 = 1;
do {
    if(aggregator3 % 2 === 0) {
        console.log('DoWhile par:', aggregator3);
    } else {
        console.log('DoWhile impar:', aggregator3);
    }
    ++aggregator3
} while(aggregator3 <= 10);





