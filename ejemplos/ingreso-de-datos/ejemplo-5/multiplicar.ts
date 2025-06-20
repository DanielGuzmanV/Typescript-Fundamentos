// Tablas de multiplicar:
// El usuario ingresa un numero y el programa muestra su tabla de multiplicar 
// del 1 al 10 en la consola

import * as readline from 'readline';

const interfaz = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// Pedimos al usuario el numero:
function getNumeberMulti(): void {
  interfaz.question('Ingresa un numero para mostrar la tabla de multiplicar:\n', (response) => {
    const valueNumRes = Number(response);

    if(isNaN(valueNumRes)){
      console.log('Ingresa un numero valido');
      getNumeberMulti();
    } else {
      mostrarTabla(valueNumRes);
      interfaz.close();
    }
  });
}

function mostrarTabla(valueNumber: number):void {
  console.log(`\nTabla de multiplicar de: ${valueNumber}`);
  for(let index = 1; index <= 10; index++){
    console.log(`${valueNumber} x ${index} = ${valueNumber * index}`);
  }
}

getNumeberMulti();



