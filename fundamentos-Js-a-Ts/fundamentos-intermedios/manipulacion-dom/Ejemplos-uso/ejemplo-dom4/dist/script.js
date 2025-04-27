"use strict";
// EJEMPLO 1:
// Notificar si se agrega un producto al carrito
// detectamos cuando se agrega un nuevo producto al carrito
const labelCarrito = document.getElementById('listaCarrito');
const labelAgregar = document.getElementById('btnAgregar');
// Creamos el observador:
const obsCambios = new MutationObserver(function (cambios) {
    cambios.forEach((change) => {
        if (change.addedNodes.length > 0) {
            alert('Se agrego un producto al carrito');
        }
        else {
            alert('No hay ningun producto por el momento');
        }
    });
});
// Configuracion del observador:
if (labelCarrito)
    obsCambios.observe(labelCarrito, {
        childList: true
    });
// Agregamos el producto:
labelAgregar?.addEventListener('click', () => {
    let newProduct = document.createElement('li');
    if (labelCarrito) {
        newProduct.textContent = 'Producto ' + (labelCarrito?.children.length + 1);
        labelCarrito.appendChild(newProduct);
    }
});
// ================================================================
// ================================================================
// EJEMPLO 2:
// Detectar cambios en el contenido de un div en tiempo real, podremos 
// escribir contenido dinamicamente en un div
const labelEditor = document.getElementById('editorDiv');
const labelMensaje = document.getElementById('mensaje');
// Observacion de los cambios en el contenido del div:
const obsDiv = new MutationObserver(() => {
    if (labelMensaje instanceof HTMLParagraphElement) {
        labelMensaje.textContent = 'Se detecto un cambio en el texto';
        setTimeout(() => labelMensaje.textContent = '', 2000);
    }
});
// Configuramos el observador:
if (labelEditor) {
    obsDiv.observe(labelEditor, {
        childList: true,
        subtree: true,
        characterData: true,
    });
}
