// Estos tipos modifican tipos existentes:
// Ejemplo:
type TypePersona = {
  nombre: string;
  edad: number;
  email: string;
}

type Parcial = Partial<TypePersona>;
type SoloNombre = Pick<TypePersona, 'nombre'>;
type SinEmail = Omit<TypePersona, 'email'>;
type SoloLectura = Readonly<TypePersona>
type Registro = Record<'admin' | 'user', TypePersona>

// Ponemos a prueba los types:
// Nos pide toda las propiedades
const objTypePerson: TypePersona = {
  nombre: "Marco",
  edad: 25,
  email: "marco.suarez@example.com",
}
console.log(objTypePerson);
console.log('========================');


// Partial:
// Podemos escoger que propiedad usar ya que son opcionales:
const valPerson1: Parcial = {
  nombre: 'Carlos',
  email: 'Carlos.Perez@example.com'
}
console.log(valPerson1);
console.log('========================');

// Pick:
// Elegimos algunas propiedades especificas:
const valPerson2: SoloNombre = {
  nombre: "Ana",
  // Aqui edad y email no estan permitidos
}
console.log(valPerson2);
console.log('========================');

// Omit:
// Eliminamos una o mas propiedades:
const valPerson3: SinEmail = {
  nombre: "Marcelo",
  edad: 30,
}
console.log(valPerson3);
console.log('========================');

// Readonly:
// Todas las propiedades seran solo de lectura
const valPerson4: SoloLectura = {
  nombre: "Antonio",
  edad: 45,
  email: "Antonio.Sanchez@example.com"
}
// valPerson4.nombre = 'Pedro'// No podremos cambiarlo
// valPerson4.edad = '20'// No podremos cambiarlo
console.log(valPerson4);
console.log('========================');

// Record:
// Creamos un objeto con claves de tipo K y valor tipo T
const valSistemUser: Registro = {
  admin: {
    nombre: "Admin - Robert",
    edad: 48,
    email: "admin@example.com"
  },
  user: {
    nombre: "User - Jhon",
    edad: 23,
    email: "user@example.com"
  }
};

console.log(valSistemUser.admin.nombre);
console.log(valSistemUser.user.nombre);
console.log('========================');



