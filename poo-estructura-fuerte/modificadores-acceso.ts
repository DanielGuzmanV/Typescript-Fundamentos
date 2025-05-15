// 1. Public (Acceso libre - por defecto):
// Estas propiedades o metodos se pueden acceder desde cualquier parte
class ClasePerson {
    // Propiedad publica
    public nombre: string;

    constructor(paramNombre: string) {
        this.nombre = paramNombre;
    }

    // Metodo publico:
    public saludar(): void {
        console.log(`Hola soy ${this.nombre}`);
    }
}

const newPerson = new ClasePerson('Marcelo');
console.log(newPerson.nombre);
newPerson.saludar();
// Si no ponemos ningun modificador, este se considera public por defecto
console.log('====================================================');


// 2. Private (Acceso solo dentro de la clase):
// Solo son accesibles de la clase donde fue definida
class ClasesCuentaBank {
    // Propiedad privada:
    private saldo: number;

    constructor(paramSaldoInicial: number) {
        this.saldo = paramSaldoInicial;
    }

    // Metodos privados:
    public verSaldo(): number {
        return this.saldo;
    }

    private actualizarSaldo(nuevoSaldo: number) {
        this.saldo = nuevoSaldo;
    }
}

const newCuenta = new ClasesCuentaBank(5000);
console.log(newCuenta.verSaldo());
// console.log(newCuenta.saldo); // Nos saldra error ya que es privado
// newCuenta.actualizarSaldo(3000); // Igualmente saldra error porque es privado
console.log('====================================================');


// 3. Protected (Acceso dentro de una clase y sus subclases):
// Es similar a "private" pero accesible tambien desde clases que heredan
class ClassAnimal {
    protected tipo: string;

    constructor(paramTipo: string) {
        this.tipo = paramTipo;
    }
}

class ClassPerro extends ClassAnimal {
    public ladrar() {
        console.log(`El ${this.tipo} esta ladrando...`);
    }
}

const newDog = new ClassPerro('Perron');
newDog.ladrar();
// console.log(newDog.tipo); // Saldra un error diciendo que esta protegido
console.log('====================================================');


// 4. Readonly (Solo lectura):
// Solo podemos asignar valor en la declaracion o en el constructor, luego no se puede modificar

class ClaseLibro {
    public readonly titulo: string;

    constructor(paramTitulo: string) {
        this.titulo = paramTitulo;
    }

    mostrarTitulo() {
        console.log(`Titulo del libro: ${this.titulo}`);
    }
}

const newLibro = new ClaseLibro('TypeScript basico');
newLibro.mostrarTitulo();
console.log(newLibro.titulo);
// newLibro.titulo = 'nuevo titulo';// Nos saldra error ya que solo es de lectura
