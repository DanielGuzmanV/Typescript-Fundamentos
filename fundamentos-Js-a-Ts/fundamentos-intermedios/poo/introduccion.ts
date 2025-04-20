// Conceptos basicos de POO
// Clases: Plantilla para crear objetos que contienen propiedades y metodos

class DatosPersona {
    // Propiedades de la clase:
    propNombre: string;
    propApellido: string;
    propEdad: number;

    // Constructor que tiene propiedades
    constructor(nombre: string, apellido: string, edad: number) {

        // Los parametros del constructor se asigna a las propiedades de la clase
        this.propNombre = nombre;
        this.propApellido = apellido;
        this.propEdad = edad;
    }

    // Metodos:
    metodoSaludar(): void {
        console.log(`Hola mi nombre es: ${this.propNombre} ${this.propApellido} y tengo ${this.propEdad} años`)
    }

}

// Realizamos una instancia de la clase, que es como una copia con los mismos
// valores y estos se crean usando new:

// Ahora tenemos el objeto "primerDato" y podremos acceder a los metodos:
const primerDato = new DatosPersona('Marco', 'Antonio', 45);

// Accedemos al metodo:
primerDato.metodoSaludar();

// Accedemos a las propiedades:
console.log(primerDato.propNombre);
console.log(primerDato.propApellido);
console.log(primerDato.propEdad);






