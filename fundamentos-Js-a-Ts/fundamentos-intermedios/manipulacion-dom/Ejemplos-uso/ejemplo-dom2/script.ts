// MANEJAMOS MULTIPLES ELEMENTOS AL MISMO TIEMPO:
const botonAgregarElem = document.getElementById('btnAgregarElem');
const botonEliminarElem = document.getElementById('btnEliminarElem');
const contentDiv = document.getElementById('divElementos');
const listaDiv = document.createElement('ul');

// Funcion para agregar multiples elementos:
function agregarMultiplesElementos() {
    // Ajustamos el for para agregar elementos:
    let cantidadAgregar: number = 5;
    for(let idx = 1; idx <= cantidadAgregar; idx++) {
        const nuevoElemento = document.createElement('li');
        nuevoElemento.classList.add('listas');
        nuevoElemento.textContent = 'Nuevo elemento agregado';

        listaDiv.appendChild(nuevoElemento);
    }
    contentDiv?.appendChild(listaDiv);
}

// Funcion para eliminar multiples elementos:
function eliminarMultiplesElementos() {
    const elements = document.querySelectorAll('.listas');
    // Ajustamos el for para ver cuantos elementos eliminamos:
    let cantidadEliminar: number = 3;
    for(let idx = 0; idx < cantidadEliminar && elements.length > idx; idx++) {
        elements[idx].remove();
    }
}

// Llamamos a las funciones para agregar multiples elementos:
botonAgregarElem?.addEventListener('click', agregarMultiplesElementos);
botonEliminarElem?.addEventListener('click', eliminarMultiplesElementos);


// =====================================================================
// =====================================================================


// USO DE PLANTILLAS HTML (TEMPLATE LITERALS)
const contenedorDiv = document.getElementById('divArticulos') as HTMLElement | null;
const botonCrear = document.getElementById('btnCrear');
const botonCrearMasArti = document.getElementById('btnCrearArticulos');
const botonEliminar = document.getElementById('btnEliminarArt'); 
const botonLimpiar = document.getElementById('btnLimpiarArt');


// Usamos las funciones:
botonCrear?.addEventListener('click', crearUnArticulo);
botonCrearMasArti?.addEventListener('click', crearMasArticulos);
botonEliminar?.addEventListener('click', eliminarArticulo);
botonLimpiar?.addEventListener('click', limpiarArticulos);



// Funcion para crear un articulo:
let numeroArt = 1;
function crearUnArticulo() {
    const articuloHTML = `
    <article class="articulo">
        <hr>
        <h2>Titulo de articulo ${numeroArt}</h2>
        <img src="https://img.freepik.com/foto-gratis/paisaje-hierba-bosque_23-2147632799.jpg" alt="Imagen del articulo">
        <p>Este es el contenido del articul ${numeroArt}</p>
    </article>
    `;

    // Agregamos el articulo al contenedor:
    if(contenedorDiv) {
        contenedorDiv.innerHTML += articuloHTML;
        numeroArt++;
    }
}

// Funcion para crear mas articulos:
function crearMasArticulos() {
    // Numeros de articulos que se crearan:
    const numeroArticulos: number = 5;

    // Construimos el HTML para todos los articulos:
    let articulosHTML = '';

    for(let idx = 1; idx <= numeroArticulos; idx++) {
        articulosHTML += `
            <article class="articulo">
                <hr>
                <h2>Titulo del articulo ${idx}</h2>
                <img src="https://img.freepik.com/foto-gratis/campo-verde-cielo-nublado-manana-colinas_181624-24412.jpg?semt=ais_hybrid" alt="Imagen del articulo">
                <p>Este es el contenido del articulo numero ${idx}</p>
            </article>
        `;
    }
    if(contenedorDiv) {
        contenedorDiv.innerHTML += articulosHTML;
    }
}

// Funcion para eliminar los articulos uno por uno
function eliminarArticulo() {
    const articulos = document.querySelectorAll('.articulo');
    if(articulos.length > 0) {
        articulos[articulos.length - 1].remove();
        numeroArt--;
    }
}

// Funcion para limpiar todos los articulos:
function limpiarArticulos() {
    if(contenedorDiv){
        contenedorDiv.innerHTML = '';
        numeroArt = 1;
    }
}






