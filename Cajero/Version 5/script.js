const usuarios = [
    { nombre: "Sofia", password: "123", saldo: 900000 },
    { nombre: "Paola", password: "456", saldo: 100000 },
    { nombre: "Yazmin", password: "890", saldo: 500000 },
    { nombre: "Daniel", password: "312", saldo: 200000 },
];

let usuarioActual;

function login(){
    while (true) {
        let usuarioIngresado = prompt("Ingrese su nombre de usuario");
        let passwordIngresada = prompt("Ingrese su contraseña");
        
        usuarios.forEach(usuario => {
            if (usuario.nombre === usuarioIngresado && usuario.password === passwordIngresada) {
                usuarioActual = usuario;
            }
        });
        
        if (usuarioActual) {
            alert("¡Bienvenido, " + usuarioActual.nombre + "!");
            return;
        } else {
            alert("Usuario o contraseña incorrectos. Intente nuevamente.");
        }
    }
}

function extraccion(){ 
    while (true) {
        let retiroStr = prompt("Ingrese el monto que desea retirar"); 
        let retiro = parseFloat(retiroStr); 
        if (!isNaN(retiro) && retiro > 0 && usuarioActual.saldo >= retiro) {
            usuarioActual.saldo -= retiro;
            alert("Retiro exitoso. Su saldo actual es " + usuarioActual.saldo);
            return;
        } else {
            alert("Monto inválido o fondos insuficientes. Intente nuevamente");
        }
    }
}

login();
extraccion();
