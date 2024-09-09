
const usuario = {
    nombre: "Paola",
    saldo: 100000
};

function login(){
    while (true) {
        let usuarioIngresado = prompt("Ingrese su nombre de usuario");
    
        if (usuario.nombre === usuarioIngresado) {
        alert("¡Bienvenido, " + usuario.nombre + "!");
        return;
        } else {
        alert("Usuario incorrecto. Intente nuevamente.");
        }
    }
}
function extraccion(){ 
    while (true) {
        let retiroStr = prompt("Ingrese el monto que desea retirar"); 
        let retiro = parseFloat(retiroStr); 
        if (!isNaN(retiro) && retiro > 0 && usuario.saldo >= retiro) {
            usuario.saldo -= retiro;
            alert("Retiro exitoso. Su saldo actual es " + usuario.saldo);
            return;
        } else {
            alert("Monto inválido o fondos insuficientes. Intente nuevamente");
    }
}
}
login()

extraccion()