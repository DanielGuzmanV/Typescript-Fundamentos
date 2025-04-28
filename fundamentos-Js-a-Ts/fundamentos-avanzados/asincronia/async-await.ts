// ASYNC - AWAIT (Mas moderno y claro)
// Ejemplo 1:
// Codigo mas limpio y facil de leer, evitamos la anidacion de ".then()"
function descargarArchivo(url: string) {
    return new Promise( function(resolve, reject) {

        setTimeout( () => {
            const error: boolean = Math.random() < 0.5;
            if(error) {
                reject('error al descargar: ' + url);
            } else {
                resolve('El archivo fue descargado exitosamente de ' + url );
            }
        }, 2000);
    })
}

async function procesoDescarga() {
    try {
        
        console.log('Iniciando la descarga...');
        let resultado = await descargarArchivo('https://ejemplo.com/archivo');
        console.log(resultado);

    } catch (error) {
        console.error('Ops... Ocurrio un error:', error);
    }
}

// Llamamos a la funcion asincrona:
procesoDescarga();


// =============================================================
// =============================================================


// Ejemplo 2:
// Manejo de errores con try catch
async function obtenerDatos() {
    try {
        
        let response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=2');
        let data = await response.json();
        console.log(data);

    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}
// Llamamos a la funcion, donde nos mostrara los datos de dos usuarios
// en caso de anotar mal la URL saldra un error
obtenerDatos();


