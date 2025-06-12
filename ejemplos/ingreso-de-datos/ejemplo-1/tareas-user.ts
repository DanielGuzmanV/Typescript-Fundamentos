// Mismo ejemplo de Gestor de tareas
// Solo que este tiene ingreso de datos por consola

import * as readline from 'readline';

const interfaz = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let listTareas: string[] = [];
let listTareasCompletadas: string[] = [];

function mostrarMenu() {
  console.log('\n---Gestor de Tareas---');
  console.log('1. Agregar tarea');
  console.log('2. Ver tareas');
  console.log('3. Completar tarea');
  console.log('4. Ver tareas completadas');
  console.log('5. Salir');
  interfaz.question('Elige una opcion: ', manejarOpcion);
}

function manejarOpcion(opcion: string) {
  switch (opcion.trim()) {
    case '1':
      interfaz.question('Escribe la tarea: ', (tarea) => {
        if(tarea.trim() === '') {
          console.log('No se puede agregar una tarea vacia');
        } else if(listTareas.includes(tarea.trim())) {
          console.log('La tarea ya existe');
        } else {
          listTareas.push(tarea.trim());
          console.log('Tarea agregada');
        }
        mostrarMenu();
      })
      break;

    case '2':
      console.log('\nTareas pendientes:') ; 
      if(listTareas.length === 0){
        console.log('No hay tareas pendientes');
        mostrarMenu();
        break;
      }
      listTareas.forEach((valueTarea, index) => console.log(`${index + 1}. - ${valueTarea}`));
      mostrarMenu();
      break;

    case '3':
      if(listTareas.length === 0 ) {
        console.log('No hay tareas para completar');
        mostrarMenu();
        break;
      }

      interfaz.question('Numero de tarea a completar: ', (num) => {
        const index = parseInt(num) - 1
        if(isNaN(index) || index < 0 || index >= listTareas.length) {
          console.log('Numero invalido');
        } else {
          const tareas = listTareas.splice(index, 1)[0];
          listTareasCompletadas.push(tareas);
          console.log('Tarea completada');
        }
        mostrarMenu();
      })
      break;

    case '4':
      console.log('\nTareas completadas: ');
      if(listTareasCompletadas.length === 0) {
        console.log('No hay tareas completadas');
        mostrarMenu();
        break;
      }
      listTareasCompletadas.forEach( (valueTarea, idx) => console.log(`${idx + 1}. - ${valueTarea}`));
      mostrarMenu();
      break;
      
    case '5':
      interfaz.close();
      break;

    default:
      console.log('Opcion invalida...');
      mostrarMenu();
      break;
  }
}

mostrarMenu();

interfaz.on('Close', () => {
  console.log('Hasta pronto...')
})





