// Importamos la funcion "peticionAdaptable":
import { peticionAdaptable } from "./funcion-adaptable1";

// Enviamos datos normales sin usar FormData:
const apiKey = {
    'x-api-key': 'reqres-free-v1'
};

const dataUser = {
    email:'eve.holt@reqres.in',
    password: 'cityslicka'
}

// Llamamos a la funcion:
async function funcionAdaptable1() {
    const resultRequest = await peticionAdaptable('POST', 'https://reqres.in/api/login', dataUser, apiKey );
    console.log('Resultado:', resultRequest);
    
}
funcionAdaptable1();


// ===================================================================


// Enviamos datos usando formData con un archivo simulado:
// Creamos el archivo falso
const archivoFake = new File(
    ['Contenido de prueba'],
    'ArchivoPrueba.txt',
    {
        type: 'text/plain',
    }
);

// Creamos el formData:
const newFormData = new FormData();

newFormData.append('name', 'Pedro');
newFormData.append('lastname', 'Perez');
newFormData.append('archivo', archivoFake);

async function funcionAdaptable2() {
    const resultRequest = await peticionAdaptable('POST', 'https://httpbin.org/post',newFormData);
    console.log('Resultado:', resultRequest);
    
}
funcionAdaptable2();


// ===================================================================


// Probamos headers personalizados:
const headersCustom = {
    Authorization: 'Bearer token-secreto',
    'Accept-Language': 'es-PE',
};

async function funcionAdaptable3() {
    const resultRequest = await peticionAdaptable('GET', 'https://httpbin.org/headers',undefined,headersCustom);
    console.log('Resultado:', resultRequest);
    
}
funcionAdaptable3();




