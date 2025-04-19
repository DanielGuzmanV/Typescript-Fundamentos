// Desestructuracion en array:
// Nos permite extraer valores de un array y asignarlos a variables
// de forma mas clara

// Ejemplo:
const nwArrNm: number[] = [1,5,9,4,7,8,3];

// Accedemos de manera directa y mas limpia:
const [val1, val2] = nwArrNm;
console.log(val1);
console.log(val2);
console.log('===================================');

// Tambien podemos saltar algunos valores:
const [,vl2,,vl4,,vl6] = nwArrNm;
console.log(vl2);
console.log(vl4);
console.log(vl6);
console.log('===================================');

// Desestructuracion anidada:
// Un array dentro de otro array
const arrDeArr: (number|number[])[]= [12, 23, 52, [2,4,6,8,10], 73, 98, [1,3,5,7,9]];

const [,dos, tres, cuatroArr,,,sieteArr] = arrDeArr;
if(Array.isArray(cuatroArr) && Array.isArray(sieteArr)) {
    const [,,valu3,,valu5] = cuatroArr;
    const [num1, num2,,num4] = sieteArr;

    console.log(dos, tres);
    console.log(valu3, valu5);
    console.log(num1, num2, num4);
}


