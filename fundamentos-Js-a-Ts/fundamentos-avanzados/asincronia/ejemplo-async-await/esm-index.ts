// Importamos las tareas:
import { funcionMateria1, funcionMateria2 } from "./esm-tareas";

async function materiasPrincipales() {
    try {
        
        // Podremos ejecutar de dos maneras:
        // En paralelo:
        const resultados = await Promise.all([funcionMateria1(), funcionMateria2()]);
        resultados[0];
        resultados[1];

        // Independiente:
        const resultado1 = await funcionMateria1();
        const resultado2 = await funcionMateria2();
        resultado1;
        resultado2;


    } catch (error) {
        console.error(error);
    }
}
materiasPrincipales();




