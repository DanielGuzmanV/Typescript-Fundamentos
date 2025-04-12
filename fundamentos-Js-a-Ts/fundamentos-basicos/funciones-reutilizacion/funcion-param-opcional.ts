// Funciones con parametros opcionales y por defecto
// Estas funciones pueden tener valores opcinales o por defecto en sus parametros,
// si esque no se pone nada cuando se llama a la funcion ocupa el 
// parametro opcional que pusimos o si si es opcinal retorna undefined:

// Ejemplo Parametros por defecto
// Ejemplo 1:
function fnSaludo(nombre: string = 'Invitado'): void {
    console.log('Hola soy', nombre);
}
// No pondremos nada en el parametro:
fnSaludo();
// Vemos que si no se pasa nada ocupa "Invitado"
// Ahora pondremos un argumento:
fnSaludo('Manuel');
console.log('=======================================');

// Ejemplo 2:
function smNum(number1: number = 0, number2: number = 0): number {
    return number1 + number2;
}
// Vemos las opcines:
console.log(smNum());
console.log(smNum(23));
console.log(smNum(31, 57));
console.log('=======================================');

// Ejemplo de parametros opcionales:
// Ejemplo 1:
function sldar(nombre?: string): string {
    if(nombre === undefined) {
        return 'Hola!';
    }
    return `Hola ${nombre}`;
}
console.log(sldar());
console.log(sldar('Marcus'));
console.log('=======================================');

// Ejemplo 2:
function fnSmNm(value1: number, value2: number, value3?: number): number{
    return value3 !== undefined ? value1 + value2 + value3 : value1 + value2;
}
console.log(`El resultado es: ${fnSmNm(41, 23)}`);
console.log(`El resultado es: ${fnSmNm(41, 23, 39)}`);
console.log('=======================================');

// Ejemplo 3:
function mostrarPrdt(nombre:string, precio: number, stock?: number):string {
    if(stock!) {
        return `${nombre} cuesta $${precio} y hay en ${stock} en stock`;
    } else {
        return `${nombre} cuesta $${precio}`;
    }
}
console.log(mostrarPrdt('Teclado', 40));
console.log(mostrarPrdt('Mouse', 20, 4));



