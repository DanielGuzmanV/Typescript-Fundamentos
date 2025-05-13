// 1. Interface: este define la forma que debe tener un objeto
// Interface con un objeto:
interface PersonaInter {
    nombre: string;
    edad: number;
}

const personaDate: PersonaInter = {
    nombre: 'Carlos',
    edad: 45
}
console.log(personaDate);
console.log('-----------------------------------------');

// Interface con una clase:
interface AnimalInter {
    nombre: string;
    sonido(): void;
}

class ClasePerron implements AnimalInter {
    nombre: string;

    constructor(argNombre: string) {
        this.nombre = argNombre;
    }

    sonido(): void {
        console.log(this.nombre, 'esta ladrando...');
    }
}

const nuevoPerron = new ClasePerron('princeso');
nuevoPerron.sonido();
console.log('-----------------------------------------');


// 2. Class: podemos tipar propiedades y metodos
class classUser {
    nombre: string;
    edad: number;
    
    constructor(paramNombre: string, paramEdad: number) {
        this.nombre = paramNombre;
        this.edad = paramEdad;
    }
    
    saludar(): void {
        console.log(`Hola soy ${this.nombre}`);
    }
}
const newUserClass = new classUser('Pedro', 32);
newUserClass.saludar();
console.log('-----------------------------------------');


// 3. Implements: Usado para que cumpla con una interfaz, obligando que tenga 
// las propiedades y metodos definidos por la interfaz

interface VehiculosInter {
    nombre: string;
    precio: number;
    encender(): void;
    apagar(): void;
}

class ClaseAuto implements VehiculosInter {
    nombre: string;
    precio: number;
    
    constructor(paramNombre: string, paramPrecio: number) {
        this.nombre = paramNombre;
        this.precio = paramPrecio;
    }
    
    encender(): void {
        console.log(`${this.nombre} esta encendido`);
    }
    apagar(): void {
        console.log(`${this.nombre} esta apagado`);
    }
}

const newCarClass = new ClaseAuto('toyota', 25000);
newCarClass.encender();
newCarClass.apagar();
console.log('-----------------------------------------');


// 4. Extends: se usa cuando una clase hereda de otra, osea copia su comportamiento
// y puede ampliarlo o sobreescribirlo

class ClaseAuto2  {
    marca: string;

    constructor(paramMarca: string) {
        this.marca = paramMarca;
    }

    encender(): void {
        console.log(`${this.marca} encendida`);
    }
}

class NuevoCarro extends ClaseAuto2 {
    ruedas: number;

    constructor(paramMarca: string, paramRuedas: number) {
        super(paramMarca); // Llamammos al constructor de "ClaseAuto2"
        this.ruedas = paramRuedas;
    }

    tocarClaxonAuto(): void {
        console.log('Se toco el claxon de vehiculo');
    }
}
const carroEjemplo = new NuevoCarro('Suzuki', 4);
carroEjemplo.encender();
carroEjemplo.tocarClaxonAuto();







