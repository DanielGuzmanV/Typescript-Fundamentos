// Los operadores logicos son:
// AND, OR, NOT (igual que en JS)

let varBool1: boolean = false;
let varBool2: boolean = true;

// Primer operador AND (&&)
console.log(true && true);
console.log(false && true);

console.log("Operador And", varBool1 && varBool2);
console.log("Operador And", varBool1 && varBool1);
console.log("Operador And", varBool2 && varBool2);
console.log("Operador And", varBool2 && varBool1);
console.log('---------------------------------------------');

console.log("Ejemplos del operador and(&&)")
console.log('5 > 10 && 15 > 20', 5 > 10 && 15 > 20) // Si todo es false, sera false
console.log('5 < 10 && 15 < 20', 5 < 10 && 15 < 20) // si todo es true, sera true
console.log('5 < 10 && 15 > 20', 5 < 10 && 15 > 20) // Si al menos uno es true y el otro false, no se cumple la expresion, sera false

console.log('---------------------------------------------');

// Segundo operador OR (||)
console.log(true || true);
console.log(false || true);

console.log("Operador OR", varBool1 || varBool2);
console.log("Operador OR", varBool1 || varBool1);
console.log("Operador OR", varBool2 || varBool2);
console.log("Operador OR", varBool2 || varBool1);
console.log('---------------------------------------------');

console.log("Ejemplos del operador or(||)")
console.log('5 > 10 || 15 > 20', 5 > 10 || 15 > 20) // Si todo es false, sera false
console.log('5 < 10 || 15 < 20', 5 < 10 || 15 < 20) // si todo es true, sera true
console.log('5 < 10 || 15 > 20', 5 < 10 || 15 > 20) // Si al menos uno es true y el otro false, se cumple una expresion, entonces sera tru

console.log('---------------------------------------------');

console.log("Usamos los dos operadores");
console.log('5 > 10 && 15 > 20 || 30 < 40', 5 > 10 && 15 > 20 || 30 < 40);
console.log('5 > 10 || 15 > 20 && 30 < 40', 5 > 10 || 15 > 20 && 30 < 40);

console.log('---------------------------------------------');

// Usos del operador 
let name1 = '';
let nameResult1 = name1 || 'Anonimo'; 
// Resultado seria "Anonimo" ya que la variable name1 no esta definida
console.log(nameResult1);

let name2 = 'Alberto';
let nameResult2 = name2 || 'Anonimo';
// Resultado seria "Alberto" ya que la variable name2 ya fue definida
console.log(nameResult2);

console.log('---------------------------------------------');

// Tercer operador NOT (!)
console.log("Operador NOT", !varBool1);
console.log("Operador NOT", !varBool2);
console.log("Operador NOT", !!varBool1);
console.log("Operador NOT", !!varBool2);
console.log('---------------------------------------------');

console.log("Ejemplo del operador not (!)")
console.log('!(5 > 10 || 15 > 20)', !(5 > 10 || 15 > 20)) // El resultado era false, ahora sera true
console.log('!(5 < 10 || 15 < 20)', !(5 < 10 || 15 < 20)) // El resultado era true, ahora sera false

console.log('---------------------------------------------');

// Usamos el operador AND en funciones:
function funcionEjemplo1(): boolean {
    console.log('Funcion de ejemplo 1');
    return true;
}

function funcionEjemplo2(): boolean {
    console.log('Funcion de ejemplo 2');
    return true;
}

// Vemos el resultado:
let resultadoFuncion1 = funcionEjemplo1() && funcionEjemplo2();
// El resulado seran ambas funciones ya que ambas son true

console.log('---------------------------------------------');

function funcionEjemplo3(): boolean {
    console.log('Funcion de ejemplo 3');
    return false;
}

function funcionEjemplo4(): boolean {
    console.log('Funcion de ejemplo 3');
    return true;
}

// Vemos el resultado:
let resultadoFuncion2 = funcionEjemplo3() && funcionEjemplo4();
// solo saldra una funcion ya que una es false

console.log('---------------------------------------------');

// Valores que se evaluan como false:
/**
 * false
 * 0
 * -0
 * "" o ''
 * null
 * undefined
 * NaN
 */

const falsyValues = [ true,false, 0, -0, "", '', null, undefined, NaN];

falsyValues.forEach((val, i) => {
    console.log(`Valor:`, val, "→", Boolean(val));
});



