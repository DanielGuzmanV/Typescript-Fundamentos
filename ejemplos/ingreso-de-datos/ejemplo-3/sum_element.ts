// Suma de elementos de un array:
// Objetivo:
// Crear un arreglo de numeros, sumar todos los elementos y 
// mostrar el resultado en consola

import * as readline from 'readline';

// Interfaz papra entrada:
const interfaz = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Array donde almacenaremos los numeros:
let numeros: number[] = [];

// Funcion para pedir los numeros:
function pedirNumeros(): void {
  interfaz.question('Ingrese un numero o escriba fin para salir: ', (respuesta: string) => {
    if(respuesta.toLowerCase() === 'fin') {
      sumarNumeros(numeros);
      return;
    }

    const numero = Number(respuesta);
    if(isNaN(numero)){ 
      console.log('Ingrese un numero correcto.')
    } else {
      numeros.push(numero)
    }

    pedirNumeros();
  })
};

// Funcion para sumar numeros del array:
function sumarNumeros(listNumber: number[]): void {
  let suma: number = 0;

  listNumber.forEach((valueNum) => {
    suma += valueNum;
  });

  console.log(`La suma total del array es: ${suma}`)
  interfaz.close();
}

// Iniciamos el proceso:
pedirNumeros();








