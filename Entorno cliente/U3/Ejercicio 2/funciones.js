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
    let cadMin = cad.toLowerCase();
    let esta = false;
    let arr = [];
    //con .textContent coge el texto contenido de las etiquetas
    let parrafos = document.getElementById("p").textContent;

    //separamos los parrafos por los espacios, haciendo que cada palabra sea un elemento del array
    arr = parrafos.split(" ")

    /*1)El metodo filter crea un nuevo array con los elementos que cumplan la condiccion especificada
      2)element representa cada elemento del array
      3)trim elimina espacios en blanco al final y principio de una cadena
      porlotanto eliminamos espacios en blanco y puede que quede o no una cadena vacia
      con la comprobacion de (!== "") si NO esta vacia la cadena que devuelva trim devolvera true
      si por lo contrari SI esta vacia devolvera false
      4)por lo tanto filter devolvera un nuevo array solo con los elementos que devuelvan true*/
    arr = arr.filter(element => element.trim() !== "");

    /*Recorremos es array para eliminar los puntos las comas y los retornos de carro
    puesto a que replace no nodifica el array habra que asignarle a la palabra a modificar
    el mismo valor pero sin puntos, comas o retornos de carro y asi SI modificamos las strings del array
    /[.,\n]/g    Las barras indican el comienzo y el final de una expresion regular, es decir la expresión
    buscara lo que haya dentro de las barras y la g es para que lo busque hasta el final,
    si no la pones buscara hasta encontrar la primera palabra con una coma, punto o retorno y dejara de buscar en las demas
    y por ultimo, convertimos a minusculas todo el texto*/
    for(let i = 0; i<arr.length; i++){
        arr[i] = arr[i].replace(/[.,\n]/g, "").toLowerCase();
        
    } 

    if (arr.includes(cadMin)){
        esta = true;
    }
    return esta;
}

function ordenarBurbuja(arr){
    let long = arr.length;
    let guar;
    for(let x = 0; x<(long-1); x++){
        for(let i = 0; i<((long-1)-x); i++){
            if (arr[i] > arr[i+1]){
                guar = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = guar;
            }
        }
    }
    //eliminando los duplicados
    arr = [...new Set(arr)]
    return arr;
}

function ordenarNombres(cad){
    let arr = cad.split(",");
    for(let i = 0; i<arr.length; i++){
        arr[i] = arr[i].trim().toLowerCase();
        /*Para poner la primera en mayusculas
        1)cogemos de arr[i].charAt(0) el primer caracter y lo pasamos a mayusculas con toUpperCase()
        2)Al primer caracter le concatenamos el resto de la palabra con el slice(1) desde la posicion 1
        que sera la segunda letra*/
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let cadena;
    arr.sort();

    //con esto separamos el array en coma y espacio lo convierte a cadena
    //tambien lo hace el toString() y lo separa por comas pero sin espacio
    cadena = arr.join(", ");
    return cadena;
}

function infoCadena(cad){
    let arr = cad.split(" ");
    let palabras = arr.length;
    let primera = arr[0];
    let ultima = arr[palabras-1];
    let inverso = [...arr].reverse();
    /*el map devuelve un array con la modificacion que tu le hagas a cada elemento
    es decir, cada elemento se va a llamar palabra, pues a palabra le voy a aplicar el toLowerCase()
    y cuando ya se lo haya aplicado a todos le hago el sort()*/
    let ordenAZ = [...arr].map(palabra => palabra.toLowerCase()).sort();
    let ordenZA = [...ordenAZ].reverse();
    return "Número de palabras: " + palabras + "<br>" +
    "Primera palabra: " + primera + "<br>" +
    "Última palabra: " + ultima + "<br>" +
    "Orden inverso: " + inverso + "<br>" +
    "Orden de la A a la Z: " + ordenAZ + "<br>" +
    "Orden de la Z a la A: " + ordenZA;
}