// Ejemplo 1: Discriminacion entre tipos
type EmpleadoType = {
  tipo: 'Empleado';
  salario: number;
}

type Freelance = {
  tipo: 'Freelance';
  proyectos: string[];
}

// Type guard personalizado:
function esEmpleado(persona: EmpleadoType | Freelance): persona is EmpleadoType{
  return persona.tipo === 'Empleado';
}

function mostrarPago(dataUser: EmpleadoType | Freelance) {
  if(esEmpleado(dataUser)) {
    console.log(`Es: ${dataUser.tipo} y el salario es: ${dataUser.salario}`);
  } else {
    console.log(`Es: ${dataUser.tipo} y los Proyectos son:, ${dataUser.proyectos.join(', ')}`);
  }
}

const empleadoObj: EmpleadoType =  {
  tipo: "Empleado",
  salario: 2500
}

const freelanceObj: Freelance = {
  tipo: "Freelance",
  proyectos: ['React', 'JavaScript', 'TypeScript', 'NodeJs'],
}

mostrarPago(empleadoObj);
mostrarPago(freelanceObj);
console.log('============================');


// Ejemplo 2: Validar estructura
type TypeProducto = {
  id: number;
  nombre: string;
}

function esProductoValido(objeto: any): objeto is TypeProducto {
  return objeto && typeof objeto.id === 'number' && typeof objeto.nombre === 'string';
}
const posibleProducto = {
  id: 1,
  nombre: 'Teclado'
}

if(esProductoValido(posibleProducto)) {
  console.log('Es un producto valido:', posibleProducto.nombre);
} else {
  console.log('No es un producto valido');
}






