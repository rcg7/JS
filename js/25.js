const carrito = [
     {nombre: 'Monitor', precio: 500},
     {nombre: 'Celular', precio:700},
     {nombre: 'Tablet', precio: 300},
     {nombre: 'Bocinas', precio: 50},
     {nombre: 'Laptop', precio: 800},
     {nombre: 'Teclado', precio: 100},
     {nombre: 'Audifonos', precio: 200},
     {nombre: 'Television', precio: 900},
    
 ];

 // forEach
 carrito.forEach( producto => console.log(producto.nombre));

 // map
 const arreglo2 = carrito.map( producto => `${producto.nombre} - ${producto.precio}`);

 console.log(arreglo2);
 