// POO

// Object Literal
const producto = {
    nombre: 'Tablet',
    precio: 500,
}

// Object Constructor
function Producto(nombre, precio, color, marca) {
    this.nombre = nombre;
    this.precio = precio;
    this.color = color;
    this.marca = marca;
}
// Crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function() {
    return `El Producto ${producto.nombre} tiene un presio de: $ ${producto.precio}`;
}

function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}
Cliente.prototype.formatearCliente = function() {
    return `El Cliente ${producto.nombre}$ ${producto.apellido}`;
}


const producto2 = new Producto('Monitor Curvo de 49"', 800, 'Negro', 'LG');
const producto3 = new Producto('Laptop', 300, 'Gris', 'ASUS');
const producto4 = new Producto('Movíl', 700, 'Rojo', 'IPhone');
const producto5 = new Producto('Auriculares', 100, 'Blanco', 'SONY');

const cliente = new Cliente('Juan', 'De la Torre');

console.log(cliente);

function formatearProducto(producto) {
    return `El Producto ${producto.nombre} tiene un producto de: $ ${producto.precio}`;
}


console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);

console.log( formatearProducto(producto2) );
console.log( formatearProducto(producto3) );
console.log( formatearProducto(producto4) );
console.log( formatearProducto(producto5) );



