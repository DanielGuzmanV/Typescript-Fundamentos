// EJEMPLO 1:
// 1. Crear un nuevo elemento:
const nuevoParrafo1: HTMLParagraphElement = document.createElement('p');

// 1. Agregar texto al nuevo parrafo:
nuevoParrafo1.textContent = 'Este es el nuevo parrafo creado al final';
// Aplicamos un resaltado para ver los cambios
nuevoParrafo1.classList.add('resaltar')

// 3. Insertamos dentro del body de html (lo agregara al final)
document.body.appendChild(nuevoParrafo1);


// ====================================================================
// ====================================================================


// EJEMPLO 2:
// Agregar elemento en un lugar especifico:
// 1. crear un nuevo elemento
const nuevoParrafo2: HTMLParagraphElement = document.createElement('p');
nuevoParrafo2.textContent = 'Nuevo parrafo antes de "Crear nuevo elemento"'
nuevoParrafo2.classList.add('resaltar')

// 2. Seleccionamos donde se insertara (Antes del h2)
const referencia = document.querySelector('h2') as HTMLHeadingElement | null;

// 3. Lo insertamos:
document.body.insertBefore(nuevoParrafo2, referencia);


// ====================================================================
// ====================================================================


// EJEMPLO 3:
// Agregar un parrafo despues del h2
// Creamos el nuevo elemento:
const nuevoParrafo3: HTMLParagraphElement = document.createElement('p');
nuevoParrafo3.textContent = 'Este parrafo esta despues de "Crear nuevo elemento"';
nuevoParrafo3.classList.add('resaltar');

// Seleccionamos el elementos
const referencia2: HTMLHeadingElement | null = document.querySelector('h2');

// Insertamos despues del <h2>
referencia2?.after(nuevoParrafo3);


// ====================================================================
// ====================================================================


// EJEMPLO 4:
// Agregamos un nuevo elemento con un "id" y "class"
const nuevoDiv: HTMLDivElement = document.createElement('div');
nuevoDiv.textContent = 'Soy un "div" con ID y clase';
nuevoDiv.classList.add('resaltar')

// Pondremos su ID y Class
nuevoDiv.id = 'miNuevoDiv';
nuevoDiv.classList.add('miNuevaClase')

document.body.appendChild(nuevoDiv);

// Cambiamos el texto del nuevo div, con su nombre de "id"
const cambioDiv = document.getElementById('miNuevoDiv') as HTMLDivElement;
cambioDiv.textContent = 'Cambio del texto de div con class';


// ====================================================================
// ====================================================================


// EJEMPLO 5:
// Insertar un <p> antes del bloque div
// Seleccionamos el primer <div>
const primerDiv = document.querySelector('div');

// Creamos un nuevo <p>
const nuevoParrafo4 = document.createElement('p');
nuevoParrafo4.textContent = 'Parrafo insertado antes del div de prueba'
nuevoParrafo4.classList.add('resaltar');

// Insertamos antes del div:
primerDiv?.before(nuevoParrafo4);


// ====================================================================
// ====================================================================


// EJEMPLO 6:
// Insertar un h3 al principio y dentro de un div
// Seleccionamos el div:
const divContent = document.querySelector('div');

// Creamos un nuevo elemento:
const nuevoH3: HTMLHeadingElement = document.createElement('h3');
nuevoH3.textContent = 'H3 insertado al inicio y dentro del div';

// Insertamos al incio del div:
divContent?.prepend(nuevoH3)


// ====================================================================
// ====================================================================


// EJEMPLO 7:
// Creamos un div con un <p> y un <ul> dentro
// Creamos el div que contendra los elementos P y UL
const nuevoDivContent: HTMLDivElement = document.createElement('div');

// ID del nuevo div:
nuevoDivContent.id = 'miContenedor';

// Estilisamos el div:
nuevoDivContent.style.border = '2px solid black';
nuevoDivContent.style.margin = '40px'
nuevoDivContent.style.padding = '10px';

// Creamos el parrafo que ira dentro del div:
const parrafoDiv: HTMLParagraphElement = document.createElement('p');
parrafoDiv.textContent = 'Parrafo dentro del DIV';
parrafoDiv.classList.add('resaltar')

// Creamos la lista desordenada:
const itemsUL: HTMLUListElement = document.createElement('ul');
itemsUL.classList.add('resaltar')
// Agregamos elementos al UL:
const itemsLista: string[] = ['Elemento 1','Elemento 2','Elemento 3', 'Elemento 4'];

itemsLista.forEach( texto => {
    const itemsLI = document.createElement('li');
    itemsLI.textContent = texto;
    itemsUL.appendChild(itemsLI);
})

// Insertamos el parrafo y la lista dentro del div:
nuevoDivContent.appendChild(parrafoDiv);
nuevoDivContent.appendChild(itemsUL);

// Agregamos el div completo al body:
document.body.appendChild(nuevoDivContent);


// ====================================================================
// ====================================================================


// EJEMPLO 8:
// Insertar antes y despues un elemento con ID
// Seleccionamos un elemento por su ID:
const referenciaID = document.getElementById('miElemento');

// Creamos nuevos parrafos:
const newParrafoAntes: HTMLParagraphElement = document.createElement('p');
newParrafoAntes.textContent = 'Nuevo texto antes del primer parrafo';
newParrafoAntes.classList.add('resaltar');

const newParrafoDespues: HTMLParagraphElement = document.createElement('p');
newParrafoDespues.textContent = 'Nuevo texto despues del primer parrafo';
newParrafoDespues.classList.add('resaltar');

// Agregamos los parrafos antes y despues:
referenciaID?.before(newParrafoAntes);
referenciaID?.after(newParrafoDespues);


// ====================================================================
// ====================================================================


// EJEMPLO 9:
// Insertar antes y despues de un elemento con class
// Seleccionamos un elemento por su clase
const referenciaClase = document.querySelector('.miParrafo');

// Creamos nuevos parrafos:
const newParrafoAntes2: HTMLParagraphElement = document.createElement('p');
newParrafoAntes2.textContent = 'Nuevo texto antes del segundo parrafo';
newParrafoAntes2.classList.add('resaltar');

const newParrafoDespues2: HTMLParagraphElement = document.createElement('p');
newParrafoDespues2.textContent = 'Nuevo texto despues del segundo parrafo';
newParrafoDespues2.classList.add('resaltar');

referenciaClase?.before(newParrafoAntes2);
referenciaClase?.after(newParrafoDespues2);





