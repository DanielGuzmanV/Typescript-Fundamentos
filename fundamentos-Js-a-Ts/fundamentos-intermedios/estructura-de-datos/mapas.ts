// Estos almacenan pares clave - valor, pero son mas flexibles que un objeto
// algunos de sus metodos mas utiles son; .set(), .get(), .has(), .delete(), .size.

// Creamos un mapa:
let myMap1: Map<string, string|number> = new Map();

// Inicializamos el mapa:
myMap1 = new Map <string, string | number>([
    ['Nombre:', 'Alberto'],
    ['email:', 'correo.ejemplo@ht.com'],
    ['edad:', 45],
])

// Tambien podemos hacerlo directamente:
let myMap2 = new Map<string, string | number>([
    ['Nombre', 'Mauricio'],
    ['email', 'correodeejemplogmail.com'],
    ['age', 53]
]);

console.log(myMap1);
console.log(myMap2);
console.log('==========================================');

// Metodo set():
// Agregamos pares clave valor a un mapa creado:
let nwMap1 = new Map<string, string|number>();

nwMap1.set('Nombre', 'pablo');
nwMap1.set('Apellido', 'Hernandez');
nwMap1.set('Direccion', 'Nuevo mundo');
nwMap1.set('Edad', 24);

console.log('El mapa es:', nwMap1);
console.log('==========================================');

// Tambien podemos cambiar el valor de una clave:
nwMap1.set('Nombre', 'vicente');
nwMap1.set('Apellido', 'Martinez');
console.log('valores cambiados:', nwMap1);
console.log('==========================================');


// Metodo get():
// obtenemos los valores del mapa mediante su clave:
let valNm1 = nwMap1.get('Nombre');
let valNm2 = nwMap1.get('Apellido');
let valNm3 = nwMap1.get('Edad');

console.log('El nombre es:', valNm1);
console.log('El apellido es:', valNm2);
console.log('La edad es:', valNm3);
console.log('==========================================');


// Metodo .has():
// Verifica si una clave existe:
console.log(nwMap1.has('Edad'));
console.log(nwMap1.has('Direccion'));
console.log(nwMap1.has('apellido'))
console.log(nwMap1.has('nombre'))
console.log('==========================================');


// Metodo delete():
// Eliminamos una clave y valor:
nwMap1.delete('Direccion');
console.log(nwMap1);
console.log('==========================================');


// Uso de los metodos keys, values y entries:
console.log(nwMap1.keys());
console.log(nwMap1.values());
console.log(nwMap1.entries());
console.log('==========================================');


// Metodo .size():
// Verificamos la dimension del mapa:
console.log('Dimension del map:', nwMap1.size);
console.log('==========================================');


// Ejemplo:
// Guardar informacion de productos con identificadores unicos
type product = {
    nombre: string,
    precio: number,
    cantidad: number,
    disponible: boolean
}

let mapProductos: Map<number, product> = new Map();

mapProductos.set(101, {
    nombre: 'Laptop',
    precio: 12000,
    cantidad: 23,
    disponible: true
});

mapProductos.set(102, {
    nombre: 'Mouse',
    precio: 32,
    cantidad: 0,
    disponible: false
});

mapProductos.set(103, {
    nombre: 'Teclado',
    precio: 100,
    cantidad: 25,
    disponible: true
});

// Accedemos al mapa:
console.log(mapProductos);
console.log('==========================================');

// Accedmos aun producto por su identificador:
console.log(mapProductos.get(102));


