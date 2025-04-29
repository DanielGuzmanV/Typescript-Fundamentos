// PATCH:
// Usamos una API publica "Reqres" para realizar pruebas, pero antes iremos 
// asu pagina "https://reqres.in/signup" para obtener una llave de la API

// Solicitud PATCH usando Fetch API donde actualizaremos 
// una parte del usuario no todo el usuario
fetch('https://reqres.in/api/users/1', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
        // Aqui pondremos la API key:
        'x-api-key': 'reqres-free-v1'
    },
    body: JSON.stringify({
        job: 'Backend developer'
    })
})
    .then(response => response.json())
    .then(data => console.log('Trabajo actualizado:', data))
    .catch(error => console.error('Error al actualizar:', error));

// ===========================================================

// Tambien podemos usar "async-await" para actualizar el nombre
async function updateParcialUser() {
    try {
        
        const response = await fetch('https://reqres.in/api/users/1', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                // Usamos la llave del API 
                'x-api-key': 'reqres-free-v1'
            },
            body: JSON.stringify({
                first_name: 'Alberto',
            })
        })

        const date = await response.json();
        console.log('Nuevo nombre:', date)

    } catch (error) {
        console.error('Ocurrio un error:', error);
    }
}
updateParcialUser();













