// Ejemplos Closures:
// Ejemplo 1:
// Temporizador donde se guarda el estado y luego se accede a el
// despues de un periodo de tiempo
function temporizador(limite: number): void {
    let tiempo: number = 0;

    const intervalo = setInterval( () => {
        tiempo++;
        console.log(`Han pasado ${tiempo} segundos`);

        if(tiempo >= limite) {
            clearInterval(intervalo);
            console.log('El temporizador se ha detenido');
        }
    }, 1000);
}
temporizador(2);


// ==========================================================
// ==========================================================


// Ejemplo 2:
// Creamos funciones personalizadas y estas guardaran un estado
function multiplicarValores(factor: number) {
    return function(value: number) {
        console.log('El resultado es:', (value * factor));
    }
}

const factor1 = multiplicarValores(2);
factor1(6);

const factor2 = multiplicarValores(3);
factor1(17);

const factor3 = multiplicarValores(4);
factor1(13);



// ==========================================================
// ==========================================================


// Ejemplo 3:
// Closures con setTimeout, definimos el tiempo de espera
function tiempoMensaje(tiempo: number = 10000) {
    let mensaje = 'Este es un mensaje de prueba';
    
    setTimeout( () => {
        console.log(mensaje);
    }, tiempo);
}
tiempoMensaje(2000);


// ==========================================================
// ==========================================================


// Ejemplo 4:
// Acceder a datos en objetos:
function crearContadorObj() {
    let contador = 0;

    return {
        incrementar: function(): void {
            contador++;
            console.log(`El numero es: ${contador}`);
        },
        
        obtenerContador: function(): number {
            return contador;
        }
    }
}

const counter = crearContadorObj();
counter.incrementar();
counter.incrementar();
counter.incrementar();

console.log(`La cantidad total es: ${counter.obtenerContador()}`);


// ==========================================================
// ==========================================================


// Ejemplo 5:
// Funciones con configuraciones personalizadas
function crearSaludos(saludo: string){
    return function(nombre: string) {
        console.log(`${saludo}, ${nombre}`);
    }
}

// Saludos en diferentes idiomas:
const saludoSpanish = crearSaludos('Hola');
const saludoEnglish = crearSaludos('Hello');

// Agregamos el nombre:
saludoSpanish('Carlos');
saludoEnglish('Steve');

