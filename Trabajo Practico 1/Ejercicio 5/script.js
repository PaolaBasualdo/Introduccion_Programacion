/*1. 5. Pídele al usuario mediante `prompt()` que ingrese tres valores numéricos que representen las longitudes de los lados de un triángulo. Valida que los valores ingresados sean números válidos y enteros positivos mayores que 0. Escribe una estructura condicional para determinar si el triángulo es equilátero (todos los lados iguales), isósceles (dos lados iguales), o escaleno (ningún lado igual). Muestra un mensaje amigable y entendible indicando el resultado.*/

let lado1 = parseInt(prompt("Ingrese la longitud de uno de los lados del triangulo: "));
let lado2 = parseInt(prompt("Ingrese la longitud de otro de los lados del triangulo: "));
let lado3 = parseInt(prompt("Ingrese la longitud del ultimo lado del triangulo: "));
if (!isNaN(lado1) && Number.isInteger(lado1) && lado1 > 0 && !isNaN(lado2) && Number.isInteger(lado2) && lado2 > 0 && !isNaN(lado3) && Number.isInteger(lado3) && lado3 > 0) {
    
    if (lado1 === lado2 && lado2 === lado3) {
        alert("El triángulo es equilátero .");
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        alert("El triángulo es isósceles .");
    } else {
        alert("El triángulo es escaleno");
    }
} else {
    alert("Los valores ingresados no son validos");
}
