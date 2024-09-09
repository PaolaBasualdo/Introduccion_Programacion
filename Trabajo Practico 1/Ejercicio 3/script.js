/*3. Pídele al usuario mediante `prompt()` que ingrese un valor numérico entre 0 y 100, y guárdalo en una variable llamada `puntuación`. Valida que el valor ingresado sea un número válido. Utiliza una estructura condicional para mostrar en un `alert()` si la puntuación es "Perfecta" (es igual a 100), "Aprobada" (si es mayor o igual a 60) o"Reprobada" (si es menor a 60).
*/

let puntuacion = parseInt(prompt("Ingrese un valor numerico entre cero y cien: "));
if(!isNaN(puntuacion) && puntuacion>=0 && puntuacion<=100){
    if (puntuacion === 100) {
        alert("Perfecta")
    } 
    else if (puntuacion>=60){
        alert("Aprobada")
    }
    else {
        alert("Reprobada") 
    }
} else {
    alert("Ingrese un valor valido")
}
 