

let num1 = parseInt(prompt("ingresa un numero"));

/* NaN= Not a Number */

while(isNaN(num1)){
    num1 = parseInt(prompt("ingresa un numero"));
}


const num1 = parseInt(prompt("ingresa un numero"));

do {
    document.write(`<p>El numero introducido es: ${num1} </p>`);
    num1 = parseInt(prompt("ingresa un numero"));
    
} while (num1>5);s