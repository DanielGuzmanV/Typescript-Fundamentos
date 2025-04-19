// Desestructuracion en objetos:
// Extraemos propiedades de un objeto y las asignamos a variables

// Sin desestructuracion:
type dateVehiculo = {
    marca: string,
    precio: number,
    estado: string
}

const ObjVehiculo: dateVehiculo = {
    marca: "Toyota",
    precio: 15000,
    estado: "Nuevo"
}

let marcaVehiculo = ObjVehiculo.marca;
let precioVehiculo = ObjVehiculo.precio;

console.log('La marca es:',marcaVehiculo);
console.log('El precion es:',precioVehiculo);
console.log('=============================================');

// Usamos desestructuracion:
type datePpl = {
    kNombre: string,
    kEdad: number,
    kCiudad: string,
};

const objDatePerson: datePpl = {
    kNombre: "Alberto",
    kEdad: 30,
    kCiudad: "Buenos vientos"
}

let {kNombre, kEdad} = objDatePerson;
console.log('El nombre es:',kNombre);
console.log('Su edad es:',kEdad);
console.log('=============================================');

// Tambien podemos cambiar el nombre de una clave, pero este no afectaria
// a las claves originales del objeto
const {kNombre: nombreCompleto, kEdad: anios} = objDatePerson;
console.log(nombreCompleto);
console.log(anios);

// Verificamos si hubo cambios:
console.log(objDatePerson);
console.log('=============================================');

// Podemos cambiar el valor de las claves del objeto, pero este igual 
// no afectaria al objeto original

let {kNombre: nuevoNombre, kEdad: nuevaEdad} = objDatePerson;
nuevoNombre = 'Camilo';
nuevaEdad = 84;
console.log('Nuevo nombre es:', nuevoNombre);
console.log('Nueva edad es:', nuevaEdad);

// Verificamos si hubo cambios en el objeto:
console.log(objDatePerson);
console.log('=============================================');

// Desestructuracion anidada:
// Objeto dentro de un objeto
type dateCompany = {
    nameCompany: string,
    locationCampany: string
}

type dateEmplo  = {
    nameUser: string,
    occupation: string,
    company: dateCompany,
}

const objEmpleado: dateEmplo = {
    nameUser: "Pablo",
    occupation: "Atencion al Cliente",
    company: {
        nameCompany: "TechnoGod",
        locationCampany: "Tanzania"
    }
}

// Extraemos los valores anidados del objeto:
let {nameUser, company: {nameCompany: nameComp, locationCampany}} = objEmpleado;
console.log(nameUser);
console.log(nameComp);
console.log(locationCampany);



