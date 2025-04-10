# Fundamentos de TypeScript

Este proyecto contiene ejemplos de fundamentos de TypeScript, desde lo mas basico
hasta temas ligeramente avanzados. Usamos `ts-node` para ejecutar directamente
los archivos `.ts`, sin necesidad de compilar a JavaScript.

## Requisitos

- [Node.js] (https://nodejs.org/) instalado (v18 o superior recomendado)
- [npm] (https://www.npmjs.com/)
- Git (opcinal, para clonar el repositorio)

---

## Instalacion

Primero creamos el archivo de configuracion de Typescript.
En la terminal pondremos el siguiente comando:
- `ts -init`
Esto generara un arhivo llamado `tsconfig.json` que luego configuraremos

Instalaremos `ts-node` globalmente
- `npm install -g typescript ts-node`

## Configuracion

Ahora configuramos el archivo `tsconfig.json` donde agregaremos o descomentaremos los siguiente:

Hay que mencionar que algunos ya estan descomentados
{
  "compilerOptions": {

    "target": "ES2016", // Podemos cambiarlo al año que se requiera "ES2020"
    "module": "CommonJS",
    "strict": true,
    "esModuleInterop": true,
    "moduleResolution": "node", // Tambien esta como: "moduleResolution": "node10", 
    "skipLibCheck": true

  }
  
  Nota: Esta parte no se encuentra asi que tendremos que agregarlo de forma manual:
  ,
  "ts-node": {
    "files": true
  }
}

## Ejecucion

Para ejecutar un archivo (.ts) pondremos el siguiente comando en la terminal:
- `ts-node nombre-del-archivo.ts`

En caso de tener el archivo dentro de otras carpetas pondremos lo siguiente:
- `cd nombre-carpeta`
Asi hasta llegar a nuestro archivo donde pondremos: `ts-node archivo.ts`

Ejemplo en el codigo del proyecto:
[fundamentos-Js-a-Ts\fundamentos-basicos\variables> ts-node tipos-datos.ts]

Tambien una manera mas directa de ejecutarlo es presionando las teclas:
- `Ctrl + Alt + n`

O simplemente dar clic en `Run Code` que se encuentra en la parte superior derecha
que tiene forma de un triangulo
