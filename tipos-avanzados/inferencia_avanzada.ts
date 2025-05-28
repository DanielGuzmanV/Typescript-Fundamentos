// Inferencia avanzada con "infer":
// Se usa dentro de conditional types para extraer tipos

type ElementosType<T> = T extends (infer U)[] ? U : T;

const arrNombresType: string[] = ['Pablo', 'Pedro', 'Paolo']
const arrEdadesType: number[] = [32, 51, 21];

// Extraemos el tipo de los elementos de cada array
type TipoA = ElementosType< typeof arrNombresType>;
type TipoB = ElementosType< typeof arrEdadesType>;
type TipoC = ElementosType<boolean>;
// boolean no es un array, devolvera "T"

// Usamos los tipos para nuevas variables:
const valorA: TipoA = 'Hola Typescript';
const valorB: TipoB = 150;
const valorC: TipoC = true;

console.log('valor de A:', valorA);
console.log('valor de B:', valorB);
console.log('valor de C:', valorC);




