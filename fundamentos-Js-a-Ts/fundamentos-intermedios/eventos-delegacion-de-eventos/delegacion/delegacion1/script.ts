// EJEMPLO 1:
// Agregar un "addEventListenner" sin importar cuantos botones hay
// ya que si agregamos mas botones tambien funcionaran
const contenidoDiv = document.getElementById('contenedor');
contenidoDiv?.addEventListener('click', (evento) => {
    if(evento.target instanceof HTMLElement && evento.target.classList.contains('btn')) {
        alert('Boton clickeado...');
    }
})


// ================================================================
// ================================================================


// EJEMPLO 2:
// Lista de tareas dinamicas
const listaElemento = document.getElementById('listaTareas');
const botonAgregar = document.getElementById('addTarea');

// Agregamos las tareas:
botonAgregar?.addEventListener('click', function() {
    const nuevaTarea = document.createElement('li');
    if(listaElemento) {
        nuevaTarea.textContent = `Tarea ${listaElemento?.children.length + 1}`;
        listaElemento.appendChild(nuevaTarea);
    }
})

// Cuando se haga clic en un "li" se tachara
listaElemento?.addEventListener('click', function(evento) {
    if(evento.target instanceof HTMLElement && evento.target.tagName === 'LI') {
        evento.target.style.textDecoration = 'line-through';
    }
})


// ================================================================
// ================================================================


// EJEMPLO 3:
// Delegacion en formularios
const labelForm = document.getElementById('miFormulario');

// Detectaremos cambios en diferentes input, sin necesidad de hacer muchos addEventListener
labelForm?.addEventListener('input', (evento) => {
    if(evento.target instanceof HTMLInputElement) {
        console.log(`Cambiando: ${evento.target.name} -> ${evento.target.value}`);
        alert(`Cambiando: ${evento.target.name} -> ${evento.target.value}`);
    }
})


