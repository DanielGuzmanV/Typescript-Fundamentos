// Arrays tipados:
// Podemos especificar el tipo de los elementos dentro de un array:
const numerosArr: number[] = [1,2,3,4,5];
const nombresArr: string[] = ['Antonio','Lucas','Camilo'];
const booleanosArr: boolean[] = [true, false, true];

// Tambien podemos usar la forma generica:
const numberArr: Array<number> = [1,2,3];
const nameArr: Array<string> = ['Ana','Pamela','Rodrigo'];
const boolArr: Array<boolean> = [true, false];

// Tambien podemos hacer uniones de tipos de la forma generica:
const mezcladosArr: Array<number | string> = [1,'dos',3,'cuatro'];

// Tambien podemos escribirlo asi:
const mezclaArr: (string | number)[] = ['uno', 'dos', 3, 4, 'cinco'];


// Tuplas:
// Este es un array con un numero fijo de elementos y tipos especificos
// para cada posicion
const tuplaArr: [string, number] = ['Edad', 30];
const coordenadasArr: [number, number] = [40.7128, -74.0060];
const estadoArr: [string, boolean] = ['activo', true];

// Si excedemos los tipos o la cantidad definida, nos marcara error:
// const errTupla1: [string, number] = ['valor', 'incorrecto'];
// const errTupla2: [number, number] = [1,3,3,3]










