// Ejemplo 2 de "codewars"
// Complete la función para que encuentre el promedio de las tres puntuaciones
//  que se le han pasado y devuelva el valor de letra asociado con esa calificación.

// Puntuación numérica	Grado de letras
// 90 <= Puntuación <= 100	'A'
// 80 <= puntuación < 90	'B'
// 70 <= puntuación < 80	'C'
// 60 <= puntuación < 70	'D'
// 0 <= Puntuación < 60	'F'
// Los valores probados están todos entre 0 y 100. No es necesario comprobar
//  si hay valores negativos o valores superiores a 100.

function obtenerCalificacion(a: number, b: number, c: number): string {
  let promedio: number = (a + b + c) / 3;

  if(promedio >= 90 && promedio <= 100) {
    return "A";
  } else if(promedio >= 80 && promedio < 90) {
    return "B";
  } else if(promedio >= 70 && promedio < 80) {
    return "C";
  } else if(promedio >= 60 && promedio < 70) {
    return "D";
  } else if (promedio >= 0 && promedio < 60) {
    return "F"
  }
  return "F";

}

console.log(obtenerCalificacion(95, 90, 93))
console.log(obtenerCalificacion(100, 85, 96))
console.log(obtenerCalificacion(92, 93, 94))
console.log(obtenerCalificacion(100, 100, 100))

console.log('==================================')

console.log(obtenerCalificacion(70, 70, 70))
console.log(obtenerCalificacion(75, 70, 79))
console.log(obtenerCalificacion(60, 82, 76))

console.log('==================================')

console.log(obtenerCalificacion(44, 55, 52))
console.log(obtenerCalificacion(48, 55, 52))
console.log(obtenerCalificacion(58, 59, 60))
console.log(obtenerCalificacion(0, 0, 0))





