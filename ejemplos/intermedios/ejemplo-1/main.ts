import { ClassGestorTareas, ClassTarea } from "./tareas";

try {
  
  const gestorValue = new ClassGestorTareas();

  // Creamos tareas nuevas:
  const tarea1 = new ClassTarea('Aprender Javascript');
  const tarea2 = new ClassTarea('Realizar proyectos');
  const tarea3 = new ClassTarea('Leer documentacion');
  const tarea4 = new ClassTarea('');

  // Agregamos varias tareas:
  gestorValue.agregarTareas(tarea1, tarea2, tarea3, tarea4);

  // Mostramos las tareas: 
  console.log('Lista de tareas:');
  console.log(gestorValue.listarTareas().join('\n'));
  
  // Marcar una tarea como completada:
  gestorValue.completarTarea(0);
  gestorValue.completarTarea(2);
  
  // Vemos las tareas actualizadas:
  console.log('\n Despues de completar una tarea:');
  console.log(gestorValue.listarTareas().join('\n'));

  // Intentamos agregar una tarea invalida:
  // gestorValue.agregarTareas('nueva tarea')

} catch (error) {
  console.error('Error:', error);
}





