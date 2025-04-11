// Condicional if, else y else if
// Uso del if:
let saldo: number = 50;
let efectivo: number = 30;
let age: number = 20;

// Ejemplo 1:
if(efectivo < saldo) {
    console.log('Pudes sacar dinero')
}

// Ejemplo 2:
if(age > 18) {
    console.log('Es mayor de edad')
}
console.log('==================================');

// Uso del else:
let efectivo2: number = 80;
if(efectivo <= saldo) {
    console.log('Puedes sacar dinero');
} else {
    console.log('Saldo insuficiente');
}


if(age > 30) {
    console.log('Ya puede pagar impuestos');
} else {
    console.log('Es menor de edad');
}

console.log('==================================');

// Ejemplo else if:

let notaOne = 75;
if(notaOne === 100) {
    console.log('Muy bien');
} else if(notaOne >= 80) {
    console.log('Bien')
} else if (notaOne >= 60) {
    console.log("Regular");
} else if (notaOne >= 50) {
    console.log("Puede mejorar")
} else if (notaOne >= 20) {
    console.log("Mal, tiene que mejorar")
} else {
    console.log("Reprobado, tiene que repetir")
}



