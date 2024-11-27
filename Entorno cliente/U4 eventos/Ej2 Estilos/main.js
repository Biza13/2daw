//OPCCIÓN A
//empezar con el tercer p oculto
/* let ps = document.querySelectorAll(".contenido p");
let pOculto = ps[2];
pOculto.style.display = "none"

let aNormal = document.getElementById("normal");
let aMinimalista = document.getElementById("minimalista");

aMinimalista.addEventListener("click", () => {
    temaMinimalista();
});

aNormal.addEventListener("click", () => {
    temaNormal();
}); */

//crear una funcion que recorra rtodos los elementos de forma recursiva y elimine el atributo style
function eliminarEstilosRecursivo(elemento) {
    // Eliminar el estilo del elemento actual
    elemento.removeAttribute("style");

    // Recorrer todos los hijos del elemento
    for (let hijo of elemento.children) {
        // Llamada recursiva para cada hijo
        eliminarEstilosRecursivo(hijo);
    }
}

function temaMinimalista(){
    let body = document.querySelector("body");

    //voy a eliminar todos los estilos partiendo del body de forma recursiva
    eliminarEstilosRecursivo(body);

    //dar estilo para ocultar el parrafo
    let ps = document.querySelectorAll(".contenido p");
    let pOculto = ps[2];
    pOculto.style.display = "none";
}

function temaNormal(){
    //estilo del body
    let body = document.querySelector("body");
    body.style.margin = "0";
    body.style.padding = "0";
    body.style.boxSizing = "border-box";
    body.style.display = "flex";

    //estilo del .main
    let sectMain = document.querySelector(".main");
    sectMain.style.backgroundColor = "rgb(227, 227, 175)";

    //estilos del div
    let div = document.querySelector("div");
    div.style.width = "100px";
    div.style.height = "100vh";
    div.style.backgroundColor = "rgb(70, 158, 188)";

    //estilos del h1
    let h1 = document.querySelector("h1");
    h1.style.color = "rgb(4, 4, 94)";
    h1.style.fontSize = "large";

    //estilos de la section .enlaces
    let secEnlaces = document.querySelector(".enlaces");
    secEnlaces.style.margin = "10px 20px";
    secEnlaces.style.border = "1px solid black";
    secEnlaces.style.backgroundColor = "rgb(232, 229, 229)";

    //estilos de los a al ser un node list hay que recorrerlo y aplicar el style a todos los elementos
    let as = document.querySelectorAll(".enlaces a");
    as.forEach(element => {
        element.style.display = "inline-block";
        element.style.padding = "5px 20px";
        element.style.textDecoration = "none";
    });

    //estilos de la seccion de parrafos .contenido
    let secParrafos = document.querySelector(".contenido");
    secParrafos.style.padding = "0 20px";
    secParrafos.style.width = "100%";

    //estilos de los parrafos de la seccion .contenido
    let ps = document.querySelectorAll(".contenido p");
    ps.forEach(element => {
        element.style.margin = "20px auto";
    });

    //estilos de el tercer parrafo que solo se muestra en el tema normal
    //utilizaremos el querySelectorAll de arriba
    let pOculto = ps[2];
    pOculto.style.display = "block";
    pOculto.style.fontWeight = "bold";

    //estilo del ultimo parrafo
    //tambien utilisaremos el selector de arriba
    let ultimoP = ps[ps.length-1];
    ultimoP.style.border = "1px solid black";
    ultimoP.style.padding = "5px";
    ultimoP.style.backgroundColor = "yellow";
}

//OPCCIÓN B
let aNormalOpB = document.getElementById("normal");
let aMinimalistaOpB = document.getElementById("minimalista");

aMinimalistaOpB.addEventListener("click", () => {
    let head = document.querySelector("head");
    let hijosHead = head.children;

    for(let element of hijosHead){
        if (element.tagName.toLocaleLowerCase() == "link"){
            element.remove();
        }
    }

    let link = document.createElement("link");
    head.appendChild(link);
    link.setAttribute("rel", "stylesheet")
    link.setAttribute("href", "./styleMinimalista.css")
});

aNormalOpB.addEventListener("click", () => {
    let head = document.querySelector("head");
    let hijosHead = head.children;

    for(let element of hijosHead){
        if (element.tagName.toLocaleLowerCase() == "link"){
            element.remove();
        }
    }

    let link = document.createElement("link");
    head.appendChild(link);
    link.setAttribute("rel", "stylesheet")
    link.setAttribute("href", "./style.css")
});

console.log();