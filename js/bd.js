var L_Email = document.getElementById("L_email");
var L_Pass = document.getElementById("L_pass");

var R_Name = document.getElementById("R_mame");
var R_Email = document.getElementById("R_email");
var R_User = document.getElementById("R_user");
var R_Pass = document.getElementById("R_pass");

var  User = [R_Pass, R_Name, R_User];

document.getElementById("Registrar").addEventListener("click", Registro)


function Registro(){
    if (typeof(localStorage) !== "undefined"){
        console.log(User);
        console.log(JSON.stringify(User));
        localStorage.setItem(R_Email, JSON.stringify(User));
        alert("Registro Guardado");
    }else{
        alert("El Registro no se ha podido completar, Por favor use otro navegador");
    }
}