// JSONPlaceholder: API falsa de prueba
// Esta API tiene recursos como: post, comments, albums, photos, todos y users
// Se pueden realizar operaciones CRUD (Create, Read, Update, Delete) utilizando
// los metodos GET, POST, PUT, DELETE

// Ejemplo 1 
// Solicitud GET para mostrar todos los usuarios:
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if(!response.ok) {
            throw new Error('Error en la solicitud');
        }
        return response.json()
    })
    .then(data => console.log('Los datos son:', data))
    .catch(error => console.error('Error:', error));


// Ejemplo 2
// Solicitud POST para crear una nueva publicacion:
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        userID: 1,
        title: 'Publicacion Nueva',
        body: 'Esta es la nueva publicacion'
    })
})
    .then(response => response.json())
    .then(data => console.log('El nuevo post es:', data))
    .catch(error => console.error('Error:', error));


// Tambien podemos usar async-await para obtener los datos del usuario 2:
async function getUserJSONPlaceholder() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/2');
        if(!response.ok) throw new Error('Error en la solicitud');
        
        const data = await response.json();
        console.log('Los usuarios son:', data);
    } catch (error) {
        console.error('Ocurrio un error:', error);
    }
}
getUserJSONPlaceholder();

// Los metodos como POST, PUT o DELETE no se almacenan realmente al server 
// de la API, ya que estas son simuladas










