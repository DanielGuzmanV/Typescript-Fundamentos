// 1. Abstract class declaracion:
// Esta no se puede instanciar directamente y sirve como modelo base para otras clases
abstract class ClaseAnimal {
    constructor(public nombre: string) {}

    // Metodo concreto (tiene implementacion):
    moverse(): void {
        console.log(`${this.nombre} se esta moviendo...`);
    }

    // Metodo abstracto (sin implementacion):
    abstract hacerSonido(): void;
}
// El metodo "moverse" ya tiene codigo, por lo tanto las clases hijas lo heredaran
// El metodo "hacerSonido" debe ser implementado por cada clase que extienda de ClaseAnimal


// 2. Implementacion con extends:
class ClasePerro extends ClaseAnimal {
    hacerSonido(): void {
        console.log(`${this.nombre} esta ladrando...`);
    }
}

class ClaseGato extends ClaseAnimal {
    hacerSonido(): void {
        console.log(`${this.nombre} esta maullando...`);
    }
}
// Ambas clases heredan el metodo "moverse"
// Pero cada clase debe implementar su propia version del metodo "hacerSonido"


// 3. Uso de lo mencionado:
const nuevoPerro = new ClasePerro('Princeso');
nuevoPerro.moverse();
nuevoPerro.hacerSonido();

const nuevoGato = new ClaseGato('Hamburgueso');
nuevoGato.moverse();
nuevoGato.hacerSonido();










