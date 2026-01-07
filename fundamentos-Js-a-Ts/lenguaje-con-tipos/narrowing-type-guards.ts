// typeof (Narrowing con tipos primitivos):
function imprimirDatos(valor: string | number): void {
    if(typeof valor === 'string') {
        console.log('El texto en mayusculas:', valor.toUpperCase());
    } else {
        console.log('Es un numero al cuadrado:', valor * valor);
    }
}

imprimirDatos('Hola mundo');
imprimirDatos(6);
// typeof: sirve para diferenciar tipos primitivos (string, number, boolean, etc)


// in (Narrowing en objetos con propiedades distintas):
type TipoGato = { 
    tipo: 'gato',
    maullar: () => void
};

type TipoPerro = {
    tipo: 'perro',
    ladrar: () => void
};

function sonidoAnimal(animal: TipoGato | TipoPerro) {
    if('maullar' in animal) {
        console.log('Es un gato!')
        animal.maullar();
    } else if('ladrar' in animal) {
        console.log('Es un perro!')
        animal.ladrar();
    } else {
        console.log('No es ningun animal...');
    }
}

// Creamos objetos con los tipos de perro y gato para usar la funcion:
const myCat: TipoGato = {
    tipo: "gato",
    maullar: () => console.log('El gato esta maullando')
}

const myDog: TipoPerro = {
    tipo: "perro",
    ladrar: function (): void {
        console.log('El perro esta ladrando...')
    }
}
// Llamamos a la funcion:
sonidoAnimal(myCat);
sonidoAnimal(myDog);
// In: verifica si una propiedad existe en un objeto, esto es util cuando
// los tipos tienen estructuras distintas


// Instanceof (Para clases y constructores);
class MiCarro {
    encender() {
        console.log('El carro esta encendido');
    }
}

class MiMoto {
    arrancar() {
        console.log('Moto arrancada');
    }
}

function iniciarVehiculo(vehiculos: MiCarro | MiMoto) {
    if(vehiculos instanceof MiCarro) {
        vehiculos.encender();
    } else if(vehiculos instanceof MiMoto) {
        vehiculos.arrancar();
    }
}
const nuevoAuto = new MiCarro();
const nuevaMoto = new MiMoto();
iniciarVehiculo(nuevoAuto);
iniciarVehiculo(nuevaMoto);

// Ejemplo con clases
class ClaseUsuario {
    constructor(public nombre: string) {}
    
    saludar() {
        console.log(`Hola soy ${this.nombre}`);
    }
}

class ClaseAdmin extends ClaseUsuario {
    permisos() {
        console.log('Tiene acceso de administrador');
    }
}
// Creamos una funcion:
function mostrarInfoUser(persona: ClaseUsuario) {
    persona.saludar();
    if(persona instanceof ClaseAdmin) {
        console.log('Es un Admin:');
        persona.permisos();
    } else {
        console.log('Es un usuario comun');
    }
}
// Creamos instancias:
const tipoUser = new ClaseUsuario('Marco');
const tipoAdmin = new ClaseAdmin('Alberto');
// Realizamos pruebas con la funcion:
mostrarInfoUser(tipoUser);
console.log('----------------------');
mostrarInfoUser(tipoAdmin);
// Instanceof: nos sirve para saber si un objeto es una instancia de
// una clase o constructor especifico


// Type Guards personalizados (funciones que refinan el tipo):
type AdminType =  {
    rol: 'admin';
    permisos: string[];
}

type UsuarioType = {
    rol: 'usuario';
    nombre: string;
}

// Este sera el type guard personalizado:
function esTipoAdmin(usuario: AdminType | UsuarioType): usuario is AdminType {
    return usuario.rol === 'admin';
}

// Funcion que usara el type guard:
function mostrarInformacion(usuario: AdminType | UsuarioType) {
    if(esTipoAdmin(usuario)) {
        console.log('Permisos:', usuario.permisos.join(', '));
    } else {
        console.log('Nombre del usuario:', usuario.nombre);
    }
}

const valorAdmin: AdminType = {
    rol: "admin",
    permisos: ['crear','editar','eliminar'],
};

const valorUsuario: UsuarioType = {
    rol: "usuario",
    nombre: "Marcelo",
};

console.log('------------------------------');
mostrarInformacion(valorAdmin);
mostrarInformacion(valorUsuario);
// Un type personalizado es una funcion que retorna una afirmacion de tipo
// (usuario is Admin), permitiendo a Ts saber con precision que tipo se esta usando


