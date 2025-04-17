// Factory pattern:
// Patron de diseño que se usa para objetos de forma mas flexible y reutilisable
// Sin la necesidad de usar directamente new

// Creamos un factory de productos:
type Producto = {
    nombre: string;
    precio: number;
    categoria: string;
};

// Factory function:
function crearProducto(nombre: string, precio: number, categoria = 'General'): Producto {
    return {
        nombre,
        precio,
        categoria
    };
}

const producto1 = crearProducto('Mouse', 24);
const producto2 = crearProducto('Laptop', 1400, 'Electronica');

console.log(producto1);
console.log(producto2);

// ================================================================
console.log('====================================================');

// Creamos una factory para crear usuarios nuevos:
type dateUser = {
    id: number;
    email: string;
    name: string;
    lastname: string;
    active: boolean;
    developer: boolean;
    age: number;
    birthday: string[];
    recoverAccount: ()=> void
}

function funcionCrearUsuarios(id: number, email: string, name: string, lastname: string, active: boolean, developer: boolean, age: number, birthday: string[]): dateUser {
    return {
        id,
        email,
        name,
        lastname,
        active,
        developer,
        age,
        birthday,
        recoverAccount: function(): void {
            console.log('Recuperando cuenta...');
        },
    }
}

// Ahora creamos un usuario:
let user1 = funcionCrearUsuarios(
    1001,
    'cuenta.prueba1@function.com',
    'Marco',
    'Martinez',
    true,
    false,
    51,
    ['25', 'enero', '1985'],
);

let user2 = funcionCrearUsuarios(
    1002,
    'cuenta.prueba2@function.com',
    'Carlos',
    'Montenegro',
    true,
    true,
    34,
    ['09', 'Marzo', '1995']
)

// Vemos a los usuarios creados;
console.log(user1);
console.log(user2);
console.log('====================================================');

// Podremos acceder a sus propiedades al igual que un objeto en JS:
user1.recoverAccount();
console.log(user1.name);
console.log(user1.email);
console.log('====================================================');

// Podremos cambiar el dato de un usuario:
user2.developer = false;
user2.lastname = 'Valverde';
user2.birthday[1] = 'Abril';
console.log(user2);

