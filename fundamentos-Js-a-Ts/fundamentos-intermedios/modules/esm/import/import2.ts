// ESM: import
// Importamos la clase 
import { Calculadora } from "../export/export2";

// Instancia de clase:
const opMetodos = new Calculadora('Calcular:');

console.log('Resultado:', opMetodos.metodoSuma(33, 21));
console.log('Resultado:', opMetodos.metodoResta(233, 212));
console.log('Resultado:', opMetodos.metodoMultiplicar(32, 5));
console.log('Resultado:', opMetodos.metodoDivision(823, 4));
