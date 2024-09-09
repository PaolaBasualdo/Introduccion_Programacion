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
    if (!isNaN(retiro) && retiro > 0 && saldo >= retiro) {
        saldo -= retiro;
        alert("Retiro exitoso. Su saldo actual es " + saldo);        
        break;
    } else {
        alert("Monto inválido o fondos insuficientes. Intente nuevamente");
    }
    
}