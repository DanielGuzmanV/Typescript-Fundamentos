// Ejemplo 1 de "CodeWars"
// Cree una función con dos argumentos que devolverá una matriz 
// de los primeros múltiplos de. n, x
// Supongamos que tanto el número dado como el número de veces 
// que se debe contar serán números positivos mayores que . 0

// Devuelve los resultados como una matriz o una lista ( dependiendo del lenguaje ).

// Ejemplos:
// x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
// x = 2, n = 5  --> [2,4,6,8,10]

function numerosMultiplos(x: number, n:number) {
  let result: number[] = [];
  if(x <= 0 || n <= 0) return [];
  for(let value = 1; value <= n; value++) {
    result.push(value * x);
  }
  return result;
}
console.log(numerosMultiplos(2, 5));
console.log(numerosMultiplos(1, 10));
console.log(numerosMultiplos(0, 0));



