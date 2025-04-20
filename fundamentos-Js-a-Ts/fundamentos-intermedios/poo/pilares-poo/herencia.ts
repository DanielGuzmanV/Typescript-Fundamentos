// Herencia:
// Permite que una clase herede propiedades y metodos

// Primera clase:
class Animal {
    nombre: string;
    constructor(paramNombre: string) {
        this.nombre = paramNombre;
    }

    sonidoAnimal() {
        console.log(`El ${this.nombre} hace un sonido`);
    }
}

// Ahora extendemos la clase animal a la clase perro:
class Perro extends Animal {
    // Metodo de la clase Perro que usara la propiedad "nombre" de la clase Animal
    ladrar() {
        console.log(`${this.nombre} esta ladrando`);
    }
}

// Creamos una instancia:
const miPerro = new Perro('Princeso');

// Usamos el metodo de la clase animal (herencia):
miPerro.sonidoAnimal();
console.log('================================');

// Metodo propio de la clase:
miPerro.ladrar();

