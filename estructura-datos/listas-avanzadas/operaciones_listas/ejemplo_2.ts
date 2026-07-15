// Combinar arrays (Spread vs Concat):

// Operador spread
// Ejemplo 1: 
const listaFrutas = ['Manzana', 'Platano'];
const listaVerduras = ['Brocoli', 'Zanahoria'];

// Combinamos
const listaMercado = [...listaFrutas, ...listaVerduras];
console.log('Lista completa:', listaMercado);

// Tambien podemos agregar elementos sueltos facilmente
const listaMercadoPlus = ['Leche', ...listaFrutas, 'Papaya']
console.log('Nuevos agregados lista frutas:', listaMercadoPlus);
console.log('===============================');

// Operador .concat()
// Ejemplo 1:
const grupoA = [1,2,3];
const grupoB = [4,5,6];

const listaUnida = grupoA.concat(grupoB);

console.log('Grupos unidos:', listaUnida);