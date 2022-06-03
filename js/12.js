//"use strict"; // Correr JS en modo estricto
// Objetos


const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio :300,
    disponible: true,
}

// Object.freezer(producto); // No te permite agregar ni eliminar ni modificar
Object.seal(producto); // Si te permite modificar

producto.imagen = 'imagen.jpg';

delete producto.precio;




console.log(producto);