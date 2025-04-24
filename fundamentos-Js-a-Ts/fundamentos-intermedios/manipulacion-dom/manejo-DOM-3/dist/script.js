"use strict";
const labelCaja = document.getElementById('miCaja');
const labelBtn = document.getElementById('cambiarColor');
labelBtn?.addEventListener('click', function () {
    labelCaja?.classList.toggle('resaltado');
});
