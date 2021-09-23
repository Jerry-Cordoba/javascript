let num1 = parseInt(prompt("Ingrese la primer cantidad"));
let num2 = parseInt(prompt("Ingrese la segunda cantidad"));

if(num2<num1){
    document.write("<br>La Suma de "+num1+" + "+num2+" es: ",a+b);
    document.write("<br>La Resta de "+num1+" - "+num2+" es: ",a-b);
}else{
    if(num2==0){
        document.write("<br>La Divicion de "+num1+" / "+num2+" esta indefinida");
    }else{
    document.write("<br>La Divicion de "+num1+" / "+num2+" es: ",a/b);
    }

}