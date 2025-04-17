// Al igual que en Js este es una coleccion de valores unicos (Sin duplicados)
// Algunos metodos que tenemos son: .add(), .has(), .delete(), .size()

// Creacion de un set:
let setNumber: Set<number>  = new Set();
let setString: Set<string>  = new Set();


// Tambien podemos crear un set de estas maneras:
let valuesSet1: Set<string | number> = new Set();
valuesSet1.add('Alberto');
valuesSet1.add(23);
console.log(valuesSet1);


// O creamos de manera directa con un array:
let valuesSet2: Set<string|number|boolean> = new Set([
    'Robert', 'Gomez', 35, true, 
]);
console.log(valuesSet2);


// Convertir un set a array:
let nwArr: (string|number| boolean)[] = Array.from(valuesSet2);
console.log('Set a array:', nwArr);
console.log('===============================================');


// Ejemplo de set con valores que no se repiten:
let conjunto1: Set<number> = new Set([1,2,3,4,5,6]);
console.log('Sin valores repetidos', conjunto1);

let conjunto2: Set<number> = new Set([1,2,2,3,5,4,3,7,6,7,8,8,9]);
console.log('Con valores repetidos:', conjunto2);
console.log('===============================================');


// Ejemplo: eliminar duplicados de un array:
let listNm: number[] = [1,2,3,2,2,3,4,4,5,6,6,6,7,8];
let listaUnica = new Set(listNm);
let arrFinal = Array.from(listaUnica);
console.log('Lista original:', listNm);
console.log('Lista sin duplicados:',arrFinal);


console.log('===============================================');

// Metodo add():
// agregamos elementos
setNumber.add(1);
setNumber.add(2);
setNumber.add(3);
setNumber.add(4);
setNumber.add(5);
console.log('los numeros son:', setNumber);
console.log('===============================================');


// Metodo has():
// Verificar si un valor existe en un conjunto:
setString.add('Marco');
setString.add('Maria');
setString.add('Marcelo');
setString.add('Mauricio');
console.log('Los nombres son:',setString);
console.log('El nombre existe:',setString.has('Marcelo'));
console.log('El nombre existe:',setString.has('Pedro'));
console.log('===============================================');


// Metodo delete():
// Eliminamos algunos valores
setString.delete('Maria');
setString.delete('Mauricio');
console.log('Nombres restantes:', setString);
console.log('===============================================');


// Metodo size():
console.log('La dimension es:', setNumber.size);
console.log('La dimension es:', setString.size);






