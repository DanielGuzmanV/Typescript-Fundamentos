// Common: Require
// Importamos la funcion multiplicar
const funcionMultipli = require("../exports/module-export1");

console.log(`El resultado es: ${funcionMultipli.multiValue(2,3)}`)
console.log('=================================')

// Llamamos a las funciones externas
// podemos hacerlo de algunas formas:
const modulo = require('../exports/module-export1');
const { funcionSaludo } = require("../exports/module-export1");
const sumElem = require("../exports/module-export1");

modulo.funcionSaludo('Carlos');
funcionSaludo('Alberto');

console.log("Suma:", sumElem.funcionSumar());

// NOTA 1:
/**
 * Cuando importamos no usamos el nombre de la funcion osea en:
 * module.exports.funcionSaludo = saludarModule;
 * module.exports.funcionSumar = sumarElementos;
 * 
 * Usamos "funcionSaludo" y "funcionSumar" no el nombre de la funcion
 * ya que (funcionSaludo o funcionSumar) es la propiedad que estamos creando 
 * y (saludarModule o sumarElementos) son las funciones que creamos
 * 
 */


