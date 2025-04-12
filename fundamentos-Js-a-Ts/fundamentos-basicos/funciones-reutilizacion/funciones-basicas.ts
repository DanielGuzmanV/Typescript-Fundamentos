// Tenemso funciones que retornan un dato y funciones que no retornan nada
// En typeScript las funciones pueden tener un tipo de dato o tambien 
// puede inferir el tipo de dato

// Ejemplo funcion que no retorna nada (con tipo de dato):
function saludoVoid(): void{
    console.log('Hola soy una funcion VOID');
}
// Llamamos a la funcion:
saludoVoid();
console.log('=====================================');

// Ejemplo funcion que retorna un valor (con tipo de dato)
// estas pueden retornar tipos de datos como number, string, boolean, etc
// Funcion retorna un numero:
function multiplicar(): number {
    let resultado = 5 * 4;
    return resultado;
}
// Llamamos a la funcion:
console.log('Resultado:', multiplicar());

// Tambien podemos almacenar ese resultado en una variable
// Solo con funciones que retornan algo
let rsltMultiplicacion = multiplicar();
console.log('Resultado en variable:', rsltMultiplicacion)
console.log('=====================================');

// Funcion que retorna un string:
function tipoAnimal(): string {
    return 'Gato';
}
console.log('El animal es:', tipoAnimal());

// Funcion que retorna un boolean:
function isTrue(): boolean {
    return true;
}
console.log('La respuesta es:', isTrue());

console.log('=====================================');

// Funciones inferidos (igual a JS):
function presentacion() {
    console.log("Hola soy Marco y tengo 34 años de edad");
}
presentacion();
console.log('=====================================');

function suma() {
    return 5 + 3;
}
console.log(suma());



