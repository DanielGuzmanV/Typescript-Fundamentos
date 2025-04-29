// Ejemplo 1:
// Funcion que recibe datos flexibles de usuarios:
function crearPerfil(nombre: string, edad: number, ...extras: string[]) {
    console.log('Nombre:', nombre);
    console.log('Edad:', edad);
    console.log('Otros datos:', extras);
}

// Creamos el perfil:
crearPerfil('Carlos', 23, 'Argentina', 'Developer', 'Gamer');




