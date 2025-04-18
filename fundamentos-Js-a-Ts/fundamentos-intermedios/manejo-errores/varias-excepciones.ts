// Para manejar diferentes tipos de errores, usamos condiciones 

try {
    
    // let datoRamdon1: any = -15;
    let datoRamdon1: any =  'Hola mundo';
    
    if(typeof datoRamdon1 !== 'number') {
        throw new TypeError('El valor debe ser number');
    } else if(datoRamdon1 < 0) {
        throw new RangeError(' El valor no puede ser negativo');
    }
    console.log(datoRamdon1);

    // Simulamos un ReferenceError usando eval:
    // eval('noExisto');
    
} catch (error) {
    if(error instanceof RangeError) {
        console.log('Error de rango:', error.message);
    } else if(error instanceof TypeError) {
        console.log('Error de tipo de dato:', error.message);
    } else if( error instanceof ReferenceError) {
        console.log('Error de referencia:', error.message);
    } else {
        console.log('Error de otro tipo:', error);
    }
}










