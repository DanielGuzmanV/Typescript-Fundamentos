// EJEMPLO 1:
// Menu desplegable que se cerrara al hacer clic fuera de el, podemos aprovechar
// el event bubbling para capturar los clics en el document y cerrarlo
const botonMenu = document.getElementById('menuBtn');
const divMenuList = document.getElementById('menuList');

// Mostramos el menu al hacer clic en el boton:
botonMenu?.addEventListener('click', (evento) => {
    divMenuList?.classList.toggle('hidden');
    // Evitamos que el clic se propague al documento
    evento.stopPropagation();
})

// Cerramos el menu si se hace clic fuera:
document.addEventListener('click', () => {
    divMenuList?.classList.add('hidden');
})

// Evitamos que el clic dentro del menu lo cierre:
divMenuList?.addEventListener('click', function(evento) {
    evento.stopPropagation();
})


// ================================================================
// ================================================================


// EJEMPLO 2:
// Lista de usuarios que pueden agregar elementos, en lugar de agregar un 
// addEventListener a cada elemento, podemos usar bubbling para capturar los
// clics en toda la lista
const listaElem = document.getElementById('listaTareas');
const botonAgregarTarea = document.getElementById('agregarTareas');

// Realizamos la delegacion de eventos en la lista:
listaElem?.addEventListener('click', (evento) => {

    if(evento.target instanceof Element && evento.target.tagName === 'LI') {
        alert('Hiciste clic en:' + evento.target.textContent);
    }
})

// Agregar nueva tarea a la lista:
botonAgregarTarea?.addEventListener('click', () => {
    let nuevaTarea = document.createElement('li');
    if(listaElem){
        nuevaTarea.textContent = 'Tarea '+ (listaElem?.children.length + 1);
        listaElem.appendChild(nuevaTarea)
    }
})






