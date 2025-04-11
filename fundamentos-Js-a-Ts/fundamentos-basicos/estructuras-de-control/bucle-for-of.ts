// Bucles for of:
// Son usados para recorrer arrays y objetos iterables (cadenas, mapas, sets)
// no necesitan un indice, ya que iteran sobre el elemento

let listaNumeros: number[] = [1,2,3,4,5,6,7,8,9,10];
let listaAnimales: string[] = ['Perro', 'Gato', 'Vaca', 'Conejo'];
let listaRandom: number[] = [20,85,76,45,15,-5,-100,55,23,68];

// Buscamos los pares con for of:
for(let valoriterable of listaNumeros) {
    if(valoriterable % 2 === 0) {
        console.log('Valor pares:', valoriterable);
    }
}
console.log('=================================');

// Mostrar los animales de la lista:
for(let valoriterable of listaAnimales) {
    console.log('Los animales son:', valoriterable);
}
console.log('=================================');

// Mostramos los numeros mayores a 50:
for(let valoriterable of listaRandom) {
    if(valoriterable > 50) {
        console.log('Los numeros son:', valoriterable);
    }
}
console.log('=================================');

// Bucle for en funciones
// obtener el numero mayor de un array:
function getNumberMenorMayor(nuevaLista: number[]) {
    let numeroMenor: number = nuevaLista[0];
    let numeroMayor: number = nuevaLista[0];
    
    for(let idxNumero of nuevaLista) {
        numeroMenor = numeroMenor < idxNumero ? numeroMenor : idxNumero;
        numeroMayor = numeroMayor > idxNumero ? numeroMayor : idxNumero;
    }
    return [numeroMenor, numeroMayor];
}

// Ponemos a prueba la funcion:
let respuestaNuevaLista = getNumberMenorMayor(listaRandom);
console.log('Los numeros son:', respuestaNuevaLista);
console.log('=================================');

// Encontrar el numero mas grande de la lista:
const listaMayores: number[] = [16,6,30,44,14,18];
let numeroMayor: number = listaMayores[0];

for(let idxLista of listaMayores) {
    if(idxLista > numeroMayor) {
        numeroMayor = idxLista;
    }
}
console.log('Numero mas grande es:', numeroMayor);
console.log('=================================');

// tambien podemos usar el for of en cadenas de texto:
for(let letras of 'Hola mundo') {
    console.log(letras);
}
console.log('=================================');

// Usamos for of en objetos:
// Ejemplo 1: recorremos un array de objetos:
const listProductos = [
    {nombre: 'Mouse', precio: 50},
    {nombre: 'Teclado', precio: 80},
]

for(const items of listProductos) {
    console.log(`Producto: ${items.nombre}, Precio: ${items.precio}`)
}
console.log('=================================');

// Ejemplo 2: usamos object.entries() para recorrer un objeto con for of:
const objetoAuto = {
    marca: 'Totoya',
    modelo: 'Corolla',
    anio: 2020,
}

for(const [clave, valor] of Object.entries(objetoAuto)) {
    console.log(`${clave.toUpperCase()}: ${valor}`);
}
