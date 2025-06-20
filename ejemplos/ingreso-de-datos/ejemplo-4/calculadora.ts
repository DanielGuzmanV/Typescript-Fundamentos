// Calculadora basica en consola:
// Crear una calculadora que reciba dos numeros y un operador, desde la consola
// y muestre el resultado

import { validateHeaderName } from 'http';
import * as readline from 'readline';

// Creamos la interfaz para leer desde la consola:
const interfaz = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// Variables para las operaciones:
let valueNumberOne: number;
let valueNumberTwo: number;
let valueOperator: string;

// 1. Pedimos el primer numero:
function getFirstNumber():void {
  interfaz.question('Ingrese el primer numero:\n ', (response) => {
    valueNumberOne = Number(response);

    if(isNaN(valueNumberOne)) {
      console.log('No ingresaste un numero valido');
      return getFirstNumber();
    }

    getSecondNumber();
  })
}

// 2. Pedimos el segundo numero:
function getSecondNumber(){
  interfaz.question('Ingresa el segundo numero:\n', (response) => {
    valueNumberTwo = Number(response);
    if(isNaN(valueNumberTwo)) {
      console.log('No ingresaste un numero valido');
      return getSecondNumber();
    }

    getOperator();
  })
}

// 3. Pedimos el operador:
function getOperator() {
  interfaz.question('Ingresa una operacion (+, -, *, /):\n ', (response) => {
    valueOperator = response;

    calculateOperation();
  })
}

function calculateOperation() {
  let valueResultOperation: number;

  switch(valueOperator) {
    case '+':
      valueResultOperation = valueNumberOne + valueNumberTwo;
      break;
    case '-':
      valueResultOperation = valueNumberOne - valueNumberTwo;
      break;
    case '*':
      valueResultOperation = valueNumberOne * valueNumberTwo;
      break;
    case '/':
      if(valueNumberTwo === 0){
        console.log('No se puede dividir entre cero');
        interfaz.close();
        return;
      }
      valueResultOperation = valueNumberOne / valueNumberTwo;
      break;
    default:
      console.log('Operador no valido.');
      interfaz.close();
      return;
  }

  console.log(`Resultado: ${valueNumberOne} ${valueOperator} ${valueNumberTwo} = ${valueResultOperation}`);
  interfaz.close();
}

// Iniciamos el programa:
getFirstNumber();

