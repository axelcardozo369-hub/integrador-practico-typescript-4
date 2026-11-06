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

Para instalar **TypeScript** primero necesitamos tener instalado **Node.js**.
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

Los **String** son las cadenas de texto que se pueden utilizar comillas simples, dobles o reversos

const saludo1: string = "hola"

const saludo2: string = 'hola'

const saludo3: string = `hola`

Los **number** son los tipos de datos de forma numerico que representan los enteros y decimales por ejemplo

const entero: number = 1;

const decimal: number = 1.5

Los **booleam** son los verdaderos y falsos

const verdadero: boolean = true

const falso: boolean = false

**¿Cómo se declara un array con tipo?**

Para declarar un **array** podemos hacerlo de 2 formas , la primera e indicando el tipo de elementos del array y añadiendo un operador []

let miarray: number[] = [1,2,3,4,5];

La segunda forma seria en definir el array mediante en la clase Array , siguiendo con la siguiente estructura:

let otroarray: Array = [1,2,3,4,5];

**¿Qué es un tipo unión?**

El tipo **unión** es una forma de declarar un objecto que podria ser mas de un tipo

Para usar la unión de tipos basta con separar los tipos de datos con un pipe |, de la siguiente manera:

let nombreVariable: tipoA | tipoB | tipoN = valor;

Otros ejemplos:

let id:number | string = 10

id acepta tanto valores numméricos como cadenas de texto

led id: number | string ="10"

También podemos usar unión de tipos en arreglos:

const arrelgo:(number | string)[] = [1,2,3, "hola mundo"]
**¿Por qué se recomienda evitar any?**

Evitar **any** se recomienda por que desactiva las comprobaciones de tipos y que oculta errores que el compilador podria detectar. Tambien usar any convierte el compilador en complice de errores que aparecen en produccion

### Tema 4: Funciones

**¿Cómo se indican los tipos de los parámetros?**

Para poder indicar los tipos de parámetros se utiliza la sintaxis nombre: tipo , escrita despues de cada parámetro dentro de los parentesis de la funcion por ejemplo :

function sumar(a: number, b: number): number {
return a + b;
}

    acá a y b son parámetros de tipo number . El number que está despues de los parentesis indica tipo del valor que devuelve la funcion

**¿Cómo se indica el tipo de retorno?**

El tipo de retorno se indica justo antes de la llave de la lalve de apertura del cuerpo de la funcion. Typescript valida internamente qye todos los caminos de la ejecucion de la funcion if/else,switch devuelvan un valor que coincida con el tipo declarado

function esMayorDeEdad(edad: number): boolean {

if (edad >= 18) {

return true;

}

return false; // Si se omite este return, TypeScript arrojará un error
}

**¿Qué es un parámetro opcional?**

Un parámetro opcional seria un mecanismo formal que introduce TypeScript para poder permitir flexibilidad sin perder la seguridad del tipado estático

**¿Qué es un parámetro por defecto?**

Una alternativa al comportamiento predeterminado de JavaScript, donde si no pasas un argumento, la variable toma automáticamente el valor undefined

---

### Tema 5: Interfaces y type

**¿Qué es una interfaz y para qué sirve?**git

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

- https://normeno.medium.com/tipos-de-datos-en-typescript-d67482f2da6c

- https://lineadecodigo.com/typescript/arrays-en-typescript/

- https://dev.to/duxtech/fundamentos-de-typescript-7-union-de-tipos-y-type-alias-4o5e

- https://www.dominicode.com/posts/dejar-de-usar-any-en-typescript

- https://esdocu.com/typescript/funciones-en-typescript

- https://esdocu.com/typescript/funciones-en-typescript
