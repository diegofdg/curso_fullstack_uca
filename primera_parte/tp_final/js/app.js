/*** Elementos del dom que se guardan en una variable para poder acceder más rápidamente ***/
const sobre_mi_menu = document.getElementById('sobre_mi_menu');
const experiencia_menu = document.getElementById('experiencia_menu');
const educacion_menu = document.getElementById('educacion_menu');
const skills_menu = document.getElementById('skills_menu');
const contacto_menu = document.getElementById('contacto_menu');
const formulario = document.getElementById('formulario');
const inputNombre = document.getElementById('input-nombre');
const inputTelefono = document.getElementById('input-telefono');
const inputEmail = document.getElementById('input-email');
const inputMensaje = document.getElementById('input-mensaje');
const mensaje = document.getElementById('mensaje');
const botonEnviar = document.getElementById('boton-enviar');

/*** Array que guarda todos los elementos del menú para poder recorrerlos y saber en cual se hizo click ***/
const array_menu = [sobre_mi_menu, educacion_menu, experiencia_menu, skills_menu, contacto_menu];

/*** Cuando se termina de cargar el html agrega los eventos escuchadores ***/
document.addEventListener('DOMContentLoaded', agregarEventListeners);

/*** Función que agrega los escuchadores de eventos ***/
function agregarEventListeners() {
    sobre_mi_menu.addEventListener('click' , menuSeleccionado);    
    educacion_menu.addEventListener('click' , menuSeleccionado);    
    experiencia_menu.addEventListener('click' , menuSeleccionado);    
    skills_menu.addEventListener('click' , menuSeleccionado);    
    contacto_menu.addEventListener('click' , menuSeleccionado);
    formulario.addEventListener('submit', enviarFormulario);
}

/*** Función que según el elemento del menu en que se haga click lo muestra resaltado ***/
function menuSeleccionado(e) {
    if(document.body.classList.contains('open')){
        toggleMenuOpen();
    } 
    array_menu.forEach( item => {
        if(item.id == e.target.id) {            
            item.classList.remove('no_active');
            item.classList.add('active');
        } else {
            item.classList.remove('active');
            item.classList.add('no_active');
        }
    });    
}

/*** Función que agrega o quita la clase open según se abre o cierra el menú hamburguesa ***/
function toggleMenuOpen() {
    document.body.classList.toggle("open");
}

/*** Función que envia el formulario previo validarlo ***/
function enviarFormulario(e){
    e.preventDefault();
    validarFormulario();
}

/*** Antes de enviar el mensaje validamos que tenga todos los campos completos ***/
function validarFormulario() {
    if(inputNombre.value == '' || inputTelefono.value == '' || inputEmail.value == '' || inputMensaje.value == '') {
        mensaje.classList.add('error');
        mensaje.classList.remove('exito');          
        mensaje.textContent = 'Debes completar todos los campos';

        setTimeout(()=> {
            mensaje.textContent = '';  
            mensaje.classList.remove('exito');          
            mensaje.classList.remove('error');          
        }, 3000);

    } else {
        mensaje.classList.add('exito');
        mensaje.classList.remove('error');
        mensaje.textContent = 'El mensaje fue enviado correctamente';
        limpiarCampos();
        
        setTimeout(()=> {
            mensaje.textContent = '';
            mensaje.classList.remove('exito');
            mensaje.classList.remove('error');
        }, 3000);
    }
}

function limpiarCampos() {
    inputNombre.value = '';
    inputTelefono.value = '';
    inputEmail.value = '';
    inputMensaje.value = '';
}