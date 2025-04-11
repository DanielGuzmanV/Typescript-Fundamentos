// bucle forEach:
// Se usa igual que en Js que se usa para recorrer arrays con una funcion
// callback, pero no se pueden detener usando (break, o return)

// Ejemplo con arrays simples:
let lstImpares: number[] = [1,2,3,4,5,6,7,8,9,10];
let lstNumeros: number[] = [10,20,30,40,50];
let lstNombres: string[] = ["Ana", "Juan", "Pedro", "Maria", "Albert"];

// Imprimimos los numeros pares de la lista:
lstImpares.forEach(function(valor) {
    if(valor % 2 === 0) {
        console.log('Valores pares:', valor);
    }
})
console.log('========================================');

// Imprimimos todos los numeros de la lista (indice y valor)
lstNumeros.forEach((numero, indice) => {
    console.log(`Indice: ${indice}, Numero: ${numero}`);
})
console.log('========================================');

// Imprimimos los nombres de la lista en mayusculas:
lstNombres.forEach((nombre) => {
    console.log(nombre.toUpperCase());
})
console.log('========================================');

// Array de objetos:
const objUser = [
    {nombre: 'Ana', edad: 42},
    {nombre: 'Pedro', edad: 42},
    {nombre: 'Marco', edad: 42},
];

objUser.forEach((usuario) => {
    console.log(`${usuario.nombre} tiene ${usuario.edad} años`);
})
console.log('========================================');

// .................................................................
// Ejemplo con objetos
// Ejemplo 1: usando Object.keys()
const objPersona = {
    nombre: 'Marco',
    edad: 30,
    ciudad: 'Lima',
    isDeveloper: true,
}

Object.keys(objPersona).forEach((clave) => {
    const newClave = clave as keyof typeof objPersona
    console.log(clave, ':', objPersona[newClave]);
})
console.log('========================================');

// Ejemplo 2: usando Object.values()
const objSettings = {
    darkMode: true,
    notifications: false,
    autoSave: true,
}

Object.values(objSettings).forEach((valor) => {
    console.log('Valor:', valor);
})
console.log('========================================');

// Ejemplo 3: usando Object.entries()
const objAuto = {
    marca: 'Zusuki',
    modelos: 'Sedan',
    anio: 2019,
}

Object.entries(objAuto).forEach(([clave, valor]) => {
    console.log(`${clave}: ${valor}`);
})
console.log('========================================');

// Ejemplo 4: convertir el objeto a un array de claves y valores:
const objProducto = {
    nombre: "Laptop",
    precio: 1500,
    stock: 20,
};

const pares = Object.entries(objProducto);
pares.forEach(([clave, valor]) => {
    console.log(`Propiedad: ${clave}, Valor: ${valor}`);
});
console.log('========================================');



