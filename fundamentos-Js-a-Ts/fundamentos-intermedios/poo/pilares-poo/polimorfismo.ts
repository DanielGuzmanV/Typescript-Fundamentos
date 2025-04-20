// Polimorfismo:
// Permite que los metodos se comporten diferente 
// segun la clase que los implemente

class VehiculoEstados {

    // Creamos los metodos:
    public encender(): void {
        console.log('El vehiculo esta encendido');
    }

    public acelerar(): void {
        console.log('El vehiculo esta acelerando');
    }
    public frenar(): void {
        console.log('El vehiculo freno');
    }
    public apagar(): void {
        console.log('El vehiculo esta apagado');
    }
}

// Creamos otra clase que implemente esos metodos(polimorfismo):
class Coche extends VehiculoEstados {

    // Hacemos que algunos metodos se comporten diferentes:
    public encender(): void {
        console.log('El coche encendio, pero se apago...');
    }

    public frenar(): void {
        console.log('El coche freno de golpe');
    }
}

const miCoche = new Coche();

miCoche.encender();
miCoche.acelerar()
miCoche.frenar();
miCoche.apagar();





