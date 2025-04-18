// Finally:
// Este siempre se ejecutara, si hay errores o si no hay errores

function division(divisor: number, dividendo: number): void {
    try {
        if(divisor === 0) {
            throw new Error('No se puede dividir entre cero');
        } 
        console.log('El resultado es:', dividendo / divisor)
        
    } catch(error) {
        console.log('Se ha producido un error...', error)
    } finally {
        console.log('Operacion finalizada...')
    }
}

division(0, 125);
division(2, 20);





