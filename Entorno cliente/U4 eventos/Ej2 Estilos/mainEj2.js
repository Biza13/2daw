//saber el tamano de la fuente predeterminado de los p
/* let p = document.querySelector("p");
let fontSize = window.getComputedStyle(p).fontSize;
console.log(fontSize);  */

let botonAumento = document.getElementById("aumentar");
let botonDecremento = document.getElementById("decrementar");
let botonPredeterminado = document.getElementById("predeterminado");
let botonJustificar = document.getElementById("justificar");
let botonIzquierda = document.getElementById("izquierda");

botonAumento.addEventListener("click", () => {
    incrementarFuente();
});

botonDecremento.addEventListener("click", () => {
    decrementarFuente();
});

botonPredeterminado.addEventListener("click", () => {
    let ps = document.querySelectorAll("body p");
    //devolver el tamaño predeterminado
    ps.forEach(element => {
        element.style.fontSize = "16px";
    });
});

botonJustificar.addEventListener("click", () => {
    justificarTexto();
})

botonIzquierda.addEventListener("click", () => {
    alinearIzquierda();
})

function incrementarFuente(){
    let ps = document.querySelectorAll("body p");

    ps.forEach(element => {
        //obtener el tamaño de la fuente y sumarle para que aumente
        let fontSizeString = window.getComputedStyle(element).fontSize;
        let fontSize = parseInt(fontSizeString);
        let aumentar = fontSize + 1;

        element.style.fontSize = aumentar + "px";
    });
}

function decrementarFuente(){
    let ps = document.querySelectorAll("body p");

    ps.forEach(element => {
        //obtener el tamaño de la fuente y restarle para que aumente
        let fontSizeString = window.getComputedStyle(element).fontSize;
        let fontSize = parseInt(fontSizeString);
        let aumentar = fontSize - 1;

        element.style.fontSize = aumentar + "px";
    });
}

function justificarTexto(){
    let ps = document.querySelectorAll("body p");

    ps.forEach(element => {
        element.style.textAlign = "justify";
    });
}

function alinearIzquierda(){
    let ps = document.querySelectorAll("body p");

    ps.forEach(element => {
        element.style.textAlign = "left";
    });
}