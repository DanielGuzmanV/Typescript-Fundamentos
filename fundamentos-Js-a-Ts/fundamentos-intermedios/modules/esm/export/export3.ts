// ESM: export
// Tambien podemos exportar funciones, variables, objetos, etc

export const varPI: number = 3.1416;
export let arrNombres: string[] = ['Alberto', 'Marco', 'Pedro', 'Jose'];
export let mapaUser = new Map<string, string | number>([
    ['Nombre', 'Daniel'],
    ['email', 'correodeejemplogmail.com'],
    ['age', 23]
]);


type dtUser = {
    nombre: string,
    edad: number,
    ocupacion: string,
}

export const objUser: dtUser = {
    nombre: "Carlos",
    edad: 55,
    ocupacion: "Camionero"
}

export function saludoUser(paramObj: dtUser): string {
    return `Hola soy  ${paramObj.nombre}, estamos usando ESM`;
}

export function ocupacionUser(paramObj: dtUser): void{
    console.log('Su profesion es:', paramObj.ocupacion);
}

// ==========================================================
// Tambien podemos realizar exportaciones por defecto (default)
// estas se hacen solo una vez por archivo y no se necesita llaves {} para llamarlo
export default function verificarPar(num: number):void {
    if( num % 2 === 0) {
        console.log('El numero es par');
    } else {
        console.log("El numero es impar");
    }
}

// Tambien podemos exportar por defecto:
/**
 *  numeros:
 *  export default 42;
 * 
 *  funciones directas:
 *  export default function(a: number, b: number): number {
 *  return a + b;
 *  }
 * 
 *  Objetos:
 *  export default {
 *  nombre: 'MiApp',
 *  version: '1.0.0'
 * };
 */




