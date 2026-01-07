// 1. Constructor con propiedades tipadas:
class ClassPersona {
    nombre: string;
    edad: number;

    constructor(paramNombre: string, paramEdad: number) {
        this.nombre  = paramNombre;
        this.edad = paramEdad;
    }

    saludar(): void{
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`);
    }
}
const nuevaPerson1 = new ClassPersona('Camilo', 40);
nuevaPerson1.saludar();
console.log('======================================');


// 2. Inicializacion rapida con modificadores en el constructor:
// Para evitar repetir la declaracion de propiedades usamos directamente los modificadores
// en los parametros del constructor
class ClassProducto {
    constructor(
        public nombre: string,
        private precio: number,
        readonly sku: string,
    ) {}

    mostrar(): void{ 
        console.log(`Producto: ${this.nombre}, Precio: ${this.precio}, SKU: ${this.sku}`);
    }
}

const nuevoProducto = new ClassProducto('laptop', 3500, 'ACB432');
nuevoProducto.mostrar();
console.log(nuevoProducto.nombre);

// console.log(nuevoProducto.precio); // Saldra error porque es privado
// nuevoProducto.sku = 'XCV399'; // Saldra error porque es readonly
console.log('======================================');


// 3. Constructor con valores por defecto:
// Podemos usar valores por defecto en los parametros del constructor para que sean opcionales
class ClassUsuario {
    constructor(
        public nombre: string = 'Invitado',
        public activo: boolean = false,
    ) {}

    informacion(): void {
        console.log(`Usuario: ${this.nombre}, Activo: ${this.activo}`);
    }
}

const nuevoUsuario1 = new ClassUsuario();
nuevoUsuario1.informacion();

const nuevoUsuario2 = new ClassUsuario('Carlos', true);
nuevoUsuario2.informacion();