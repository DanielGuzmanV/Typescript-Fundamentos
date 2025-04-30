// Ejemplo de manejo de errores:
// Haremos que el response tengo un control muy robusto:

import { log } from "console";

// Realizamos la solicitud POST:
async function realizarPeticion(
    method: string, 
    argUrl: string, 
    argHeaders: Record<string, string>, 
    argDate?: Record<string, unknown>) 
{
    try {
        
        // Configuramos las propiedades:
        const objectOptions: RequestInit = {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...argHeaders
            }
        };

        // Verificamos si los datos del argumento no son nulos
        if(argDate !== null && argDate !== undefined) {
            objectOptions.body = JSON.stringify(argDate);
        }

        // Realizamos la peticion:
        const response = await fetch(argUrl, objectOptions);

        // Verificamos si la respuesta fue exitosa:
        if(!response.ok) {
            if(response.status === 400) throw new Error('Datos invalidos, por favor verifique su correo y constraseña');
            if(response.status === 404) throw new Error('Recurso no encontrado');
            if(response.status === 500) {
                throw new Error('Error del servidor, intente despues');
            } else {
                throw new Error('Error desconocido');
            }
        }

        // Convertimos la respuesta en formato JSON:
        const jsondata = await response.json();
        return jsondata;

    } catch (error) {
        console.error('Error en realizar la perticion:', error);
        // Propagamos el error:
        throw error;
    }
}

// ===================================================================

// Realizamos el login para ingresar la contraseña y email:
// Como usaremos la API "REQRes" necesitaremos su API key

const apiKey = {
    'x-api-key': 'reqres-free-v1'
}

async function loginUser(email?: string, password?: string) {
    try {
        
        const userDate = await realizarPeticion('POST', 'https://reqres.in/api/login',apiKey, {email, password} )
        if(userDate.token) {
            console.log('Token recibido es:', userDate.token);
        } else {
            console.log('No se recibio ningun token');
        }

    } catch (error) {
        console.error('Error', error);
    }
}

loginUser("eve.holt@reqres.in", "cityslicka");
loginUser('peter@klaven');








