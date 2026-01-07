// Mapped Types:
// Transforma todas o algunas propiedades de un tipo
// Ejemplo 1: convertir todas las propiedades en readonly
type ValuePerson = {
  nombre: string;
  edad: number;
};

type TipoLectura<T> = {
  readonly [K in keyof T]: T[K];
};

type PersonInmutable = TipoLectura<ValuePerson>;

const ejemploPersona: PersonInmutable = {
  nombre: "Alberto",
  edad: 35,
}

console.log(ejemploPersona);

// Vemos las propiedades: 
console.log(ejemploPersona.edad);
console.log(ejemploPersona.nombre);

// Intentamos cambiar las propiedades:
// ejemploPersona.edad = 52;
// ejemploPersona.nombre = "Carlitos";

// ======================================================

// Tambien podemos hacer las propiedades opcinales:
type TypeOpcional<T> = {
  [K in keyof T]?: T[K];
}

type PersonaOpcinal = TypeOpcional<ValuePerson>;

const ejemploPersona2: PersonaOpcinal = {
  nombre: 'Pedro',
}
console.log(ejemploPersona2);
