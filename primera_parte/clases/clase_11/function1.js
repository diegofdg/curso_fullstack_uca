

var numero1 = 3;
var numero2 = 4;

/*
var resultado = numero1 + numero2;
console.log("La suma de numero1 + numero2 es :"+resultado);
*/

/* Declaracion o 
definicion de la funcion saludar 
*/
function saludar() {
    console.log("Hola, como estas?");
}

//Invocamos a la funcion saludar
//saludar();

function saludar_v2(nombre) {

    if (nombre == '') {
        //alert("Debe ingresar un nombre");
        console.log("Debe ingresar un nombre");
        document.getElementById("error").innerText = "Debe ingresar un nombre";
        //document.getElementById("error").classList.add("visible");
        document.getElementById("error").classList.remove("oculto");
        document.getElementById("error").style.border = "1px solid red";
    } else {
        console.log("Hola "+nombre+", cuántos años tenés?");
        document.getElementById('nombre_usuario').innerHTML = nombre;
        //Cambiar el estilo del h1 con JS
        document.getElementById("titulo").classList.add("visible");
        document.getElementById("error").classList.add("oculto");
    }
}

/*
function validadSiEsMayor(edad) {

    if (edad > 10) {
        console.log("Es mayor de edad");
    } else {
        console.log("Es menor de edad");
    }
}

validadSiEsMayor(12);
*/