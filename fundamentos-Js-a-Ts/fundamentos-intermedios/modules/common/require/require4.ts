// CommonJs: require
// Importamos los objetos y funciones:
const {dateUserObj, dateAutoObj, funcionSaludar, funcionOcupacion, funcionCrearProducto} = require("../exports/module-export4");

console.log('Objetos:');
console.log(dateUserObj);
console.log(dateAutoObj);
console.log('=================================');

console.log('Funciones:')
funcionSaludar(dateUserObj);
console.log(funcionOcupacion(dateUserObj));
console.log('=================================');

console.log('Funcion Pattern:');
console.log(funcionCrearProducto('Laptop', 3400, true));
let productoVenta = funcionCrearProducto('Teclado', 120, false);
console.log('El producto es:', productoVenta);
