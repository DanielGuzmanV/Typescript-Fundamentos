// Try-Catch:
// Estos controlan los errores que se pueden generar
// "try" agarra el error y se lo pasa a "catch" que es el encargado
// de manejar el error que paso en "try"

try {
    let sms: any = 4;
    sms.toUpperCase();
    console.log(sms);

} catch (error) {
    console.error('Error de sintaxis:', error);
}
// Vemos que nos sale un error:
// Error de sintaxis: TypeError: sms.toUpperCase is not a function

try {
    let result = 10/0;
    if(result === Infinity) {
        throw new Error('No se puede dividir por cero.')
    }
    console.log('Resultado', result)
} catch (error) {
    console.log('Se ha producido un error...', error);
}

