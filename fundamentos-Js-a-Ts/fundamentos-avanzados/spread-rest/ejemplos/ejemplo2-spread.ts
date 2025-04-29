// Ejemplo 1:
// Clonar y fusionar:
type baseUser = {
    nombre: string,
    edad: number,
    pais: string,
}

const datosBase: baseUser = {
    nombre: 'Albertensio',
    edad: 52,
    pais: 'Canada'
}

// Objeto sin tipo de dato:
const datosUpdate = {
    ...datosBase,
    ocupacion: 'Ingenieron',
    // Esta edad sobreescribira la edad anterior
    edad: 34 
}

// Vemos los datos actualizados:
console.log(datosUpdate);
console.log('======================================');

// Ejemplo 2:
// Copiar arrays sin modificar el original:
const carritoInicial: string[] = ['pan', 'queso', 'leche', 'mantequilla'];
const carritoFinal = [...carritoInicial, 'huevos', 'cereal'];

console.log(carritoInicial);
console.log(carritoFinal);




