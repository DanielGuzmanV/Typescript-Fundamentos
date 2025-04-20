// Metodos POO
// Son acciones o comportamientos de la clase o objeto

class UsoMetodo1 {
    propNombre: string;
    propApellido: string;
    propEdad: number;
    
    constructor(nombre: string, apellido: string, edad: number) {
        this.propNombre = nombre;
        this.propApellido = apellido;
        this.propEdad = edad;
    }

    // Metodos sencillos:
    // Metodo con console.log():
    saludarMetodo(): void {
        console.log('Hola soy', this.propNombre);
    }

    // Metodo con return:
    presentacionMetodo(): string {
        return `Mi nombre es ${this.propNombre} y tengo ${this.propEdad} años`;
    }

}

const persona1: UsoMetodo1 = new UsoMetodo1('Armando', 'Muros', 53);

// Metodo con console.log():
persona1.saludarMetodo();

// Metodo con return:
console.log(persona1.presentacionMetodo());
console.log('============================================');

// Propiedades por defecto, que se cambiaran con los metodos
class UsoMetodo2 {
    propMarca: string;
    propEstado: string;
    propPrecio: number;

    constructor(marca: string = 'Sin marca', estado: string = '', precio: number = 0) {
        this.propMarca = marca;
        this.propEstado = estado;
        this.propPrecio = precio;
    }

    // Metodos:
    agregarMarca(nuevaMarca: string) {
        this.propMarca = nuevaMarca;
    }

    agregarEstado(nuevoEstado: string) {
        this.propEstado = nuevoEstado;
    }
    
    agregarPrecio(nuevoPrecio: number) {
        this.propPrecio = nuevoPrecio;
    }

}

const datosAuto: UsoMetodo2 = new UsoMetodo2();
// Vemos los datos por defecto:
console.log(datosAuto);

// Agregamos datos a las propiedades:
datosAuto.agregarMarca('Totoya');
datosAuto.agregarEstado('Nuevo');
datosAuto.agregarPrecio(45000);

// Verificamos los datos cambiados:
console.log(datosAuto);
console.log('============================================');

// Propiedades sin valor asignados a los metodos y propiedades opcionales 
// en el constructor de la clase
class UsoMetodo3 {

    // Propiedades que podran ser: un tipo de dato o undefined
    propNombre: string | undefined;
    propEdad: number | undefined;
    propCiudad: string | undefined;

    // Propiedades que aun no tienen valor
    propOcupacion?: string;
    propEstado?: string;

    constructor(nombre?:string, edad?: number, ciudad?: string) {
        this.propNombre = nombre;
        this.propEdad = edad;
        this.propCiudad = ciudad;
    }

    // Asignamos valores a los metodos sin valores o datos:
    setOcupacion(nuevaOcupacion: string) {
        this.propOcupacion = nuevaOcupacion;
    }

    setEstado(nuevoEstado: string) {
        this.propEstado = nuevoEstado;
    }

    informacionUser(): void {
        console.log(`Nombre: ${this.propNombre}, Edad: ${this.propEdad}, Ocupacion: ${this.propOcupacion}, Estado: ${this.propEstado}`);
    }

}

// Creamos varios objetos:

// Usamos las propiedades opcionales
const datePerson1: UsoMetodo3 = new UsoMetodo3();
console.log(datePerson1)
console.log('=========================================');

// Agregamos datos a las propiedades opcionales
const datePerson2: UsoMetodo3 = new UsoMetodo3('Pablito', 35, 'villa santa');
console.log(datePerson2)

// Vemos la informacion del segundo objeto:
datePerson2.informacionUser();
console.log('=========================================');

// Agregamos datos a la ocupacion y estado:
datePerson2.setOcupacion('Mecanico');
datePerson2.setEstado('Divorciado');
datePerson2.informacionUser();
console.log('=========================================');

// Usamos los metodos GET y SET con propiedades privadas
class UsoMetodo4 {
    private propUsuario: string;
    private propEdad: number;
    #propOcupacion: string;
    #propPassword: string;

    constructor(nombre: string, edad: number, ocupacion: string, password: string) {
        this.propUsuario = nombre;
        this.propEdad = edad;
        this.#propOcupacion = ocupacion;
        this.#propPassword = password;
    }

    // Getter para leer el nombre del Usuario:
    get retornarNombre() {
        return `Hola soy, ${this.propUsuario}`
    }

    // Setter para cambiar la contraseña:
    set cambiarPassword(newPassword: string) {
        this.#propPassword = newPassword;
    }

    // Agregamos un get para ver si el password cambio:
    get verPassword() {
        return this.#propPassword;
    }
}

let newDateUser1 = new UsoMetodo4('Bruno', 37, 'Profesor', 'PW12345');
console.log(newDateUser1);
console.log(newDateUser1.retornarNombre);

// Verificamos los cambiso del password
newDateUser1.cambiarPassword = 'New password: NPW678910';
console.log(newDateUser1.verPassword);


// Con Get y Set podremos acceder a propiedades privadas
// GET: lee una propiedad privada desde fuera de la clase
// SET: Modifica una propiedad privada desde fuera de la clase

