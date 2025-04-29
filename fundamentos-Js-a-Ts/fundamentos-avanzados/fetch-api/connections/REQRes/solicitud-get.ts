// REQRes: Esta API si permite POST y tiene el CORS abierto
// Este contiene datos falsos pero con respuestas reales que son compatibles
// con los metodos: GET, POST, PUT y DELETE
// Ahora REQRES nos pide una API key, podemos obtener la key en: "https://reqres.in/signup"

// Ejemplo 1
// Solicitud GET para ver los usuarios:
fetch('https://reqres.in/api/users', {
    headers: {
        // Pondremos el API key:
        'x-api-key': 'reqres-free-v1'
    }
})
    .then(response => {
        if(!response.ok) {
            throw new Error('Error en la solicitud');
        }
        return response.json();
    })
    .then(data => console.log('Los usuarios son:', data))
    .catch((error) => {
        console.error('Error:', error);
    })


// Ejemplo 2
// Solicitud POST para crear un nuevo usuario
fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1',
    },
    body: JSON.stringify({
        email: 'Zacarias.flores@gmail.com',
        first_name: 'Zacarias',
        last_name: 'Flores',
        job: 'Estudiante',
    })
})
    .then(response => response.json())
    .then(data => console.log('El nuevo usuario es:', data))
    .catch(err => console.error('Error:', err));


// Usamos async - await para realizar una solicitud GET a un usuario en REQRES:
async function getUserREQRes() {
    try {
        
        const response = await fetch('https://reqres.in/api/users/3', {
            headers: {
                'x-api-key': 'reqres-free-v1',
            }
        });
        if(!response.ok) throw new Error('Ocurrio un error en la solicitud');

        const data = await response.json();
        console.log('El usuario es:', data);

    } catch (error) {
        console.error('Error:', error)
    }
}
getUserREQRes();

