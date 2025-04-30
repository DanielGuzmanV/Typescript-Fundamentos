// Enviar datos como "FormData":
// Estos se usan cuando se estan enviando datos de formularios HTML o archivos

// Ejemplo 1:
// Creamos un objeto vacio:
const formData = new FormData();

// Agregamos un par clave/valor
formData.append('name', 'Carlos');

// Realizamos la solicitud POST:
fetch('https://httpbin.org/post', {
    method: 'POST',

    body: formData,
})
    .then((res) => res.json())
    .then((data) => console.log('La respuesta es:', data))
    .catch((err) => console.error('Error:', err));


// =============================================================


// Enviamos datos como "aplication/x-www-form-urlencoded":
// Esto se usaban antes con formularios HTML clasicos como (form action-method = "POST")

// Ejemplo:
const paramsDate = new URLSearchParams();

// Estos datos enviados si podremos verlo
paramsDate.append('name', 'Mateo');
paramsDate.append('job', 'Developer');

async function buscarUrl() {
    try {
        
        const response = await fetch('https://reqres.in/api/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-api-key': 'reqres-free-v1',
            },
            body: paramsDate,
        })
        
        const data = await response.json();
        console.log('La respuesta es:', data);
        
    } catch (error) {
        console.error('Error:', error);
    }
}
buscarUrl();


// =============================================================


// Headers personalizados:
// Aveces necesitamos enviar tokens, idiomas o cualquier
// tipo de header extra que te pida el backend

// Ejemplo de prueba:
async function headersPersonalizados() {
    try {
        
        const response = await fetch('https://httpbin.org/headers', {
            method: 'GET',
            headers: {
                // Las llaves y valores pueden cambiar dependiendo lo que la API
                // o el backend esperen o necesitan enviar 
                'Authorizatoin': 'Bearer token-top-secret',
                'Accept-Languaje': 'es-PE',
                'X-Custom-Header': 'ValorPersonalizado',
            }
        })

        const data = await response.json();
        console.log('Los headers enviados son:', data.headers);

    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
}
headersPersonalizados();
// =============================================================


// Ejemplo enviando un formData con la API "httpbin.org"
const formData1 = new FormData();

formData1.append('name', 'Alberto');
formData1.append('lastname', 'Murros');
formData1.append('email', 'carlos.ejemplo@reqres.com');
formData1.append('job', 'Mecanico');

fetch('https://httpbin.org/post', {
    method: 'POST',
    body: formData1,
})
.then((response) => response.json())
.then( (data) => {
    // Vemos los datos enviados con "data.form"
        console.log('Datos enviados son:', data.form)
    })
    .catch((error) => console.error('Error datos:', error))
    
    
// =============================================================


// Simulamos un envio de un archivo y usaremos "Blob" para crear archivos falsos
const archivoFalso = new Blob(
    [ 'Este es el contenido del archivo falso...' ], 
    { type: 'text/plain' }
);

// Creamos un nuevo objeto:
const newFormData = new FormData();

newFormData.append('name', 'Roberto');
newFormData.append('lastname', 'Delrio');

// Aqui simulamos el envio del archivo:
newFormData.append('archivo', archivoFalso, 'robert.txt');

async function simulacionArchivo() {
    try {
        
        const response = await fetch('https://httpbin.org/post', {
            method: 'POST',
            body: newFormData,
        })

        const data = await response.json();

        console.log('Datos del usuario:', data.form);
        console.log('Simulacion de archivo enviado:', data.files);

    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
}
simulacionArchivo();




    
    
    
    