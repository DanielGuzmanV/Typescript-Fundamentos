// Propiedades POO:
// Propiedades adicionales sin necesidad de usar los parametros del constructor

import { profile } from "console";

class Usopropiedades1 { 
    nombre: string;
    edad: number;

    pais: string;

    // usar "?" y "dato|undefined" son casi iguales
    ocupacion?: string;
    estado?: string;
    pasatiempo: string | undefined;
    comidaFavorita: string | undefined;

    constructor(paramNombre: string, paramEdad: number) {
        this.nombre = paramNombre;
        this.edad = paramEdad;

        // A estas propiedades se le puede asignar valores pero tambien 
        // se les puede dejar sin ningun valor
        this.pais = 'Honduras';
        this.ocupacion = undefined;
        this.pasatiempo; undefined;
        this.comidaFavorita;
    }
}

// Creamos una instancia:
let person1 = new Usopropiedades1('Pedro', 45);
console.log(person1);

// Podemos acceder a esas propiedades
console.log('El pais es:',person1.pais);
console.log('Ocupacion:',person1.comidaFavorita);
console.log('Su pasatiempo es:',person1.pasatiempo);
console.log('Su comida es:', person1.comidaFavorita);
console.log('==============================================');

// Propiedades fuera del constructor, tenemos dos formas de hacerlo:
class Usopropiedades2 {
    nombre: string;
    edad: number;
    
    // Opcion 1:
    // Declarar las propiedades desde un inicio (Manera segura si sabemos que propiedades vendran)
    apellido?: string;
    ocupacion?: string;
    
    // Opcion 2:
    // Usar un indice de tipo [key:string]: any (menos seguro);
    [key: string]: any;
    
    
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

// Instancia de la clase:
const persona2 = new Usopropiedades2('Alberto', 58);
console.log('Propiedades originales', persona2)
console.log('==============================================');

// Agregamos propiedades de la opcion 1:
persona2.apellido = 'Soliz';
persona2.ocupacion = 'Camionero';

// Agregamos propiedades de la opcion 2 (Puede ser cualquier dato):
persona2.estado = 'Soltero';
persona2.comidaFavorita = 'Correr';

console.log('Nuevas propiedades:', persona2);
console.log('==============================================');

// Propiedades con valores por defecto:
class Usopropiedades3 {
    propNombre: string;
    propEdad: number;
    propCiudad: string;

    constructor(nombre: string = 'Sin nombre', edad: number = 0, ciudad: string = 'Sin ciudad') {
        this.propNombre = nombre;
        this.propEdad = edad;
        this.propCiudad = ciudad;
    }
    
}

const persona3 = new Usopropiedades3();
console.log(persona3);

// Podremos acceder a las propiedades:
console.log(persona3.propNombre);
console.log(persona3.propEdad);
console.log(persona3.propCiudad);
console.log('==============================================');

// Creamos una nueva instancia para asignarle valor:
const persona4 = new Usopropiedades3('Oscar', 32, 'Entre Rios');
console.log(persona4);

// Propiedades opcinales, tenemos dos formas de agregarlos:
class Usopropiedades4 {
    // Primera forma:
    propNombre: string | undefined;
    propApellido: string | undefined;
    
    // Segunda forma:
    propEdad?: number;
    propCiudad?: string;
    
    constructor(nombre?: string, apellido?: string, edad?: number, ciudad?: string) {
        this.propNombre = nombre;
        this.propApellido = apellido;
        this.propEdad = edad;
        this.propCiudad = ciudad;
    }
    
}

const dateUser = new Usopropiedades4();
console.log(dateUser);
console.log('==============================================');

// Propiedades privadas, hay de dos formas:
// Private: 
// - Privacidad solo en tiempo de compilacion
// - Visible al hacer console.log()
// - Solo es exclusivo de TS
//
//  "#"
// - Es privacidad real en timpo de ejecucion
// - No es visible al hacer console.log()
// - Tambien se puede usar en Ts pero con ES2020 o superiores

class Usopropiedades5 {
    // private:
    private propNombre: string;
    private propApellido: string;
    
    // "#":
    #propEdad?: number;
    #propCiudad?: string;
    
    constructor(nombre: string, apellido: string, edad?: number, ciudad?: string) {
        this.propNombre = nombre;
        this.propApellido = apellido;
        this.#propEdad = edad;
        this.#propCiudad = ciudad;
    }
    
}

// Creamos una instancia:
const datePerson1 = new Usopropiedades5('Mauricio', 'Valverde');
// Vemos los datos:
console.log(datePerson1);

// Creamos otra instancia:
const datePerson2 = new Usopropiedades5('Enrique', 'Segoviano', 32, 'Tamaulipas');
console.log(datePerson2);
// Solo nos deja ver el nombre y apellido, ya que "#" es mas estricto

// intentamos acceder a las propiedades:
// console.log(datePerson2.propNombre)
// console.log(datePerson2.propApellido)
// console.log(datePerson2.propEdad)
// console.log(datePerson2.propCiudad)

// Como vemos no nos dejara acceder porque son privadas
console.log('==============================================');

// Podemos agregar propiedades de esta manera:
class Usopropiedades6 {
    
    // Usando public:
    public propNombre: string;
    public propApellido: string;
    public propEdad: number;
    
    // Sin public:
    propOcupacion: string;
    propEstado: string;
    propVivo: boolean;
    
    constructor(nombre: string, apellido: string, edad: number, ocupacion: string, estado: string, isAlive: boolean) {
        this.propNombre = nombre;
        this.propApellido = apellido;
        this.propEdad = edad;
        this.propOcupacion = ocupacion;
        this.propEstado = estado;
        this.propVivo = isAlive;
    }
}

// Creamos una instancia:
const datosUsuario = new Usopropiedades6('Carlitos', 'Madrigal', 23, 'Profesor', 'soltero', true);
console.log(datosUsuario);
// Podemos notar que no afecta en nada, aunque nos ayudaria a diferenciar
// si una propiedad es "private" o "public"

console.log(datosUsuario.propNombre);
console.log(datosUsuario.propApellido);
console.log(datosUsuario.propEdad);
console.log('==============================================');

// Version abreviada de las propiedades:
class Usopropiedades7 {
    propPrecio: number;
    propDisponible: boolean;

    constructor(

        // Aqui Declaramos una propiedad con sus nombres, y le asignamos el valor
        public propMarca: string,
        public propEstado: string,
        private propMatricula: number,
        
        // Son solo parametros del constructor, que necesitan propiedades de la clase
        precio: number,
        disponible: boolean,
    ) {
        this.propPrecio = precio;
        this.propDisponible = disponible;
    }
}

const datosVehiculo = new Usopropiedades7('Totoya', 'Seminuevo', 1235, 14000, true);
console.log(datosVehiculo);

// Accedemos a las propiedades:
console.log(datosVehiculo.propMarca);
console.log(datosVehiculo.propEstado);
console.log(datosVehiculo.propPrecio);
console.log(datosVehiculo.propDisponible);

