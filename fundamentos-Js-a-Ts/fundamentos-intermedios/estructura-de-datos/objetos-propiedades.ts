// En TS podemos crear objetos de las siguientes maneras:

// Primera forma (datos inferidos):
console.log('Datos del usuario objeto 1');
const objUsuario1 = {
    nombre: 'Marcelo',
    edad: 23,
    isDeveloper: true,
    date: ['Fecha de Nacimiento:', '29/10/2016'],
    bookFavorite: {
        titulo: 'La divina comedia',
        autor: 'Dante alighieri',
        fecha: 'Siglos Xl y Xll',
        url: undefined
    },
    recuperarContra: (): void => {
        console.log('Recuperando cuenta...')
    }, 
    saludos: enviarSaludo
}
console.log(objUsuario1);

// Podemos poner funciones externas a nuestro objeto de datos inferidos
function enviarSaludo(): void {
    console.log('Hola a todo el mundo!')
}

// Podemos ver esa funcion:
objUsuario1.saludos();
console.log('==============================================');


// Segunda forma (con tipo de datos):
console.log('Datos del usuario objeto 2');
const objUsuario2: {
    nombre: string,
    edad: number,
    isDeveloper: boolean,
    date: string[],
    bookFavorites: {
        titulo: string,
        autor: string,
        fecha: string,
        url?: string,
    },
    saludar: () => string,
    mensaje?: ()=> void,
    [claves: string]: any // Con esto podemos agregar propiedades nuevas

} = {
    nombre: 'Carlos',
    edad: 52,
    isDeveloper: false,
    date: ['Fecha cumpleaños','04/09/1980'],
    bookFavorites: {
        titulo: 'Mi libro luna de pluton',
        autor: 'Dross',
        fecha: '2010',
        url: undefined
    },
    saludar() {
        return 'Buenos dias!';
    },
};
console.log(objUsuario2);
console.log('======================================');

// Podremos agregar nuevas propiedades:
objUsuario2.apellido = ' Menendez';
objUsuario2.celular = '122344566809';

// Tambien podremos agregar funciones:
objUsuario2.guardar = function(): void {
    console.log('Guardando datos de:', objUsuario2.nombre)
}
objUsuario2.editar = funcionEditar

function funcionEditar(){
    console.log('Editando datos de:', objUsuario2.nombre)
}

console.log(objUsuario2);
console.log('======================================');


// Tercera forma usando "type" definicion de tipos:
console.log('Datos del usuario objeto 3');
type datosLibro = {
    titulo: string,
    autor: string,
    fecha: string,
    url?: string,
};

type datosPersona = {
    nombre: string,
    edad: number,
    isDeveloper: boolean,
    date?: string[],
    bookFavorites?: datosLibro,
    mensaje?: ()=> string,
    saludo?: ()=> void,
}

const objUsuario3: datosPersona = {
    nombre: 'Marcus',
    edad: 28,
    isDeveloper: true,
    date: ['Nacimiento: ', '29/09/2005'],
    bookFavorites: {
        titulo: "Chanfle",
        autor: "Roberto Gomez",
        fecha: "1989",
        url: undefined
    },
    mensaje: () => {
        return 'Mañana es hoy...';
    },
}
console.log(objUsuario3);
console.log('======================================');


// Acceso a las propiedades:
// Primera forma:
console.log('El nombre es:', objUsuario3['nombre'])
console.log('La edad es:', objUsuario3['edad'])
console.log('Datos:', objUsuario3['date'])
console.log('======================================');

// Segunda forma:
console.log('El libro es:', objUsuario2.bookFavorites);
console.log('Autor del libro:', objUsuario2.bookFavorites.autor);
console.log('El saludo es:',objUsuario2.saludar());
console.log('Fecha de nacimiento:',objUsuario2.date[1]);
console.log('======================================');


// Modificamos una propiedad de un objeto:
// Primera forma:
objUsuario1.saludos = (): void => {
    console.log('Adios a todo el mundo!')
};
objUsuario1.bookFavorite.autor = 'Dante';
objUsuario1.date[0] = 'Cumpleaños';

console.log('Cambios del usuario 1');
console.log(objUsuario1);
objUsuario1.saludos();
console.log('======================================');

// Segunda forma:
objUsuario2['edad'] = 89;
objUsuario2['isDeveloper'] = true
objUsuario2['nombre'] = 'Carlitos'

console.log('Cambios del usuario 2');
console.log(objUsuario2);
console.log('======================================');

// Eliminar propiedades de un objeto:
// Solo podremos eliminar propiedades opocionales, no aquellas que son obligatorias
delete objUsuario3.bookFavorites;
delete objUsuario3.date;
delete objUsuario3.mensaje;
console.log(objUsuario3);
console.log('======================================');


// Vemos claves de un objeto en un array:
// Podemos realizarlo en una variable:
let keysObj1: string[]= Object.keys(objUsuario2);
console.log(keysObj1);

// O directamente:
console.log(Object.keys(objUsuario3));
console.log('======================================');

// Con este metodo pondremos los datos en un array
for(let entrada of Object.entries(objUsuario3)) {
    console.log(entrada);
}
console.log('======================================');


// Objetos constantes que no sean modificados:
// Con .freeze() nuestro objeto no se modificara, no se agregaran nuevas
// propiedades o cambiar su valor
const nuevoUsuario = Object.freeze({
    id: 2001,
    nombre: 'Pedro',
    apellido: 'Salvador',
    edad: 45
})
console.log('Objeto original');
console.log(nuevoUsuario);

// Intentamos cambiar los valores nos saldra un error:
// nuevoUsuario.id = 2002;
// nuevoUsuario.nombre = 'Antonio';
// nuevoUsuario.apellido = 'Mercedes';
// nuevoUsuario.edad = 42;
// console.log(nuevoUsuario);
console.log('======================================');


// Con .seal() modificamos los datos de las propiedades pero no 
// agrega mas propiedades al objeto:

const nwUserObject: {
    id: number,
    name: string
    [clave: string]: any // Intentaremos agregar propiedades
} = Object.seal({
    id: 2001,
    name: 'Alfredo'
})
console.log(nwUserObject);
console.log('======================================');

// Intentamos agregar mas propiedades y nos saldra error
// si quitamos Object.seal nos dejara agregar propiedades:
// nwUserObject.lastname = 'Miller'
// nwUserObject.age = 62
// console.log(nwUserObject);

// Ahora intentamos modificar los valores de las propiedades:
nwUserObject.id = 2002;
nwUserObject.name = 'Miguel';
console.log(nwUserObject);
console.log('======================================');


// Con readonly no podremos cambiar el valor
type nwDateUser = {
    readonly id: number,
    readonly nombre: string,
    readonly apellido: string,
    edad: number,
    numero: number
    [clave: string]: any,
}

const nwUserObject2: nwDateUser = {
    id: 5001,
    nombre: 'Bryan',
    apellido: 'May',
    edad: 77,
    numero: 12345
}
console.log(nwUserObject2);
console.log('======================================');

// Intentamos cambiar los valores con readonly:
// nwUserObject2.id = 5002;
// nwUserObject2.nombre = 'Roger';
// nwUserObject2.apellido = 'Taylor';

// Intentamos cambiar los valores sin readonly:
nwUserObject2.edad = 75;
nwUserObject2.numero = 678910;
console.log(nwUserObject2);
console.log('======================================');

// Pero podremos agregar nuevos pares clave - valor:
nwUserObject2.isDeveloper = false;
nwUserObject2.saludar = (): void => {
    console.log('Hola mundo');
}
console.log(nwUserObject2);




