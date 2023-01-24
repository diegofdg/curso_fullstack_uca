var input_fecha = document.getElementById('input_fecha');
var btn_calcular = document.getElementById('btn_calcular');
var resultado = document.getElementById('resultado');

btn_calcular.addEventListener('click', calcular);

function calcular() {    
    if(validarFecha()) {
        return;
    }

    validarAnios();    
}

function validarFecha() {
    if(input_fecha.value == '') {
        mostrarError();        
        return true;
    }
}

function agregarQuitarVisibilidad(){    
    resultado.classList.remove('oculto');
    resultado.classList.add('visible');
}

function agregarError() {
    resultado.classList.remove('exito');
    resultado.classList.add('error');
}

function agregarExito() {
    resultado.classList.remove('error');
    resultado.classList.add('exito');
}

function validarAnios() {
    var fecha_hoy = new Date().getTime();
    var fecha_nacimiento = new Date(input_fecha.value).getTime();
    var diferencia = (fecha_hoy - fecha_nacimiento)/1000/60/60/24/365;
    var cantidad_anios = Math.trunc(diferencia);

    if(cantidad_anios < 0) {
        mostrarError();
    } else {
        mostrarExito(cantidad_anios);
    }
}

function mostrarError() {
    resultado.innerText = "Ingrese una fecha válida";
    agregarQuitarVisibilidad();
    agregarError();
}

function mostrarExito(cantidad_anios) {
    resultado.innerText = "La persona tiene "+cantidad_anios + " años de edad.";
    agregarQuitarVisibilidad();
    agregarExito();
}