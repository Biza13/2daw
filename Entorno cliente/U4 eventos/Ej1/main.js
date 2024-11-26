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

    function pintar(contexto, x1, y1, x2, y2){
        //se llama a este metodo antes de comenzar cada linea
        contexto.beginPath();
        contexto.strokeStyle = "black"; //color de la linea
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
            /*llamamos a la funcion dandole como parametros las coordenadas de "x" y de "y"
            las cuales estan modificadas en el mousedown dando la posicion del punto inicial
            y las otras dos variables son el punto donde se mueve el mouse las posiciones "x" e "y"*/
            pintar(contexto, x, y, evento.offsetX, evento.offsetY);
            //actualizamos el final de la linea con las posiciones actuales del mouse
            x = evento.offsetX;
            y = evento.offsetY;
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
});

console.log(body)