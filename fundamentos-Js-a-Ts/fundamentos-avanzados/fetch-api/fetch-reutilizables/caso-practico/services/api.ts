// Caso practico, usando las solicitudes HTTP
// Realizaremos la peticion que se exportara y nos tendra que dar nuestro token

// Ejemplo:
export async function respuestaAPI(
    // Parametros obligatorios:
    method: string,
    paramUrl: string, 
    paramHeadersExtra: Record<string, string>,

    // Parametros opcionales:
    paramData?: Record<string, unknown> | null, ) 
{
    try {
        // ...........................
        const options: RequestInit = {
            method, 
            headers: {
                'Content-Type': 'application/json',
                ...paramHeadersExtra
            },
        };

        if(method !== 'GET' && paramData !== null && paramData !== undefined) {
            options.body = JSON.stringify(paramData);
        }
        // ````````````````````````````````````````````

        // Realizamos las peticion con "fetch"
        const response = await fetch(paramUrl, options);
        if(!response.ok) {
            if(response.status === 400) throw new Error('Error de tipo 400');
            if(response.status === 404) throw new Error('Error de tipo 404');
            if(response.status === 500) {
                throw new Error('Error de tipo 500');
            } else {
                throw new Error('Error desconocido');
            }
        }

        const jsonResponse = await response.json();
        return jsonResponse;

    } catch (error) {
        console.error('Error al realizar la perticion:', error);
    }
}












