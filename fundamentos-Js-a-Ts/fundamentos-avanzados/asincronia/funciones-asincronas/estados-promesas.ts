// Estados de las promesas
// Ejemplo 1

// Promesa con resolve y reject:
function verificarNumero(value: number): Promise <string> {
    return new Promise<string>( (resolve, reject) => {
        setTimeout ( () => {
            if(value % 2 === 0) {
                resolve('El numero es par: ' + value);
            } else {
                reject('El numero No es par');
            }
        }, 1000 );
    });
}

verificarNumero(24)
    .then( (response) => console.log('respuesta: ', response))
    .catch( (error) => console.log('No se cumplio:', error));

// ========================================================

// Ejemplo 2
// Mostrar los estados de la promesa (pedding, fulfilled, rejected)
let promiseEstado: string = 'pedding';

const nuevaPromesa = new Promise <string>( (resolve, reject) => {
    console.log('Estado:', promiseEstado);

    setTimeout( () => {
        let valueState: boolean = Math.random() > 0.5;

        if(valueState) {
            promiseEstado = 'fulFilled';
            resolve('La operacion fue exitosa');
        } else {
            promiseEstado = 'rejected';
            reject('Hubo un error en la operacion');
        }
        console.log('El estado es:', promiseEstado);
    }, 2000 );
});
nuevaPromesa
    .then(res => console.log('Fulfilled:', res))
    .catch(err => console.log('Rejected:', err));

    // ========================================================

// Ejemplo 3
// Usamos finally cuando la promesa termine:
function operacionAleatoria(): Promise <string> {
    return new Promise <string>( (resolve, reject) => {
        // Usamos una funcion aparte en el setTimeout
        setTimeout( () => randomNumber(resolve, reject), 2000)
    })
}

// Funcion externa que ira en el setTimeout:
function randomNumber(resolve: (value: string)=> void, reject: (value: string)=> void): void {
    let result: number = Math.floor(Math.random() * 10) + 1;
    if(result > 5) {
        resolve('El numero es mayor a 5' + result);
    } else {
        reject('El numero es menor a 5' + result);
    }
}
    
// Llamamos a la funcion:
operacionAleatoria()
.then(response => console.log('Resultado:', response))
.catch(error => console.log('Problema:', error))
.finally(() => console.log('La operacion ha finalizado'));



