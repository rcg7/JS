// Classes

class Producto {
    constructor(nombre, precio, color, marca) {
    this.nombre = nombre;
    this.precio = precio;
    this.color = color;
    this.marca = marca;
    }

    formatearProducto() {
        return `El Producto ${this.nombre} tiene un presio de: $ ${this.precio}`;
    }
} 


const producto2 = new Producto('Monitor Curvo de 49"', 800, 'Negro', 'LG');
const producto3 = new Producto('Laptop', 300, 'Gris', 'ASUS');
const producto4 = new Producto('Movíl', 700, 'Rojo', 'IPhone');
const producto5 = new Producto('Auriculares', 100, 'Blanco', 'SONY');


// Herencia
class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearProducto() {
        return `${super.formatearProducto() } y su ISBN es ${this.isbn}`;
    }

}

const libro = new Libro('JavaScript la Revolución', 120, '893728589432');

console.log(libro.formatearProducto() );

console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);


