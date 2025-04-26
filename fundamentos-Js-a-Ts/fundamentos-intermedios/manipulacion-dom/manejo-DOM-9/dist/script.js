"use strict";
// Document Fragment:
// Permite crear contenido invisible, donde podemos agregar elementos
// antes de insertarlos al DOM
// EJEMPLO 1: sin documentFragment
const myListItem = document.getElementById('myList');
const myButtonAdd = document.getElementById('addItem');
// Funcio para agregar elementos:
function addItemsToList() {
    for (let idx = 1; idx <= 5; idx++) {
        let newElement = document.createElement('li');
        newElement.textContent = `Item sin usar DocumentFragment ${idx}`;
        myListItem?.appendChild(newElement);
    }
}
// Llamamos a la funcion para agregar los elementos
myButtonAdd?.addEventListener('click', addItemsToList);
// ==============================================================
// ==============================================================
// EJEMPLO 2: usando DocumentFragment
const myListItem2 = document.getElementById('myList2');
const myButtonAdd2 = document.getElementById('addItem2');
// Usamos documentFragment:
const docFragment = document.createDocumentFragment();
myButtonAdd2?.addEventListener('click', function () {
    for (let idx = 1; idx <= 5; idx++) {
        let newElement = document.createElement('li');
        newElement.textContent = `Item usando DocumentFragmen ${idx}`;
        // Agregamos los elementos al docFragment
        docFragment.appendChild(newElement);
    }
    // Ahora una vez cargado todo insertamos en el DOM
    myListItem2?.appendChild(docFragment);
});
