// Funcion adaptable tanto para usar JSON y formData, incluso con archivos
// y headers personalizados

export async function peticionAdaptable(
    method: string,
    argUrl: string,
    argData?: Record<string, unknown> | FormData,
    argHeaders: Record<string, string> = {},
) {
    
    const propObject: RequestInit = {
        method,
        headers: {},
    };

    // Verificamos si es "formData"
    if(method !== 'GET' && method !== 'HEAD'){
        if(argData instanceof FormData) {
            propObject.body = argData;
        } else if (argData !== null && argData !== undefined && typeof argData === 'object' ) {
            propObject.body = JSON.stringify(argData);
    
            // Indicamos que "headers" es un objeto con claves y valores de tipo string
            (propObject.headers as Record<string, string>)['Content-Type'] = 'application/json';
        }
    }

    // Agregamos headers opcionales:
    propObject.headers = {
        ...propObject.headers,
        ...argHeaders
    }

    try {
        
        const response = await fetch(argUrl, propObject);
        
        // Validacion
        if(!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const responseData = await response.json();
        return responseData;

    } catch (error) {
        console.error('Error en la peticion:', error);
    }

}













