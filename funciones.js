alert("Funciones Correctamente Vinculado");

/*Funcion que recibe 2 parametros
y le asigna el valor de la suma a una variable global*/
function suma(num1, num2){
    resul_sum = num1 + num2 ;
}

/*Funcion que recibe 2 parametros
crea una variable local y le asigna el valor de la diferencia de los parametros
y retorna el valor de esa variable*/
function resta (num1, num2){
    let resultado = num1 - num2 ;
    return resultado;
}

/*Funcion que recibe 2 parametros
y retorna el valor de la multiplicacion de entre parametros*/
function multiplicacion(num1, num2){
    return num1 * num2 ;
}

/*Funcion que recibe 2 parametros
y retorna el valor de la divicion*/
function divicion(num1, num2){
    return num1 / num2 ;
}

//recibe valores desdes funciones
function muestra(res,multi,div){
    document.write("<br>La suma es " + resul_sum);
    document.write("<br>La resta es " + res);
    document.write("<br>La multiplicacion es "+ multi);
    document.write("<br>La divicion es " + div);
}
var resul_sum;
a = parseInt(prompt("Ingrese la primer cantidad"));
b = parseInt(prompt("Ingrese la segunda cantidad"));

suma(a,b);
muestra(resta(a,b),multiplicacion(a,b),divicion(a,b));