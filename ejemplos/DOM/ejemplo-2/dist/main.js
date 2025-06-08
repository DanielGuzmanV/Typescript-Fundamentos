"use strict";
const formContent = document.getElementById('form-tarea');
const inputValue = document.getElementById('input-tarea');
const btnAddTask = document.getElementById('btn-agregar');
const listaAgregados = document.getElementById('list-addTask');
const listaCompletados = document.getElementById('list-completedTask');
formContent.addEventListener('submit', agregarTareas);
function agregarTareas(event) {
    event.preventDefault();
    const tareas = inputValue.value.trim();
    if (tareas === '') {
        alert('Ingrese una tarea');
        return;
    }
    const tareaExistente = [...listaAgregados.children].some((li) => {
        return li.textContent?.includes(tareas);
    });
    if (tareaExistente) {
        alert('La tarea ya existe en la lista.');
        return;
    }
    const valueLi = document.createElement('li');
    const valueContentDiv = document.createElement('div');
    const valueSpan = document.createElement('span');
    valueSpan.textContent = tareas;
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.addEventListener('click', () => {
        listaAgregados.removeChild(valueLi);
    });
    const btnAgregar = document.createElement('button');
    btnAgregar.textContent = 'Agregar';
    btnAgregar.addEventListener('click', () => {
        tareasCompletadas(tareas);
        listaAgregados.removeChild(valueLi);
    });
    valueContentDiv.appendChild(valueSpan);
    valueLi.appendChild(valueContentDiv);
    valueLi.appendChild(btnEliminar);
    valueLi.appendChild(btnAgregar);
    listaAgregados.appendChild(valueLi);
    inputValue.value = '';
}
function tareasCompletadas(tarea) {
    const valueLi = document.createElement('li');
    valueLi.textContent = tarea;
    listaCompletados.appendChild(valueLi);
}
