// Al igual que en Js tenemos varios metodos en Ts, como ser:
// .push(), .pop(), .shift(). unshift(), .concat(), .reverse(), .split(), .slice(), .splice(), .sort()

// Creamos las listas:
let lstFrutas: string[] = ['manzana', 'banana', 'melon', 'kiwi', 'sandia', 'durazno'];
let lstFrutas2: string[] = ['frutilla', 'pera'];
let lstNumber1: number[] = [2,4,6,8,10,12];
let lstNumber2: number[] = [2,4,6,8,10,12];
let lstNumber3: number[] = [1,3,5,7,9,11];
let lstNumber4: number[] = [5,1,7,2,8,4,10,9,3,6];
let lstNumber5: number[] = [6, 2, 4, 9, 3, 8];
let lstColores: string[] = ['rojo', 'verder', 'azul'];
let lstLetras: string[] = ['a','b','c','d','e'];
let lstNmbs: string[] = ['marco', 'polo', 'alba', 'pedro', 'carlos'];

// Formas de vaciar una lista o quitarle todos sus elementos:
// lstFrutas =[];
// lstFrutas2.length = 0; // Opcional
// console.log(lstFrutas);
// console.log(lstFrutas2);


// Metodo Push: 
// Agregamos nuevos elementos al final de la lista (puede ser uno o dos)
lstFrutas2.push('naranja');
lstFrutas2.push('mandarina', 'papaya');
console.log(lstFrutas2);
console.log('=================================================');


// Metodo Pop:
// Eliminamos el ultimo elemento de la lista
lstFrutas2.pop();
console.log(lstFrutas2);
console.log('=================================================');

// Tambien podemos ver y eliminar el ultimo elemento:
console.log('Elemento eliminado:',lstFrutas2.pop());
console.log('Lista actual:', lstFrutas2);
console.log('=================================================');


// Metodo Slice:
// Este copia los elementos de la lista original y nos deja con una porcion de la lista,
// Sintaxis de slice(): .slice(inicio, fin)
// En el ejemplo copiamos los elementos anteriores a "1" y los siguientes de "3" (incluyendo 1 y 3)
let nwLstFrutas = lstFrutas.slice(1,3);
console.log('Porcion de lista:', nwLstFrutas);
console.log('Lista original:',lstFrutas);
console.log('=================================================');


// Metodo Splice:
// Elimina o tambien puede agregar elementos en la posicion indicada, 
// Sintaxis de splice(): .splice(inicio, cantidad, elementos opcionales)
// En el ejemplo le decimos que elimine 3 elementos desde la posicion 1

// Primero vemos los elementos que se eliminaran:
let nwLstNumber1 = lstNumber1.splice(1,3);
console.log('Elementos eliminados:', nwLstNumber1); // [ 4, 6, 8 ]

// Ahora vemos los elementos que quedaron:
console.log('Elementos restantes:',lstNumber1) // [ 2, 10, 12 ]

// Tambien podemos hacerlo directamente, sin guardar los elementos eliminados:
lstNumber2.splice(1,3);
console.log(lstNumber2); // [ 2, 10, 12 ]
console.log('=================================================');

// Agregamos elementos sin eliminar nada:
lstNumber3.splice(2, 0, 2,4); // Le indicamos que en el indice 2, No eliminada nada, pero agrega 2,4
console.log(lstNumber3);
console.log('=================================================');

// Reemplazamos elementos:
lstColores.splice(1, 1, 'amarillo', 'naranja');
console.log(lstColores);
console.log('=================================================');

// Eliminar desde el final:
lstLetras.splice(-2, 1); // le indica desde el penultimo elemento
console.log(lstLetras);
// los indices negativos cuentan desde el final
console.log('=================================================');


// Metodo shift():
// Eliminamos el primer elemento de la lista:
lstNmbs.shift();
console.log(lstNmbs);
console.log('=================================================');


// Metodo unshift():
// Agrega al principio un nuevo elemento:
lstNmbs.unshift('alvaro');
console.log(lstNmbs);
console.log('=================================================');


// Metodo concat():
// Unimos dos listas:
let listaUnidas = lstFrutas.concat(lstFrutas2);

// Vemos las dos listas:
console.log(lstFrutas);
console.log(lstFrutas2);

// Vemos las listas unidad:
console.log(listaUnidas);
console.log('=================================================');


// Metodo reverse():
// Cambiamos el orden de la lista:
lstNumber3.reverse();
console.log(lstNumber3);
console.log('=================================================');


// Metodo split():
// Dividir un string en array, donde se usa un separador:
let cadenaDeCompras = 'Pan, Mermelada, Huevos, Leche';

let lstCompras = cadenaDeCompras.split(',');
console.log('Lista de cadena:', lstCompras);
console.log('Cadena original:', cadenaDeCompras);
console.log('=================================================');


// Metodo sort():
// Ordena las listas
lstNumber4.sort();
console.log(lstNumber4);
console.log('=================================================');

// Tambien podemos usar el metodo sort en fuciones:
function ordLstMinMax(paramlist: number[]): number[]{
    // Ordenamos la lista de menor a mayor:
    paramlist.sort((number1, number2) => number1 - number2);
    return paramlist;
}

function ordLstMaxMin(paramlist: number[]): number[]{
    // Ordenamos la lista de mayor a menor:
    paramlist.sort((number1, number2) => number2 - number1);
    return paramlist;
}

let lstOrd1 = ordLstMinMax(lstNumber5);
console.log('Orden menor a mayor:', lstOrd1);

let lstOrd2 = ordLstMaxMin(lstNumber5);
console.log('Orden mayor a menor:', lstOrd2);


