

/*Interactividad: necesito que solicite al usuario ingresar el
monto a retirar, lo que hace que el programa sea más
interactivo y adaptable a diferentes situaciones.(prompt)
Retroalimentación: necesito proporcionar.
retroalimentación al usuario, informándole si el retiro se
realizó con éxito o si el saldo es insuficiente.(alert).*/
// Definición de variables
const usuario = "Paola";
let saldo =5000; 
let retiroStr = prompt("Ingrese el monto que desea retirar");//el ingreso con promp es una cadena
let retiro = parseFloat(retiroStr); // Convertir la entrada a un número
if (saldo >= retiro) {
    saldo-=retiro;
    alert("Retiro exitoso. Su saldo actual es " + saldo);        
} else {
        alert("Monto inválido o fondos insuficientes. Su saldo actual es  " + saldo );
    }

    