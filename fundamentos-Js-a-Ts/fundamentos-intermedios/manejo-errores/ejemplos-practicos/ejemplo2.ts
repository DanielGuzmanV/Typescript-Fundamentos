// Ejemplo practico:
// Verificamos los numeros primos de una lista, los errores que podrian
// ocurrir son:
// - Si el dato no es un primo
// - Si el numero es negativo

// Creamos una excepcion  personalizada:
class CustomPrimoError extends Error {
    name: string;
    constructor(customMessage: string) {
        super(customMessage);
        this.name = 'CustomPrimoError';
    }
}

// Creamos la funcion para verificar si un numero es primo:
function funcionEsPrimo(valueNumber: number): boolean {
    let respuesta: boolean = true;
    if(typeof valueNumber !== 'number') {
        throw new TypeError('El valor debe ser un numero');
    }
    if(valueNumber < 0) {
        throw new CustomPrimoError('No se permiten numeros negativos');
    }
    if(valueNumber < 2) {
        respuesta = false;
    }
    for(let idx = 2; idx < valueNumber; idx++) {
        if(valueNumber % idx === 0) {
            respuesta = false;
        }
    }
    return respuesta;
}

function funcionVerificarPrimo(listNumbers: number[]): void {
    listNumbers.forEach((numbers) => {
        try {
            const resultado = funcionEsPrimo(numbers);
            console.log(numbers, resultado ? 'Es primo': 'No es primo')

        } catch (error) {
            if(error instanceof CustomPrimoError) {
                console.log('Error de numero:', error.message)
                console.log('Error:', error.name)
            } else if(error instanceof TypeError) {
                console.log('Error de tipo:', error.message)
                console.log('Error:', error.name)
            } else {
                console.log('Ocurrio un error desconocia:', error)
            }
        } finally {
            console.log('Analisis de numeros terminados');
        }
    })
}

let numerosArray1: number[] = [1,2,3,4,5,6,7,8,9];
let numerosArray2: number[] = [3,-4,7,-9,5];
let numerosArray3: (string|number)[] = ['Hola', 4,5, 'Mundo', 23, 8];

funcionVerificarPrimo(numerosArray1)
funcionVerificarPrimo(numerosArray2)
// funcionVerificarPrimo(numerosArray3)

