"use strict";
// EJEMPLO 1:
// Cambiar el contenido dinamicamente
const contentDiv = document.getElementById('contenedorDiv');
// Sera vera como texto sin formato:
document.getElementById('botonTexto')?.addEventListener('click', function () {
    contentDiv.textContent = '<i>Este es solo un texto sin formato</i>';
});
// Se vera como un tetxto con formato en cursiva:
document.getElementById('botonHTML')?.addEventListener('click', () => {
    contentDiv.innerHTML = '<i>Esto es HTML intrepreado</i>';
});
// ==================================================================
// ==================================================================
// EJEMPLO 2:
// Prevenir ataques XSS usando "textContent"
document.getElementById('mostrarTexto')?.addEventListener('click', () => {
    const labelInputValue = document.getElementById('entrada');
    if (labelInputValue) {
        // Evitamos la inyeccion de codigo malicioso
        const resultado = document.getElementById('resultadoDiv');
        if (resultado) {
            resultado.textContent = labelInputValue.value;
        }
    }
});
// ==================================================================
// ==================================================================
// EJEMPLO 3:
// Cargar contenido dinamico en una lista:
document.getElementById('agregarElementos')?.addEventListener('click', () => {
    const nuevosElementos = '<li>Nuevo elemento</li>';
    const ulElements = document.getElementById('listaElement');
    if (ulElements) {
        // Si usamos innerHTML se agregaran multiples elementos HTML
        ulElements.innerHTML += nuevosElementos;
        // Si usamos textContent se agregaran textos sin formato
        // ulElements.textContent += nuevosElementos;
    }
});
