// DELETE:
// Usamos una API publica "Reqres" para realizar pruebas, pero antes iremos 
// a su pagina "https://reqres.in/signup" para obtener una llave de la API

// Solicitud DELETE con Fetch API para eliminar un recurso del servidor
async function deleterUserServer(id: number) {
    try {
        
        const response = await fetch(`https://reqres.in/api/users/${id}`, {
            method: 'DELETE',
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        })

        // Si response.status es igual a "204" la operacion fue exitosa, ya que
        // el servidor no devolvera ningun contenido
        if(response.status === 204) {
            console.log(`Usuario con ID ${id} eliminado correcto`)
        } else {
            console.log(`No se pudo eliminar al usuario, CODIGO: ${response.status}`);
        }

    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
    }
}

deleterUserServer(3);











