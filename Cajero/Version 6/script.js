const usuarios = [
    { nombre: "Sofia",
    apellido: "Heredia",
    password: "123", 
    saldo: 900000 },

    { nombre: "Paola", 
    apellido: "Basualdo",
    password: "456", 
    saldo: 100000 },

    { nombre: "Yazmin", 
    apellido: "Juarez",
    password: "890", 
    saldo: 500000 },

    { nombre: "Daniel",
    apellido: "Cuda", 
    password: "312", 
    saldo: 200000 },
];

function login() {
    let nombreCorrecto = false;
    while (!nombreCorrecto) {
        let usuarioIngresado = prompt("Ingrese su nombre de usuario");

        usuarioActual = usuarios.find(usuario => usuario.nombre === usuarioIngresado);
        
        if (usuarioActual) {
            nombreCorrecto = true;
        } else {
            alert("Nombre de usuario incorrecto. Intente nuevamente.");
        }
    }

    let passwordCorrecta = false;
    while (!passwordCorrecta) {
        let passwordIngresada = prompt("Ingrese su contraseña");

        if (usuarioActual.password === passwordIngresada) {
            alert("¡Bienvenido, " + usuarioActual.nombre + "!");
            passwordCorrecta = true;
        } else {
            alert("Contraseña incorrecta. Intente nuevamente.");
        }
    }
}

function extraccion(){
    let bandera = true; 
    while (bandera === true) {
        let retiroStr = prompt("Ingrese el monto que desea retirar"); 
        let retiro = parseFloat(retiroStr); 
        if (!isNaN(retiro) && retiro > 0 && usuarioActual.saldo >= retiro) {
            usuarioActual.saldo -= retiro;
            alert("Retiro exitoso. Su saldo actual es " + usuarioActual.saldo);
            bandera = false;
        } else {
            alert("Monto inválido o fondos insuficientes. Intente nuevamente");
        }
    }
}

function deposito() {    
    let bandera = true; 
    while (bandera === true) {
        let depositoStr = prompt("Ingrese el monto a depositar"); 
        let deposito = parseFloat(depositoStr); 
        if (!isNaN(deposito) && deposito > 0) {
            usuarioActual.saldo += deposito;
            alert("Deposito exitoso. Su saldo actual es " + usuarioActual.saldo);
            bandera = false;
        } else {
            alert("Monto inválido. Intente nuevamente");
        }
    }}

    
    while (true) {
        alert("Bienvenido!");
        login();
        
        while (true) {
            let opcion = parseInt(prompt("Elige una opción\n1 - Extracción\n2 - Depósito\n3 - Salir"));
    
            if (opcion === 1) {
                extraccion();
            } else if (opcion === 2) {
                deposito();
            } else if (opcion === 3) {
                alert("Gracias");
                break;
            } else {
                alert("Opción inválida. Intente nuevamente.");
            }
        }
    }
  

