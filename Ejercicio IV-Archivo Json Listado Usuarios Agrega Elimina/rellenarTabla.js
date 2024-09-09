import {botonEliminar} from './botonEliminar.js';
export function rellenarTabla(usuarios) {
    const tablaUsuario = document.getElementById("tablaUsuarios");
    usuarios.forEach((usuario, /*index*/) => {
        tablaUsuario.innerHTML += `
        <tr>
            <td>${usuario.nombre}</td>
            <td>${usuario.apellido}</td>
            <td>${usuario.edad}</td>
            <td>${usuario.email}</td>
            <td>${botonEliminar()}</td>
        </tr>
        `;
       // botonEliminar.setAttribute('data-index', index);
    });
    document.querySelectorAll('.eliminar').forEach(boton => {
        boton.addEventListener('click', function() {
        let fila = boton.closest('tr');
        fila.parentNode.removeChild(fila);
            
        });
    
});
};