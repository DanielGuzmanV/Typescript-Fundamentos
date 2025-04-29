// Metodo HEAD:
// Similar a GET, pero no obtiene el contenido, este solo devuelve
// los encabezados de la respuesta:

// Ejemplo 1: HEAD de un solo usuario:
fetch('https://reqres.in/api/users/2', {
    method: 'HEAD',
    headers: {
        'x-api-key': 'reqres-free-v1'
    }
})
    .then( response => {
        if(response.ok) {
            console.log('El recurso existe');
            console.log('Content-Type:', response.headers.get('Content-Type'));
            // Aqui puede salir null
            console.log('Ultima modificacion:', response.headers.get('Last-Modified'));
        } else {
            console.log('No se encontro el recurso')
        }
    })
    .catch(err => {
        console.error('Error con HEAD:', err);
    })

// ===============================================================

// Ejemplo 2: HEAD a varios usuarios
fetch('https://reqres.in/api/users/2', {
    method: 'HEAD',
    headers: {
        'x-api-key': 'reqres-free-v1'
    }
})
    .then( response => {
        if(response.ok) {
            console.log('El endpoint existe');
            console.log('Tipo de contenido', response.headers.get('Content-Type'));
            
            // Aqui puede salir null
            console.log('Tamaño aproximado:', response.headers.get('Content-Length'));
        } else {
            console.log('El endpoint no existe');
        }
    })
    .catch(err => {
        console.error('Error con HEAD:', err);
    })







