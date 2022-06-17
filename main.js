const menu = document.querySelector(".burguer");
menu.addEventListener("click",abrirmenu);

var cont=0;
function abrirmenu(event){
    cont= cont + 1;
    
    if(cont==1){
    const responsive= document.querySelector(".menu-responsive");
    responsive.style.display="block";
    }else{
        cont=0;
        cerrarmenu();
    }
    event.preventDefault();
}
function cerrarmenu(event){
    const responsive= document.querySelector(".menu-responsive");
    responsive.style.display="none";
}

function FuntionResize() {
    var widthBrowser = window.outerWidth;
    if(widthBrowser >= 600){
        const responsive= document.querySelector(".menu-responsive");
        responsive.style.display="none"
    }
}