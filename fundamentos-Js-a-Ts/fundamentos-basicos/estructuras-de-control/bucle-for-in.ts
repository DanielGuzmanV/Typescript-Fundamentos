// Bucle for in:
// Sirve para recorrer las claves (propiedades) de un objeto, ya que itera sobre
// las claves no los valores, aunque en Typescript es algo diferente;
// No se recomienda usar en listas aunque se puede usar sin muchos problemas

// Ejemplo en un array:
let listNumeros: number[] = [10, 20, 30, 40];
let listAnimales: string[] = ['Perro','Caballo','Vaca','Tigre'];

for(const idx in listNumeros) {
    // Podemos usarlo como indice en la lista para iterar en sus elementos
    console.log(listNumeros[idx]);
}
console.log('=====================================');

for(const idx in listAnimales) {
    // Podemos usarlo como indice y como iterador en la lista:
    console.log('Animal', listAnimales[idx], ': en indice', idx);
}
console.log('=====================================');

// Ejemplo con objetos:

// Ejemplo 1 bjeto (con tipo de datos):
const objetoConDato: {
    nombre: string,
    apellido: string,
    edad: number,
    isDeveloper: boolean,
} = {
    nombre:'Carlos',
    apellido: 'Martinez',
    edad: 35,
    isDeveloper: true,
}

// Accedemos a las propiedades con el for in, aqui TS se empesara a quejarse
// de que la variable "clave" es de tipo "string", para ello lo corregiremos 
// de las siguientes maneras:

// Primera forma:
// Le decimos que clave es una de las claves conocidas del objeto:
console.log('Primera forma:')
for(let clave in objetoConDato) {
    const newClave = clave as keyof typeof objetoConDato;
    console.log(newClave, ':', objetoConDato[newClave]);
}
console.log('=====================================');

// Segunda forma:
// Tipamos directamente la variable "clave":
console.log('Segunda forma:')
for(let clave in objetoConDato) {
    console.log(clave, ':', objetoConDato[clave as keyof typeof objetoConDato])
}
console.log('=====================================');

// Tercera forma:
// Es como una combinacion:
console.log('Tercera forma:')
for(let clave in objetoConDato) {
    const valor = objetoConDato[clave as keyof typeof objetoConDato]
    console.log(clave, ':', valor);
}

console.log('=====================================');

// Ejemplo 2 bjeto (sin tipo de datos, inferidos):
const objetoProducto = {
    nombre: 'Laptop',
    precion: 1500,
    disponible: true,
};

for(const clave in objetoProducto) {
    const valor = objetoProducto[clave as keyof typeof objetoProducto];
    console.log(clave, ':' ,valor);
}
console.log('=====================================');

// Ejemplo 3: contar cuantos valores del objeto son de tipo string:
const objetoPersona = {
    nombre: 'Ana',
    ciudad: 'Buenos Vientos',
    edad: 20,
    desarrollador: false,
}

let cantidadStrings = 0;

for(let clave in objetoPersona) {
    const valor = objetoPersona[clave as keyof typeof objetoPersona]
    if(typeof valor === 'string') {
        cantidadStrings++;
    }
}

console.log('Total de Valores tipo string:', cantidadStrings);
