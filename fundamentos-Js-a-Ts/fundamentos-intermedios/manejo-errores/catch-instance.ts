// Catch instance of:
// Se usa para verificar el tipo de error

try {
    throw new TypeError('Este es un error de tipo');
} catch (error) {
    if(error instanceof TypeError) {
        console.error('Ha ocurrido un error:', error.message)
    }
}
console.log('===========================================');

function verifEdad(edad: any) {
    if(typeof edad !== 'number') {
        throw new TypeError('El argumneto debe ser un numero');
    }
    console.log(edad);
}

try {
    
    verifEdad('Hola');
    // verifEdad(24)

} catch (error) {
    if(error instanceof TypeError) {
        console.log('Error de tipo de dato:', error.message);
    }
}
