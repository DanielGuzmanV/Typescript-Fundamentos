// Desestructuracion en funciones:
// Podemos usarla directamente en los parametros de una funcion

// Ejemplo en un objeto sin desestructuracion:
type datePer = {
    nombreP: string,
    edadP: number
    ocupacionP: string
}

const datePerson: datePer = {
    nombreP: "Marco",
    edadP: 32,
    ocupacionP: "Doctor"
}

function mostrarInfo(paramObject: datePer): void {
    console.log(`Nombre: ${paramObject.nombreP}, Edad: ${paramObject.edadP}`);
}
mostrarInfo(datePerson);
console.log('=====================================');

// Usamos desestructuracion:
function mostrarInfo2({nombreP, edadP}: datePer):void {
    console.log(`Nombre: ${nombreP}, edad: ${edadP}`);
}
mostrarInfo2(datePerson);
console.log('=====================================');

// Ejemplo en un array sin desestructuracion:
const listSinDestruc: number[] = [23, 14, 51, 61, 42];

function mostrarLista1(paramLista: number[]): void{
    console.log(`El numero 1 es: ${paramLista[0]} y el numero 2 es: ${paramLista[1]}`);
}
mostrarLista1(listSinDestruc);
console.log('=====================================');

// Usamos desestructuracion:
function mostrarLista2([,,tercer,,quinto]: number[]): void {
    console.log(`El numero 3 es: ${tercer} y el numero 5 es: ${quinto}`);
}
mostrarLista2(listSinDestruc);
