// Al realizar la peticion podemos limitar los resultados:

// Ejemplo 1: 
// Si la API permite limitar resultado realizamos lo siguiente:
async function limitUser() {
    try {
        
        // En la solicitud limitamos los usuarios que queremos mostrar:
        const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3');
        if(!response.ok) throw new Error('Error en la solicitud');
        const data = await response.json();
        console.log('Los 3 usuarios son:', data);

    } catch (error) {
        console.error('Ocurrio un error...', error);
    }
}
// Mostramos los 3 usuarios:
limitUser();

// ==============================================================

// Ejemplo 2: 
// Si la API no permite limitar el resultado tendremos que hacerlo manualmente
fetch('https://reqres.in/api/users', {
    headers: {
        'x-api-key': 'reqres-free-v1',
    }
})
    .then( response => { 
        if(!response.ok) throw new Error('Error en la solicitud');
        return response.json()
    })
    .then( dataUser => {
        const tresUsuarios = dataUser.data.slice(0, 3);
        console.log('Los 3 usuarios son:', tresUsuarios);
    })
    .catch( error => console.log('Error:', error))



