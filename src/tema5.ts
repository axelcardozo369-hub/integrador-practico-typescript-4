//? Interfaz

interface Telefono {
  marca: string;
  modelo: string;
  precio: number;
  tiene10Gigas: boolean;
}

const celular1: Telefono = {
  marca: "Samsung",
  modelo: "A54",
  precio: 450000,
  tiene10Gigas: true,
};

const celular2: Telefono = {
  marca: "Iphone",
  modelo: "18proMax",
  precio: 1000000,
  tiene10Gigas: false,
};
// Ejemplo de un objeto que NO cumple la interfaz (da error):
// const celularMal: Telefono = {
//   marca: "Apple",
//   modelo: "iPhone 15",
//   precio: "mucho",   // Error: precio debe ser number, no string
// };                   // Error: falta la propiedad tiene10G
console.log("###Interfaces###");
console.log("Telefono 1:", celular1);
console.log("Telefono 2:", celular2);

//? Types

type reloj = {
  marca: string;
  electronico: boolean;
  precio: number;
};

const reloj1 = {
  marca: "casio",
  electronico: false,
  precio: 150000,
};
console.log("#####Types#####");
console.log("Reloj:", reloj1);
//? Cuándo usar cada uno
// interface: conviene para objetos y para heredar con extends
interface TelefonoGamer extends Telefono {
  ventilador: boolean;
}

const gamer1: TelefonoGamer = {
  marca: "Asus",
  modelo: "ROG 8",
  precio: 1200000,
  tiene10Gigas: true,
  ventilador: true, // propiedad nueva, el resto la hereda de Telefono
};

console.log("###Interface con extends###");
console.log("Teléfono gamer:", gamer1);
