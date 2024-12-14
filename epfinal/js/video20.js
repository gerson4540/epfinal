"use strict";
let dPaises = document.getElementById("Paises");
let dElegidos = document.getElementById("Elegidos");
let dtercera = document.getElementById("TerceraLista");
let dbtmDerecha = document.getElementById("btmDerecha");
let dbtmIzquierda = document.getElementById("btmIzquierda");
let dbtmDerechaTodos = document.getElementById("btmDerechaTodos");
let dbtmIzquierdaTodos = document.getElementById("btmIzquierdaTodos");
dbtmDerecha.addEventListener("click", () => {
    if(dPaises.selectedIndex !== -1) {
        let paisesSelector = dPaises.options[dPaises.selectedIndex].text;
        dPaises.options[dPaises.selectedIndex].remove();
        let nuevaoption = document.createElement("option");
        nuevaoption.textContent = paisesSelector;
        
        if(dElegidos.classList.contains("selected")) {
            dElegidos.appendChild(nuevaoption);
        }
        else if(dtercera.classList.contains("selected")) {
            dtercera.appendChild(nuevaoption);
        }
    }
});
dbtmIzquierda.addEventListener("click", () => {
    if(dElegidos.selectedIndex !== -1) {
        let paisesSelector = dElegidos.options[dElegidos.selectedIndex].text;
        dElegidos.options[dElegidos.selectedIndex].remove();
        let nuevaoption = document.createElement("option");
        nuevaoption.textContent = paisesSelector;
        dPaises.appendChild(nuevaoption);
    }
    if(dtercera.selectedIndex !== -1) {
        let paisesSelector = dtercera.options[dtercera.selectedIndex].text;
        dtercera.options[dtercera.selectedIndex].remove();
        let nuevaoption = document.createElement("option");
        nuevaoption.textContent = paisesSelector;
        dPaises.appendChild(nuevaoption);
    }
});
dbtmDerechaTodos.addEventListener("click", () => {
    while (dPaises.options.length > 0) {
        let paisesSelector = dPaises.options[0].text;
        let nuevaoption = document.createElement("option");
        nuevaoption.textContent = paisesSelector;
        if(dElegidos.classList.contains("selected")) {
            dElegidos.appendChild(nuevaoption);
        }
        else if(dtercera.classList.contains("selected")) {
            dtercera.appendChild(nuevaoption);
        }
        dPaises.options[0].remove();
    }
});
dbtmIzquierdaTodos.addEventListener("click", () => {
    while (dElegidos.options.length > 0) {
        let paisesSelector = dElegidos.options[0].text;
        let nuevaoption = document.createElement("option");
        nuevaoption.textContent = paisesSelector;
        dPaises.appendChild(nuevaoption);
        dElegidos.options[0].remove();
    }
    while (dtercera.options.length > 0) {
        let paisesSelector = dtercera.options[0].text;
        let nuevaoption = document.createElement("option");
        nuevaoption.textContent = paisesSelector;
        dPaises.appendChild(nuevaoption);
        dtercera.options[0].remove();
    }
});
dElegidos.addEventListener("click", () => {
    dElegidos.classList.add("selected");
    dtercera.classList.remove("selected");
});
dtercera.addEventListener("click", () => {
    dtercera.classList.add("selected");
    dElegidos.classList.remove("selected");
});
dElegidos.classList.add("selected");