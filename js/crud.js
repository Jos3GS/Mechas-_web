document.getElementById("Subir").addEventListener("click",SubirFoto);
document.getElementById("Borrar").addEventListener("click",AgregarBotones);

document.getElementById("perfil").textContent = localStorage.getItem("temp");



var numero = 1;
function SubirFoto(){
    document.getElementById("ArchivoCargado").click();
}

function AgregarBotones(){
    let i=1;
    var button;
    
   do{
       try{
        button = document.getElementById("btn"+i);
        button.style.display = "unset";
        i++;
       }catch(Excepion){
           break;
       }
   }while(true);
    
}
window.addEventListener("load",function(){
    document.querySelector("#ArchivoCargado").addEventListener("change",function(){
        const lector = new FileReader();
        lector.addEventListener("load",() => {
            
            if(localStorage.getItem("Numero") == null){
                localStorage.setItem(numero, JSON.stringify([lector.result, localStorage.getItem("temp")]));
                numero++;
                localStorage.setItem("Numero", numero);

            }else if(localStorage.getItem("Numero") != null){
                numero = localStorage.getItem("Numero");
                localStorage.setItem(numero, JSON.stringify([lector.result, localStorage.getItem("temp")]));
                numero++;
                localStorage.setItem("Numero",numero);
            }
            
            loaded();
            
        });
            lector.readAsDataURL(this.files[0]);
        
        }
    );
});

function loaded(){
    var numeron = localStorage.getItem("Numero");
    location.reload();
    for(var i=1; i<numeron; i++){
        BorrarItems(i);
    }
    for(var i=1; i<numeron; i++){
        try{
            document.getElementById("ima"+i).addEventListener("click",nada);
            document.getElementById("ima"+i).removeEventListener("click");
            break;
        }catch(Exception){
            const recentImageDataUrl = JSON.parse(localStorage.getItem(i))[0];
            var divi = document.createElement("div");
            divi.setAttribute("class", "card");
            divi.setAttribute("id","ima"+(i));
            divi.setAttribute("Autor",JSON.parse(localStorage.getItem(i))[1]);
            

            var Imag = document.createElement("img");
            Imag.setAttribute("src",recentImageDataUrl);
            Imag.setAttribute("alt","");

            var brr = document.createElement("br");

            var pp = document.createElement("p");
            pp.textContent = "Subido por: ";

            var aa = document.createElement("a");
            aa.textContent = JSON.parse(localStorage.getItem(i))[1];

            var buttonn = document.createElement("button");
            buttonn.setAttribute("id","btn"+i);
            buttonn.setAttribute("onclick","eliminar("+i+");");
            buttonn.setAttribute("class","btn-Borrar");
            buttonn.textContent = "Eliminar";

            var contenedor = document.getElementById("conten");

            contenedor.appendChild(divi);

            divi.insertAdjacentElement("beforeend", Imag);
            divi.insertAdjacentElement("beforeend", brr);
            divi.insertAdjacentElement("beforeend", pp);
            divi.insertAdjacentElement("beforeend", aa);
            divi.insertAdjacentElement("beforeend", brr);
            divi.insertAdjacentElement("beforeend", buttonn);

            
        }
    }
    
}

document.addEventListener("DOMContentLoaded", () =>{
    var numeron = localStorage.getItem("Numero");
    for(var i=1; i<numeron; i++){
        try{
            document.getElementById("ima"+i).addEventListener("click",nada);
            document.getElementById("ima"+i).removeEventListener("click");
            break;
        }catch(Exception){
            const recentImageDataUrl = JSON.parse(localStorage.getItem(i))[0];
            var divi = document.createElement("div");
            divi.setAttribute("class", "card");
            divi.setAttribute("id","ima"+(i));
            divi.setAttribute("Autor",JSON.parse(localStorage.getItem(i))[1]);
            

            var Imag = document.createElement("img");
            Imag.setAttribute("src",recentImageDataUrl);
            Imag.setAttribute("alt","");

            var brr = document.createElement("br");

            var pp = document.createElement("p");
            pp.textContent = "Subido por: ";

            var aa = document.createElement("a");
            aa.textContent = JSON.parse(localStorage.getItem(i))[1];

            var buttonn = document.createElement("button");
            buttonn.setAttribute("id","btn"+i);
            buttonn.setAttribute("class","btn-Borrar");
            buttonn.setAttribute("onclick","eliminar("+i+");");
            buttonn.textContent = "Eliminar";

            var contenedor = document.getElementById("conten");

            contenedor.appendChild(divi);

            divi.insertAdjacentElement("beforeend", Imag);
            divi.insertAdjacentElement("beforeend", brr);
            divi.insertAdjacentElement("beforeend", pp);
            divi.insertAdjacentElement("beforeend", aa);
            divi.insertAdjacentElement("beforeend", brr);
            divi.insertAdjacentElement("beforeend", buttonn);
        }
    }
});

function presiono(){
    alert("Hola");
}
function eliminar(num){
    var n = localStorage.getItem("Numero");
    if((num)==n){
        n--;
        localStorage.setItem("Numero",n);
        localStorage.removeItem(num);
        location.reload();
    }else if((num) != n){
        n--;
        localStorage.setItem("Numero",n);
        
        for(i=num; i<n; i++){
            localStorage.setItem(i, localStorage.getItem(i+1));
        }
        localStorage.removeItem(n);
        location.reload();
    }
}

function BorrarItems(id){
    try{
        document.removeItem("ima"+id);
    }catch(Exception){
        
    }
}

function nada(){

}




