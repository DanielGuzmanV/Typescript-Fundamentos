// Callbacks
// Se manejan de forma manual y son poco optimos, es simplemente una funcion
// que se pasa como argumento 
function descargarArchivos(url: string, callback: (value: string)=> void) {
    console.log('Descargando archivos');
    setTimeout(() => {
        callback('Archivo descargado de: ' + url);
    }, 2000);
}

// Llamamos a la funcion, donde podremos realizarlo de las siguentes formas:
// Forma 1:
descargarArchivos('https://ejemplo1.com/archivo', function(resultado: string) {
    console.log(resultado)
});

// Forma 2:
function resultadoFile( resultado: string): void{
    console.log(resultado);
}

const direccionURL: string = 'https://ejemplo2.com/archivo';

descargarArchivos(direccionURL, resultadoFile);



