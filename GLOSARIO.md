# Glosario de TypeScript

### Alumno:

_Cardozo Axel_

---

## 1. Interface

Lo que yo entendi de la interface es que es un molde que indica qué propiedades tiene un objeto y de qué tipo es cada una. TypeScript avisa si un objeto no cumple con esa estructura.

```ts
interface Telefono {
  marca: string;
  precio: number;
}

const celular1: Telefono = { marca: "Samsung", precio: 450000 };
```

---

## 2. TypeScript

TypeScript seria el lenguaje de programacion que que está hecho sobre JavaScript solo que es de tipado estático que nos ayuda a poder ver los errores que nosotros hacemos en Javascript de manera rapida y facil antes de ejecutar nuestro codigo

```ts
let edad: number = 20;
// edad = "veinte"; // Error: TypeScript avisa que no es un number
```

## 3. any

Con any acepta cualquier valor y que desactiva la revision de TypeScript, entendi que se recomienda evutar por que esconde los errores que despues aparecen al ejecutar

```ts
let dato: any = "hola";
dato = 25; // TypeScript no avisa nada
```

---

## 4. Parámetro opcional

Es un parámetro de una funcion que se puede pasar o no , ya que utliza el signo ? para ser opcional un valor , si en el caso no pasa equivale a un undefined

```ts
const saludo = (nombre: string, mensaje?: string): string => {
  return mensaje ? `Hola ${nombre}, ${mensaje}` : `Hola ${nombre}`;
};
```

---

## 5. Parámetro por defecto

Seria el parámetro que ya tiene un valor y asignado con =, y si no se pasa al llamar la funcon un valor que ya tiene como asignado

```ts
const saludar = (nombre: string, saludo: string = "Buenas"): string => {
  return `${saludo} ${nombre}`;
};
saludar("Axel"); // "Buenas Axel"
```

## 6. type

El type sirve para ponerle un nombre a un tipo y luego poder reutilizarlo para poder describir objectos

```ts
type Reloj = {
  marca: string;
  precio: number;
};
type CodigoProducto = number | string;
```

---

## 7. Enum

Seria el grupo de valores que son fijos por nombres por ejemplo

```ts
enum estadoPedido {
  pendiente = "en espera.....",
  enviado = "enviado🚗",
  entregado = "entregado😎",
}
const primerPedido: estadoPedido = estadoPedido.pendiente;
```
