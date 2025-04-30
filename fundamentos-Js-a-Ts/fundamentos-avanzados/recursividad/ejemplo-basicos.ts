// Recursividad: 
// Tecnica en la que una funcion se llama asi misma para resolver
// un problema que se puede resolver en subproblemas del mismo tipo

// Ejemplo 1: factorial de un numero:
function factorial(num: number): number {
    if(num === 0) {
        return 1;
    }
    console.log('Numero:',num);
    return num * factorial(num - 1);
}
let resultFacto = factorial(5);
console.log('El factorial es:', resultFacto);
console.log('=================================================');


// Ejemplo 2: contar hasta 0
function cuentaRegresiva(value: number): void{
    if(value <= 0) {
        return;
    }
    console.log('El numero es:', value);
    cuentaRegresiva(value - 1);
}
cuentaRegresiva(5);
console.log('=================================================');


// Ejemplo 3: ver si un numero es par o impar:
function numberParImpar(value: number): string{
    if(value < 0) {
        return'El numero no puede ser negativo';
    }
    if(value === 0) {
        return 'El numero es par';
    }
    if(value === 1) {
        return 'El numero es impar';
    }
    return numberParImpar(value - 2);
}

console.log(numberParImpar(10));
console.log(numberParImpar(7));
console.log(numberParImpar(-2));
console.log('=================================================');


// Ejemplo 4: ver si un numero es primo:
function numberEsPrimo(value: number, divisor: number = 2): string {
    if(value < 2) {
        return 'El numero no es primo, es menor a 2';
    } 
    if(value % divisor === 0) {
        return 'El numero no es primo'
    }
    if(divisor > Math.sqrt(value)) {
        return 'El numero es primo';
    }
    return numberEsPrimo(value, divisor + 1)
}

console.log(numberEsPrimo(7));
console.log(numberEsPrimo(1));
console.log(numberEsPrimo(10));
console.log('=================================================');


// Ejemplo 5: ver si una palabra es palindroma:
function esPalindromo(valueString: string) {
    if(valueString.length <= 1) {
        return 'La palabra es palindroma';
    }
    if(valueString[0] !== valueString[valueString.length - 1]) {
        return 'La palabra no es palindroma';
    }
    return esPalindromo(valueString.slice(1, -1));
}
console.log(esPalindromo('oso'));
console.log(esPalindromo('carro'));
console.log(esPalindromo('reconocer'));
console.log('=================================================');


// Ejemplo 6: realizar una funcion fibonacci:
function mostrarFibonacciRecursivo(value: number, listaFibo: number[] = [0, 1]): number[] {
    if (value <= listaFibo.length) {
        return listaFibo.slice(0, value); 
    }
    // Agregamos el siguiente número de Fibonacci a la secuencia
    listaFibo.push(listaFibo[listaFibo.length - 1] + listaFibo[listaFibo.length - 2]);
    console.log(listaFibo);
    return mostrarFibonacciRecursivo(value, listaFibo); // Llamada recursiva
}

console.log('Primeros 5 números de Fibonacci:', mostrarFibonacciRecursivo(5));





