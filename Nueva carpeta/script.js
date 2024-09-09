//OBJETO
/*const persona = {
    nombre:'Carlos',
    edad: 27,
    correo: 'correo@hotmail.com',
    suscripciones:{
        web: true,
        correo: true,
    },
    coloresFavoritos: ["rojo", "verde"],
    saludo: function(){
        alert('Hola');
    },

}
persona.pais = 'Peru';
console.log(persona);
console.log(`La persona es ${persona.nombre}, tiene ${persona.edad} y es de ${persona.pais}.`);
*/
//FUNCIONES
/*function saludo (){
    alert("Hola!")
}*/
//SCOPE
/*var nombre ='Carlos';
//console.log(nombre);

const saludo = (nombre)=>{
    console.log(`Hola ${nombre}!`)
    nombre = "Arturo"
}
saludo(nombre);*/
var numero =1;//fuera de la funcion
var obtenerNumeroLetras = (nombre) =>{
    var numero = nombre.length
    console.log(`${nombre} tiene ${numero} letras`);
};
obtenerNumeroLetras('Paola');
console.log(numero);





