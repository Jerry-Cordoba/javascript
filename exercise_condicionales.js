alert ("excercise condicionales Cargo de manera correcta");

/* Preguntar al usuiario su edad, despúes hacer una condional if con la siguientes situaciones,
si el usuario es mayor de 18 y menor de 29 años mostrar mensaje
!Felicidadse has sido aceptado en el bootcamp de Generation¡ , en caso contrario mostar
el emsnaje Lo sentimos no cumples con los requistos del programa*/

edad = prompt("¿Cual es tu edad?");

if(edad >= 18 && edad<=29){ 
    console.log("¡Felicidades! has sido aceptado en el bootcamp de Generation");
    document.write("¡Felicidades! has sido aceptado en el bootcamp de Generation"); 
}else{
    console.log("Lo sentimos no cumples con los requistos del programa");
    document.write("Lo sentimos no cumples con los requistos del programa");
}