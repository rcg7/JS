// Objetos


const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio :300,
    disponible: true,
}

// Agregar nuevas propiedades
producto.imagen = 'imagen.jpg';

// Eliminar propiedades
delete producto.disponible;

// console.log(producto);

// Destruturing
const{precio, nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);