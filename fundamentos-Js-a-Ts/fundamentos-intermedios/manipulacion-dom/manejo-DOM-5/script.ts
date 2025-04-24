// Modificacion de atributos con el DOM
// EJEMPLO 1:
// Modificar la imagen
const btnCambioImg = document.getElementById('btnCambio');
// Usar "as HTMLImageElement" si estamos seguro que sera una imagen y que el elemento existe
const imgCambiar = document.getElementById('miImagen1') as HTMLImageElement;

// Evento que se usara con la funcion para cambiar la imagen:
btnCambioImg?.addEventListener('click', cambiarImagen);


// Funcion para cambiar y restaurar la Imagen:
let cambioImg = true;
let imgNueva = "https://img.freepik.com/fotos-premium/paisaje-verano-campo-donde-heno-esta-hecho-hierba-periodo-invernal_252085-1647.jpg?semt=ais_hybrid";
let imgOriginal = imgCambiar.src;

function cambiarImagen() {
    imgCambiar.src = cambioImg ? imgNueva : imgOriginal;
    cambioImg = !cambioImg;
}


// =============================================================
// =============================================================


// EJEMPLO 2:
// Modificar un enlace:
const labelEnlace = document.getElementById('primerEnlace');
const btnEnlace = document.getElementById('btnCambioEnlace');


// Funcion para cambiar y restaurar enlaces:
let enlaceNuevo = "https://www.google.com";
let textoNuevo = "Visitar el buscador de Google";
let cambioEnlace = false;

// Usamos "instanceof" para verificar si fue creado por esa clase:
if(labelEnlace instanceof HTMLAnchorElement) {
    let enlaceOriginal = labelEnlace.href;
    let textoOriginal = labelEnlace.textContent;

    // Evento que cambiara los enlaces:
    btnEnlace?.addEventListener('click', () => {
        if(!cambioEnlace) {
            labelEnlace.href = enlaceNuevo;
            labelEnlace.textContent = textoNuevo;
        } else {
            labelEnlace.href = enlaceOriginal;
            labelEnlace.textContent = textoOriginal;
        }
        cambioEnlace = !cambioEnlace;
    })
} else {
    console.warn('El elemento con id "primerEnlace" no es un <a>')
}


// =============================================================
// =============================================================


// EJEMPLO 3:
// Modificar el valor de un input:
const labelInputText = document.getElementById('inputTexto') as HTMLInputElement;
const btnCambiarInput = document.getElementById('btnCambiarInput');

let cambioTxt = false;
let inputTxtOriginal = labelInputText.value;
let inpuTxtNuevo = 'Este es el nuevo texto...';

// Funcion para cambiar y restaurar el valor de un input:
function cambioValorInput() {
    labelInputText.value = cambioTxt ? inputTxtOriginal : inpuTxtNuevo;
    cambioTxt = !cambioTxt;
    
}

btnCambiarInput?.addEventListener('click', cambioValorInput);


// =============================================================
// =============================================================


// EJEMPLO 4:
// Cambiar la clase de un elemento:
const divContentElem = document.getElementById('divElemento');
const btnCambiarClase = document.getElementById('cambiarClase');

let txtOriginDiv = divContentElem?.textContent || '';

// Cambiamos la clase:
btnCambiarClase?.addEventListener('click', function() {
    if(divContentElem?.classList.contains('claseOriginDiv')) {
        divContentElem.classList.replace('claseOriginDiv', 'claseNuevaDiv');
        divContentElem.textContent = 'Nuevo Div de ejemplo';
    } else if(divContentElem) {
        divContentElem.classList.replace('claseNuevaDiv', 'claseOriginDiv');
        divContentElem.textContent = txtOriginDiv;
    }
    
})


// =============================================================
// =============================================================


// EJEMPLO 5:
// Cambiar los estilos de un elemento:
const divCajaElem = document.getElementById('cajaDiv');
const btnCambiarEstilos = document.getElementById('cambiarEstilos');

let cambiandoEstilos = false;

btnCambiarEstilos!.addEventListener('click', function() {
    if(cambiandoEstilos) {
        divCajaElem!.style.backgroundColor = '';
        divCajaElem!.style.color = '';
        divCajaElem!.style.padding = '';
        divCajaElem!.style.border = '';
        divCajaElem!.style.margin = '';
        divCajaElem!.style.fontWeight = '';
    } else {
        divCajaElem!.style.backgroundColor = 'green';
        divCajaElem!.style.color = 'white';
        divCajaElem!.style.padding = '30px';
        divCajaElem!.style.border = '2px solid black';
        divCajaElem!.style.margin = '30px';
        divCajaElem!.style.fontWeight = 'bold';
    }
    cambiandoEstilos = !cambiandoEstilos;
})


// =============================================================
// =============================================================


// EJEMPLO 6:
// Habilitar y desabilitar un input:
const labelTextInput = document.getElementById('inputText');
const btnToggleInput = document.getElementById('inputCambio')

btnToggleInput?.addEventListener('click', () => {
    if(labelTextInput instanceof HTMLInputElement) {
        labelTextInput.disabled = !labelTextInput.disabled;
    }
})

