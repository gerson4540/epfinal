"use strict"
//for(let angulos= 0; angulos <= 1800; angulos +=5 ){
    let angulos = 0
    const crearPelota = () => {
let pelota = document.createElement("div");
pelota.className = "pelota" ; 
pelota.style.left = angulos + "px";
let angulox = -angulos * Math.PI/ 180
pelota.style.top= Math.cos(angulox) *100 + 200  + "px";
console.log(Math.cos(angulox))
document.body.appendChild(pelota); 
 angulos++;
    }
//}
setInterval(crearPelota, 20)