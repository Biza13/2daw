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

function buscarEnArray(arr, busca){
    let palabra = busca.toLowerCase();
    //El includes devolvera true si si esta la palabra y false si no esta
    return arr.includes(palabra);
}

function generarRandoms(cant=20, max=100){
    let arr = [];
    for(let i = 0; i<cant; i++){
        arr[i] = Math.round(Math.random()*max);
    }
    return arr;
}

function compararArrays(arr1, arr2){
    let int = [];
    let uni = [];
    let dif = [];
    /* let fusion = [];
    fusion = arr1.concat(arr2); */
    for(let i = 0; i<arr1.length; i++){
        if (arr2.includes(arr1[i])){
            int.push(arr1[i]);
        }else{
            dif.push(arr1[i]);
        }
    }
    for(let i = 0; i<arr2.length; i++){
        if (!arr1.includes(arr2[i])){
            dif.push(arr2[i])
        }
    }

    /* fusion.forEach(element => {
        if (!uni.includes(element)){
            uni.push(element);
        }
    }); */

    /*Se puede usar esto en lugar de lo que he comentado en el codigo,
    desglosado significa:
    1) el operador spread (...nombreArray), descompone el array en cada uno de sus elementos
    2) si usas [...nombreArray, ...nombreArray2] estas descomponiendo los array y fusionandolos 
    3) el new set se utiliza para eliminar elementos duplicados de un array
    4) los ... antes del new set lo vuelve a componer pero ahora sin los elementos duplicados
    Basicamente lo que hemos hecho ha sido fusionarlas y aplicarles el set*/
    uni = [...new Set([...arr1, ...arr2])];

    return "Elementos que se repiten en los arrays--> " + int + 
    "<br> Elementos que no se repiten en los arrays--> " + dif +
    "<br> Fusión de los dos arrays sin repetir elementos--> " + uni
}

function contenido(cad){
    let arr = [];
    //con .textContent coge el texto contenido de las etiquetas
    let parrafos = document.getElementById("p").textContent;
    arr = parrafos.split(" ")

    /*1)El metodo filter crea un nuevo array con los elementos que cumplan la condiccion especificada
      2)element representa cada elemento del array
      3)trim elimina espacios en blanco al final y principio de una cadena
      porlotanto eliminamos espacios en blanco y puede que quede o no una cadena vacia
      con la comprobacion de (!== "") si NO esta vacia la cadena que devuelva trim devolvera true
      si por lo contrari SI esta vacia devolvera false
      4)por lo tanto filter devolvera un nuevo array solo con los elementos que devuelvan true*/
    arr = arr.filter(element => element.trim() !== "");
    return arr;
}