document.getElementById("btn__Registrarse").addEventListener("click", registro);
document.getElementById("btn__iniciar_sesion").addEventListener("click", login);
window.addEventListener("resize", anchoPagina);


var formulario_login = document.querySelector(".formulario__login");
var formulario_registro = document.querySelector(".formulario__registro");
var contenedor_login_registro = document.querySelector(".contenedor__login_registro");
var caja__trasera_login = document.querySelector(".caja__trasera_login");
var caja__trasera_registro = document.querySelector(".caja__trasera_registro");


function anchoPagina(){
    if(window.innerWidth > 850){
        caja__trasera_login.style.display ="block";
        caja__trasera_registro.style.display ="block";
    }else{
        caja__trasera_registro.style.display="block";
        caja__trasera_registro.style.opacity="1";
        caja__trasera_login.style.display="none";
        formulario_login.style.display ="block";
        formulario_registro.style.display="none";
        contenedor_login_registro.style.left ="0px";
    }
}

anchoPagina();

function registro(){
    if(window.innerWidth > 850){
        formulario_registro.style.display = "block";
        contenedor_login_registro.style.left = "410px";
        formulario_login.style.display = "none";
        caja__trasera_registro.style.opacity = "0";
        caja__trasera_login.style.opacity = "1";
    }else{
        formulario_registro.style.display = "block";
        contenedor_login_registro.style.left = "0px";
        formulario_login.style.display = "none";
        caja__trasera_registro.style.display = "none";
        caja__trasera_login.style.display = "block";
        caja__trasera_login.style.opacity = "1";
    }
}

function login(){

    if(window.innerWidth > 850){
        formulario_registro.style.display = "none";
        contenedor_login_registro.style.left = "10px";
        formulario_login.style.display = "block";
        caja__trasera_registro.style.opacity = "1";
        caja__trasera_login.style.opacity = "0";
    }else{
        formulario_registro.style.display = "none";
        contenedor_login_registro.style.left = "0px";
        formulario_login.style.display = "block";
        caja__trasera_registro.style.display = "block";
        caja__trasera_login.style.display = "none";
    }
}

