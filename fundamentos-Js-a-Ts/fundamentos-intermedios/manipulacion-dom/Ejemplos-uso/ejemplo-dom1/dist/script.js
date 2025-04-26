"use strict";
// Elementos dinamicos:
// Botones para crear y eliminar parrafos antes:
const btnCrear1 = document.getElementById('crearParrafo');
const btnEliminar1 = document.getElementById('eliminarParrafo');
// Parrafo donde se agregaran textos antes o despues:
const referenceParrafo = document.querySelector('.parrafo1');
// Funcion para crear parrafos antes:
let numberAntes = 1;
function parrafoAntes() {
    const nuevoP1 = document.createElement('p');
    nuevoP1.classList.add('nuevoParrafo1');
    nuevoP1.textContent = `Texto antes del parrafo numero ${numberAntes}`;
    numberAntes++;
    // Agregamos antes (nueva forma que agregarlo):
    referenceParrafo?.insertAdjacentElement('beforebegin', nuevoP1);
}
// Funcion para eliminar los parrafos antes:
function eliminarParrafosAntes() {
    // Seleccionamos a todos los parrafos con una clase especifica:
    const parrafos = document.querySelectorAll('.nuevoParrafo1');
    if (parrafos.length > 0) {
        parrafos[parrafos.length - 1].remove();
        numberAntes--;
    }
    else {
        alert('No hay ningun parrafo...');
    }
}
// Usamos las funciones
btnCrear1?.addEventListener('click', parrafoAntes);
btnEliminar1?.addEventListener('click', eliminarParrafosAntes);
// ==================================================================
// Botones para crear y eliminar parrafos despues:
const btnCrear2 = document.getElementById('crearParrafo2');
const btnEliminar2 = document.getElementById('eliminarParrafo2');
// Usamos las funciones creadas:
btnCrear2?.addEventListener('click', parrafosDespues);
btnEliminar2?.addEventListener('click', eliminarParrafosDespues);
// Funcion para crear parrafos despues
let numberDespues = 1;
function parrafosDespues() {
    const nuevoP2 = document.createElement('p');
    nuevoP2.classList.add('nuevoParrafo2');
    nuevoP2.textContent = `Texto despues del parrafo numero ${numberDespues}`;
    numberDespues++;
    // Agregamos antes (nueva forma que agregarlo):
    referenceParrafo?.insertAdjacentElement('afterend', nuevoP2);
}
// Funcion para eliminar parrafos despues:
function eliminarParrafosDespues() {
    const parrafos = document.querySelectorAll('.nuevoParrafo2');
    if (parrafos.length > 0) {
        parrafos[0].remove();
        numberDespues--;
    }
    else {
        alert('No hay ningun parrafo');
    }
}
// =================================================================
// =================================================================
// Agregamos elementos dinamicos a un div:
const btnAgregarDiv1 = document.getElementById('agregarElem');
const btnEliminarDiv2 = document.getElementById('eliminarElem');
const elementoDiv = document.getElementById('divElementos');
// Usamos las funciones creadas:
btnAgregarDiv1?.addEventListener('click', crearElementosDiv);
btnEliminarDiv2?.addEventListener('click', eliminarElementosDiv);
// ______________________________________________________
// Creamos el "h3" que cambiara si hay elementos en la lista y agregamos al "div"
const h3Div = document.createElement('h3');
h3Div.textContent = 'La lista tiene 0 elementos';
elementoDiv?.prepend(h3Div);
// Funcion para actualizar el texto del "h3Div":
function actualizarTxtH3(cambiarNumero) {
    h3Div.textContent = `La lista tiene ${cambiarNumero}`;
}
// Funcion para ir agregando elementos a la lista del div:
let numberElements = 0;
// Creamos la lista desordenada:
const listaDiv = document.createElement('ul');
function crearElementosDiv() {
    const elementList = document.createElement('li');
    elementList.classList.add('listas');
    elementList.textContent = `Nuevo elemento ${numberElements}`;
    listaDiv.appendChild(elementList);
    elementoDiv?.classList.add('fondoDiv');
    elementoDiv?.appendChild(listaDiv);
    numberElements++;
    actualizarTxtH3(numberElements);
}
// Funcion para ir eliminando elementos a la lista del div:
function eliminarElementosDiv() {
    const elementos = document.querySelectorAll('.listas');
    if (elementos.length > 0) {
        elementos[elementos.length - 1].remove();
        numberElements--;
        actualizarTxtH3(numberElements);
    }
    else {
        elementoDiv?.classList.remove('fondoDiv');
    }
}
