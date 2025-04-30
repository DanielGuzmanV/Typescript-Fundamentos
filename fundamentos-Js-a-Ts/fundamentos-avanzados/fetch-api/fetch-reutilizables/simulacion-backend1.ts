// Para esta simulacion usaremos "REQRes.in"
// Simulacion Backend: funcion general para peticiones HTTP (reutilizable)
// Primer paso:
export async function realizarPeticionesHTTP(
    method: string,
    url: string,
    data: Record<string, unknown> | FormData = {},
    headersExtra: Record<string, string> = {},
) {
    // Verificamos si los datos son formData o no
    const esFormData = data instanceof FormData;

    const headers = esFormData ? headersExtra : {
        'Content-Type': 'application/json',
        ...headersExtra,
    }

    const propertydata = { 
        method,
        headers,
        body: method !== 'GET' ? (esFormData ? data: JSON.stringify(data)): undefined,
    };

    const response = await fetch(url, propertydata);
    if(!response.ok) {
        if(response.status === 400) throw new Error('La solicitud esta mal formada');
        if(response.status === 404) throw new Error('Recurso no encontrado');
        throw new Error(`ERROR https: ${response.status}`);
    }
    const resData = await response.json();
    return resData;
}








