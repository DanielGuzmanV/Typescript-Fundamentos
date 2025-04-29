// CLOSURES: (funcion que retorna una funcion)
// Funciones que conservan el acceso, incluso despues de que la funcion
// externa haiga terminado de ejecutarse
function contadorNum() {
    // Variables dentro de la funcion externa
    let contador: number = 0;

    // Funcion interna (closures)
    return function() {
        contador++;
        console.log(contador);
    }
}

// Llamamos a la funcion externa:
const contador1 = contadorNum();

// Cada vez que llamamos a la funcion del contador no se reinicia
// a no ser que se cree un nuevo contador
contador1();
contador1();
contador1();

console.log('===========================');
// Nuevo contador:
const contador2 = contadorNum();
contador2();
contador2();
contador2();









