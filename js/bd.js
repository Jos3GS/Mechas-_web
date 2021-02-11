var L_Email = document.getElementById("L_email");
var L_Pass = document.getElementById("L_pass");

var R_Name = document.getElementById("R_mame");
var R_Email = document.getElementById("R_email");
var R_User = document.getElementById("R_user");
var R_Pass = document.getElementById("R_pass");


document.getElementById("Registrar").addEventListener("click", Registro);
document.getElementById("Entrar").addEventListener("click", Login);


function Registro(){
    if (typeof(localStorage) !== "undefined"){
        if(R_Name.value == "" || R_Email.value == "" || R_User.value == "" || R_Pass.value == ""){
            alert("Revise los datos");
        }else{
            localStorage.setItem(R_Email.value, JSON.stringify([R_Pass.value, R_Name.value, R_User.value]));
            alert("Registro Guardado");
        }
        
    }else{
        alert("El Registro no se ha podido completar, Por favor use otro navegador");
    }
}

function Login(){
    if(typeof(localStorage) != "undefined"){
        if(L_Pass.value == JSON.parse(localStorage.getItem(L_Email.value))[0]){
            localStorage.setItem("temp",JSON.parse(localStorage.getItem(L_Email.value))[2]);
            window.location.replace("/Galeria.html");
            alert("LOGIN EXITOSO!");
            
        }else{
            alert("Algo anda malo manito");
        }
    }else{
        alert("No es posible logearte, por favor intenta con otro navegador");
    }
}