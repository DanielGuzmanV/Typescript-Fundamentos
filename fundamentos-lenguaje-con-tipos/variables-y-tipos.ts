// Declaracion de variables: let y const:
let varNombre = 'marco'; // Esta variable puede cambiar
const varEdad = 32; // Esta variable no puede cambiar

// ==================================================================

// Type Inference: Inferencia de tipos:
// Ts deduce automaticamente el tipo de la variable segun el valor asignado
let varCiudad = 'Buenos Vientos'; // Ts infiere que este tipo es string
varCiudad = 'Parana'; // Esto es permitido en Ts
// varCiudad = 52; // Aqui no podemos asignar un numero a un string

// ==================================================================

// Type Annotation: Anotacion de tipos:
// Podemos especificar el tipo con dos puntos ":" despues del nombre de la variable
let varActivo: boolean = true;
const varPuntos: number = 100;
let varUsuario: string;
varUsuario = 'Pamela'; // Esto es valido
// varUsuario = 45; // Nos saldra un error ya que "varUsuario" es de tipo string

// Comparacion: 
// Inferencia:
let varNumero1 = 5; // Aqui Ts infiere que es un numero

// Anotacion:
let varNumero2: number = 10 // Aqui definimos explicitamente














