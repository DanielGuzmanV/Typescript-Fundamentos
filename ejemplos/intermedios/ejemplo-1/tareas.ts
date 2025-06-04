// Ejemplo 1 - Gestor de tareas
// - Definir una clase Tarea con titylo y estado
// - Definir un gestor de tareas para agregar, listar y completar
// - Usar spread/rest para agregar multiples tareas de una vez
// - Capturar errores si se intenta crear tareas sin titulo

// ______________________________________________
// Clase para las tareas:
export class ClassTarea {
  titulo: string;
  completado: boolean;

  constructor(paramTitulo: string, paramCompletado: boolean = false) {
    if(!paramTitulo) console.error('El titulo debe ser un string no vacio.');
    this.titulo = paramTitulo;
    this.completado = paramCompletado;
  }

  // Metodos:
  public marcarCompletado(): void {
    this.completado = true;
    console.log('La tarea fue completada.')
  }

  public verResultado(): string {
    return `${this.titulo} - ${this.completado ? "Tarea completada" : "Tarea no completada"}`;
  }
}

// Clase para Gestionar las tareas:
export class ClassGestorTareas {
  arrTareas: ClassTarea[];

  constructor() {
    this.arrTareas = [];
  }

  // Metodos:
  public agregarTareas(...tareasNuevas: ClassTarea[]) {
    tareasNuevas.forEach( (valueTarea) => {
      if(!(valueTarea instanceof ClassTarea)) {
        console.error('Solo se pueden agregar objetos de tipo ClassTarea')
      } else {
        this.arrTareas.push(valueTarea);
      }
    })
  }

  public listarTareas(): string[] {
    return this.arrTareas.map( (value, idx) => {
      return `${idx + 1}. - ${value.verResultado()}`;
    })
  }

  public completarTarea(indice: number) {
    if(indice < 0 || indice >= this.arrTareas.length) {
      throw new Error('Indice invalido de tarea');
    } else {
      this.arrTareas[indice].marcarCompletado();
    }
  }

}






