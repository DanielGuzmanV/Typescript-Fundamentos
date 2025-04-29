// GET:
// Usamos una API publica "JSONPlaceholder" para realizar pruebas 

// Solicitud GET usando Fetch API para obtener a todos los usuarios:
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => { 
        // Vemos si hay errores en la solicitud
        if(!response.ok) {
            throw new Error('Error en la solicitud');
        }
        // Convertimos la respuesta en formato JSON
        return response.json();
    })
    .then(data => {
        // Manejamos los datos obtenidos
        console.log('Los datos son:', data);
    })
    .catch( error => {
        // Manejamos los errores
        console.error('Error:', error);
    })

// En este ejemplo usamos:
// - fetch(): que realiza la solicitud GET 
// - .then(): manejamos las respuestas exitosas, estas deben estar en formato JSON
// - response.json(): convertimos la respuesta en formato JSON
// - .catch(): capturamos cualquier erro que pueda pasar 

// Para poder ver en la terminal necesitamos node v18.0.0 o superior









