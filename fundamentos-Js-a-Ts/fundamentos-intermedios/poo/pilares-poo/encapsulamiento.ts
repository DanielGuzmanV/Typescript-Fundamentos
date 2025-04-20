// Encapsulamiento:
// Basicamente encapsulamiento es poner en privado una metodo o propiedad
// estos no tendran acceso desde fuera de la clase, osea estaran encapsulados

class AccountBanco {

    // Esto es encapsulamiento
    #saldo: number;
    #password: number;

    nombre: string;
    ocupacion: string;

    constructor(paramNombre: string, paramOcupacion: string, paramPassword: number, saldoInicial: number = 0) {
        this.nombre = paramNombre;
        this.ocupacion = paramOcupacion;
        this.#saldo = saldoInicial;
        this.#password = paramPassword;
    }

    // Esto es encapsulamiento:
    private verificarPassword(userPassword: number): boolean {
        return this.#password === userPassword;
    }

    datosUsuario() {
        console.log(`Nombre: ${this.nombre}, Ocupacion: ${this.ocupacion}`);
    }

    obtenerSaldo(userPassword: number) {
        if(this.verificarPassword(userPassword) === true) {
            return `El saldo es: ${this.#saldo}`;
        }
        return 'Clave incorrecta';
    }
}

const cuenta1: AccountBanco = new AccountBanco('Steve', 'Minero', 753951, 12000)
cuenta1.datosUsuario();
console.log(cuenta1.obtenerSaldo(753951));

// Intentamos acceder a las propiedades:
console.log(cuenta1.nombre);
console.log(cuenta1.ocupacion);

// No nos deja porque estan privados:
// console.log(cuenta1.saldo);
// console.log(cuenta1.password);

