// Recursividad:
// Ejemplos intermedios

// Ejemplo 1: Recorrer un arbol (Estructura de nodos)
// Creamos un type recursivo:
type Nodo = {
    valor: string,
    hijos: Nodo[],
};

const arbolNodos: Nodo ={
    valor: 'raiz',
    hijos: [
        {
            valor: 'nodo1',
            hijos: [],
        },
        {
            valor: 'nodo2',
            hijos: [
                {
                    valor: 'nodo2.1',
                    hijos: []
                },{
                    valor: 'nodo2.2',
                    hijos: []
                }
                
            ]
        }
    ]
}

function recorrerArbol(nodos: Nodo) {
    console.log(nodos.valor);

    for(const hijo of nodos.hijos) {
        recorrerArbol(hijo);
    }
}
recorrerArbol(arbolNodos);
console.log('============================================')

// Ejemplo 2: Comparacion profunda de objetos:
// Creamos un type recursivo:
type tiposDatos = string | number | boolean | null | tiposDatos[] | { [key: string]: tiposDatos};

function compararObjetos(obj1: tiposDatos, obj2: tiposDatos) {
    if(obj1 === obj2) {
        return 'Los objetos son iguales';
    }

    if(
        typeof obj1 !== 'object' || obj1 === null ||
        typeof obj2 !== 'object' || obj2 === null
    )
    return 'Los objetos aun no son iguales';

    if(Array.isArray(obj1) && Array.isArray(obj2)) {
        if(obj1.length !== obj2.length){
            return 'La longitud de los objetos no es igual';
        }
        for(let idx = 0; idx < obj1.length; idx++) {
            if(!compararObjetos(obj1[idx], obj2[idx])) {
                return 'La longitud de los objetos aun no es igual';
            }
            return 'Los objetos si son iguales!';
        }
    }

    if(Array.isArray(obj1) !== Array.isArray(obj2)) {
        return 'Simplemente no son iguales';
    }

    const claves1 = Object.keys(obj1);
    const claves2 = Object.keys(obj2);

    if(claves1.length !== claves2.length) {
        return 'La longitud sigue sin ser igual';
    }

    for(const values of claves1) {
        if(!claves2.includes(values)) return 'No son iguales, valores diferentes';

        const val1 = (obj1 as { [key: string] : tiposDatos}) [values];
        const val2 = (obj2 as { [key: string] : tiposDatos}) [values];

        if(!compararObjetos(val1, val2)) return 'Los objetos siguen sin ser iguales';
    }

    return 'Los objetos si son iguales finalmente';
}

// Creamos objetos:
const objeto1: tiposDatos = {
    nombre: 'Pedro',
    datos: {
        edad: 30,
        ciudad: 'chiguagua',
    }
}

const objeto2: tiposDatos = {
    nombre: 'Pedro',
    datos: {
        edad: 30,
        ciudad: 'chiguagua',
    }
}

console.log(compararObjetos(objeto1, objeto2));

