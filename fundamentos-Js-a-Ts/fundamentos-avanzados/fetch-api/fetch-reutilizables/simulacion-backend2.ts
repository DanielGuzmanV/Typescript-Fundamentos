// Simulacion Backend: Logica (POST/ api/ login)
// Segundo paso:
import { realizarPeticionesHTTP } from "./simulacion-backend1";

export const listMethod: string[] = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];
export async function loginUsersHTTP(email: string = '', password: string = '') {
    if(!email || !password)  {
        console.log('No se ingresaron datos, vuelva a intentarlo...');
        return;
    }

    const apiUrlHTTpLogin: string = 'https://reqres.in/api/login';
    const userData = { email, password}
    const keyForApi = { 'x-api-key': 'reqres-free-v1' };

    return await realizarPeticionesHTTP(listMethod[1], apiUrlHTTpLogin, userData, keyForApi);

}







