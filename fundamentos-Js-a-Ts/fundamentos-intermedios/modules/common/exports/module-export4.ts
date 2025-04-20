// CommonJs: modulo export
// Usamos un export de objetos que tendra funciones, objetos, etc

import { BlobOptions } from "buffer"

// crear funcion factory pattern de venta
type product = {
    nombre: string,
    precio: number,
    disponible: boolean
}

function funcionCrearProducto(nombre: string, precio: number, disponible: boolean): product {
    return {
    nombre,
    precio,
    disponible
}
}


// ===============================================
// objetos de persona o cosa:
type objDateUser = {
    nombre: string,
    edad: number,
    ocupacion: string,
}

type objAuto = {
    marca: string,
    precio: number,
    nuevo: boolean,
}

const dateUserObj: objDateUser = {
    nombre: "Albert Deacon",
    edad: 35,
    ocupacion: 'Cientifico',
}

const dateAutoObj: objAuto = {
    marca: "Totoya",
    precio: 4800,
    nuevo: false
}

// =============================================
// funciones basicas
function funcionSaludar(objUser: objDateUser): void {
    console.log('Hola que tal, yo soy', objUser.nombre)
}

function funcionOcupacion(objUser: objDateUser): string {
    return `Su ocupacion es: ${objUser.ocupacion}`;
}

module.exports = {
    dateUserObj,
    dateAutoObj,
    funcionSaludar,
    funcionOcupacion,
    funcionCrearProducto
}



