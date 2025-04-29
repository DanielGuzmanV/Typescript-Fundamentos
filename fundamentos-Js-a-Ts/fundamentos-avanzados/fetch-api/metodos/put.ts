// PUT:
// Usamos una API publica "JSONPlaceholder" para realizar pruebas 

// Solicitud PUT con Fetch API para reemplazar o actualizar completamente un recurso
fetch('https://jsonplaceholder.typicode.com/posts/1' ,{
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        id: 1,
        title: 'Nuevo titulo en TS',
        body: 'Este es el nuevo contenido actualizado de TS',
        userId: 1,
    })
})
    .then((response) => response.json())
    .then((data) => console.log('Recurso reemplazado:', data))
    .catch( (error) => {
        console.error('ERROR:', error);
    })

// ==============================================================

// Ahora usamos async - await con la API (REQRES) no olvidar su API Key
async function updateUserReqres(): Promise<void> {
    try {
        
        const response = await fetch('https://reqres.in/api/users/2', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',

                // API key:
                'x-api-key': 'reqres-free-v1'
            },
            body: JSON.stringify({
                email: 'pedro.gonzales@reqres.in',
                first_name: 'Pedro',
                last_name: 'Gonzales'
            })
        })

        const data = await response.json();
        console.log('Datos actualizados del user 2:', data);

    } catch (error) {
        console.error('ERROR al actualizar los datos:',error);
    }
}
updateUserReqres();



