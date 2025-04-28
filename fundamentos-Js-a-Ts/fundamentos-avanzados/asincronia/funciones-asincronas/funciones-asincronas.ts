// Funciones asincronas (Usando async - await):

import { resolve } from "path";

// Funcion sin parametros
async function obtenerDatos(): Promise <void> {
    console.log('Obtenido datos...');
    await new Promise <void>(resolve => setTimeout( resolve, 2000));
    console.log('Los datos son: Antonio de 23 años')
}
obtenerDatos();

// Funcion con parametros:
async function realizarOperacion(value1: number, value2: number): Promise <void> {
    console.log('Realizando operacion');
    await new Promise <void>(resolve => setTimeout(resolve, 2000 ));
    const resultado = value1 + value2;
    console.log(`Resultado de la operacion es: ${resultado}`);
}
realizarOperacion(32, 5);

// Funcion externa con una funcion "async":
// Funcion externa que usara una lista como parametro:
let numRandom: number[] = [2,5,1,4,7,3,9,8,6];
function obtenerPares(listNumber: number[]): Promise <number[]> {
    return new Promise ((resolve) => {
        let listaPares = listNumber.filter( (value) => value % 2 === 0);
        setTimeout( () => resolve(listaPares), 4000);
    })
}

// Funcion async:
async function obtenerListPares(listas: number[]): Promise <void> {
    setTimeout( function() {
        console.log('==========================');
        console.log('Obteniendo lista con pares');
    }, 4000 );
    const listaPares = await obtenerPares(listas);
    console.log(`La lista de pares es: ${listaPares}`);
}
obtenerListPares(numRandom);

// ====================================================================
// ====================================================================


// Funciones asincronas (Usando promises ".then")
// Funcion con una promesa y una operacion en setTimeout:
function obtenerResultado(): Promise <number> {
    return new Promise( function(resolve) {
        setTimeout( () => {
            const operacion: number = 29 + 23;
            resolve(operacion);
        }, 5000); 
    } );
}
// Llamamos a la funcion usando (promises .then)
obtenerResultado()
.then(function(response) {
    console.log(`La respuesta es ${response}`)
});

// Parametros en el resolve se setTimeout:
function obtenerNum1(): Promise <number> {
    return new Promise( resolve => {
        let number1: number = 84;
        let number2: number = 32;
        setTimeout( () => resolve(number1 + number2), 5000 );
    });
}
obtenerNum1()
.then( response => console.log('El resultado de resolve es: ', response));

// Parametros en setTimeou (pasando directamente)
function obtenerNum2(): Promise <number> {
    return new Promise( resolve => {
        const number1: number = 23;
        const number2: number = 32;
        setTimeout(resolve, 6000, number1 + number2);
    } )
}

obtenerNum2()
.then( response => console.log('El resultado directo es:', response));

// Usamos solo una promesa, sin funciones:
const onePromises = new Promise <string>( (resolve) => {
    setTimeout( () => {
        resolve('Se realizo una promesa sin una funcion...');
    }, 6000)
})
onePromises.then(response => console.log(response));

// Realizamso una funcion antes del setTimeout y el resultado lo pasamos como 
// argumento al resolve:
function operacionFunction() {
    return new Promise< number>( resolve => {
        const resultado = function(): number {
            return 23 + 52;
        }
        setTimeout( () => resolve(resultado()), 7000);
    })
}

operacionFunction()
.then((response) => console.log('El resultado de la funcion es:', response));

