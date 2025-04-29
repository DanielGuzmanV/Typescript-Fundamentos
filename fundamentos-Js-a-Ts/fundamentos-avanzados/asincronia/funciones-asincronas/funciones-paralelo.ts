// Promise.all: para ejecutar en paralelo donde ejecutaremos todas
// las promesas al mismo tiempo

import { resolve } from "path";

// Funcion 1:
function operacion1(): Promise <number> {
    return new Promise( resolve => setTimeout(()=> resolve(23), 1000));
}

// Funcion 2:
function operacion2(): Promise <number> {
    return new Promise( resolve => setTimeout(()=> resolve(51), 2000));
}

// Realizamos la funcion asincrona:
async function ejecutarParalelo(): Promise <void> {
    console.log('Se estan ejecutando en paralelo');
    const [resultado1, resultado2] = await Promise.all([operacion1(), operacion2()]);
    console.log(resultado1);
    console.log(resultado2);
    console.log('Todas las tareas finalizadas');
}
ejecutarParalelo();










