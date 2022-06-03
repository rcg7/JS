// Arreglos o Arrays

const numeros = [10,20,30,40,50];
console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
console.table(meses);

const arreglo = ["Hola", 10, true, "si", null, {nombre: "Juan", trabajo: "Programador"}, [1,2,3,]];
console.log(arreglo);

//Acceder a los valores de unn arreglo
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);



// Conocer la extenison de un arreglo
console.log(meses.length);

meses.forEach( function(numeros){
    console.log(numeros);
})



// Para agregar mas elementos a un arrreglo

numeros.push(60,70,80); // Lo posiciona al final del arreglo

numeros.unshift(-10,20,-30,); // Lo posiciona al principio del arreglo



// Para eliminar mas elementos de un arreglo

numeros.pop(); // Elimina el ultimo elemento del arreglo

numeros.shift(); // Elimina el primer elemento del arreglo



// Para eliminar un elemento central de la lista de arreglos

numeros.splice(2, 1); // Primero se elige cual se quiere eliminar y despues cuantos quieres eliminar desde este



// Rest Operator o Spread Operator

const nuevoArreglo = [...numeros, '1'];
// console.log(nuevoArreglo);