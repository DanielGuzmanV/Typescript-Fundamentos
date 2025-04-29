// Exportaremos tareas usando async - await usando commonJS
module.exports = {
    // Primera tarea:
    async primeraTarea() {
        try {
            
            await new Promise<void>((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 4000);
            });
            return 'Tarea del primer valor'

        } catch (error) {
            console.error(error)
        }
    },

    // Segunda tarea:
    async segundaTarea() {
        try {
            
            await new Promise<void> ((resolve)=> {
                setTimeout(() => {
                    resolve();
                }, 2000);
            });
            return 'Tarea del segundo valor';

        } catch (error) {
            console.error(error);
        }
    }
}






