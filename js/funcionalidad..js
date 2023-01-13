

const infoEmail = document.getElementById('infoEmail');
const infoTelefono = document.getElementById('infoTelefono');
const infoDireccion = document.getElementById('infoDireccion'); 
const infoFechaNacimiento = document.getElementById ('infoFechaNacimiento');
const infoNombre = document.getElementById('infoNombre');

//Oculta la información
function ocultarClase(){
    infoNombre.classList.add('ocultar');
        infoDireccion.classList.add('ocultar');
        infoEmail.classList.add('ocultar');
        infoTelefono.classList.add('ocultar');
        infoFechaNacimiento.classList.add('ocultar');
}

//Muestra los datos de InfoNombre al hacer click en iconoPerfil
iconoPerfil.addEventListener('click', function(){
    if(infoNombre.classList.contains('ocultar')){
        ocultarClase();
        infoNombre.classList.remove('ocultar');
    }
});

//Muestra los datos de InfoFechaNacimiento al hacer click en iconoCumpleaños
iconoCumpleaños.addEventListener('click', function(){
    if(infoFechaNacimiento.classList.contains('ocultar')){
        ocultarClase();
        infoFechaNacimiento.classList.remove('ocultar');
    }
});

//Muestra los datos de InfoTelefono al hacer click en iconoTel
iconoTel.addEventListener('click', function(){
    if(infoTelefono.classList.contains('ocultar')){
        ocultarClase()
        infoTelefono.classList.remove('ocultar');
    }
});

//Muestra los datos de InfoDireccion al hacer click en infoUbicacion
iconoUbicacion.addEventListener('click', function(){
    if(infoDireccion.classList.contains('ocultar')){
        ocultarClase();
        infoDireccion.classList.remove('ocultar');
    }
});

//Muestra los datos de infoEmail al hacer click en iconoEmail
iconoEmail.addEventListener('click', function(){
    if(infoEmail.classList.contains('ocultar')){
        ocultarClase();
        infoEmail.classList.remove('ocultar');

    }
});

