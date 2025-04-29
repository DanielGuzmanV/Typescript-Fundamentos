// Usamos rest y spread
// Realizamos una lista de compras dinamicas:
function agregarProductos(categoria: string, ...productos: string[]): void{ 
    console.log(`Categoria: ${categoria}`);
    console.log('Productos:', productos);
}

const arrayFrutas: string[] = ['Kiwi', 'papaya', 'banana', 'sandia', 'durazno'];

agregarProductos('Frutas', ...arrayFrutas);
console.log('=========================================');

// Sistema de reservas:
// Recibimos un numero flexible de pasajeros (Rest)
// Agregamos cada reserva a una lista general (Spread)

// Creamos la reserva:
const reservas: dateReserva[] = [];

type dateReserva = {
    id: number;
    evento: string;
    fecha: string;
    personas: string[];
}

// Funcion para agregar una nueva reserva:
function crearReservas(evento:string, fecha: string, ...personas: string[]){
    if(personas.length === 0) {
        console.warn('No hay nombres para crear la reserva');
        return;
    }

    const nuevaReserva: dateReserva = {
        id: reservas.length + 1,
        evento,
        fecha,
        personas
    }

    // Creamos un nuevo array con la nueva reserva (usamos spread)
    
    console.log('Reservas creadas:');
    console.log(nuevaReserva);
    
    reservas.push(nuevaReserva);
    console.log('Todas las reservas:')
    console.log(reservas);
}

// Llamamos a la funcion y creamos una reserva:
crearReservas('Taller de pintura', '2025-06-12', 'Martin', 'Pedro');
console.log('======================================================');
crearReservas('Taller de Fotografía', '2025-04-05', 'Marta', 'Peter');
console.log('======================================================');
crearReservas('Concierto de Rock', '1985-10-23', 'Martin', 'Emilia', 'Albert');








