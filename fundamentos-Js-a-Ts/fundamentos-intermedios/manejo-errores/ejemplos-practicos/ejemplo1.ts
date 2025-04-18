// Ejemplo practico: 
// Verificacion de stock en una tienda, donde los errores pueden ser:
// - El producto no existe
// - El stock es insuficiente
// - La cantidad ingresada no es valida 

// Excepcion personalizada:
class stockErrorCustom extends Error {
    name: string;
    constructor(customMessage: string) {
        super(customMessage);
        this.name = 'StockErrorCustom';
    }
}

// Creamos los objetos de la tienda:
type objTienda = {
    laptop: number,
    teclado: number,
    mouse: number,
}

const tiendaComput: objTienda = {
    laptop: 5,
    teclado: 10,
    mouse: 0
}

// Creamos la funcion para comprar los objetos:
function comprarProductos(producto: string, cantidad: number): void {
    try {
        if(!tiendaComput.hasOwnProperty(producto)) {
            throw new ReferenceError(`El producto "${producto}", no existe en la tienda`);
        }
        if (typeof cantidad !== 'number') {
            throw new TypeError('Ingrese un numero valido');
        }
        if(cantidad <= 0) {
            throw new TypeError('La cantidad debe ser mayor a cero');
        }

        let keyProducto = producto as keyof typeof tiendaComput
        if(tiendaComput[keyProducto] < cantidad) {
            throw new stockErrorCustom(`Stock insuficinete, solo quedan ${tiendaComput[keyProducto]} unidades de ${producto}`);
        }
        tiendaComput[keyProducto] -= cantidad;
        console.log(`Compra exitosa: ${cantidad} unidades de ${producto}`)

    } catch (error) {
        if(error instanceof stockErrorCustom) {
            console.error('Error de stock:', error.message);
            console.error('Error:', error.name);
        } else if(error instanceof TypeError) {
            console.error('Error de tipo:', error.message);
            console.error('Error:', error.name);
        } else if(error instanceof ReferenceError) {
            console.error('Error de referencia:', error.message);
            console.error('Error:', error.name);
        } else {
            console.log('Ocurrio un error de otro tipo:', error);
        }
    } finally {
        console.log('Gracias por visitar la tienda');
    }
}

// Realizamos las compras:
comprarProductos('laptop', 2);
console.log('========================================');
comprarProductos('mouse', 1);
console.log('========================================');
comprarProductos('monitor', 2);
console.log('========================================');
comprarProductos('teclado', 0);
console.log('========================================');
// comprarProductos('laptop', '3');









