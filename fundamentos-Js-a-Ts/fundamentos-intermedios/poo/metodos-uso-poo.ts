// USO DE LOS METODOS
// Metodos privados:
// - Solo se usan dentro de la clase
// - No se pueden acceder desde una instancia
// - se declaran con "private" o "#"

import verificarPar from "../modules/esm/export/export3";

class ClasePrivada {
    // Private: acceso tradicional de Typescript, no se puede acceder fuera
    // de la clase, pero al compilar a JS no lo oculta realmente
    private primerMetodoSaludar(): void{
        console.log("Hola soy un metodo privado con 'private'");
    }

    // "#": metodo privado en JavaScript, es realmente privado, no se puede
    // acceder ni con notacion de corchetes
    #segundoMetodoSaludar(): string {
        return `Hola soy el metodo privado con '#'`;
    }

    // Podremos mostrar el metodo igual de dos formas, ambas son validas:
    // Primera forma:
    public llamarPrimerMetodo(): void {
        this.primerMetodoSaludar();
    }

    // Segunda form:
    llamarSegundoMetodo(): string {
        return this.#segundoMetodoSaludar();
    }
}

const classMetod = new ClasePrivada();
classMetod.llamarPrimerMetodo();
console.log(classMetod.llamarSegundoMetodo());
console.log('============================================');

class CuentaBancaria {
    private saldo: number;
    #clave?: number;

    public nombre?: string;
    public apellido?: string;
    public edad?: number;
    public ocupacion?: string;
    public estado: boolean;

    constructor(paramEstado: boolean = false) {
        this.saldo = 0;
        this.estado = paramEstado;
    }

    // Metodo para verificar una clave
    private verifcarClave(claveIngresada: number): boolean {
        return this.#clave === claveIngresada;
    }

    // Metodo para crear cuenta:
    public crearCuenta(pNombre: string, pApellido: string, pEdad: number, pOcupacion: string, pClave: number, pEstado: boolean) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.edad = pEdad;
        this.ocupacion = pOcupacion;
        this.#clave = pClave;
        this.estado = pEstado;
    }

    // Metodo para retirar dinero, usaremos la clave para verificar si es el usuario 
    public retirarDinero(monto: number, claveUser: number): string {
        if(this.verifcarClave(claveUser) === true) {
            if(monto > this.saldo) {
                return 'Fondos insuficientes';
            } else
            this.saldo -= monto;
            return `Se retiro ${monto} correctamente, saldo actual: $${this.saldo}`;
        }
        return `Clave incorrecta...`;
    }

    // Agregamos dinero usando la clave para verificar si es el usuario
    public agregarDinero(dineroIngresado: number, claveUser: number): string {
        if(this.verifcarClave(claveUser)) {
            if(dineroIngresado <= 0) {
                return 'Ingrese dinero mayor a cero';
            }
            this.saldo += dineroIngresado;
            return `Se deposito ${dineroIngresado} correctamente, saldo actual $${this.saldo}`
        }
        return 'La clave es incorrecta...';
    }

    // Vemos el saldo que tiene el usuario:
    public verSaldoUser(claveUser: number): string {
        if(this.verifcarClave(claveUser) === true) {
            return `El saldo actual es: ${this.saldo}`;
        }
        return 'La clave ingresada es incorrecta...';
    }

    // Vemos los datos de la cuenta:
    public verDatosCuenta(claveUser: number): string{
        if(this.verifcarClave(claveUser)) {
            return `Nombre ${this.nombre}, Apellido: ${this.apellido}, Edad: ${this.edad}, Ocupacion: ${this.ocupacion}, Saldo: ${this.saldo} `;
        }
        return 'Clave invalida...';
    }
}

// Creamos un nuevo usuario:
const cuentaUser1 = new CuentaBancaria();
console.log(cuentaUser1);
console.log('===============================================');

// Creamos una cuenta:
cuentaUser1.crearCuenta('Manuel', 'Memendez', 42, 'Piloto', 98765, true);
console.log(cuentaUser1);
console.log('===============================================');

// Agregamos dinero a nuestra cuenta:
console.log(cuentaUser1.agregarDinero(5000, 98765));
console.log('===============================================');

// Vemos nuestro saldo:
console.log(cuentaUser1.verSaldoUser(98765));
console.log('===============================================');

// Retiramos dinero de nuestra cuenta:
console.log(cuentaUser1.retirarDinero(950, 98765));
console.log('===============================================');

// Vemos los datos de la cuenta:
console.log(cuentaUser1.verDatosCuenta(98765));
console.log('===============================================');

// Accedemos con una clave incorrecta para verificar:
console.log(cuentaUser1.retirarDinero(4000, 12345));
console.log('===============================================');
console.log(cuentaUser1);
console.log('===============================================');

// Registro de acceso a una pagina:
class RegistroAcceso {
    #usuariosConAcceso: string[] = [];

    private registrarUsuario(nombreUser: string) {
        this.#usuariosConAcceso.push(nombreUser);
    }

    public agregarUsuarios(nombre: string) {
        this.registrarUsuario(nombre);
        return `Usuario ${nombre} fue agregado`;
    }

    public permitirAcceso(nombreUser: string) {
        for(let usuarios of this.#usuariosConAcceso) {
            if(usuarios === nombreUser) {
                return `Acceso permitido a ${nombreUser}`;
            }
        }
        return `Usuario ${nombreUser} no registrado, no tiene acceso.`;
    }
    
    // Para ver los usuarios usamos spread operator, este devolvera 
    // una copia de nuestro array
    public verUsuarios() {
        return [...this.#usuariosConAcceso];
    }
}

const listaUsuarios = new RegistroAcceso();

// Agregamos usuarios a la lista:
console.log(listaUsuarios.agregarUsuarios('Alberto'));
console.log(listaUsuarios.agregarUsuarios('Maria'));
console.log(listaUsuarios.agregarUsuarios('Marco'));
console.log(listaUsuarios.agregarUsuarios('Roberto'));
console.log(listaUsuarios.agregarUsuarios('Manuel'));
console.log('========================================');

// Vemos a los usuarios:
console.log(listaUsuarios.verUsuarios());
console.log('========================================');

// Verificamos si algunos usuarios tienen acceso:
console.log(listaUsuarios.permitirAcceso('Pedro'))
console.log(listaUsuarios.permitirAcceso('Mateo'))
console.log(listaUsuarios.permitirAcceso('Juan'))
console.log('===============================================');

// Metodos estaticos:
// - Se usan sin necesidad de crear instancias
// - Se usa con: static nombreDelMetodo();
// - Se accede directamente desde la clase

class ClaseEstatica {
    static metodoEstatico1(): string {
        return `Puede ser usado sin instanciar la clase`;
    }

    static metodoEstatico2(): void {
        console.log('Soy un metodo estatico...');
    }
}

// Llamamos a los metodos estaticos:
console.log(ClaseEstatica.metodoEstatico1());
console.log('===============================');
ClaseEstatica.metodoEstatico2();
console.log('===============================================');

// Conversor de unidades usando metodos estaticos:
class Conversor {
    static celsiusFahrenheit(celsius: number): number {
        return (celsius * 9/5) + 32
    }

    static kilometrosMillas(km: number): number {
        return km * 0.621371;
    }
}

// Usamos los metodos estaticos:
console.log('Celsius a Fahrenheit es:', Conversor.celsiusFahrenheit(55));
console.log('km a millas es:', Conversor.kilometrosMillas(100));
console.log('===============================================');

// Contamos cuantas instancias se crean de la clase:
class UserCreados {
    // Propiedad estatica:
    static cantidadUser: number = 0;
    nombre: string;

    constructor(paramNombres: string) {
        this.nombre = paramNombres;

        // Usamos "cantidadUser" para sumar cada vez que se crea una instancia
        // y lo llamamos con el nombre de la clase "Usuarios"
        UserCreados.cantidadUser++;
    }

    static obtenerTotalInstancias() {
        return `Usuarios registrados: ${UserCreados.cantidadUser}`;
    }
}

// Creamos varias instancias:
const user1 = new UserCreados('David');
const user2 = new UserCreados('Carlos');
const user3 = new UserCreados('Manuel');
const user4 = new UserCreados('Antonio');
const user5 = new UserCreados('Alberto');
const user6 = new UserCreados('Marcelo');

console.log(UserCreados.obtenerTotalInstancias());



