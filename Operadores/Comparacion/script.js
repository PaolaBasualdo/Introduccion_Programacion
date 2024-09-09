/*Ejercicio: desarrolle el código que solicite al usuario ingresar dos números y luego realice las siguientes operaciones aritméticas: suma,resta, multiplicación y división. Muestra los resultados en la consola de manera clara.*/

let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
let numero3 = parseFloat(prompt("Ingrese el tercer número:"));

let mayor = numero1;

if (numero1>numero2 && numero1>numero3) {
    alert("El " + numero1 + " es el numero mayor");  
}

if (numero2>numero1 && numero2>numero3){
    alert("El " + numero2 + " es el numero mayor");  
}

if (numero3>numero1 && numero3>numero2){
    alert("El " + numero3 + " es el numero mayor");  
}




