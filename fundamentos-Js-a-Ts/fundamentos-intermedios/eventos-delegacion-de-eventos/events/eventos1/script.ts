// Eventos del teclado
// Evitamos caracteres que no son numeros:
document.getElementById('numbers')?.addEventListener('keydown', function(evento) {
    if(evento.key < '0' || evento.key > '9') {
        evento.preventDefault();
    }
})

// Ejemplo 1.1:
const parrafo = document.getElementById('mensaje');

document.getElementById('inputTexto')?.addEventListener('keydown', function(evento) {
    if(evento.key === 'Enter') {
        if(parrafo instanceof HTMLParagraphElement) {
            parrafo.textContent = 'Presionaste enter';

            setTimeout(() => {
                parrafo.textContent = '';
            }, 2000);
        }
    }
})

// Ejemplo 1.2:
const mensajeP = document.getElementById('mensajeKeyUp');

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('inputKeyUp')?.addEventListener('keyup', function(evento) {
        if(mensajeP instanceof HTMLParagraphElement) {
            mensajeP.textContent = `Tecla soltada: ${evento.key}`;

            setTimeout(() => {
                mensajeP.textContent = '';
            }, 3000);
        }
    })
})


// =======================================================================
// =======================================================================


// Eventos del raton:
const botonHover = document.getElementById('btnHover');

botonHover?.addEventListener('mouseover', function() {
    botonHover.style.backgroundColor = 'red';
})

botonHover?.addEventListener('mouseout', function() {
    botonHover.style.backgroundColor = '';
})

// Ejemplo 2.1
document.getElementById('btnClick')?.addEventListener('click', ()=> {
    alert('Click detectado')
})

// Ejemplo 2.2
document.getElementById('caja')?.addEventListener('dblclick', function() {
    this.style.background = 'green';
})

// Ejemplo 2.3
document.getElementById('texto')?.addEventListener('contextmenu', function(evento) {
    evento.preventDefault();
    alert('Menu contextual deshabilitado');
})

// Ejemplo 2.4
const coordenasP = document.getElementById('coordenadas');
document.addEventListener('mousemove', function(evento) {
    if(coordenasP instanceof HTMLParagraphElement) {
        coordenasP.textContent = `X: ${evento.clientX}, Y: ${evento.clientY}`;
        
    }
})


// =======================================================================
// =======================================================================


// Personalizacion de eventos
// Creamos el evento:
const eventCustom = new CustomEvent('saludar', {
    detail: {
        mensaje: 'Evento personalizado con TS',
    }
})

// Dos formas de mostra el mensaje:
document.addEventListener('saludar', (evento) => {
    const eventoSms = evento  as CustomEvent;
    alert(eventoSms.detail.mensaje);
    console.log(eventoSms.detail.mensaje);
})

const eventoSaludarBtn = document.getElementById('btnSaludar');

eventoSaludarBtn?.addEventListener('click', function() {
    document.dispatchEvent(eventCustom);
})



