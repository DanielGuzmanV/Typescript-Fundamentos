// CommonJs: export
// Exportaremos una clase

class CalcularOperacion {
    name: string;
    constructor(varNombre: string) {
        this.name = varNombre;
    }

    // Metodos:
    // Pondremos un titulo a la clase:
    agregarTituloClass() {
        return this.name;
    }

    // Operacion sumar:
    opSumar(num1: number, num2: number): number{
        return num1 + num2;
    }

    // Operacion restar:
    opResta(num1: number, num2: number): number{
        return num1 - num2;
    }

    // Operacion multiplicar:
    opMultiplicacion(num1: number, num2: number): number{
        return num1 * num2;
    }

    // Operacion dividir:
    opDivision(num1: number, num2: number): number{
        return num1 / num2;
    }

}

module.exports.metodosCalculadora = CalcularOperacion;



