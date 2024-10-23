/**
 * Funcion a la que se le introducira una array por parametro y nos devolvera el número mas alto, el mas bajo y el del medio
 * @param {any} arr 
 * @returns {string} una cadena con los valores maximo, minimo y medio
 */
function mayMenMed(arr) {
    let max;
    let min;
    let med;
    let posicionMedio;
    /*function(a,b){return a-b} esto es una funcion de comparacion que metemos dentro del metodo sort
    esto compara los dos primeros numeros (posiciones 0 y 1 de array) restando al primero el segundo
    en caso de que de un numero negativo significa que a es menor que b
    asi que lo deja como esta, si fuese positivo los cambiaria de lugar,
    luego compara la posicion uno con la dos y asi sucesivamente*/
    arr.sort(function(a,b){return a-b})
    max = arr[arr.length-1];
    min = arr[0];
    /*para coger la posicion del medio redondeamos arriba porque al dividir 
    el length del array entre dos nos va a dar un numero decimal al ser cinco posiciones
    y luego lo quitamos 1 porque el indice empieza desde cero.
    o se podria redondear a floor y no restarle el -1*/
    posicionMedio = Math.ceil((arr.length)/2)-1;
    med = arr[posicionMedio];
    return "El número más grande es " + max + 
    "<br>El número del medio es " + med + 
    "<br>El número más pequeño es " + min;
}