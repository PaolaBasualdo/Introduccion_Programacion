/*Desarrolle al código que verifique si un número
ingresado por el usuario es positivo y par. Muestra el
resultado en la consola.*/

let numero = parseFloat(prompt("Ingrese un número:"));

if (isNaN(numero)) {
    alert("El valor ingresado no es un número válido.");

} else if (numero > 0 && numero % 2 === 0) {
    alert("El número es positivo y par.");
    
} else {
    if (numero <= 0) {
        alert("El número no es positivo.");
    }
    if (numero % 2 !== 0) {
        alert("El número no es par.");
    }
}
