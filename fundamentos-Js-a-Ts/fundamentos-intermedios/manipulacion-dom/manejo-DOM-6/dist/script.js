"use strict";
// EJEMPLO 1:
const labelcontenedor = document.getElementById('divContenedor');
const btnAgregar = document.getElementById('agregar');
// Creamos nuevos botones en el Div
btnAgregar?.addEventListener('click', () => {
    const nuevoBtn = document.createElement('button');
    nuevoBtn.classList.add('botones');
    const separador = document.createElement('br');
    nuevoBtn.classList.add('classButtons');
    nuevoBtn.textContent = 'Soy un nuevo boton';
    // Agregamos al div el nuevo boton que creamos
    labelcontenedor?.appendChild(separador);
    labelcontenedor?.appendChild(nuevoBtn);
});
// Usamos delegacion de eventos para que salga un alert cuanod se haga clic en los botones
labelcontenedor?.addEventListener('click', function (evento) {
    // Usamos un "as" para verificar que es un "HTMLElement"
    const elemento = evento.target;
    if (elemento.classList.contains('botones')) {
        alert('Boton clickeado');
    }
});
// ================================================================
// ================================================================
// EJEMPLO 2:
// Delegacion de eventos en una lista:
const labelLista = document.getElementById('lista');
const btnAgregarElem = document.getElementById('agregarElementos');
let numberList = 4;
btnAgregarElem?.addEventListener('click', () => {
    const listanueva = document.createElement('li');
    listanueva.classList.add('newListas');
    listanueva.textContent = `Elemento ${numberList}`;
    labelLista?.append(listanueva);
    numberList++;
});
// Mostramos un alerta cuando se haga clic en cualquier "li":
labelLista?.addEventListener('click', function (evento) {
    // Usamos un "instanceof" para verificar que evento.target es realmente un "HTMLElement"
    const elemento = evento.target;
    if (elemento instanceof HTMLElement && elemento.tagName === "LI") {
        alert('Clic en: ' + elemento.textContent);
    }
});
// ================================================================
// ================================================================
// EJEMPLO 3:
// Delegacion de eventos en botones
const btnContenedorDiv = document.getElementById('contenedorBtn');
const labelBtnAgregar = document.getElementById('btnAgregar');
// Realizamos la delegacion de eventos en el contenedor:
btnContenedorDiv?.addEventListener('click', function (event) {
    const elemento = event.target;
    if (elemento instanceof HTMLElement && elemento.classList.contains('btn')) {
        alert('Hiciste clic en: ' + elemento.textContent);
    }
});
let btnNumber = 1;
// Agregamos mas botones al contenedor:
labelBtnAgregar?.addEventListener('click', () => {
    const nuevoBoton = document.createElement('button');
    const separador = document.createElement('br');
    nuevoBoton.textContent = `Nuevo boton creado ${btnNumber}`;
    nuevoBoton.classList.add('btn');
    btnContenedorDiv?.append(separador);
    btnContenedorDiv?.append(nuevoBoton);
    btnNumber++;
});
// ================================================================
// ================================================================
// EJEMPLO 4:
// Delegacion de eventos en formularios
// Validar un formulario para capturar los eventos de varios inputs
const labelFormulario = document.getElementById('formulario');
// Evento del input:
labelFormulario?.addEventListener('input', function (evento) {
    const elemento = evento.target;
    // Usamos un console.log para ver los datos:
    console.log(`Campo: ${elemento.name}, Valor: ${elemento.value}`);
});
// Evento para simular el envio de datos:
labelFormulario?.addEventListener('submit', function (evento) {
    // Evitamos enviar el formulario
    evento.preventDefault();
    alert('Formulario enviado...');
    document.querySelectorAll('.space').forEach(elementos => {
        if (elementos instanceof HTMLInputElement) {
            elementos.value = '';
        }
    });
});
// ================================================================
// ================================================================
// EJEMPLO 5:  
// Delegacion de eventos para manejar un menu desplegable
// Lo usaremos para abrir y cerrar el menu
document.body.addEventListener('click', function (event) {
    const menu = document.getElementById('menuLista');
    const elemento = event.target;
    if (elemento.id === 'menuBoton') {
        if (menu)
            menu.style.display = menu?.style.display === 'none' ? 'block' : 'none';
    }
    else if (menu && !menu.contains(elemento)) {
        menu.style.display = 'none';
    }
});
// ================================================================
// ================================================================
// EJEMPLO 6:
// Delegacion de eventos en tabla
const labelTabla = document.getElementById('miTabla');
labelTabla?.addEventListener('click', function (evento) {
    const elemento = evento.target;
    if (elemento instanceof HTMLElement && elemento.tagName === 'TD') {
        alert('Clic en: ' + elemento.textContent);
    }
});
