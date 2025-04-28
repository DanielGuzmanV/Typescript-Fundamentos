// Ejemplo usando (async - await con promesas)

// Ejemplo 1
// Funcion asincrona que espera 2 segundos al resultado 
// de una promesa antes de continuar
function obtenerNumeros1(): Promise<number> {
    return new Promise((resolve) => {
        setTimeout( () => resolve(23), 1000);
    })
}

// Accedemos a la funcion usando "promesas" sin catch:
obtenerNumeros1()
    .then(function(respuesta) {
        console.log('El resultado con promesas es:', respuesta);
    });

// Accedemos a la funcion usando "async / await"
async function mostrarNumero():Promise <void> {
    console.log('Obteniendo numero... ');
    // Tambien podemos poner otra duracion:
    await new Promise((newDuration) => setTimeout(newDuration, 2000));
    let numero = await obtenerNumeros1();

    console.log('El numero obtenido con async es:', numero);
}
mostrarNumero();

// ====================================================

// Usamos parametros:
function obtenerNumeros2(value: number = 0): Promise <number> {
    return new Promise( function(duracion) {
        setTimeout(() => {
            duracion(value);
        }, 1500);
    })
}

async function mostrarNumeros2(newValue?: number): Promise <void> {
    console.log('Obteniendo el nuevo numero...');
    let resultado = await obtenerNumeros2(newValue);
    console.log('El nuevo numero es:', resultado);
}

mostrarNumeros2(82);








