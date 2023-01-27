/*** Elementos del dom que se guardan en una variable para poder acceder más rápidamente ***/
const menuLinks = document.querySelectorAll('.navbar-menu a[href^="#"]');
const formulario = document.getElementById('formulario');
const inputNombre = document.getElementById('input-nombre');
const inputTelefono = document.getElementById('input-telefono');
const inputEmail = document.getElementById('input-email');
const inputMensaje = document.getElementById('input-mensaje');
const mensaje = document.getElementById('mensaje');
const botonEnviar = document.getElementById('boton-enviar');

/*** Cuando se termina de cargar el html agrega los eventos escuchadores ***/
document.addEventListener('DOMContentLoaded', agregarEventListeners);

/*** Función que agrega los escuchadores de eventos ***/
function agregarEventListeners() {
    formulario.addEventListener('submit', enviarFormulario);
    menuLinks.forEach( menuLink => {
        menuLink.addEventListener("click", menuSeleccionado);
    });
}
 
/*** Función que quita la clase open cuando el menú responsive se encuentra abierto y se hace click en una opción ***/
function menuSeleccionado() {
    if(document.body.classList.contains('open')){
        toggleMenuOpen();
    }
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

/*** Función para limpiar los campos del formulario una vez que ha sido enviado correctamente ***/
function limpiarCampos() {
    inputNombre.value = '';
    inputTelefono.value = '';
    inputEmail.value = '';
    inputMensaje.value = '';
}

/*** Función para agregar el IntersectionObserver a fin de detectar en que sección de la página nos encontramos ***/
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const id = entry.target.getAttribute("id");
            const menuLink = document.querySelector(`.navbar-menu a[href="#${id}"]`);
  
            if (entry.isIntersecting) {
                document.querySelector(".navbar-menu a.active").classList.remove("active");
                menuLink.classList.add("active");
            }
        });
    },
    {
        rootMargin: "-30% 0px -70% 0px"
    }
);

/*** Recorremos todos los elementos del menú para agregarle el IntersectionObserver ***/
menuLinks.forEach( item => {
    const hash = item.getAttribute("href");
    const target = document.querySelector(hash);
    if (target) {
        observer.observe(target);
    }
});