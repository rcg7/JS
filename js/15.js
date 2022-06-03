const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

constcarrito = [
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
meses.forEach(function(meses) {
    if(meses == 'Marzo') {
        console.log('Marzo si existe')
    }
});



// Includes
let resultado = meses.includes('Diciembre');



//Some ideal para los arreglos de objetos
// resultado = carrito.some(function(producto) {
//     return producto.nombre === 'Celular PRO'
// });



//Reduce
// resultado = carrito.reduce(function(total, producto){
//     return total + producto.precio
// }, 0);



//Filter 
// resultado = carrito.filter(function(producto){
//     return producto.precio > 400
// });

// resultado = carrito.filter(function(producto){
//     return producto.precio === 'Celular'
// });

// resultado = carrito.filter(function(producto){ // Mostrar todos lo que no son celular
//     return producto.precio !== 'Celular'
// });

console.log(resultado);