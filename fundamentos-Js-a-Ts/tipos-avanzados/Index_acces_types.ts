// Indexed Access Types (T[k])
// Permite acceder al tipo de una propiedad por su nombre
// Ejemplo:

type DatePerson = {
  nombre: string;
  edad: number;
  email: string;
}

type EmailType = DatePerson['email'];

const emaiEjemplo: EmailType = 'prueba.1@correo.com';
// const emaiEjemplo2: EmailType = 123;
// Aqui indicamos que la variable "emailEjemplo" sera del mismo tipo que
// DatePerson.email, por eso no podemos poner otro dato


// Tambien podemos acceder a varios:
type ParcialType = DatePerson['nombre' | 'edad'];

const valueEjemplo1: ParcialType = 'Marco';
const valueEjemplo2: ParcialType = 18;
// const valueEjemplo3: ParcialType = true;
// Siempre respetando el tipo de dato, en este caso "nombre" es string 
// y "edad" es un number


// Si usamos "keyof", podemos hacer una funcion generica:
function obtenerPropiedad< T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}

const persona: DatePerson = {
  nombre: 'Ana',
  edad: 23,
  email: 'ana@corre.com'
}

const nombreValueDate1 = obtenerPropiedad(persona, "nombre");
const nombreValueDate2 = obtenerPropiedad(persona, "edad");

// Vemos el valor:
console.log(nombreValueDate1);
console.log(nombreValueDate2);

// Vemos el tipo de dato:
console.log('El tipo es:', typeof nombreValueDate1);
console.log('El tipo es:', typeof nombreValueDate2);

