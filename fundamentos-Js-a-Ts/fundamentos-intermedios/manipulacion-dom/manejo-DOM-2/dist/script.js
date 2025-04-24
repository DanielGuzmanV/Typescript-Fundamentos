"use strict";
// Ejemplo 1:
const labelTextos = document.querySelectorAll('.texto');
const labelBtn1 = document.getElementById('cambiarP');
const labelBtn2 = document.getElementById('restaurarP');
const labelBtn3 = document.getElementById('cambiarRestaurar');
// Eventos para realizar los cambios en los parrafos:
labelBtn1?.addEventListener('click', cambiarTexto);
labelBtn2?.addEventListener('click', restaurarTexto);
labelBtn3?.addEventListener('click', cambiarRestaurar);
// =================================================================
// Podemos restaurar los mensajes de las siguientes formas:
// Primera forma:
const txtOriginal = [];
labelTextos.forEach(txt => txtOriginal.push(txt.textContent || ''));
// ==================================================================
// Segunda forma:
const arrayTextos = Array.from(labelTextos);
const newTxtOriginal = arrayTextos.map(txt => txt.textContent || '');
// ==================================================================
// Funciones para cambiar el texto
// Cambiar texto:
function cambiarTexto() {
    for (let idx = 0; idx < labelTextos.length; idx++) {
        labelTextos[idx].textContent = `Nuevo texto del parrafo ${idx + 1}`;
    }
}
// Restaurar texto:
function restaurarTexto() {
    labelTextos.forEach((parrafos, idx) => {
        parrafos.textContent = txtOriginal[idx];
    });
}
// ==================================================================
// Funcion para cambiar y restaurar al mismo tiempo:
let textoCambio = false;
function cambiarRestaurar() {
    if (!textoCambio) {
        // cambiamos los textos:
        for (let idx = 0; idx < labelTextos.length; idx++) {
            labelTextos[idx].textContent = `Se cambio el parrafo ${idx + 1}`;
        }
        if (labelBtn3) {
            labelBtn3.textContent = 'Restaurar';
        }
    }
    else {
        labelTextos.forEach((parrafos, indice) => {
            parrafos.textContent = txtOriginal[indice];
        });
        if (labelBtn3) {
            labelBtn3.textContent = 'Cambiar';
        }
    }
    textoCambio = !textoCambio;
}
