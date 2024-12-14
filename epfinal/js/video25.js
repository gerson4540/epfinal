"use strict";
let zbola = document.getElementById("bola");
let zcanyon = document.getElementById("canyon");
let posX = 150;
let posY = 300;
let intervalo;
let velocidad = 10;
let anguloU = 0;
let anguloS = 0;
let anguloR = 0;
let aceleracion = 0.1;
let velocidadX = 0;
let velocidadY = 0;
zbola.style.left = posX + "px";
zbola.style.top = posY + "px";
zcanyon.style.left = posX + "px";
zcanyon.style.top = posY + "px";
zcanyon.style.transformOrigin = "12.5% 50%";
const mover = () => {
    velocidadY += aceleracion;
    posX += velocidadX;
    posY += velocidadY;

    zbola.style.left = posX + "px";
    zbola.style.top = posY + "px";
}
const calcularAngulo = (x1, y1, x2, y2) => {
    return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
}
window.addEventListener("mousemove", (event) => {
    let canyonRect = zcanyon.getBoundingClientRect();
    let canyonCenterX = canyonRect.left + canyonRect.width / 2;
    let canyonCenterY = canyonRect.top + canyonRect.height / 2;
    anguloS = calcularAngulo(canyonCenterX, canyonCenterY, event.clientX, event.clientY);
    anguloU = -anguloS;
    zcanyon.style.transform = "rotate(" + anguloS + "deg)";
    document.title = anguloU;
});
window.addEventListener("click", () => {
    anguloR = anguloS * Math.PI / 180;
    velocidadX = velocidad * Math.cos(anguloR);
    velocidadY = velocidad * Math.sin(anguloR);
    intervalo = setInterval(mover, 20);
});
