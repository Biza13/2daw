/**
 * Funcion que muestra una ventana emergente con dos opciones y segun la que pulses te da un mensaje u otro
 */
function confirmacion(){
    let confirmar = confirm("aceptar o rechazar");
    if (confirmar == true){
        alert("Has aceptado")
    }else{
        alert("Has cancelado")
    }
}

/**
 * funcion que abre una ventana emergente
 */
function abrirVentana() {
    ventana = window.open("", "miVentana", `width=350,height=350, top=0`);
}

/**
 * Funcion que cierra una ventana emergente
 */
function cerrarVentana(){
    ventana.close();
}

/**
 * Funcion que responde a si una ventana emergente esta abierta o no
 */
function estaLaVentanaAbierta(){
    //si ventana esta abierta(ventana) y ventana NO se ha cerrado
    if (ventana && !ventana.closed){
        alert("La ventana esta abierta");
    }else{
        alert("La ventana esta cerrada");
    }
}

/**
 * Funcion para abrir una ventana emergente y ponerle un titulo
 * @param {String} titulo 
 */
function abrirVentanaTitulo(titulo) {
    let tit = titulo;
    ventana = window.open("", "miVentana", `width=350,height=350, top=0`);
    
    ventana.document.write(
      `<!DOCTYPE html>
      <html lang="es">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Ejercicio 2</title>
      </head>
      <body>
          <h1>${tit}</h1>
      </body>
      </html>`
    );
}

/**
 * Funcion para cerrar la ventana actual
 */
function cerrarVentanaActual(){
    window.close();
}

/**
 * Funcion para abrir una ventana emergente con un tamaño especifico
 * @param {Number} alto 
 * @param {number} ancho 
 */
function abrirVentanaConTamaño (alto=300, ancho=100){
    ventana = window.open("", "miVentana", `width=${ancho},height=${alto}, top=0`);
    ventana.write(
        `<!DOCTYPE html>
      <html lang="es">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Ejercicio 2</title>
      </head>
      <body>
        
      </body>
      </html>`
    );
}
/**
 * Funcion que escribe un texto en la clase definida
 * @param {String} texto 
 */
function escribe(texto){
    document.getElementById("parrafo").innerHTML = texto;
}

/**
 * Funcion que crea una ventana emergente en la posicion que le digas, si no le dices nada por defecto saldra a 50 pixeles en los dos ejes
 * @param {number} x 
 * @param {number} y 
 */
function moverVentana(x=50,y=50){
    ventana.moveTo(x,y);
}

/**
 * Función para ir a un marcador puesto en elgun punto de la pagina
 */
function irAlMarcador(){
    location.hash = "marca_dor";
}

/**
 * Función para saber el nombre del marcador
 */
function nombreMarcador(){
    alert("El marcador se llama: marca_dor");
}

/**
 * función para ir a una url dada por el susario
 * @param {string} url 
 * @returns 
 */
function irA(url){
    if (!url.startsWith("https://") && !url.startsWith("http://")){
        alert("Ingrese tambien el https://www... o http://www...");
        return; //sale de la funcion si la url no es valida
    }
    location.href = url;
}

/**
 * Funcion que actualiza la fecha de la ultima vez que se refresco la pagina
 */
function actualizarFecha(){
    let dat = new Date();
    let hor = dat.getHours();
    let min = dat.getMinutes();
    let seg = dat.getSeconds();
    let fech = dat.toDateString();
    document.getElementById("parrafo").innerHTML = fech + "<br>" + hor + ":" + min + ":" + seg;
}

/**
 * funcion para ver de que paginas has accedido a esta
 */
function deDondeViene(){
    let pag = document.referrer;
    if (pag == ""){
        document.getElementById("referencia").innerHTML = "Has entrado a la página directamente";
    }else{
        document.getElementById("referencia").innerHTML = pag;
    }
}

/**
 * Funcion para enseñar el titulo de la página
 */
function enseñarTitulo(){
    let titulo = document.title;
    document.getElementById("titulo").innerHTML = titulo;
}

/**
 * Finción para ver el titulo de la página
 */
function verUrl(){
    let url = document.URL;
    document.getElementById("url").innerHTML = url;
}

/**
 * funcion para sobre escribir la página entera ya que document.write es lo que hace cuando la página ya ha terminado de cargar
 */
function paginaCargada(){
    document.write("Como la página ya estaba cargada por completo, y al escribir esto con document.write(), se sobre escribe la página");
}

/**
 * Funcion para contas las etiquetas que tienen el atributo id
 */
function contarAnclas(){
    let etiquetas = document.querySelectorAll("*");
    let cont = 0;
    for(let i = 0; i<etiquetas.length; i++){
        if (etiquetas[i].id){
            cont ++;
        }
    }
    document.getElementById("parrafo").innerHTML = cont;
}

/**
 * Funcion que escribira algo en la primera etiqueta que contenga el atributo id
 */
function mostrarTextoEnPrimeraEtiquetaConAtributoId(){
    let etiquetas = document.querySelectorAll("*");
    for(let i = 0; i<etiquetas.length; i++){
        if (etiquetas[i].id){
            etiquetas[i].innerHTML = "Este texto se muestra en la primera ancla";
            break;  //break para que se salga del bucle cuando encuentre el primer elemento con un id
        }
    }
}