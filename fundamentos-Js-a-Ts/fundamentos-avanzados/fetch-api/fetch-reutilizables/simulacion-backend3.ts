// Simulacion backend: obtenemos los datos protegidos con token
import { realizarPeticionesHTTP } from "./simulacion-backend1";
import { listMethod } from "./simulacion-backend2";

export async function obtenerUsersToken(token: Record<string, string>) {
    const urlEndPointUsers = 'https://reqres.in/api/users?page=2';
    return await realizarPeticionesHTTP(listMethod[0], urlEndPointUsers, undefined, {
        Authorization: `Bearer ${token}`,
    })
}




