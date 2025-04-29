const {primeraTarea, segundaTarea} = require('./common-tareas');

async function menuPrincipal() {
    try {
        // Podemos ejecutar de dos maneras:
        // Separados:
        const firstValue = await primeraTarea();
        const secondValue = await segundaTarea();
        
        // forma paralela:
        const resultado = await Promise.all([primeraTarea(), segundaTarea()])
        
        // Llamamos a los valores:
        console.log('Retornar primera forma:', firstValue);
        console.log('Retornar primera forma:', secondValue);

        console.log('Retornar segunda forma:', resultado[0]);
        console.log('Retornar segunda forma:', resultado[1]);



    } catch (error) {
        console.log(error);
    }
}
menuPrincipal();















