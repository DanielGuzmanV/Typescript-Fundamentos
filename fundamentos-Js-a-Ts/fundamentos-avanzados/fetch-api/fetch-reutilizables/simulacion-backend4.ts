// Simulacion Backend: logica principal:
// Cuarto paso:

import { loginUsersHTTP } from "./simulacion-backend2";
import { obtenerUsersToken } from "./simulacion-backend3";

export async function iniciarSesionUser() {
    try {
        // Primero recibimos el token:
        const tokenUser = await loginUsersHTTP('eve.holt@reqres.in', 'cityslicka');
        console.log('El token del usuario es: ', tokenUser.token);

        // Obtenemos los usuarios con token:
        const userWithtokens = await obtenerUsersToken(tokenUser.token);
        console.log('Los usuarios protegidos son:', userWithtokens);

    } catch (error) {
        console.error('Error:', error);
    }
}






