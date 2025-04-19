// Valores predeterminados:
// Si un valor no existe se puede asignar un valor por defecto

// Ejemplo en objetos:
type datePerson = {
    nombreVal: string,
    edad: number,
    [clave: string]: any
}

const objtPersona: datePerson ={
    nombreVal: 'Roberto',
    edad: 42,
}

let {nombreVal, ocupacionVal = 'Developer'} = objtPersona;
console.log(nombreVal);
console.log(ocupacionVal)
console.log('=============================================');

const listNmr: number[] = [45,81,63,25];
let [numUno,,,,numCinco = 23] = listNmr;

console.log(numUno);
console.log(numCinco);

// Tambien podemos agregarle a varios:
let nwArrNmb: number[] = [1,2,3,4];
let [nm1 = 0,nm2 = 0,nm3 = 0,nm4 = 0,nm5 =0] = nwArrNmb;

console.log(nm1,nm2,nm3,nm4,nm5);
console.log('===================================');





