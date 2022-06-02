// String o Cadena de Texto

const producto = 'Monitor de 20"';
const tweet = 'Aprendiendo Java Script con el curso de Desarrollo Web Completo';
const producto2 = 'Monitor de HD';
const email = 'correo@loquesea.com';

const producto4 = String("Monitor de 20 Pulgadas"); // No son muy comunes
const producto3 = new String("Monitor de 50 Pulgadas");// No son muy comunes

// length es para la extension
console. log(producto)
console. log(producto2)
console. log(producto.length)// Te dice cuantos caracteres te quedan por escribir
console. log( typeof producto2)// No son muy comunes
console. log( typeof producto3)//No son muy comunes

// IndexOf
console.log(tweet.indexOf('JavaScript'));
console.log(producto2.indexOf('tablet'));
console.log(email.indexOf('@'));


//Includes (retorna true o false)
console.log(tweet.includes('JavaScript'));
console.log(producto2.includes('Tablet'));

