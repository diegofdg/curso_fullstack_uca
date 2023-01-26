const sobre_mi_menu = document.getElementById('sobre_mi_menu');
const educacion_menu = document.getElementById('educacion_menu');
const experiencia_menu = document.getElementById('experiencia_menu');
const skills_menu = document.getElementById('skills_menu');
const contacto_menu = document.getElementById('contacto_menu');

const array_menu = [sobre_mi_menu, educacion_menu, experiencia_menu, skills_menu, contacto_menu];

document.addEventListener('DOMContentLoaded', agregarEventListeners);

function agregarEventListeners() {
    sobre_mi_menu.addEventListener('click' , menuSeleccionado);    
    educacion_menu.addEventListener('click' , menuSeleccionado);    
    experiencia_menu.addEventListener('click' , menuSeleccionado);    
    skills_menu.addEventListener('click' , menuSeleccionado);    
    contacto_menu.addEventListener('click' , menuSeleccionado);
}

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

const toggleMenuOpen = () => document.body.classList.toggle("open");