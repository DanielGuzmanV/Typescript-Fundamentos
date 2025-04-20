// ESM: import
// Podemos importar todo o separados:
// variables:
import { varPI, arrNombres, mapaUser } from "../export/export3";

console.log('El numero PI es:',varPI);
console.log('Los nombres son:',arrNombres);
console.log('Los datos son:',mapaUser);
console.log('=========================================');

// Funciones y objetos:
import { objUser, saludoUser, ocupacionUser } from "../export/export3";

console.log(objUser);
console.log(saludoUser(objUser));
ocupacionUser(objUser);
