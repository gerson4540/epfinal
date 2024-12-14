"use strict"
for(let i=1; i <= 500; i++){
let pelota = document.createElement("div");
pelota.className = "pelota";
pelota.style.left = Math.random() * window.innerHeight+ "px";
pelota.style.top = Math.random() * window.innerHeight + "px";
let colorRojo = Math.floor(Math.random() * 256);
let colorVerde = Math.floor(Math.random() * 256);
let colorAzul = Math.floor(Math.random() * 256);
let diametro = Math.random () * 15;
pelota.style.width = diametro +  "px";
pelota.style.height = diametro + "px";
pelota.style.opacity = Math.random ();


//pelota.style.backgroundColor = "rgba(150, 200, 300)"
//pelota.style.backgroundColor = "rgba(150, 200, 300)"
pelota.style.backgroundColor = `rgb(  ${colorRojo} , ${colorVerde} , ${colorAzul} )`;
document.body.appendChild(pelota);
}