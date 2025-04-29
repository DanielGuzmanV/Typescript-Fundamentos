// POST:
// Usamos una API publica "JSONPlaceholder" para realizar pruebas 

// Solicitud POST usando Fetch API para enviar datos a la API (Crear un User)
// Pero antes definiremos la estructura que enviaremos:
interface NewUser {
    name: string;
    email: string;
    username: string;
}

const newUser: NewUser = {
    name: 'Marco',
    email: 'marco@example.com',
    username: 'marco123'
}

fetch('https://jsonplaceholder.typicode.com/users', {
    // Indicamos el metodo:
    method: 'POST',

    // Indicamos el tipo de dato que enviaremos:
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
})
    // Convertimos la respuesta en JSON
    .then( (response) => response.json())
    .then((data) => console.log('Usuario creado:', data))
    .catch( (error) => {
        console.error('Error:', error);
    })

// En este ejemplo usamos:
// - method: 'POST': especifica que estamos enviando datos al servidor
// - body: JSON.stringify(): convertimos los datos en formato json para enviarlos al server
// - headers: especificamos el contenido de la solicitud que es de tipo JSON











