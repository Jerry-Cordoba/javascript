
let sum=0, prom, cont=0, num;

/* 
do{
    num = parseInt(prompt("ingresa un numero"));
    if(num>0){
        cont ++;
        sum = sum+num;
    }
} while(num>=0);
prom=sum/cont;
document.write("Numeros validos introducidos: " + cont);
document.write("<br> La suma es: " + sum);
document.write("<br> El promedio es: " + prom); */

num = parseInt(prompt("ingresa un numero"));
while(num>=0){
    cont ++;
    sum = sum+num;
    num = parseInt(prompt("ingresa un numero"));
}

prom=sum/cont;
document.write("Numeros validos introducidos: " + cont);
document.write("<br> La suma es: " + sum);
document.write("<br> El promedio es: " + prom);