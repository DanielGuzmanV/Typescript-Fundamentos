// Desestructuracion en valores de retorno:
// Cuando una funcion devuelve un objeto o array, se puede 
// extraer solo lo que se necesita

// Ejemplo con un objeto:
type valUser = {
    Id: number,
    Nombre: string,
    Rol: string,
}

function obtenerValoresUser():valUser {
    return {
        Id: 1,
        Nombre: "Carlos",
        Rol: "Admin"
    }
}

const {Nombre, Rol} = obtenerValoresUser();
console.log(Nombre);
console.log(Rol);
console.log('======================================');

function obtenerValorNum(): number[] {
    return [34, 62, 90, 31, 67, 84];
}

let [primero,,,cuarto,,sexto] = obtenerValorNum();
console.log(primero, cuarto, sexto);


