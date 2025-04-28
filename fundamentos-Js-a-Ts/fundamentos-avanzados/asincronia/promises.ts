// PROMISES:
// Asincronia de forma mas estructurada, faciles de entender y
// es mejor que los callbacks

// Ejemplo 1:
function descargarArchivo2(url: string): Promise <string> {
    return new Promise( function(resolve, reject) {
        console.log('Descargando archivo...');

        // Simulamos un erro del 50% de los casos
        const error: boolean = Math.random() < 0.5;
        setTimeout( function () {
            if(error) {
                reject('Error al descargar el archivo: ' + url);
            } else {
                resolve('El archivo fue descargado de ' + url);
            }
        }, 2000);
    });
}

// Usamos .then() y .catch()
descargarArchivo2('https://ejemplo.como/archivo')
    .then( function(resultado) {
        console.log(resultado);
    })
    .catch( error => console.error('error:', error));




// Ejemplo de como se veria la anidacion ".then" y ".catch"
// (ejemplo de prueba, no funciona)
// function requestHandler(solicitar:, respuesta) {
//     Usuario.encontrarId(solicitar, usuarioId)
//     .then(function(usuario) {
//         return Tareas.encontrarId(usuario.taresId)
//     })
//     .then(function (tareas) {
//         tareas.Completadas = true;
//         return tareas.guardar();
//     })
//     .then(function() {
//         respuesta.enviar("Tareas completadas");
//     })
//     .catch(function(errores) {
//         respuesta.enviar(errores);
//     })
// }








