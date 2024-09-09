/*1. Pídele al usuario mediante `prompt()` que indique su `edad` y asigna el valor a una variable. Luego, identifica si el usuario está habilitado para votar (16 años) y muestra un mensaje que diga "Tienes [edad] años, [estás/no estás] habilitado para votar" mediante un `alert()`, reemplazan do con los valores correspondientes.*/

let edad = parseInt(prompt("Indique su edad: "));
if(!isNaN(edad) && edad>=0 && edad <=105){
    if (edad >= 16) {
        alert("Tienes " + edad +  " años, estás habilitado para votar")
    } else {
         alert("Tienes " + edad +  " años, no estás habilitado para votar") 
    }
} else {
    alert("Ingrese un valor valido")
}
 