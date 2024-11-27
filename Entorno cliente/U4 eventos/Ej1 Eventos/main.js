//EJERCICIO 1 LO COMENTO PARA QUE NO INTERFIERA CON EL RESTO DE EJERCICIOS
/* document.addEventListener("click", () => {
    alert("has hecho click")
}); */

//EJERCICIO 2
let section2 = document.getElementById("ej2");
let divEj2 = document.createElement("div");
section2.appendChild(divEj2);

document.addEventListener("mousemove", (event) => {
    //limpiar el contenido cada vez que se mueve, sino te poniendo cada valor
    divEj2.textContent = "";
    let textoEj2 = document.createTextNode("coordenadas eje X : " + event.clientX + " eje Y :" + event.clientY);
    divEj2.appendChild(textoEj2);
});

//EJERCICIO 3
let body = document.querySelector("body");

window.addEventListener("load", () =>{

    let cont = 0;
    let divEj3 = document.createElement("div");
    let section3 = document.getElementById("ej3");
    section3.appendChild(divEj3);
    
    //performance.now mide el tiempo que tarda la pagina en cargarse en milisegundos
    let tiempoCarga = performance.now();
    //Lo pasamos a segundos al dividirlo entre mil y el toFixed para que solo nos salgan 4 decimales
    let tiempoSegundos = (tiempoCarga/1000).toFixed(4);

    let text = document.createTextNode("La pagina ha tardado " + tiempoSegundos + " segundos en cargar");
    divEj3.appendChild(text);
});

//EJERCICIO 4
window.addEventListener("load", () =>{
    const canvas = document.getElementById("canvas");
    //contexto en el que vamos a dibujar que es el 2d
    const contexto = canvas.getContext("2d");

    //ejes a 0
    let x = 0;
    let y = 0;

    function pintar(contexto, x1, y1, x2, y2, color = "black"){
        //se llama a este metodo antes de comenzar cada linea
        contexto.beginPath();
        contexto.strokeStyle = color; //color de la linea
        contexto.lineWidth = 1; //ancho de la linea
        //moveTo para decir de donde empieza la linea
        contexto.moveTo(x1, y1);
        //lineTo para decir donde termina la linea
        contexto.lineTo(x2, y2);
        //stroke para pintar la linea
        contexto.stroke();
        //closePath cierra el trayecto conectando el ultimo punto de la linea con el primero (no es visible)
        contexto.closePath();
    }

    //poner a false la variable de esta pintando
    let estaPintando = false;

    //eventos para cuando aprietas, mueves y sueltas el boton del mouse
    canvas.addEventListener("mousedown", (evento) => {
        //coger las coordenadas de "x" y de "y"
        x = evento.offsetX;
        y = evento.offsetY;
        /*poner la poner la variable estaPintando en true para saber que se ha presionado el boton
        po lo tando solo dibujara miestras esta variable este en true que sera muentras 
        el usuario tenga el boton pulsado*/
        estaPintando = true
    });

    canvas.addEventListener("mousemove", (evento) => {
        //si la variable sigue en true (es decir el boton del mouse sigue polsado)
        if (estaPintando){
            //Segun se presione control, shift o nada se pintara de un color
            if (evento.ctrlKey) {
                pintar(contexto, x, y, evento.offsetX, evento.offsetY, "red");
                x = evento.offsetX;
                y = evento.offsetY;
            } else if (evento.shiftKey) {
                pintar(contexto, x, y, evento.offsetX, evento.offsetY, "blue");
                x = evento.offsetX;
                y = evento.offsetY;
            }else if (evento.altKey){  
                pintar(contexto, x, y, evento.offsetX, evento.offsetY, "white");
                x = evento.offsetX;
                y = evento.offsetY;
            } else {
                pintar(contexto, x, y, evento.offsetX, evento.offsetY, "black");
                x = evento.offsetX;
                y = evento.offsetY;
            }    

            /*llamamos a la funcion pintar dandole como parametros las coordenadas de "x" y de "y"
            las cuales estan modificadas en el mousedown dando la posicion del punto inicial
            y las otras dos variables son el punto donde se mueve el mouse las posiciones "x" e "y"*/
            //pintar(contexto, x, y, evento.offsetX, evento.offsetY);
            //actualizamos el final de la linea con las posiciones actuales del mouse
            
        }
        
    });

    canvas.addEventListener("mouseup", (evento) => {
        if (estaPintando){
            //llamamos a la funcion
            pintar(contexto, x, y, evento.offsetX, evento.offsetY);
            //volvemos las posiciones a 0
            x = 0;
            y = 0;
            //ponemos la bandera a false
            estaPintando = false;
        }
    });

    //cojo el boton con el id le añado el listener del click
    borrar.addEventListener("click", () => {
        /*y con el clearRect limpio el canvas desde las posiociones 0 en x y 
        0 en y hasta el ancho del canvas y el alto del mismo*/
        contexto.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas
    });
});

//EJERCICIO 7
let section = document.getElementById("ej7");
let form = document.createElement("form");
section.appendChild(form);

let nombre = document.createElement("input");
nombre.type = "text";
nombre.name = "nombre";
nombre.id = "nombre";
nombre.placeholder = "Nombre";
form.appendChild(nombre);

//parrafo para mostrar cuando tiene el focus con el display none
let nombreP = document.createElement("p");
nombreP.textContent = "Por favor, ingresa tu nombre completo.";
nombreP.style.display = "none";
form.appendChild(nombreP);

nombre.addEventListener("focus", () => {
    nombreP.style.display = "block"
});
  
nombre.addEventListener("blur", () => {
    nombreP.style.display = "none";
});

let email = document.createElement("input");
email.type = "email";
email.name = "email";
email.id = "email";
email.placeholder = "Email";
form.appendChild(email);

//parrafo para mostrar cuando tiene el focus con el display none
let emailP = document.createElement("p");
emailP.textContent = "Por favor, ingresa tu email.";
emailP.style.display = "none";
form.appendChild(emailP);

email.addEventListener("focus", () => {
    emailP.style.display = "block"
});
  
email.addEventListener("blur", () => {
    emailP.style.display = "none";
});

let comentario = document.createElement("textarea");
comentario.name = "comentario";
comentario.id = "comentario";
comentario.placeholder = "Comentario";
form.appendChild(comentario);

//parrafo para mostrar cuando tiene el focus con el display none
let comentarioP = document.createElement("p");
comentarioP.textContent = "Por favor, ingresa tu comentario y le responderemos lo antes posible.";
comentarioP.style.display = "none";
form.appendChild(comentarioP);

comentario.addEventListener("focus", () => {
    comentarioP.style.display = "block"
});
  
comentario.addEventListener("blur", () => {
    comentarioP.style.display = "none";
});

let submitE = document.createElement("input");
submitE.type = "submit";
submitE.name = "enviar";
submitE.value = "Enviar"
form.appendChild(submitE);

let submitB = document.createElement("input");
submitB.type = "reset";
submitB.name = "borrar";
submitB.value = "Borrar"
form.appendChild(submitB);

//EJERCICIO 8
let section8 = document.getElementById("ej8");
let form8 = document.createElement("form");
section8.appendChild(form8);

let txtArea = document.createElement("textarea");
form8.appendChild(txtArea);

// Función para cambiar los ampersand (&) por "and" al perder el foco
function reemplazarAmpersand(evento) {
    /*Obtener el valor del textarea, el target hara referencia al text area cuando 
    cuando luefo llamemos al eventListener del text area*/
    let texto = evento.target.value;

    //usamos el replace del & y la g es de global, es decir que se reemplacen todos, sino solo se reemplazaria el primero
    let textoModificado = texto.replace(/&/g, "and");

    //Le damos al value el texto modificado
    evento.target.value = textoModificado;
}

//en el evento blur hara el reemplazo, es decir cuando se quite el foco
txtArea.addEventListener("blur", reemplazarAmpersand);

//EJERCICIO 9
//ya teniamos el body cogido anteriormente
body.style.position = "relative";

let sec9 = document.getElementById("ej9");
let img = document.createElement("img");
img.setAttribute("src", "./rata.png");
img.setAttribute("id", "arrastrar");
img.style.position = "absolute";
//img.draggable = true;
sec9.appendChild(img);

//va a ser la distancia entre las coordenadas del click y el borde izq de la imagen y lo mismo con la y que sera el burde superior
let distanciaX;
let distanciaY;
let arrastrando = false;

img.addEventListener("mousedown", evento => {
    /*Con el page nos da las coordenadas con relacion a toda la pagina*/
    distanciaX = evento.pageX - img.offsetLeft;
    distanciaY = evento.pageY - img.offsetTop;

    arrastrando = true;

    //creo los otros dos eventos dentro para que pasen mientras se mantenga
    document.addEventListener("mousemove", moverImagen);
    document.addEventListener("mouseup", dejarImagen);
});

function moverImagen(evento){
    if (arrastrando){
        let newX = evento.pageX - distanciaX;
        let newY = evento.pageY - distanciaY;

        img.style.left = newX + "px";
        img.style.top = newY + "px";
    }
}

function dejarImagen(evento){
    arrastrando = false;
    document.removeEventListener("mousemove", moverImagen);
    document.removeEventListener("mouseup", dejarImagen);
}

console.log()