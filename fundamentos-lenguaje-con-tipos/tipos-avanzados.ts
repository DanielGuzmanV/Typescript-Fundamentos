// Objetos con tipo (type):
// type define que propiedades debe tener un objeto
type person = {
    nombre: string;
    edad: number;
}

const DatosPerson: person = {
    nombre: 'Juan',
    edad: 35
}
console.log(DatosPerson);
// Type: define la forma que debe tener un objeto
// `````````````````````````````````````````````````````````````````````


// Objetos con tipo (interface):
interface ProductoInter {
    id: number;
    nombre: string;
    precio: number;
}

const productoLaptop: ProductoInter = {
    id: 1001,
    nombre: 'Laptop Gamer',
    precio: 2500
}
console.log(productoLaptop);
// Interface: similar a "type", pero se usa mas en POO y se puede extender
// ```````````````````````````````````````````````````````````````````````


// Tipos literales:
type tipoOrden = 'asc' | 'desc';

function ordenarProductos(orden: tipoOrden) {
    if(orden === 'asc') {
        console.log('Ordenando ascendentemente...');
    } else {
        console.log('Ordenando descendentemente...');
    }
}
ordenarProductos('asc');
// ordenarProductos('otro'); // Nos saldra un error
// Los tipos literales solo permiten el uso literal exacto de: 'asc' o 'desc'
// ```````````````````````````````````````````````````````````````````````


// Intersecciones (&):
type TipoUsuario = {
    nombre: string;
    apellido: string;
};
type tipoEmpleado = { 
    salario: number;
    activo: boolean;
};

type UsuarioEmpleado = TipoUsuario & tipoEmpleado;

const objTipoEmpleado: UsuarioEmpleado = {
    nombre: 'Ana',
    apellido: 'Vicente',
    salario: 5000,
    activo: true
}
console.log(objTipoEmpleado);
// Interseccion combina tipos. El objeto debe cumplir con todos los tipos
// ```````````````````````````````````````````````````````````````````````


// Enum:
enum Roles {
    Admin,
    Usuario,
    Invitado,
}

function accesoSistema( rol: Roles) {
    if(rol === Roles.Admin) {
        console.log('Acceso total');
    } else if(rol === Roles.Usuario) {
        console.log('Acceso limitado');
    } else if( rol === Roles.Invitado) {
        console.log('Usuario invitado, sin accesos');
    }
}
accesoSistema(Roles.Admin);
accesoSistema(Roles.Usuario);
accesoSistema(Roles.Invitado);
// Enum permite usar valores con nombres en lugar de solo numeros o strings


// Alias de tipo:
type ID = string | number;

const userID: ID = 1234;
const sessionId: ID = 'nombre-1234';

console.log(userID);
console.log(sessionId);
// Alias reutiliza un tipo con un nombre mas facil de recordar


// Uniones ( | ):
type tipoEstado = 'activo' | 'inactivo' | number | boolean;

function imprimirEstado(estados: tipoEstado) {
    console.log('Estado actual', estados);
}

imprimirEstado('activo');
imprimirEstado(23);
imprimirEstado(false);
// imprimirEstado('nuevo') // Si el tipo no esta nos saldra error
// Union acepta multiples tipos permitidos. Se usa mucho cuando un valor puede 
// tener mas de una forma


