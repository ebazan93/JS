const carrito =[];

//Definir un producto
const producto ={
  nombre:"Monitor 32 Pulgadas",
  precio: 400
};

const producto2 ={
  nombre:"Celular",
  precio: 800
};

carrito.push(producto);
carrito.push(producto2);

const producto3 ={
  nombre:"Teclado",
  precio: 50
};

carrito.unshift(producto3);

console.table(carrito);

//Eliminar último elemento del Array

carrito.pop();
console.table(carrito);

//Elminar del inicio del array

carrito.shift();
console.table(carrito);

carrito.splice(1,1);