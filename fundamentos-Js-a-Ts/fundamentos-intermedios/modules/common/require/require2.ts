// CommonJs require:
// Podemso importar de dos maneras
// Primera forma:
const operaciones = require("../exports/module-export2");

console.log('Resultado primera forma:');
console.log('Suma:', operaciones.sumar(15,40));
console.log('Resta:', operaciones.restar(30,21));
console.log('Multiplicacion:', operaciones.multiplicar(2,22));
console.log('Es par:', operaciones.numEsPar(68));
operaciones.enviarMensaje();

console.log('============================================');

// Segunda forma:
const {restar, numEsPar, enviarMensaje} = require("../exports/module-export2");
console.log('Resultado segunda forma');
console.log(restar(39,10));
console.log(numEsPar(39));
enviarMensaje();

// Nota:
/**
 * Cuando usamos:
 * module.exports = {}
 * Podemos usar el nombre de la funcion, ya no es necesario 
 * crear una propiedad para importarlas
 */


