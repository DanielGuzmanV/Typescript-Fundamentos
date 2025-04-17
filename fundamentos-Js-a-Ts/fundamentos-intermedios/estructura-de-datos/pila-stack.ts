// Al igual que en Js la pila sigue la regla (last in, First Out)
// Ejemplo con una clase:

class Stack {
    items: number[] = [];

    constructor() {
        this.items = []
    }

    // Metodos para agregar elementos a la pila:
    metodPush(elementos: number) {
        this.items.push(elementos);
    }

    // Metodo para eliminar el ultimo elemento
    metodPop() {
        return this.items.pop();
    }

    // Metodo para mostrar el ultimo elemento:
    metodPeak() {
        return this.items[this.items.length - 1];
    }

    // Metodo que verifica si la lista esta vacia:
    isEmpty() {
        return this.items.length === 0;
    }
}
// =================================================

const nuevaPila = new Stack();
// Vemos si la pila esta vacia:
console.log('La pila esta vacia:',nuevaPila.isEmpty());
console.log('==============================================');

// Agregamos elementos con el metodo push:
nuevaPila.metodPush(10);
nuevaPila.metodPush(24);
nuevaPila.metodPush(32);
nuevaPila.metodPush(45);
nuevaPila.metodPush(53);
nuevaPila.metodPush(68);
nuevaPila.metodPush(74);
nuevaPila.metodPush(81);

// Vemos si la pila esta vacia:
console.log('La pila esta vacia:',nuevaPila.isEmpty());
console.log('==============================================');

// Vemos los  elementos:
console.log(nuevaPila);
console.log('==============================================');

// Eliminamos algunos elementos:
nuevaPila.metodPop();
nuevaPila.metodPop();
console.log(nuevaPila);
console.log('==============================================');

// Podemos ver el elemento que eliminaremos:
console.log(nuevaPila.metodPop());
console.log('==============================================');

// Vemos el ultimo elemento de la pila:
console.log('El ultimo elemento es:',nuevaPila.metodPeak());


