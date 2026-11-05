# Trabajo Integrador N° IV

## TypeScript

### Alumno:

_Cardozo Axel_

---

## Consignas de investigación

### Tema 1: ¿Qué es TypeScript?

**¿Qué es TypeScript y quién lo desarrolla?**

**TypeScript** es un lenguaje de programación que está basado en JavaScript que tiene caracteristicas como el tipado estático, clases y modulos para poder crear programas ya sea confiables y mantenibles, tambien permite en poder detectar errores en tiempo de desarrollo, donde facilita el trabajo en equipo y mejora la productividas en proyectos grandes.

**TypeScript** es desarrollado y mantenido por la empresa de Windows que fué lanzado en el año 2012

**¿Qué diferencias tiene con JavaScript?**

La diferencia que tiene **TypeScript** con **JavaScript** es que TypeScript es de tipo estático, genérico y estructural que a diferencia con Javascript no es eso , sino que es de tipado dinámico .

Otra diferencias seria que TypesScript tiene la sintaxis en orientacion de objectos, mientras que JavaScript no , tambien TypeScript ofrece soporte directo para módulos, mientras que JavaScript trabaja a través de ECMAScript 6

**¿Qué ventajas ofrece?**

**TypeScript** ofrece ventajas como su tipado estático , que significa que los desarrolladores puedan definir tipos de variables ,parámetros y valores de retorno de funciones, y que permite reducir errorres en tiempo de ejecucion al detectar inconsistencias antes de compilar el codigo , tambien está el mejoramiento de legibilidad y documentación del codigo, facilitando el trabajo en equipo. Por ultimo optimiza el rendimiento al poder permiter a los editores de codigo en ofrecer autocompletado y sugerencias más precisas

**¿Cuál es su versión actual?**

La version actual de **TypeScript** es la 7.0.2 que fue lanzada el 19/10/26

### Tema 2: Crear y ejecutar un proyecto

**¿Cómo se instala TypeScript en un proyecto?**

PPara instalar **TypeScript** primero necesitamos tener instalado **Node.js**.
Luego creamos una carpeta para el proyecto (con el nombre que queramos),
entramos a ella e iniciamos el proyecto:

    mkdir mi-proyecto-ts
    cd mi-proyecto-ts
    npm init -y

Después instalamos TypeScript junto con sus herramientas:

    npm i -D typescript @types/node@24 tsx

Por último, creamos la carpeta `src`, donde va el código fuente

**¿Para qué sirve el archivo tsconfig.json?**

El archivo **tsconfig.json** es la configuracion del proyecto que le indica a **TypeScript** donde que archivos forman el proyecto, que tan estricto debe ser al poder verificar tipos de dato y por ultimo de como poder generar codigo JavaScript

**¿Qué hace el comando tsc?**

El comando **tsc** revisa los tipos y genera los archivos de JavaScript

**¿Qué diferencia hay entre ejecutar un archivo con tsc, tsx y node?**

La diferencia clara entre ejecutar un archivo entre estos comandos son que 2 solamente ejecutan (tsx y node) mientras que solo uno se encarga de compilar (tsc)

---

### Tema 3: Tipos básicos

**¿Qué son los tipos string, number y boolean?**

**¿Cómo se declara un array con tipo?**

**¿Qué es un tipo unión?**

**¿Por qué se recomienda evitar any?**

---

### Tema 4: Funciones

**¿Cómo se indican los tipos de los parámetros?**

**¿Cómo se indica el tipo de retorno?**

**¿Qué es un parámetro opcional?**

**¿Qué es un parámetro por defecto?**

---

### Tema 5: Interfaces y type

**¿Qué es una interfaz y para qué sirve?**

**¿Qué es un type?**

**¿Cómo se declara una propiedad opcional?**

**¿Cuándo conviene usar cada uno?**

---

### Tema 6: Enums y tipos literales

**¿Qué es un enum?**

**¿Qué es un tipo literal?**

**¿En qué se parecen y en qué se diferencian?**

**¿En qué situaciones se puede usar cada uno?**

---

## Fuentes consultadas

- https://codica.la/blog/todo-lo-que-debe-saber-el-principiante-sobre-typescript

- https://es.wikipedia.org/wiki/TypeScript

- https://profile.es/blog/que-es-typescript-vs-javascript/

- https://imaginaformacion.com/tutoriales/que-es-typescript

- https://www.versio.io/es/product-release-end-of-life-eol-microsoft-typescript.html

- documento oficial de TL2 que paso el profe Agustin en Classroom

-
