// map():
// Es una funcion que transforma cada elemento de un array
// Igual que reduce y filter este no modifica la lista original

let ltNmbs: string[] = ["Ana", "Carlos", "Elena", "Manolo", "Alberto"];
const ltNm: number[] = [1,2,3,5,6,7,8,9];

// Convertimos los nombres a mayusculas:
let lstMayus = ltNmbs.map( valorNombre => valorNombre.toUpperCase());
let lstMinus = ltNmbs.map( valorNombre => valorNombre.toLowerCase());
console.log(lstMayus);
console.log(lstMinus);
console.log('======================================');

// map con funcion externa:
function funcionDuplicar(value: number): number{
    return value * 2;
}

let lstDoble = ltNm.map(funcionDuplicar);
console.log(lstDoble);
console.log('======================================');

// Funcion dentro de funciones:
function functionMultiplicar(valFactor: number) {
    return (arrNum: number[]): number[] => {
        return arrNum.map(value => value * valFactor);
    }
}

const valorInit = functionMultiplicar(3);
const productoList = valorInit(ltNm);
console.log('La multiplicaciones es:', productoList);


