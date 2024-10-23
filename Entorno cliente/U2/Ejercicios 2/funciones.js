/**
 * Funcion para hacer una cuenta atras
 * @param {string} parrafo el id del p donde lo vamos a mostrar
 */
function contador(parrafo){
    if (tiempo >= 0){
        document.getElementById(parrafo).innerHTML = tiempo;
        tiempo--;
    }
}

/**
 * Funcion para actualizar la hora cada segundo
 */
function reloj(){
    let horas = new Date().getHours();
    let minutos = new Date().getMinutes();
    let segundos = new Date().getSeconds();
    document.getElementById("reloj").innerHTML = horas + ":" + minutos + ":" + segundos
}

/**
 * Funcion igual a contador pero con la peculiaridad que esta cuando termine la cuenta atras te redirije a google
 * @param {string} parrafo  el id del p donde lo vamos a mostrar
 */
function contadorRedireccion(parrafo) {
    if (tiempo >= 0) {
        document.getElementById(parrafo).innerHTML = tiempo;
        tiempo--;
    } else {
        clearInterval(cuenta);  // Detener el setInterval
        window.location.assign("https://www.google.es");  // Redirigir
    }
}