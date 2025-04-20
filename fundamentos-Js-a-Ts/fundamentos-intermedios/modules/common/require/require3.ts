// CommonJs: require
// Importamos la clase CalcularOperacion:

const metodosClass = require("../exports/module-export3");

// Instanciamos la clase:
let operacionMetodos = new metodosClass.metodosCalculadora("Calculadora Basica");
console.log(operacionMetodos);

// Usamos los metodos de la clase que creamos:
console.log(operacionMetodos.agregarTituloClass());
console.log('Resultado suma:',operacionMetodos.opSumar(23,56));
console.log('Resultado resta:',operacionMetodos.opResta(46,23));
console.log('Resultado multiplicacion:',operacionMetodos.opMultiplicacion(2,68));
console.log('Resultado division:',operacionMetodos.opDivision(100,6));


