let num = parseInt(prompt("ingresa un numero"));
document.write("<h1> Divisores del numero "+ num+"</h1>");

for(var i=1;i<=num;i++){
    if(num%i===0){
        document.write("<br> "+i+" es divisor de "+num);
    }
}