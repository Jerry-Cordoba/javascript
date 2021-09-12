// Fecha 6-Sep-21
alert("Ejercicio 2 Correctamente Vinculado");
/*
2.- Crear un programa que solicite 2 números por prompt. Mandar esos dos valores
a una función por parámetros para realizar las operaciones aritméticas
básicas( suma, resta, multiplicación y división), y mostrar el resultado.
Nota: El resultado puede ser mostrado por consola o por html.
*/

function opAritmeticas (a,b){
    document.write("<br>La Suma de "+num1+" + "+num2+" es: ",a+b);
    document.write("<br>La Resta de "+num1+" - "+num2+" es: ",a-b);
    document.write("<br>La Multiplicacion de "+num1+" * "+num2+" es: ",a*b);
    if(num2==0){
        document.write("<br>La Divicion de "+num1+" / "+num2+" esta indefinida");
    }else{
    document.write("<br>La Divicion de "+num1+" / "+num2+" es: ",a/b);
    }
}

num1 = parseInt(prompt("Ingrese la primer cantidad"));
num2 = parseInt(prompt("Ingrese la segunda cantidad"));

opAritmeticas(num1,num2);