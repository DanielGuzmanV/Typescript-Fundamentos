
// Trabajar con api-response
// Ejemplo 1: Verificar el "status" de la respuesta

import { json } from "stream/consumers";

// Usaremos al api "reqres" y el endpoint "https://reqres.in/api/users?page=1"
type UserType1 = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
}

async function fetchConValidacion() {
  const response = await fetch('https://reqres.in/api/users?page=1', {
    headers: {
      'x-api-key': 'reqres-free-v1',
    }
  });

  if(!response.ok) {
    console.error('Error en la solicitud:', response.status);
    return;
  }

  const dataJson = await response.json();
  const usuarios: UserType1[] = dataJson.data;

  console.log('Usuarios recibidos:');
  usuarios.forEach( (values) => {
    console.log(`${values.id} - ${values.first_name} ${values.last_name} - ${values.email}`);
  })

}

// fetchConValidacion();

// ==============================================================

// Ejemplo 2: validar estructura manualmente con "in"
// Usaremos al api "reqres" y el endpoint "https://reqres.in/api/users/2"

type UserType2 = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
}

async function fetchValidado(): Promise<void> {
  const response = await fetch('https://reqres.in/api/users/2', {
    headers: {
      'x-api-key': 'reqres-free-v1',
    },
  });

  const dataJson = await response.json();

  // Validacion manual para asegurar la estructura:
  if(
    'data' in dataJson &&
    typeof dataJson.data === 'object' && 
    'first_name' in dataJson.data &&
    typeof dataJson.data.first_name === 'string'
  ) {
    const usuarios: UserType2 = dataJson.data;
    console.log('Usuario valido:', `${usuarios.first_name} ${usuarios.last_name}`);
  } else {
    console.error('Estructura invalida:', dataJson);
  }

}

fetchValidado();
