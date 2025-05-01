// Parametros tipados:
// Los parametros de una funcion se pueden tipar para garantizar que reciben el tipo correcto
function funSaludar(nombre: string, edad: number) {
    console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años`);
}
funSaludar('Mateo', 30);

// Valor de retorno tipado:
// Podemos especificar el tipo de dato que una funcion debe devolver
// como ser: "number, string, boolean, object, etc"
function funSumar(value1: number, value2: number): number {
    return value1 + value2;
}
console.log('La suma es:', funSumar(4, 12))

// Funciones con tipo void:
// Usamos void cuando la funcion no retorna ningun valor
function mostrarSms(mensaje: string): void {
    console.log(`El mensaje es: ${mensaje}`);
}
mostrarSms('Cafe con leche')

// Funciones con tipo never:
// Usamos never cuando la funcion nunca retorna porque lanza un error
//  o entra en un bucle infinito
function lanzarSmsErro(mensaje: string): never {
    throw new Error(mensaje);
}

function bucleInfinito(): never {
    while(true) {
        console.log('Ejecutandose sin fin...');
    }
}

