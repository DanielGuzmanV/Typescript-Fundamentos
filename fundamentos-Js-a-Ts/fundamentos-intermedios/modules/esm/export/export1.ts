// ESM: export
// Es mas facil y sencillo de usar
// Exportamos una funcion:
export const multiplicar = (value1: number, value2: number) => value1 * value2;

// ================================================
// Funciones externas:
function sumaConArg(num1: number, num2:number): void{
    console.log('El resultado es:', num1 + num2);
}

function sumaActive(): number{
    return 94 + 23;
}

function saludoConArg(name: string):string {
    return `Hola ${name}, ahora usamos ESM`;
}

function saludoActive() {
    console.log('Hola a todos soy una exportacion ESM');
}

// =================================================
// Exportacion de funciones:
export const funcionExterna1 = sumaConArg;
export const funcionExterna2 = sumaActive;
export const funcionExterna3 = saludoConArg;
export const funcionExterna4 = saludoActive;



