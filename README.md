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
- `tsc --init`
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


---
## Configuracion: Manipulacion del DOM

### 1. `tsconfig.json` global (raiz de `fundamentos-Js-a-Ts`)

Se configuro para ignorar algunas carpetas con el fin de evitar conflictos
entre el proyecto general y los subproyectos

```json
{  
  "compilerOptions":{
    // Opciones globales
  },
  "ts-node": {
    "files": true
  },
  "include": ["fundamentos-Js-a-Ts/**/*"],
  "exclude": [
    "node_modules",
    "fundamentos-intermedios/manipulacion-dom/manejo-DOM-*"
  ]
}
```
### 2. Creacion de archivos
Iremos a la carpeta `fundamentos-intermedios/manipulacion-dom` y crearemos una carpeta nueva llamada:`manejo-DOM-1`

Dentro de esta carpeta crearemos los siguientes archivos:
- `script.ts `
- `index.html`
- `style.css`

Para crear el `tsconfig.json` verificamos que estamos ubicados en `manejo-DOM-1`
y en la terminal pondremos: `tsc --init`
Esto generara un archivo llamado: `tsconfig.json`

### 3. Estructura de manipulacion del DOM

```bash
fundamento-Js-a-Ts/
│
├── fundamentos-intermedios/
│   └── manipulacion-dom/
│       └── manejo-DOM-1/
│           ├── script.ts
│           ├── index.html
│           ├── style.css
│           └── tsconfig.json
```

### 4. Configuracion del tsconfig.json(local) manejo-DOM-1

la configuracion de `tsconfig.json` dentro de la carpeta `manejo-DOM-1` sera la siguiente:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",     
    "rootDir": "./",          
    "esModuleInterop": true, 
    "forceConsistentCasingInFileNames": true
  },
  "include": ["./script.ts"]
}
```
### 5. Compilacion del proyecto Typescript

Una vez configurado, en la terminal pondremos el siguiente comando, antes
verificar que estemos ubicados en: `fundamentos-intermedios\manipulacion-dom\manejo-DOM-1`

```bash
tsc
```
Esto nos creara la carpeta `\dist` con el archivo `script.js.`

💡`Nota:` 
Cada que se escriba codigo nuevo en Typescript, ejecutaremos nuevamente el comando `tsc` en la terminal

Pero si queremos que compile automaticamente cada vez que se guarde el archivo .ts podemos usar:

```bash
tsc --watch
```

### 6. Consejo final

En el archivo `index.html` no pondremos 
```bash
<script src="script.ts"></script>
```
Esto no funcionaria, se tendra que poner de esta manera:

```bash
<script src="dist/script.js"></script>
```

Con esto cada codigo que escribamos en `script.ts` ira direcamente a la ubicacion
`dist/script.js` y esto ira directo al html, donde si podra ejecutarse

🔍`Extra`
- Cada carpeta `manejo-DOM-x` tendra su propio `tsconfig.json`
- El archivo tsconfig.json global debe excluirlas para evitar errores y conflictos 
  de compilacion en el proyecto general (cosa que ya hicimos en el punto 1)
