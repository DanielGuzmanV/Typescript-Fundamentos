# Fundamentos de TypeScript

Este proyecto contiene ejemplos de fundamentos de TypeScript, desde lo mas basico
hasta temas ligeramente avanzados. Usamos `ts-node` para ejecutar directamente
los archivos `.ts`, sin necesidad de compilar a JavaScript.

---

## 🧰 Requisitos

- [Node.js](https://nodejs.org/) instalado (v18 o superior recomendado)
- [npm](https://www.npmjs.com/)
- Git (opcional, para clonar el repositorio)
- Antes de comenzar, asegurarse de tener instalados las siguientes herramientas (globalmente) Todo esto en la terminal de VS CODE:

```bash
  `npx tsc --version Version 5.8.3`
  `npx ts-node --version v10.9.2`
  Para ambas debe salir la version, si no les sale ir a `Instalacion`
- Igualmente verificar que tengan las dependencias para trabajar con modulos, tanto para ESM y CommonJs 
  `npm list --depth=0` 

  Deberias ver algo como:
  `├── @types/node@22.14.1`
  `├── ts-node@10.9.2`
  `└── typescript@5.8.3`

 todo estara correcto (estos seran localmente, solo en el proyecto)
 y si no los tienen ir a `Instalacion`
```

## ⚙️ Instalacion

Instalacion de Typescript globalmente
- `npm install -g typescript ts-node`

Creamos el archivo de configuracion de Typescript.
En la terminal pondremos el siguiente comando:
- `ts --init`
Esto generara un archivo llamado `tsconfig.json` que luego configuraremos

Instalaremos `ts-node` globalmente
- `npm install -g typescript ts-node`

Instalar las dependencias localmente para usar los modulos:
ESM(export e import)
CommonJS (module.exports y require)
- `npm install --save-dev typescript ts-node @types/node`
(Nos creara una carpeta "node_modules" y un "package.lock.json")

```md
## 🔧 Configuracion

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
  },
  "ts-node": {
    "files": true
  },
  "include": ["fundamentos-Js-a-Ts/**/*"]
}

  Nota: "ts-node" y "include" no se encuentra asi que tendremos que agregarlo de forma manual.
  "include" es para que vea donde estan ubicados los modulos
```

---

## 🚀 Ejecucion

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
