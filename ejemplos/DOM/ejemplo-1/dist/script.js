"use strict";
// Obtenemos los id de los elementos html:
const formContent = document.getElementById('todo-form');
const inputValue = document.getElementById('todo-input');
const listValue = document.getElementById('todo-list');
formContent.addEventListener('submit', eventForm);
function eventForm(event) {
    event.preventDefault();
    const valueText = inputValue.value.trim();
    if (valueText === '') {
        alert('Por favor, escribe una tarea');
        return;
    }
    // Creamos los elementos li:
    const newLi = document.createElement('li');
    // Creamos el span:
    const valueSpan = document.createElement('span');
    valueSpan.textContent = valueText;
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('divContent');
    // Cremos los botones para eliminar los li:
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('btnEliminar');
    // Evento para eliminar una tarea:
    deleteBtn.addEventListener('click', () => {
        listValue.removeChild(newLi);
    });
    contentDiv.appendChild(valueSpan);
    newLi.appendChild(contentDiv);
    newLi.appendChild(deleteBtn);
    listValue.appendChild(newLi);
    // Limpiamos el input:
    inputValue.value = '';
}
