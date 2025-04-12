// Las funcines pueden tener datos que se ingresan como parametros:
// estos parametros si o si deben tener su tipo de dato, pero el retorno 
// Ts lo infiere:

// Ejmplo simple de una funcion con parametros y con tipo de dato
// que no retorna nada:
function saludoParam(nombre: string): void {
    console.log(`Hola soy ${nombre}`);
}
saludoParam('Carlos');
console.log('==========================================');

// Ejemplo simple de una funcion con parametros y con tipo de dato
// pero que si retorna un dato:
function funcionNombre(tuNombre: string): string {
    return tuNombre;
}
console.log('Mi nombre es:', funcionNombre('Alberto'));
console.log('==========================================');

function funcionOperacion(valor: number): number {
    return valor * 10
}
let rstlOperacion = funcionOperacion(20);
console.log('Resultado:', rstlOperacion)
console.log('==========================================');

function funcionBool(valor: number): boolean{
    let result: boolean = false;
    if(valor % 2 === 0){
        result = true;
    }
    return result;
}
console.log('Es par:', funcionBool(15));
console.log('==========================================');

// Operacion en funciones que piden dos parametros tipo number o string o ambos:
function operacion1(date1: number, date2: number): number {
    let result = date1 + date2;
    return result;
}
let rstlOperacion1 = operacion1(32, 13);
console.log('Resultado 1:', rstlOperacion1);
console.log('==========================================');

function operacion2(value1: string, value2: string): string {
    if(value1 === 'frutas' && value2 === 'verduras') {
        return 'Zona de frutas y verduras';
    } else {
        return 'No es zona de frutas y verduras';
    }
}
let rstlOperacio2 = operacion2('frutas', 'verduras')

console.log(rstlOperacio2);
console.log('==========================================');

function operacion3(nombre: string, edad: number): boolean{ 
    let result: boolean = false;
    if(edad >= 18) {
        result = true;
    } 
    return result;
}
let rstlEdad = operacion3("Pedro", 13);
console.log('Es mayor de edad:', rstlEdad);
console.log('==========================================');

// Funcion que recibe un array de string o number:
let lstNm: string[] = ['ana', 'pablo', 'marco', 'jose'];
let lstNmbr: number[] = [12,24,33,47,58,67,71,80,93,10];

function cantidadNombres(listNombres: string[]): number {
    return listNombres.length;
}
let rstlLista = cantidadNombres(lstNm);
console.log(`Hay ${rstlLista} nombres`);
console.log('==========================================');

function nombresLst(lista: string[], value: string) {
    for(let idx of lista) {
        if(value === idx) {
            console.log('El nombre existe en la lista')
        } else {
            console.log('El nombre no existe en la lista')
        }
    }
}
console.log('El nombre es:', nombresLst(lstNm, 'marco'))
console.log('==========================================');

function numerosLst(listNmb: number[], value: number): string {
    if(value < listNmb.length) {    
        let number = listNmb[value];
        return `En el indice ${value} esta el numero ${number}`;
    } else {
        return 'Valor fuera de rango'
    }
}
console.log(numerosLst(lstNmbr, 5))
console.log('==========================================');

// Tambien podemos recibir objetos:
type typeObjProd = {
    nombre: string,
    precio: number,
    cantidad: number,
}

const objProd = {
    nombre: 'Mouse',
    precio: 20,
    cantidad: 10,
}

function fnProductos(producto: typeObjProd): string {
    return `Producto: ${producto.nombre}, Precio $${producto.precio}`;
}
console.log(fnProductos(objProd));
console.log('==========================================');

const objUs = {
    name: 'Sebastian', 
    lastname: 'Villa',
    correo:'sebas.villa@ts.com',
    isDeveloper: true
}

function fnUser(objUsuario: {name: string, isDeveloper: boolean}): boolean {
    console.log(`El usuario ${objUsuario.name} es Developer?`);
    let result: boolean = false
    if(objUsuario.isDeveloper){
        result = true;
    }
    return result;
}
console.log(fnUser(objUs));


