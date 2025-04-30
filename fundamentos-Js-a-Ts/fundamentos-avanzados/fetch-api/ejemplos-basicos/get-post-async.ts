// Uso de async-await:
// Esta es una forma mas moderna y limpia de realizar solicitudes

// Ejemplo: solicitud GET
async function obtenerUsuarios() {
    try {
        
        const response = await fetch('https://reqres.in/api/posts', {
            headers: {
                'x-api-key': 'reqres-free-v1',
            }
        });
        if(!response.ok) throw new Error('Upss... algo salio mal');

        const data = await response.json();
        console.log('Los usuarios son:', data);

    } catch (error) {
        console.error('Error en enviar la peticion...', error);
    }
}
obtenerUsuarios();

// ========================================================

// Creamos un nuevo usuario con el metodo POST:
async function crearUsuario() {
    try {
        
        const response = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'reqres-free-v1',
            }, 
            body: JSON.stringify({
                'name': 'Marcelo',
                'lastname': 'Salvatierra',
                'email': 'marcelo.reqres@user.com',
                'job': 'frontend-developer',
            })
        })

        if(response.status === 201) {
            const data = await response.json();
            console.log('Nuevo usuario creado:', data);
        } else {
            throw new Error('Error al crear un usuario');
        }

    } catch (error) {
        console.error('Error con la solicitud:', error);
    }
}
crearUsuario();






