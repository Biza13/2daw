/*TENEMOS DOS TIPOS DE CERVEZA asi que en los parametros le intruduzco el tipo, para que lo coja la url*/
function getFetch(tipo){
    /*url de las paginas */
    //https://api.sampleapis.com/beers/stouts
    //https://api.sampleapis.com/beers/ale
    fetch('https://api.sampleapis.com/beers/' + tipo)
    //la respuesta del fetch que esta en json la parsea y la voy a llamar cervezas
    .then(res=>res.json())
    .then(cervezas=>{
        console.log(cervezas)
        //llamamos a la funcion para crear todas las cartas con el array cervezas
        creaCartas(cervezas);
    });
}

//cogemos el main que esta dentro del body
let main = document.querySelector("main");

//creamos la sección que contendra todas las cartas de cervezas y la metemos en el main
let section = document.createElement("section");
section.id = "contenedora";
main.appendChild(section);

//creamos fragmento para mejor optimización de los recursos
let fragmento = document.createDocumentFragment();

//FUNCIÓN PARA CREAR UNA CARTA donde se le introducira un objeto
function crearCarta(objeto){
    //creamos el articulo, le damos un id y lo metemos dentro de la section
    let article = document.createElement("article");
    article.id = objeto.id;
    section.appendChild(article);

    //creamos la imagen y la metemos en el articulo
    let img = document.createElement("img");
    img.src = objeto.image;
    article.appendChild(img);

    //Esto es porque hay imagenes que no funcionan, entonces en caso de error mostrare otra imagen
    img.onerror = () => {
        img.src = "./assets/imgs/error.png";
    };

    //creamos el div que contendra la información y lo metemos en el articulo
    let div = document.createElement("div");
    article.appendChild(div);

    //cremos todos los p con la información u lo metemos en el div
    let pNom = document.createElement("p");
    pNom.textContent = objeto.name;
    div.appendChild(pNom);

    let pPrec = document.createElement("p");
    pPrec.textContent = objeto.price;
    div.appendChild(pPrec);

    let pRat = document.createElement("p");
    pRat.textContent = "Media: " + objeto.rating.average + " Reviews: " + objeto.rating.reviews;
    div.appendChild(pRat);

    //introducir el article con todo dentro del fragmento
    fragmento.appendChild(article);
}

//FUNCIÓN PARA LIEMPIAR LA SECCIÓN
function limpiarSection(){
    let sec = document.getElementById("contenedora");
    sec.innerHTML = "";
}

//FUNCIÓN PARA CREAR TODOAS LAS CARTAS donde se le introducira un array
function creaCartas(arr){
    //limpiamos la seccion
    limpiarSection();

    //recorremos el array y llamamos a la funcion de crearCarta individual
    arr.forEach(elemento => {
        crearCarta(elemento);
    });
    
    //añadir al main el fragmento con todas las cartas (articulos)
    section.appendChild(fragmento);
}

//funcion para el audio
function ohYeah(){
    let sonido = new Audio("./assets/ouh_yeah.mp3");
    sonido.play();
}

//coger las a para añadirles los listeners
let aAle = document.querySelector("body main nav ul li:first-of-type a");
let aStouts = document.querySelector("body main nav ul li:last-of-type a");

aAle.addEventListener("click", () => {
    getFetch("ale");
    ohYeah();
});

aStouts.addEventListener("click", () => {
    getFetch("stouts");
    ohYeah();
});