"use strict";
// Ejemplo 1:
// Seleccionamos los elementos, aunque nos dara posibles errores:
const labelTitulo = document.getElementById('titulo');
const labelBoton1 = document.getElementById('cambiarTexto1');
const labelBoton2 = document.getElementById('cambiarTexto2');
const labelBoton3 = document.getElementById('cambiarTexto3');
// ERROR 1:
// "labelTitulo" es posiblemente "null".ts(18047)
// Nos indica que podria devolver null si no encuentra ningun elemento 
// con ese "id", asi que no nos dejar usar .textContent directamente
// labelTitulo.textContent = 'Texto Cambiado';
// Tambien vemos que "labelBoton?.addEventListener(...)" no da error
// ya que esta usando el operador de encadenamiento opcional "?"
// labelBoton?.addEventListener('click', () => {
// })
// Tenemos 3 soluciones:
// primera solucion: usamos asercion no-nula con "!"
// labelBoton!.addEventListener('click', () => {
//     labelTitulo!.textContent = 'Texto Cambiado';
// });
// Aunque si el elemento realmente no existe, esto nos daria
// un error en tiempo de ejecucion
// segunda solucion: especificamos el tipo
// Si estamos muy seguro que "id" esta en el HTML podemos usar una 
// conversion de tipo:
// const labelTitulo = document.getElementById('titulo') as HTMLElement;
// Aun asi, usar "as" sin comprobacion nos podria dar un error
// Tercera solucion: comprobacion manual
// if (labelTitulo && labelBoton) {
//     labelBoton.addEventListener('click', () => {
//         labelTitulo.textContent = '';
//     });
// }
// Esta es la forma mas segura y clara para evitar errores
// ================================================================
// Cambia el texto una sola vez usando la tercera solucion:
if (labelBoton1 && labelTitulo) {
    labelBoton1.addEventListener('click', function () {
        labelTitulo.textContent = "Texto cambiado";
    });
}
// Cambia el texto multiples veces usando la segunda solucion:
labelBoton2.addEventListener('click', () => {
    if (labelTitulo.textContent === 'Texto cambiado') {
        labelTitulo.textContent = 'Aprendiendo a usar el DOM';
    }
    else {
        labelTitulo.textContent = 'Texto cambiado';
    }
});
// ===============================================================
// Metodo para volver al texto original despues de unos segundos
if (labelBoton3 && labelTitulo) {
    labelBoton3.addEventListener('click', function () {
        // Guardamos el texto original
        const saveTxtOriginal = labelTitulo.textContent;
        // Cambiamos el texto cuando pulsamos el boton:
        labelTitulo.textContent = 'Texto cambiara en unos segundos...';
        // Despues de 3s vuelve al texto original:
        setTimeout(() => {
            labelTitulo.textContent = saveTxtOriginal;
        }, 2000);
    });
}
// ================================================================
// ================================================================
// Ejemplo 2:
const labelBtnColor = document.getElementById('cambiarColor');
labelBtnColor.addEventListener('click', function () {
    document.body.style.backgroundColor = obtenerColorRandom();
});
// Creamos al funcion para cambiar el color aleatoriamente 
// en forma hexadecimal
function obtenerColorRandom() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let idx = 0; idx < 6; idx++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}
// ================================================================
// ================================================================
// Ejemplo 3:
const labelMensaje = document.getElementById('mensaje');
const labelBtnToggle = document.getElementById('cambiarMensaje');
if (labelMensaje && labelBtnToggle) {
    labelBtnToggle.addEventListener('click', function () {
        if (labelMensaje.style.display === 'none') {
            labelMensaje.style.display = 'block';
        }
        else {
            labelMensaje.style.display = 'none';
        }
    });
}
