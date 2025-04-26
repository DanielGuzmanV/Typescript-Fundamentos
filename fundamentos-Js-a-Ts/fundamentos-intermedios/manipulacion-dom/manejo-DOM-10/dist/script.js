"use strict";
// EJEMPLO 1: sin cloneNode
// Problema: Escribir la estructura de la tarjeta varias veces con createElement
const container1 = document.getElementById('divContainer');
const createItems1 = document.getElementById('addItems');
createItems1?.addEventListener('click', crearSinCloneNode);
function crearSinCloneNode() {
    for (let idx = 1; idx <= 3; idx++) {
        // Creamos el nuevo "div":
        let nuevoDiv = document.createElement('div');
        nuevoDiv.classList.add('targetDiv');
        // Creamos el nuevo "h3":
        let nuevoH3 = document.createElement('h3');
        nuevoH3.textContent = `Titulo numero ${idx}`;
        // Creamos el nuevo "p":
        let nuevoP = document.createElement('p');
        nuevoP.textContent = `Descripcion numeor ${idx}`;
        nuevoDiv.appendChild(nuevoH3);
        nuevoDiv.appendChild(nuevoP);
        container1?.appendChild(nuevoDiv);
    }
}
// ==================================================================
// ==================================================================
// EJEMPLO 2: con cloneNode
const container2 = document.getElementById('divContainer2');
const createItems2 = document.getElementById('addItems2');
// Accedemos al contenido del template:
const templateElement = document.getElementById('myTemplate');
if (templateElement) {
    const useTemplate = templateElement.content;
    createItems2?.addEventListener('click', () => {
        for (let idx = 1; idx <= 3; idx++) {
            let clonarItems = useTemplate.cloneNode(true);
            const titulo = clonarItems.querySelector('.myTitle');
            const descripcion = clonarItems.querySelector('.description');
            if (titulo && descripcion) {
                titulo.textContent = `Titulo numero ${idx}`;
                descripcion.textContent = `Descripcion numero ${idx}`;
                container2?.appendChild(clonarItems);
            }
        }
    });
}
