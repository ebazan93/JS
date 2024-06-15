// const meses = ['Enero', 'Febrero', 'Marzo'];

// //Agregar al final del arreglo

// meses.push('Abril');
// meses.push('Mayo');

// console.table(meses);

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