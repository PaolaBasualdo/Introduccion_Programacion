

/*Ejercicio 1(Ver0.):Objetivo:
Permita controlar el saldo de una cuenta. El desarrollo deberá definir variables para el nombre del usuario, el saldo de la cuenta y el monto a retirar. Luego,  verificará si el saldo de la cuenta es suficiente para realizar el retiro solicitado.
Entrada: Nombre de Usuario, Saldo de la cuenta, monto a retirar.
Proceso: verificará si el saldo de la cuenta es suficiente para realizar el retiro solicitado. Además de calcular el saldo.
Salida: Si hay saldo suficiente, saldo insuficiente y saldo Final.*/

// Definición del usuario
const usuario = "Paola";
let saldo = 100000;

// Bucle para el proceso de inicio de sesión
while (true) {
    let usuario2 = prompt("Ingrese su nombre de usuario");

    // Verificar si el nombre de usuario es correcto
    if (usuario === usuario2) {
        alert("¡Bienvenido, " + usuario + "!");
        break; 
    } else {
        alert("Usuario incorrecto. Intente nuevamente."); 
    }
}




// Bucle para realizar un retiro
while (true) {
    let retiroStr = prompt("Ingrese el monto que desea retirar");//el ingreso con promp es una cadena
    let retiro = parseFloat(retiroStr); // Convertir la entrada a un número
    

    // Verificar si el saldo es suficiente
    if (!isNaN(retiro) && saldo >= retiro) {
        alert("Retiro exitoso.");
        let saldo_final= saldo - retiro;
        alert("Su saldo actual es "+ saldo_final)
        break;
    } else {
        alert("Monto inválido o fondos insuficientes. Intente nuevamente.");
    }
}




