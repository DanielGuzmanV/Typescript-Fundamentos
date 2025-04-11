// Break y Continue:
// Estos se pueden usar para for, for in, for of, while y do while
// No se puede usar el forEach

// Ejemplo continue:
let valNum1: number = 0;
while(valNum1 < 10) {
    valNum1++;
    if(valNum1 === 5) {
        continue;
    }
    console.log('El numero es:', valNum1);
}
console.log('=====================================');

// Ejemplo break:
for(let idx = 1; idx <= 10; idx++) {
    if(idx === 5) {
        break;
    }
    console.log('Los numeros son:', idx);
}
console.log('=====================================');

// Ejemplo break y continue:
let lstNmb: string[] = ['Marco', 'Oscar', 'Karen', 'Ana', 'Carlos', 'Pedro' ];
for(let element of lstNmb) {
    
    // Usamos continue:
    if(element === 'Oscar') {
        continue;
    }
    console.log('Nombre:', element);

    // Usamos break:
    if(element === 'Carlos'){
        break;
    }
}





