/* Arreglos 
    Estructura de Datos
*/

/* Declaracion de Arreglos */

const arreglo =[];
const arreglo2 = new Array();

let lenguajes = ["Javascript","Java","PHP","Python","C#","C++","Scala","Rust","Ruby","Cobol"];

/* forEach Nos sirve para recorrer los elementos de un arreglo */

document.write("<ul>");
lenguajes.forEach(function(lenguaje,index){
    
    document.write(`<li> ${index} - ${ lenguaje}</li>`);
});

document.write("<ul>");


/* Map  crea un nuevo arreglo con los resultados*/

let numeros = Array (2,3,4,27,19,12);

let numeros2= numeros.map(function(numero){
    return numero *2;
});

console.log(numeros);
console.log(numeros2);

