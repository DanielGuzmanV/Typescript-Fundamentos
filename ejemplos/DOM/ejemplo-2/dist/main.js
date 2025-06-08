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
    valueLi.className = "flex justify-between items-center gap-2 p-2 bg-gray-100 rounded-lg hover:scale-[1.02] hover:bg-gray-200 transition-transform duration-200 ease-in-out";
    const valueContentDiv = document.createElement('div');
    valueContentDiv.className = "p-4 flex-grow break-words";
    const valueSpan = document.createElement('span');
    valueSpan.textContent = tareas;
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.className = "bg-blue-600 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm";
    btnEliminar.addEventListener('click', () => {
        listaAgregados.removeChild(valueLi);
    });
    const btnAgregar = document.createElement('button');
    btnAgregar.textContent = 'Agregar';
    btnAgregar.className = "bg-blue-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm";
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
    valueLi.className = "p-3 bg-green-100 rounded-lg text-gray-800 hover:bg-green-200 transition-all";
    listaCompletados.appendChild(valueLi);
}
