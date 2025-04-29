// Exportaremos tareas usando async - await usando ESM que es mas moderno:

// Funcion con materias aprobadas
async function materiasAprobadas() {
    try {
        
        await new Promise<void>(resolve => setTimeout(resolve, 3000));
        let materias: string[] = ['Historia', 'Quimica', 'Ingles'];

        for(let idx of materias) {
            console.log('Materias aprobadas:', idx);
        }

    } catch (error) {
        console.error(error);
    }
}

// Funcion con materias reprobadas:
async function materiasReprobadas() {
    try {
        
        await new Promise<void>( (resolve) => setTimeout(resolve, 2000));
        let materias: string[] = ['Matematicas', 'Fisica'];

        for(let idx of materias) {
            console.log('Materias reprobadas:', idx);
        }

    } catch (error) {
        console.log(error);
    }
}

// Exportamos cada funcion:
export const funcionMateria1 = materiasAprobadas;
export const funcionMateria2 = materiasReprobadas;







