// CommonJs: module export
// Exportamos una funcion de dos maneras:
// Primera forma
module.exports.multiValue = function(value1: number, value2: number) {
    return value1 * value2;
}

// Segunda forma
// funciones externas
function saludarModule(nombre: string) {
    console.log(`Hola, ${nombre} desde CommonJS`);
}

function sumarElementos(): number {
    return 13 + 58;
}

module.exports.funcionSaludo = saludarModule;
module.exports.funcionSumar = sumarElementos;

// NOTA 1:
/**
 * ERROR: "module.exports" en CommonJs
 * Al intentar usar ambas formas de exportar en el mismo archivo:
 * module.exports.algunaFuncion = ...  // Forma 1
 * module.exports = ...       // Forma 2 (sobrescribe todo)
 * 
 * Ya que cuando usamos "module.exports = ..." este reemplaza todo lo que 
 * habiamos exportado antes con "module.exports.algunaFuncion = ..."
 * 
 * Esto hace que algunas funciones ya no esten disponibles
 */





