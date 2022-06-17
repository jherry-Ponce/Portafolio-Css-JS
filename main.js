window.onload = progresbar;
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


function progresbar(){
    const html= document.querySelector("#id100");
    const progre85=document.querySelector("#id85");
    const progre80=document.querySelector("#id80");
    const progre75=document.querySelector("#id75");
    const progre70=document.querySelector("#id70");
    const progre50=document.querySelector("#id50");
    const progre45=document.querySelector("#id45");
    
    const bar = document.querySelectorAll(".carga");
     const bt=Array.from(bar)
     var width = 1;
     var identity = setInterval(scene, 10);
     function scene() {
       if (width >= 50) {
         clearInterval(identity);
       } else {
         width++; 
         progre45.style.width = width + '%'; 
         progre45.innerHTML = width * 1  + '%';
       }
      
    }
    
}