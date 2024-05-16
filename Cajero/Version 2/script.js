/*Validación del monto ingresado: Antes de continuar con la verificación del saldo y
el retiro, necesito una validación para asegurarse de que el monto ingresado por
el usuario sea un número válido y mayor que cero.
Mensaje para monto inválido: Si el usuario ingresa un monto inválido (por ejemplo,
un valor no numérico o un valor negativo), se muestra un mensaje indicando que
se debe ingresar un monto válido.
Mensajes más informativos: Mejorar los mensajes mostrados al usuario para
brindar una retroalimentación más clara sobre el resultado del retiro. Esto incluye
mensajes específicos para casos de saldo insuficiente y éxito en el retiro, así
como la indicación del saldo disponible en caso de saldo insuficiente.*/
const usuario = "Paola";
let saldo = 5000; 
let retiroStr = prompt("Ingrese el monto que desea retirar"); // El ingreso con prompt es una cadena
let retiro = parseFloat(retiroStr); // Convertir la entrada a un número

if (!isNaN(retiro) && retiro > 0 && saldo >= retiro) {
    saldo -= retiro;
    alert("Retiro exitoso. Su saldo actual es " + saldo);        
} else {
    alert("Monto inválido o fondos insuficientes. Su saldo actual es " + saldo);
}

  