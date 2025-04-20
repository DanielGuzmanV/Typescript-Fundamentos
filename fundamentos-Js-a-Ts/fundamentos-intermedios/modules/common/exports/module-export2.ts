// CommonJs exports:
// Exportamos un objeto con varias funciones:

import { env } from "process";

// Exportamos funciones directas:
module.exports = {
    sumar: (value1: number, value2: number) => value1 + value2,
    restar: (value1: number, value2: number) => value1 - value2,
    multiplicar: (value1: number, value2: number) => value1 * value2,
    numEsPar,
    enviarMensaje,
}

// Funciones externas:
function numEsPar(numb: number): boolean {
    if(numb % 2 !== 0) {
        return false;
    }
    return true;
}

function enviarMensaje():void{
    console.log('Este es un mensaje desde modulo exports')
}
