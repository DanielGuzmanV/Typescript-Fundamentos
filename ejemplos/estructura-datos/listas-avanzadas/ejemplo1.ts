// Temas: Arrays
// Ejemplo 1:
type ProductListValue = {
  id: number;
  nombre: string;
  precio: number;
  isActive: boolean;
  categoria: string;
}

const valProductList: ProductListValue[] = [
  {
    id: 1, nombre: 'laptop', precio: 3450, isActive: true, 
    categoria: "tecnologia"
  },
  {
    id: 2, nombre: 'teclado', precio: 500, isActive: true,
    categoria: "tecnologia"
  },
  {
    id: 3, nombre: '', precio: 0, isActive: false,
    categoria: "sin categoria"
  },
  {
    id: 4, nombre: 'mesa', precio: 450, isActive: true,
    categoria: "hogar"
  },
  {
    id: 5, nombre: 'silla', precio: 300, isActive: true,
    categoria: "hogar"
  },
]

// Obtener solo el nombre de producto uno por uno:
const nameProduct1 = valProductList[0].nombre;
const nameProduct2 = valProductList[1].nombre;
const nameProduct3 = valProductList[2].nombre;

// Suma total de productos:
const valueTotProducts = valProductList.reduce((suma, valProd) => suma + valProd.precio, 0);
console.log('Total: ', valueTotProducts)

// Obtenes solo los nombres de los productos:
const nombreProductValue = valProductList.map( valProduct => valProduct.nombre);
console.log('Los nombres son: ', nombreProductValue);

// Desestructuracion para obtener los nombres:
const nameProductValDes = valProductList.map(({nombre}) => nombre);
console.log('Nombres: ', nameProductValDes)

// Obtener los nombres evitando entradas vacias o invalidas:
const nameProducValid = valProductList
  .filter( (product) => product.nombre.trim() !== '')
  .map( (val) => val.nombre);

console.log('Nombres validos: ', nameProducValid);

// Transformamos un array de productos en array de strings:
const arrayProductValue = valProductList.map( (producto) => {
  return `${producto.id}, ${producto.nombre}, ${producto.precio}, ${producto.categoria},`
}) 
console.log('El array es: ', arrayProductValue);

// Tambien podemos usar desestructuracion:
const arrayProductValDes = valProductList
  .filter(({nombre}) => nombre.trim() !== '')
  .map(({id, nombre, precio, categoria}) => `${id}, ${nombre}, ${precio}, ${categoria}`)

console.log('Array destructuring: ', arrayProductValDes);

// Filtrar productos por categoria y sumar el total:
const productCate = valProductList.filter(({categoria}) => categoria.trim() === 'tecnologia');
const productSumavalues = productCate.reduce((value, objProduct) => value + objProduct.precio, 0);

console.log('Categoria: ', productCate);
console.log('Total suma: ', productSumavalues);

// Alternativa de suma total:
const totalPrductValue = valProductList
  .filter(({categoria}) => categoria.trim() === 'tecnologia')
  .reduce( (suma, {precio}) => suma + precio, 0);
console.log('Total tecnologia: ', totalPrductValue);

// Suma total usando solo reduce:
const totTecnoProduct = valProductList.reduce((suma, producto) => {
  return producto.categoria.trim() === 'tecnologia'
  ? suma + producto.precio
  : suma;
}, 0);
console.log('Suma compacta: ', totTecnoProduct);

console.log('=================================================');
// Ejemplo 2:
const arrayValueNombres: string[] = [
  'Ana', 'Luis', 'Ana', 'Carlos', 'Marcelo', 'Pedro', 'Carlos', 'Mauricio',
]

// Eliminamos nombres duplicados:
const arrayNombresUnicos = [...new Set(arrayValueNombres)];
console.log('Los nombres unicos son:', arrayNombresUnicos);

// Alternativa con filter + indexOf (Evitando mayus-minus)
const arrayNombresUnicosFil = arrayValueNombres.filter((nombre, index, arr) => {
  
  const nameNormal = nombre.toLowerCase();

  // Creamos el array con todo en minuscula y comparamos su indexOf
  return arr
    .map( nam => nam.toLowerCase())
    .indexOf(nameNormal) === index
});
console.log('Nombres unicos con filter: ', arrayNombresUnicosFil);


console.log('=================================================');
// Ejemplo 3:
const objtValueNombre = [
  {id: 1, nombre: 'Marco', edad: 42},
  {id: 2, nombre: 'Marcelo', edad: 18},
  {id: 3, nombre: 'Pablo', edad: 25},
  {id: 4, nombre: 'MarCelo', edad: 42},
  {id: 5, nombre: 'Pedro', edad: 23},
  {id: 6, nombre: 'Carlos', edad: 36},
  {id: 7, nombre: 'PedrO', edad: 23},
]
// Eliminar objetos con nombres repetidos (manteniendo el primero)
const objSinDoble = objtValueNombre.filter((obj, idx, array) => {
  const nameNormal = obj.nombre.toLowerCase();

  return (
    array.findIndex(
      (ob) => ob.nombre.toLowerCase() === nameNormal
    ) === idx
  );

})
console.log(objSinDoble);

// Agrupamos objetos por nombres (objeto de agrupacion dinamica o objeto de arrays de objetos)
const agruparNombresList = objtValueNombre.reduce( (acc, persona) => {
  const clave = persona.nombre.toLowerCase();

  // acc = Record<string, typeof objtValueNombre>
  if(!acc[clave]) {
    acc[clave] = [];
  }
  acc[clave].push(persona);

  return acc;
}, {} as Record<string, typeof objtValueNombre>)
console.log(agruparNombresList)


console.log('=================================================');
// Ejemplo 4 - Lista normal:
const listaAstros: string[] = ['sol', 'luna', 'sol', 'estrella', 'luna', 'luna'];

// Contar cuantas veces aparece cada palabra:
const conteoAstros = listaAstros.reduce( (acc, astro) => {
  acc[astro] = (acc[astro] || 0) + 1;
  
  return acc
}, {} as Record<string, number>);
console.log(conteoAstros);

// Lista de objetos, contamos cuantas veces aparece cada astro:
const objListaAstros = [
  { id: 1, nombre: 'Tierra', diametro: 12742},
  { id: 2, nombre: 'Luna', diametro: 3475 },
  { id: 3, nombre: 'Marte', diametro: 6779 },
  { id: 4, nombre: 'Jupiter', diametro: 139820 },
  { id: 5, nombre: 'Luna', diametro: 3475 },
  { id: 6, nombre: 'Marte', diametro: 6779 },
  { id: 7, nombre: 'Luna', diametro: 3475 },
]
const objConteoAstros = objListaAstros.reduce((acc, astros) => {
  const nombres = astros.nombre;
  acc[nombres] = (acc[nombres] || 0) + 1;

  return acc;
}, {} as Record<string, number>);
console.log(objConteoAstros);


console.log('=================================================');
// Ejemplo 5:
const objectUserData = {
  nombre: 'Marco',
  edad: 36,
  ciudad: 'Buenos vientos'
}

// Convertimos el objeto a array y viceversa:
const arrayObjectUser = Object.entries(objectUserData);
console.log(arrayObjectUser);

// Convertimos el array a objeto:
const nuevoObjectUser = Object.fromEntries(arrayObjectUser);
console.log(nuevoObjectUser);
















