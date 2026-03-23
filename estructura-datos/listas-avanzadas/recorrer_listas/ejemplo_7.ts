// Ejemplos combinados:

// 1. Ejemplo 1:
// Tienes una lista de productos. Quieres filtrar los que tienen stock, 
// convertirlos a una etiqueta legible y calcular el valor total de ese inventario.
const inventarioList = [
  { prod: "Teclado", precio: 50, stock: true },
  { prod: "Mouse", precio: 20, stock: false },
  { prod: "Monitor", precio: 200, stock: true }
];

const disponibles = inventarioList.filter(p => p.stock);
const etiquetasInv = disponibles.map(p => `PRODUCTO: ${p.prod}`);
const totalCosto = disponibles.reduce((acc, p) => acc + p.precio, 0);

console.log(etiquetasInv);
console.log(`Inversion en stock: ${totalCosto}`);
console.log('================================================')

// Ejemplo 2:
// Antes de subir archivos a un servidor, verificamos si todos tienen nombre, 
// si alguno pesa demasiado y buscamos el archivo "Principal" para procesarlo primero.
const archivosList = [
  { name: "foto.jpg", size: 500, type: "image" },
  { name: "index.ts", size: 10, type: "main" },
  { name: "", size: 100, type: "text" }
];

const todosTienenNombre = archivosList.every(f => f.name.length > 0);
const hayArchivosPesados = archivosList.some(f => f.size > 1000);
const archivosMain = archivosList.find(f => f.type === "main");

if(!todosTienenNombre) {
  console.log("Error: hay archivos sin nombre en la lista");
} else {
  console.log('Archivos guardados correctamente')
}

if(hayArchivosPesados) {
  console.log('Hay archivos pesados, no deben pasar de 1000 MB')
} else {
  console.log('No hay archivos pesados, guardados correctamente')
}

console.log('Archivo principal:', archivosMain)
console.log('================================================')


// Ejemplo 3:
// Simular un sistema de impresión. Procesamos los documentos uno a uno 
// (del primero al último) y, si falla, lo devolvemos al inicio de la fila como prioridad.

const colaImpresion = ["Doc_1.pdf", "Doc_2.pdf", "Doc_3.pdf", "Doc_4.pdf", "Doc_5.pdf"];
const terminados: string[] = [];

while(colaImpresion.length > 0) {
  const actual = colaImpresion.shift();
  
  // Simulamos que el Doc_2 falla
  if(actual === "Doc_3.pdf") {
    console.log(`Error en ${actual}. Reintentando al inicio...`);
    colaImpresion.unshift(actual);
    break;
  } else if(actual) {
    terminados.push(actual);
  }
}

console.log("Cola restante:", colaImpresion);
console.log("Impresiones terminadas:", terminados);
console.log('================================================')

// Ejemplo 4:
// Un usuario quiere "Eliminar y Archivar". Buscamos el índice de un elemento específico,
// lo cortamos del array original y lo metemos en una "Papelera".
const listMensajes = ["Hola", "SPAM_1", "Cómo estás", "SPAM_2"];
const listPapelera: string[] = [];

// Alternativa para recorrer toda la lista con for:
// for (let i = listMensajes.length - 1; i >= 0; i--) {
//   if (listMensajes[i].includes("SPAM")) {
//     const eliminado = listMensajes.splice(i, 1);
//     listPapelera.push(eliminado[0]);
//   }
// }

const idxSpam = listMensajes.findIndex(m => m.includes("SPAM"));
if(idxSpam !== -1) {
  const eliminado = listMensajes.splice(idxSpam, 1);
  listPapelera.push(eliminado[0]);
}

console.log("Mensajes limpios:", listMensajes);
console.log("Mensjaes en papelera:", listPapelera);
console.log('================================================')

// Ejemplo 5: 
// Recorrer una lista de usuarios y, si no tienen rol definido, asignarles 
// "Guest" directamente en la lista original usando su posición.
const usuariosRol = [
  { user: "admin", role: "admin" },
  { user: "invitado1", role: "" },
  { user: "dev_01", role: "editor" }
];

usuariosRol.forEach((u, index) => {
  if(u.role === "") {
    usuariosRol[index].role = "Guest";
  }
});

console.log("Usuarios:", usuariosRol);
console.log('================================================')

// Ejemplo 6:
// Solo queremos buscar si existe un error en los últimos 3 eventos del log,
// sin revisar todo el historial que podría tener miles de líneas.
const logs = ["OK", "OK", "ERROR_DB", "OK", "OK", "ERROR_AUTH"];

const errorReciente = logs.slice(-3).find(lg => lg.includes("ERROR"));

if(errorReciente) {
  console.log(`Alerta critica encontrada: ${errorReciente}`);
} else {
  console.log("Sistema estable en los ultimos eventos");
}

