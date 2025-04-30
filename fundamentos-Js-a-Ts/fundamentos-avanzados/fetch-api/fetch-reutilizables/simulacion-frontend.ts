// Usamos la API "reqres.in"
// Estructura simulada frontend:

// Parte del API:
async function makeRequestApi(
    method: string,
    url: string,
    data: Record<string, unknown> | FormData = {},
    headersExtra: Record <string, string> = {}
) {
    
    const headers = {
        'Content-Type': 'application/json',
        ...headersExtra,
    }

    const propertyData = {
        method,
        headers,
        body: method !== 'GET' ? JSON.stringify(data) : undefined
    }

    const response = await fetch(url, propertyData);
    if(!response.ok) {
        if(response.status === 400) throw new Error('Datos invalidos');
        if(response.status === 404) throw new Error('Recurso no encontrado');
        throw new Error(`Error HTTP ${response.status}`);
    }

    const responseJson = await response.json();
    return responseJson;

}

// =====================================================================

// Parte de la autenticacion:

async function loginUserApi(email: string, password: string) {
    const urlApi = 'https://reqres.in/api/login';
    const apiKey = {'x-api-key': 'reqres-free-v1'};
    const dataUser = {email, password};
    return await makeRequestApi('POST', urlApi, dataUser, apiKey);
}

// =====================================================================

// Parte del main:
async function iniciarSesion() {
    try {
        
        const datosLogin = await loginUserApi('eve.holt@reqres.in', 'cityslicka')
        console.log('Token recibido:', datosLogin.token);

        const usuarioRequest = await makeRequestApi('GET', 'https://reqres.in/api/users?page=2', undefined, {
            Authorization: `Bearer ${datosLogin.token}`,
            'x-api-key':'reqres-free-v1'
        })

        console.log('Usuarios protegidos:', usuarioRequest);

    } catch (error) {
        console.error('Error en el login o datos:', error);
    }
}

iniciarSesion();





