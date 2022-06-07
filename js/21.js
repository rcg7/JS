

// Arrow Functions

const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(5,10);

const aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);

aprendiendo('JavaScript')




//Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

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
meses.forEach( meses => {
    if(meses == 'Marzo') {
        console.log('Marzo si existe');
    }
});

let resultado;

//Some ideal para los arreglos de objetos
resultado = carrito.some( producto => producto.nombre === 'Celular');

//Reduce
resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);

//Filter 
resultado = carrito.filter( producto => producto.precio > 400);

resultado = carrito.filter( producto => producto.precio === 'Celular');

resultado = carrito.filter( producto  => producto.precio !== 'Celular');

console.log(resultado);