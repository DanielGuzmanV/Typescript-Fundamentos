// Realizaremos peticiones fetch con respuestas correctamente tipadas
// Opcion 1 usando la api: JSONPlaceholder
// Esta api es gratuita que ofrece datos ficticios como usuarios,
// publicaciones, comentarios, etc

import { json } from "stream/consumers";

// Ejemplo 1: Obtener un usuario
type UsuarioTypeRes1 = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

async function getValueUser(): Promise<void> {
  try {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data: UsuarioTypeRes1 = await response.json();

    console.log('===================================================')
    console.log(` Nombre: ${data.name}\n Email: ${data.email}\n Celular: ${data.phone}\n`);
    
  } catch (error) {
    console.error('Error en la peticion:', error)
  }
}
getValueUser();


// ============================================================


// Ejemplo 2: arreglo de usuarios
type UsuarioTypeRes2 = {
  id: number;
  username: string;
  phone: string;
}

async function getValuesUsers(): Promise<void> {
  try {
    
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const datos: UsuarioTypeRes2[] = await res.json();
    
    console.log('===================================================')
    console.log('Usuarios: ')
    datos.forEach( (valueUsers) => {
      console.log(`Id: ${valueUsers.id}\n Usuarion: ${valueUsers.username}\n Telefono: ${valueUsers.phone}`);
    });
    
  } catch (error) {
    console.log('Error en la peticion: ', error)
  }
}
getValuesUsers();


// ============================================================
// ============================================================


// Opcion 2 usando la api: Reqres
// Esta require una api-key para poder usar sus datos

// Ejemplo 1: obtener un usuario
type UsuarioTypeRes3 = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
};

async function getDataUser(): Promise<void> {
  try {
    
    const response = await fetch('https://reqres.in/api/users/1', {
      headers: {
        'x-api-key': 'reqres-free-v1',
      }
    });
    const dataRes = await response.json();
    
    const dataUser: UsuarioTypeRes3 = dataRes.data;
    
    console.log('======================================')
    console.log('ID-user: ', dataUser.id);
    console.log('Nombre: ', dataUser.first_name);
    console.log('Apellido: ', dataUser.last_name);
    console.log('Email: ', dataUser.email);
    
  } catch (error) {
    console.log('Error en la peticion: ', error)
  }
  
}
getDataUser();


// ============================================================


type UsuarioTypeRes4 = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

async function getDataUsersValues(): Promise<void> {
  const res = await fetch('https://reqres.in/api/users?page=1', {
    headers: {
      'x-api-key': 'reqres-free-v1',
    },
  });

  const json = await res.json();

  const datos: UsuarioTypeRes4[] = json.data;

  console.log('======================================')
  console.log('Los usuarios son:')
  datos.forEach((usuario) => {
    console.log(`${usuario.id}: ${usuario.first_name} ${usuario.last_name}`);
  });
}
getDataUsersValues();


