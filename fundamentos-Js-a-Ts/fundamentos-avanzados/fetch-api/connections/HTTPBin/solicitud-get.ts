// HTTPBin: Podemos probar diferentes tipos de solicitudes y 
// podremos ver sus respuestas que generan

// Ejemplo 1
// Solicitud GET:
fetch('https://httpbin.org/get')
    .then(response => {
        if(!response.ok) throw new Error('Error en la solicitud');
        return response.json();
    })
    .then(data => console.log('Los datos son:', data))
    .catch(error => console.error('Error al realizar la peticion:', error));


// Ejemplo 2
// Solicitud POT:
fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        mensaje: 'Hola mundo',
    })
})
    .then(response => response.json())
    .then(data => console.log('El mensaje es:', data))
    .catch(error => console.log('ERROR:', error));











