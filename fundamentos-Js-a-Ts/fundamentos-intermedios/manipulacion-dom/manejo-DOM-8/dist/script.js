"use strict";
// EJEMPLO 1:
// Event bubbling (Propagacion ascendente)
// Comportamiento por defecto de los eventos en el DOM
document.getElementById('idPadre')?.addEventListener('click', function () {
    alert('El div padre ha recibido el clic');
});
document.getElementById('idHijo')?.addEventListener('click', function () {
    alert('El boton hijo ha recibido el clic');
});
// Cuando se hace clic en el boton "idHijo", el evento primero es capturado
// por el boton "idHijo" y luego pasa al div "idPadre"
// =================================================================
// =================================================================
// EJEMPLO 2:
// Event capturing (Captura)
// Comportamiento opuesto al bubbling:
document.getElementById('divPadre')?.addEventListener('click', () => {
    alert('El nuevo div padre recibio un clic');
}, true);
document.getElementById('btnHijo')?.addEventListener('click', () => {
    alert('El nuevo boton hijo recibio un clic');
});
// Cuando se hace clic en el boton "btnHijo", el evento primero se captura
// por el div "divPadre" y luego se propaga hacia el boto "btnHijo"
// =================================================================
// =================================================================
// EJEMPLO 3:
// MutationObserver: es una API que nos permite escuchar cambios en el DOM
// como adicion, eliminacion o modificacion de elementos
const divContenedor = document.getElementById('contenedor');
// Creamos un observador de mutaciones:
const observarCambios = new MutationObserver(function (mutationList, observer) {
    for (let mutationElem of mutationList) {
        if (mutationElem.type === 'childList') {
            alert('Se agrego o elimino un nodo');
        }
    }
});
// Definimos que tipo de cambios queremos observar en el DOM, por ejemplo
// Si se agrega un "p" dentro del div este sera detectado, pero si solo se
// cambia el texto de un "p" no sera detectado
const config = { childList: true, };
// Iniciamos la observacion en el contenedor, donde especificamos el nodo
// que queremos observar
if (divContenedor instanceof HTMLElement) {
    observarCambios.observe(divContenedor, config);
}
// Definimos los cambios que queremos detectar, en este caso:
// Cuando se agregan o eliminan elementos
// Boton agregara nuevos parrafos, esto hara que se notifique esos cambios
document.getElementById('btnCrear')?.addEventListener('click', function () {
    const newParrafo = document.createElement('p');
    newParrafo.textContent = 'Nuevo parrafo agregado';
    divContenedor?.appendChild(newParrafo);
});
// Modificar automaticamente el DOM:
// Despues de 2s se creara un nuevo "p" al cargar o actualizar la pagina 
// automaticamente sin hacer algun clic o interactuar
setTimeout(() => {
    const parrafoNuevo = document.createElement('p');
    parrafoNuevo.textContent = 'Nuevo parrafo agregado despues de 2s';
    divContenedor?.appendChild(parrafoNuevo);
}, 2000);
// =================================================================
// =================================================================
// EJEMPLO 4:
// classList avanzado, esta es una forma mas moderna y sencilla de 
// manejar las clases CSS de un elemento
// Ejemplo con: TOGGLE
document.getElementById('toggleBtn')?.addEventListener('click', () => {
    let divElemento1 = document.getElementById('miElemento');
    // Agregamos una clase llamada "clase2" si no esta en el elemento
    // En caso de que "clase2" ya este, este lo quitara
    if (divElemento1?.classList.toggle('clase2')) {
        alert('Se agrego la clase "clase2" junto a "claseDiv1"');
    }
    else {
        alert('Se quito la "clase2"');
    }
});
// Ejemplo con: REPLACE
document.getElementById('replaceBtn')?.addEventListener('click', function () {
    let divElemento2 = document.getElementById('miElemento');
    // Reemplazamos si la clase original existe, de lo contrario no hace nada
    if (divElemento2?.classList.contains('claseDiv1')) {
        divElemento2.classList.replace('claseDiv1', 'clase3');
        alert('Se reemplazo la "claseDiv1" por "clase3"');
    }
    else {
        alert('La clase "claseDiv1" no se encuentra');
    }
});
// =================================================================
// =================================================================
// EJEMPLO 5:
// LocalStorage:
// Permiten almacenar datos en el navegador
// Los datos continuan incluso despues que el navegador se cierra
// Ejemplo localStorage:
const btnGuardarLocal = document.getElementById('guardarLocal');
const btnLeerLocal = document.getElementById('leerLocal');
const btnLimpiarLocal = document.getElementById('limpiarLocal');
// Usamos las funciones para realizar los eventos de guardar, leer y limpiar:
btnGuardarLocal?.addEventListener('click', guardarDatosLocal);
btnLeerLocal?.addEventListener('click', leerDatosLocal);
btnLimpiarLocal?.addEventListener('click', limpiarDatosLocal);
// Funcion para guardar datos localmente:
function guardarDatosLocal() {
    let claveLocal = document.getElementById('entradaValue1');
    ;
    let valorLocal = document.getElementById('entradaValue2');
    ;
    // Vemos que la clave y valor no esten vacios
    if (claveLocal && valorLocal) {
        const clave1 = claveLocal.value;
        const valor1 = valorLocal.value;
        if (clave1 && valor1) {
            localStorage.setItem(clave1, valor1);
            alert('Dato guardado correctamente');
        }
        else {
            alert('Por favor ingrese una clave o valor');
        }
        // Limpiamos los inputs:
        claveLocal.value = '';
        valorLocal.value = '';
    }
    else {
        alert('No se encontraron los campos de entrada');
    }
}
// Funcion para leer los datos guardados localmente:
function leerDatosLocal() {
    let obtenerValor = prompt('Ingrese la clave para ver el dato:');
    if (obtenerValor) {
        let valor = localStorage.getItem(obtenerValor);
        if (valor !== null) {
            alert(`El valor es: ${valor}`);
        }
        else {
            alert('No se encontro ningun valor con ese clave');
        }
    }
}
// Funcion para limpiar el localStorage:
function limpiarDatosLocal() {
    localStorage.clear();
    alert('LocalStorage ha sido limpiado');
}
// =================================================================
// =================================================================
// EJEMPLO 6:
// SesssionStorage:
// Permiten almacenar datos en el navegador
// Los datos continuan durante la session actual, solo si el
// navegador o pestaña estan abiertas
// Ejemplo SessionStorage:
const btnGuardarSession = document.getElementById('guardarSession');
const btnLeerSession = document.getElementById('leerSession');
const btnLimpiarSession = document.getElementById('limpiarSession');
// Funcion para guardar los datos en SessionStorage:
function guardarDatosSession() {
    let claveSession = document.getElementById('entradaValor1');
    let valorSession = document.getElementById('entradaValor2');
    if (claveSession && valorSession) {
        const clave2 = claveSession.value;
        const valor2 = valorSession.value;
        if (clave2 && valor2) {
            sessionStorage.setItem(clave2, valor2);
            alert('Dato gaurdado correctamente');
        }
        else {
            alert('Por favor ingrese una clave y un valor');
        }
        // Limpiamos los inputs
        claveSession.value = '';
        valorSession.value = '';
    }
    else {
        alert('No se encontraron los campos de entrada');
    }
}
// Funcion para leer los datos SessionStorage:
function leerDatosSession() {
    let obtenerValor = prompt('Ingrese la clave para ver el dato');
    if (obtenerValor) {
        let valor = sessionStorage.getItem(obtenerValor);
        if (valor !== null) {
            alert(`El valor es: ${valor}`);
        }
        else {
            alert('No se encontro ningun valor con esa clave');
        }
    }
}
// Funcio para limpiar el SessionStorage
function limpiarDatosSession() {
    sessionStorage.clear();
    alert('SessionStorage ha sido limpiado');
}
// Llamamos a las funciones para realizar los siguientes eventos:
btnGuardarSession?.addEventListener('click', guardarDatosSession);
btnLeerSession?.addEventListener('click', leerDatosSession);
btnLimpiarSession?.addEventListener('click', limpiarDatosSession);
