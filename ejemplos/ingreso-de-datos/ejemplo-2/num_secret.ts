// Adivinar el numero secreto:
// Objetivo:
// El usuario debe adivinar un número secreto generado aleatoriamente 
// entre 1 y 10. El programa le pedirá intentos hasta acertar.

import * as readline from 'readline';

// Creamos la interfaz para leer desde la consola
const interfaz = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// El numero secreto que ira entre 1 y 10
const numSecreto: number = Math.floor(Math.random() * 10) + 1;

// Realizamos la funcion:
function adivinarNumero(): void {
  interfaz.question('Adivina el numero secreto: entre 1 y 10: ', (respuesta: string) => {
    const intento = Number(respuesta); // Convertimos la respuesta en numero

    if(isNaN(intento)) console.log('Por favor ingresa un numero valido.');
    adivinarNumero();

    if(intento < numSecreto) {
      console.log('Muy bajo, intenta de nuevo');
      adivinarNumero();
    } else if(intento > numSecreto) {
      console.log('Muy alto, intenta de nuevo');
      adivinarNumero();
    } else {
      console.log(`Adivinaste el numero secreto: ${numSecreto}`);
      interfaz.close();
    }
  })
}

// Iniciamos la funcion:
adivinarNumero();




