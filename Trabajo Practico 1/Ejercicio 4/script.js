/*4. Pídele al usuario mediante `prompt()` que ingrese un valor numérico entre 1 y 7, y guarda en una variable llamada `diaSemana` su equivalente en palabras (1 == lunes, 2 == martes, etc). Valida que el valor ingresado sea un número válido. Utiliza una declaración `switch` para mostrar un mensaje amigable y entendible, que indique si es un "Día laboral" o "Fin de semana" en función del valor de `diaSemana`.*/

let diaSemana = parseInt(prompt("Ingrese un valor numérico entre 1 y 7: "));
if (!isNaN(diaSemana) && diaSemana >= 1 && diaSemana <= 7) {
    switch (diaSemana) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            alert("Día Laborable");
            break;
        case 6:
        case 7:
            alert("Fin de Semana");
            break;
    }
} else {
   alert("Ingrese un valor válido entre 1 y 7");
}
