"use strict"
let xpersonajes = document.getElementById("personajes");
let flechaDerecha = false;
let flechaIzquierda = false;
let flechaArriba = false;
let flechaAbajo = false;
let posX = 0;
let posY = 0;
const velocidad = 5;
const velocidadSalto = 15;
let estaEnAire = false;
let velocidadCaida = 0;
const gravedad = 0.8;
let fotograma = 33; 

const animar = () => {
    if (flechaDerecha) {
        posX += velocidad;
        fotograma = fotograma >= 39 ? 33 : fotograma + 1;
        xpersonajes.src = `sprite/de${fotograma}.png`;
    } else if (flechaIzquierda) {
        posX -= velocidad;
        fotograma = fotograma >= 39 ? 33 : fotograma + 1;
        xpersonajes.src = `sprite/de${fotograma}.png`;
    }
    if (flechaArriba) {
        if (!estaEnAire) {
            estaEnAire = true;
            velocidadCaida = -velocidadSalto;
        }
        fotograma = fotograma >= 39 ? 33 : fotograma + 1;
        xpersonajes.src = `sprite/de${fotograma}.png`;
    }
    if (estaEnAire) {
        posY += velocidadCaida;
        velocidadCaida += gravedad;

        if (posY >= 0) {
            posY = 0;
            estaEnAire = false;
            velocidadCaida = 0;
        }
    }
    if (flechaAbajo && !estaEnAire) {
        fotograma = fotograma >= 50 ? 41 : fotograma + 1;
        xpersonajes.src = `sprite/de${fotograma}.png`;
    }

    if (!flechaDerecha && !flechaIzquierda && !flechaArriba && !flechaAbajo && !estaEnAire) {
        xpersonajes.src = "sprite/de33.png";
        fotograma = 33;
    }
    xpersonajes.style.left = posX + "px";
    xpersonajes.style.bottom = posY + "px";
}

document.body.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowRight": 
            flechaDerecha = true;
            fotograma = 33;
            break;
        case "ArrowLeft": 
            flechaIzquierda = true;
            fotograma = 33;
            break;
        case "ArrowUp":
            flechaArriba = true;
            fotograma = 33;
            break;
        case "ArrowDown":
            flechaAbajo = true;
            fotograma = 41;
            break;
    }
});

document.body.addEventListener("keyup", (event) => {
    switch (event.key) {
        case "ArrowRight": 
            flechaDerecha = false;
            break;
        case "ArrowLeft": 
            flechaIzquierda = false;
            break;
        case "ArrowUp":
            flechaArriba = false;
            break;
        case "ArrowDown":
            flechaAbajo = false;
            fotograma = 33;
            break;
    }
});
xpersonajes.style.position = "absolute";
xpersonajes.style.left = "0";
xpersonajes.style.bottom = "0";
xpersonajes.src = "sprite/de33.png";

setInterval(animar, 20); 
