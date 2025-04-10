// Comentarios en linea

/**
 * Comentarios
 * en 
 * bloques
 */

// ============================================

// Declaracion de variables con tipo de dato:
var varName: string = 'Marco';
let varAge: number = 23;
const isDeveloper: boolean = true;

console.log(`Hola soy ${varName}`);
console.log(`tengo ${varAge} años`);
console.log(`Es programador: ${isDeveloper}`);
console.log('========================================');

// Declaracion de variables sin tipo de dato (Ts lo infiere)
let nombre = "Arturo";
let edad = 45;
let isAlive = true;

// Verificamos:
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof isAlive);


// Aunque intentemos cambiar el dato de las variables no se podra, nos saldra un error:
// nombre = 23;
// edad = 'Hola mundo';
// isAlive = 42;
console.log('========================================');

// Tambien tenemos los tipos: any, unknown, null, undefined
// Any: permite cualquier tipo de dato
let sinTipo: any = 'No tengo tipado';
sinTipo = 123;
sinTipo = true;
sinTipo = [1,2,3];
// Como vemos "sinTipo" puede ser "number, booleano o array"
// No se recomienda usar "any", solo en casos muy especificos
console.log(sinTipo);
console.log('========================================');

// Unknown: como "any" pero mas seguro, ya que obliga a verificar el tipo antes de usarlo
let valor: unknown = 'Hola mundo';

// Si intentamos realizar un ".toUpperCase()" saldra un error
// valor.toUpperCase();

// Primero verificamos el tipo antes de usarlo:
if(typeof valor === 'string') {
    console.log(valor.toUpperCase()); // Ahora si nos dejara usar (.toUpperCase())
}
// Es mejor usar "unknown" que "any" cuando no sabes que tipo sera
console.log('========================================');

// Null y Undefined: ambos representan ausencia de valor, pero hay diferencias
// undefined: una variable no fue inicializada
// null: una variable fue inicializada intencionalmente con "nada"

let varIndefinida: undefined = undefined;
let varNula: null = null;

// Uso real:
// Puede tener un string o estar vacio a proposito
let nombreUser: string | null = null;

// Aun no se define la variable
let edadUser: number | undefined = undefined;

// Tambien se puede inferir por defecto:
let ciudad; // Este seria un "any"
console.log(ciudad); // Y aqui saldria "undefined"


console.log('========================================');

// Nota:
// En Typescript tambien estan los alcances de las variables let y var:
// var: tiene ambito de funcion y puede ser redeclarada
// let: tiene ambito de bloque y no se puede redeclarar
// const: tambien tiene ambito de bloque, pero su valor no puede cambiar

if(true) {
    var datos1 = 23;
}
console.log('Alcance de var:', datos1);

if(true) {
    let datos2 = 54;
    const pi = 3.1416;
}

// En ambos casos nos saldra error:
// console.log('Alcance de let:', datos2);
// console.log('Alcance de const:', pi);
console.log('========================================');

// ..............................................
// Al igual que en JS podemos darle uso al String:
// Concatenacion de string:
let miNombre: string = 'Alberto';
let saludo = 'Hola, ' + miNombre;
console.log('Concatenacion de string:',saludo);

// Longitud del string:
console.log('La longitud es:', saludo.length);

// Caracteres del string:
console.log('Primer caracter es:', saludo[0]);
console.log('Ultimo caracter es:', saludo[12]);
console.log('========================================');

// Metodos comunes del string similares igual que JS:
console.log(saludo.toUpperCase()); // Convierte todo a mayuscula
console.log(saludo.toLowerCase()); // Convierte todo en minuscula
console.log(saludo.indexOf('Hola')); // Busca en que posicion esta "Hola"
console.log(saludo.indexOf('Alberto')); // Busca en que posicion esta "Alberto"
console.log(saludo.indexOf('Mundo')); // Como la palabra no existe da -1
console.log(saludo.slice(0, 10)); // Nos deja con las palabras del "0 al 10"
console.log(saludo.replace("Alberto", "Antonio")); // Reemplazamos el nombre "Alberto"  por "Antonio"


