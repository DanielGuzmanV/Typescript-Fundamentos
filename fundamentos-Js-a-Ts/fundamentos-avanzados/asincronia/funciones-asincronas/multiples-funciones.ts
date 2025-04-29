// Ejecutamos multiples funciones asincronas, ya que con await podemos
// esperar varias operaciones asincronas:

function tarea1(): Promise< string> {
    return new Promise( resolve => {
        setTimeout(() => resolve('Tarea 1 esta lista'), 2000);
    })
}
function tarea2(): Promise< string> {
    return new Promise( resolve => {
        setTimeout(() => resolve('Tarea 2 esta lista'), 3000);
    })
}
function tarea3(): Promise< string> {
    return new Promise( resolve => {
        setTimeout(() => resolve('Tarea 3 esta lista'), 4000);
    })
}
function tarea4(): Promise< string> {
    return new Promise( resolve => {
        setTimeout(() => resolve('Tarea 4 esta lista'), 5000);
    })
}
function tarea5(): Promise< string> {
    return new Promise( resolve => {
        setTimeout(() => resolve('Tarea 5 esta lista'), 6000);
    })
}

// Usamos async - await:
async function ejecutarTareas() {
    console.log('Ejecutando tareas...');
    const result1 = await tarea1();
    console.log(result1);

    const result2 = await tarea2();
    console.log(result2);
    
    const result3 = await tarea3();
    console.log(result3);
    
    const result4 = await tarea4();
    console.log(result4);
    
    const result5 = await tarea5();
    console.log(result5);
}

// Llamamos a las funciones:
ejecutarTareas();

