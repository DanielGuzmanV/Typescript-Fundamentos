// Recursidad:
// Ejemplos intermedios

// Ejemplo 1: sumar elementos de un array:
function sumarArr(argArray: number[]): number {
    if(argArray.length === 0) return 0;
    return argArray[0] + sumarArr(argArray.slice(1));
}
const resultaArr = sumarArr([1,2,3,4]);
console.log('La suma es:', resultaArr);
console.log('=========================================');

// Ejemplo 2: sumar elementos arrays anidados
// Usamos un Type recursivo para realizar la suma:
type AnidarNumArr = number | AnidarNumArr[];

function sumaProfunda(listaArr: AnidarNumArr): number {
    if(typeof listaArr === 'number') {
        return listaArr;
    }

    let total = 0;
    for(const elemento of listaArr) {
        total += sumaProfunda(elemento);
    }
    return total;
}

const resultSuma = sumaProfunda([1, [2,3], [4, [5]]]);
console.log('resultado:', resultSuma);







