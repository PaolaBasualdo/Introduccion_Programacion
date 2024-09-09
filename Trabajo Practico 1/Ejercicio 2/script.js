/*2. Pídele al usuario mediante `prompt()` que ingrese un valor en Metros. Convierte esta longitud a su equivalente en Pies utilizando la fórmula `P = M * (82/25)` y muestra el resultado un `alert()`, formateando el mensaje.*/

let metros = parseFloat(prompt("Ingrese un valor en metros: "));
if (!isNaN(metros) &&  (metros >0)) {
   let pies = metros * (82/25);
   pies = pies.toFixed(2);
   alert (metros + " metros equivalen a " + pies +" pies");
   }
    
else {
    alert("Ingrese un valor valido");
}
 