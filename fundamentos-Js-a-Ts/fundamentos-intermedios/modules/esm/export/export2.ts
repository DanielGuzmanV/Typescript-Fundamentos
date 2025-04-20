// ESM: import
// Exportamos una clase de manera rapida y sencilla
export class Calculadora {
    nameClase: string;
    constructor(nameCalculadora: string) {
        this.nameClase = nameCalculadora;
    }

    // Metodos:
    // Suma:
    metodoSuma(number1: number, number2: number): number{
        return number1 + number2;
    }

    // Resta:
    metodoResta(number1: number, number2: number): number{
        return number1 - number2;
    }

    // Multiplicacion:
    metodoMultiplicar(number1: number, number2: number): number{
        return number1 * number2;
    }

    // Division:
    metodoDivision(number1: number, number2: number): number{
        return number1 / number2;
    }

}

