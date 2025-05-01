// Tipos primitivos en Typescript:
// String:
let nombreValue: string = 'Lucia'
// ================================================================

// Number:
let edadValue: number = 23;
let temperatura: number = 23.5;
// ================================================================

// Boolean:
let esActivo: boolean = true;
let tienePermiso: boolean = false;
// ================================================================

// Null y undefined:
// Estos se usan como valores de ausencia o inicializacion vacia
let datosValue1: null = null;
let datosValue2: null;
let resultadoValue1: undefined = undefined;
let resultadoValue2: undefined;
// ================================================================

// Any:
// Este desactiva el chequeo de tipos
let valorDato: any = 20;
valorDato = 'Hola';
valorDato = true;
// ================================================================

// Unknown:
// Es de tipo desconocido, que es mas seguro que any:
let entradaValue: unknown = 34;
entradaValue = 'Texto';

// Se requiere verificacion antes de usarlo
if(typeof entradaValue === 'string') {
    console.log(entradaValue.toUpperCase());
}
// ================================================================

// Void:
// Se usa en funciones que no retornan nada
function fnSaludar(): void{
    console.log('Hola mundo');
}
fnSaludar();
// ================================================================

// Never:
// Se usa en funciones que nunca terminan, normalmente en errores o bucles infinitos
function lanzarError(mensaje: string): never {
    throw new Error(mensaje);
}

function bucleInfinit(): never {
    while(true) {}
}
// ================================================================


// Any vs Unknown:
// any:
// - Desactiva por completo el tipado
// - Se puede asignar cualquier valor y luego usarlo sin restricciones
// - No requiere verificacion
let valorAny: any = 'Hola any';
console.log(valorAny.toUpperCase()); // No da error, aunque el tipo es dinamico

valorAny = 123;
console.log(valorAny); // Error en tiempo de ejucion, pero TS no lo advierte

// unknown:
// - Tambien acepta cualquier tipo de valor, pero no permite usarlo directamente
//   hasta verificar su tipo 
// - Es mas seguro que any, ya que fuerza el uso de "type guardas" antes de
//   manipular el valor
let valorUnknown: unknown = 'Hola unknown';
// console.log(valorUnknown.toUpperCase()); // Error, el compilador no sabe si tiene ese metodo

if(typeof valorUnknown === 'string') {
    console.log(valorUnknown.toUpperCase()); // Solo permite despues del type check
    
}






