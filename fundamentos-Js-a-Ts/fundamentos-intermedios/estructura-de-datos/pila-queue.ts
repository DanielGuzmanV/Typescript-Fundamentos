// Como en Js la cola sigue la regla (First in, Firts out)
// Ejemplo con una clase:

class Queue {
    items: number[] = []
    constructor() {
        this.items = [];
    }

    // Metodo para agregar elementos a la cola:
    metodEnqueue(elemento: number) {
        this.items.push(elemento);
    }

    // Metodo para eliminar el primer elemento:
    metodDequeue() {
        return this.items.shift();
    }

    // Metodo que mostrara el primer elemento:
    metodPeek() {
        return this.items[0];
    }
}
// ==========================================================

let nuevaCola = new Queue();

// Agregamos elementos a la cola:
nuevaCola.metodEnqueue(12);
nuevaCola.metodEnqueue(23);
nuevaCola.metodEnqueue(37);
nuevaCola.metodEnqueue(41);
nuevaCola.metodEnqueue(56);
nuevaCola.metodEnqueue(69);

console.log(nuevaCola);
console.log('=======================================');

// Eliminamos el primer elemento:
nuevaCola.metodDequeue();
nuevaCola.metodDequeue();
console.log(nuevaCola);
console.log('=======================================');

// Vemos el primer elemento:
console.log(nuevaCola.metodPeek());






