// Al igual que en Js podemos crear nuestras propias excepciones personalizadas
// Mediante la creacion de clases que extendeeran de Error, esto nos permitira
// lanzar errores con mensajes y propiedades personalizadas

class CustomErrorClass extends Error {
    nameClase: string;

    constructor(customMessageError: string) {
        super(customMessageError);
        this.nameClase = 'ErrorInClass';
        this.name = 'CustomErrorClass';
    }
}

try {
    throw new CustomErrorClass('Ups algo salio mal...');
} catch (error) {
    if (error instanceof CustomErrorClass) {
        console.log('Error personalizado:', error.message);
        console.log('Error de clase:', error.nameClase);
        console.log('Error:', error.name);
    }
}




