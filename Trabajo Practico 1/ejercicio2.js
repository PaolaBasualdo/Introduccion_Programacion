// Pídele al usuario mediante `prompt()` que ingrese un valor en Metros. Convierte esta
// longitud a su equivalente en Pies utilizando la fórmula `P = M * (82/25)` y muestra el
// resultado un `alert()`, formateando el mensaje.

let metros = prompt ("Ingrese una longitud en Metros");

metros = parseFloat (metros);

if (isNaN(metros) || metros <= 0){
    alert(`Valor incorrecto, por favor ingresa un número mayor que 0`);
} else{

let pies = metros * (82/25);

alert (metros + "  metros equivalen a " + pies + " pies");
}