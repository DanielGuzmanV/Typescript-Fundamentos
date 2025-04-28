"use strict";
// Ejemplo 1:
const inputTexto = document.getElementById('inputText');
const resultado = document.getElementById('result');
inputTexto?.addEventListener('keydown', function (evento) {
    let mensaje;
    if (evento.key.match(/[0-9]/)) {
        mensaje = 'Escribiste un numero';
    }
    else if (evento.key.match(/[a-zA-Z]/)) {
        mensaje = 'Escribiste una letra';
    }
    else {
        mensaje = 'Escribiste un caracter especial';
    }
    resultado.textContent = mensaje;
});
// =================================================================
const inputBlock = document.getElementById('inputBloquear');
inputBlock?.addEventListener('keypress', function (evento) {
    if (evento.key.toLowerCase() === 'e') {
        evento.preventDefault();
        alert('Se bloqueo la letra "e" "E"');
    }
});
// =================================================================
// =================================================================
// Ejemplo 2:
const botonDerecho = document.getElementById('btnDerecho');
const contadorResult = document.getElementById('counterClics');
let numeros = 0;
botonDerecho?.addEventListener('contextmenu', function (evento) {
    evento.preventDefault();
    numeros++;
    if (contadorResult instanceof HTMLParagraphElement) {
        contadorResult.textContent = `Clics: ${numeros}`;
    }
});
// =================================================================
const cajaColor = document.getElementById('cajaDiv');
cajaColor?.addEventListener('mouseover', function () {
    this.style.backgroundColor = obtenerColorRandom();
});
cajaColor?.addEventListener('mouseout', function () {
    this.style.backgroundColor = obtenerColorRandom();
});
function obtenerColorRandom() {
    const coloresRGB = '0123456789ABCDEF';
    let color = '#';
    for (let idx = 0; idx < 6; idx++) {
        color += coloresRGB[Math.floor(Math.random() * 16)];
    }
    return color;
}
// =================================================================
// =================================================================
// Ejemplo 3:
const botonContador = document.getElementById('btnContador');
const mensajeTxt = document.getElementById('mensaje');
let numeroClic = 0;
botonContador?.addEventListener('click', function () {
    numeroClic++;
    if (numeroClic === 5) {
        let eventPerson = new Event('limiteAlcanzado');
        document.dispatchEvent(eventPerson);
    }
});
document.addEventListener('limiteAlcanzado', function () {
    if (mensajeTxt instanceof HTMLParagraphElement) {
        mensajeTxt.textContent = 'Llegaste a 5 clics';
    }
});
// =================================================================
const botonEvento = document.getElementById('btnEvento');
const eventoResultado = document.getElementById('eventoResult');
botonEvento?.addEventListener('click', function () {
    let eventoDatos = new CustomEvent('eventoEspecial', {
        detail: {
            mensaje: 'Evento disparado',
            fecha: new Date().toLocaleDateString(),
        }
    });
    document.dispatchEvent(eventoDatos);
});
document.addEventListener('eventoEspecial', function (evento) {
    const eventoCus = evento;
    if (eventoResultado instanceof HTMLParagraphElement) {
        eventoResultado.textContent = `Mensaje: ${eventoCus.detail.mensaje} - Fecha: ${eventoCus.detail.fecha}`;
    }
});
