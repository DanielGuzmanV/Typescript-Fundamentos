// Ahora realizamos la funcion de negocio
// Crearemos el login user:
import { respuestaAPI } from "../services/api";

// Realizamos el API key de la API "REQRES"
const apiKey = {
    'x-api-key': 'reqres-free-v1',
}

export async function loginUser(email: string, password: string) {
    try {
        // Llamamos a la funcion para obtener la respuesta de la API:
        const data = await respuestaAPI('POST', 'https://reqres.in/api/login', apiKey, {email, password});
        
        // Aqui recibimos el token
        if(data.token) {
            console.log('Token recibido:', data.token);
        } else {
            throw new Error('No se recibio el token');
        }

    } catch (error) {
        console.log('Error en la peticion:', error);
    }
}








