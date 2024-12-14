"use strict"

class copoNieve{
    posX =  0; 
    posY = 0;
    velocidadY = 1;
    posXInicial = 0;
    diametro = 0;
    constructor  (pX, pY , diametro){
        this.copo = document.createElement("div");
        this.copo.className = "copo-nieve"
        this.posX = pX;
        this.posY = pY;
        this.posXInicial = pX;
        this.diametro = diametro;
        this.copo.style.left = this.posX + "px";
        this.copo.style.top = this.posY + "Px";
        this.copo.style.width = diametro + "px"
        this.copo.style.height = diametro + "px"

    }
    mover = () => {  
        this.intervalo = setInterval (() =>{
            this.cambiarPosicion()
        } , 20 )
    }
    cambiarPosicion = () =>{
        this.posY += this.velocidadY
        this.posX = Math.sin (this.posY * Math.PI /180) * 100 + this.posXInicial;
        if(this.posY >= window.innerHeight - this.diametro ){
       this.posY = window.innerHeight - this.diametro
    this.detener();
    }
    this.copo.style.top =  this.posY + "px";
    this.copo.style.left =  this.posX + "px";
}
    detener = () => {
        clearInterval(this.intervalo);
        this.copo.style.animation = "pause";
        this.copo.parentNode.removeChild(this.copo);
    }
}
const crearCopoNieve  = () =>{
let nuevocopoNieve = new copoNieve(Math.random() * window.innerWidth,0,Math.random () * 10 + 10);
nuevocopoNieve.mover();
document.body.appendChild( nuevocopoNieve.copo)
}
setInterval(crearCopoNieve,500);