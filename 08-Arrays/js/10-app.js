const carrito = [
  {nombre:'Monitor 27 pulgadas', precio:500},
  {nombre:'Television', precio:100},
  {nombre:'Tablet', precio:200},
  {nombre:'Audifonos', precio:300},
  {nombre:'Teclado', precio:400},
  {nombre:'Celular', precio:700},
]

//map crea un nuevo arreglo 
carrito.map(function(producto) {
  console.log(`${producto.nombre} - Precio: ${producto.precio}`)
});

carrito.forEach(function(producto) {
  console.log(`${producto.nombre} - Precio: ${producto.precio}`)
});