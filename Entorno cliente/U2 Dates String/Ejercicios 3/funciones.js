/**
 * Funcion que invierte una cadena
 * @param {String} cad 
 * @returns {String} cadena invertida
 */
function invierteCadena(cad){
    let cadInv = "";
    for(let i = cad.length-1; i >= 0; i--){
        cadInv += cad[i];
    }
    return cadInv;
}

/**
 * Devuelve las palabras de la cadena en el orden opuesto
 * @param {String} cad 
 * @returns {string}
 */
function inviertePalabras(cad){
    let arr = cad.split(" ");
    let nuevoArr = [];
    for(let i = arr.length-1; i>= 0; i--){
        nuevoArr.push(arr[i]);     
    }
    return nuevoArr;
}

/**
 * Funcion que encuentra la palabra mas larga de una cadena
 * @param {string} cad 
 * @returns {string} 
 */
function encuentraPalabraMasLarga(cad){
    let palabraLarga = "";
    let arr = cad.split(" ");
    for(let i = 0; i <= arr.length-1; i++){
        let palabra = arr[i];
        if (palabraLarga.length > palabra.length){
        }else{
            palabraLarga = palabra;
        }
    }
    return palabraLarga;
}

/**
 * funcion que devuelve las palabras que contengas x numero de letras
 * @param {String} cad 
 * @param {number} ind 
 * @returns {any}
 */
function fltraPalabrasMasLargas(cad, ind){
    let arr = cad.split(" ");
    let arrPalabras = [];
    for(let i = 0; i<=arr.length-1; i++){
        let palabra = arr[i];
        if (palabra.length > ind){
            arrPalabras.push(palabra);
        }
    }
    return arrPalabras;
}

/**
 * Devuelve la cadena introducida con la primera letra en mayuscula
 * @param {String} cad 
 * @returns {string}
 */
function cadenaBienFormada(cad){
    let cadMin = cad.toLowerCase();
    let primeraMayuscula = cadMin[0].toUpperCase();
    let restoCadena = "";
    for(let i = 1; i<=cadMin.length-1; i++){
        restoCadena += cadMin[i];
    }
    return primeraMayuscula + restoCadena;
}

/**
 * Funcion que te dice si la cadena esta formada solo por mayusculas, minusculas o un conjunto de las dos
 * @param {string} cad 
 * @returns {string}
 */
function comoEsLaCadena(cad){
    let cadMin = cad.toLowerCase();
    let cadMay = cad.toUpperCase();
    let resultado = "";
    if (cad == cadMin){
        resultado = "la cadena está en minusculas";
    }else if(cad == cadMay){
        resultado = "la cadena esta en Mayusculas"
    }else{
        resultado = "en la cadena hay mayusculas y minusculas"
    }
    return resultado;
}

/**
 * devuelve un numero que dice cuantas veces se repite una subcadena en una cadena
 * @param {string} cadena 
 * @param {string} subCadena 
 * @returns {number}
 */
function subcadenasRepetidas (cadena, subCadena){
    let cad = cadena.toLowerCase();
    let arr = cad.split(" ");
    let palabra = "";
    let subCad = subCadena;
    let contador = 0;
    for(let i = 0; i<arr.length; i++){
        palabra = arr[i];
        if (palabra == subCad){
            contador ++;
        }
    }
    return contador;
}

/**
 * devuelve una cadena formada por las consonantes seguido de las vocales de la cadena principoal introducida y sin espacios
 * @param {string} cadena 
 * @returns {string}
 */
function consoVocal (cadena){
    let cad = cadena.toLowerCase();
    let cadVocales = "";
    let cadConsonantes = "";
    for(let i = 0; i<cad.length; i++){
        if (cad[i] != " " && "aeiou".includes(cad[i])){
            cadVocales += cad[i];
        }
        if (cad[i] != " " && !"aeiou".includes(cad[i])){
            cadConsonantes += cad[i];
        }
    }
    return cadConsonantes + cadVocales;
}

/**
 * devuelve una cadena sin letras ni espacios repetidos
 * @param {string} cadena 
 */
function eliminarRepetidos (cadena){
    let letra = "";
    let cadSinRepetir = "";
    for(let i = 0; i<cadena.length; i++){
        letra = cadena[i];
        //si cadena en la posicion i NO tiene espacio (" ") y cadena sin repetir NO incluye (letra)
        if (cadena[i] != " " && !cadSinRepetir.includes(letra)){
            cadSinRepetir += letra;
        }
    }
    return cadSinRepetir;
}

/**
 * Funcion que devuelve un booleano dependiendo de si una cadena contiene una subcadena o no
 * @param {string} cad1 
 * @param {string} cad2 
 * @returns {boolean}
 */
function esParte (cad1, cad2){
    let siNo;
    if (cad1.includes(cad2)){
        siNo = true;
    }else {
        siNo= false;
    }
    return siNo
}

/**
 * funcion para ver si una cadena es un palindromo
 * @param {string} cadena 
 * @returns {string}
 */
function palindromo (cadena){
    let cad = cadena.toLowerCase();
    let cadSinEspaciosDelDerecho = "";
    let cadSinEspaciosDelReves = "";
    let respuesta = "";
    //recorrer la cadena para quitarle espacion y guardarla en una variable
    for(let i = 0; i<cad.length; i++){
        if (cad[i] != " "){
            cadSinEspaciosDelDerecho += cad[i];
        }
    }
    //recorrer la cadena del reves y guardarla en una variable para compararla con la anterior
    for(let i = cad.length-1; i>=0; i--){
        if (cad[i] != " "){
            cadSinEspaciosDelReves += cad[i];
        }
    }

    if (cadSinEspaciosDelDerecho == cadSinEspaciosDelReves){
        respuesta = "Si es un palindromo";
    }else {
        respuesta = "No es un palindromo";
    }
    return respuesta;
}

/**
 * funcion que nos dice cuantas palabras hay en una cadena sin contar los espacios
 * @param {string} cadena 
 * @returns {number}
 */
function cuantasPalabras (cadena){
    let arr = cadena.split(" ");
    let palabra = [];
    for(let i = 0; i<arr.length; i++){
        //si el arr en la posicion i es diferente a cadena vacia introducimos en el array la palabra
        if (arr[i] != ""){
            palabra.push(arr[i]);
        }
    }
    let cant = palabra.length;
    return cant;
}

/**
 * funcion para validar un numero de tarjeta de credito con ciertas restricciones
 * @param {string} cad 
 * @returns {boolean}
 */
function validateCreditCard (cad){
    let primerNum = parseInt(cad[0]);
    let suma = 0;
    let numDiferentes = false;
    //si no tiene 16 caracteres devuelve false
    if (cad.length != 16){
        return false;
    }
    
    //for para recorrer la cadena
    for (let i = 0; i<cad.length; i++){
        //si alguno de los caracteres no es un numero devuelve false
        if (isNaN(cad[i])){
            return false;
        }
        //Si el primer número no coincide con alguno de los números restantes de la cadena decimos que la variable numeros diferentes es true
        if (primerNum != cad[i]){
            numDiferentes = true;
        }
        //incrementamos la variable suma que suma la cantidad de cada digito
        suma += parseInt(cad[i]);
    }
    //si no hay numeros diferentes, es decir que todos los numeros son iguales devuelve false
    if (!numDiferentes){
        return false;
    }
    //si la suma de todos los digitos no es mayor que 16 devuelve false
    if (suma <= 16){
        return false;
    }
    //si la ultima posicion de la cadena no es un numero par devuelve false
    if (parseInt(cad[15]) %2 != 0){
        return false;
    }
    //en cualqioer otra condicion devolvera true
    return true;
}

/**
 * lo mismo que el de arriba pero en este caso se permite introducir quiones
 * @param {string} cad 
 * @returns {boolean}
 */
function validateCreditCard2 (cad){
    let arr = cad.split("-");
    let palabra = "" ;
    let cadenaSinGuiones = "";
    for(let i = 0; i<arr.length; i++){
        palabra = arr[i];
        cadenaSinGuiones += palabra;
    }
    let primerNum = parseInt(cadenaSinGuiones[0]);
    let suma = 0;
    let numDiferentes = false;
    //si no tiene 16 caracteres devuelve false
    if (cadenaSinGuiones.length != 16){
        return false;
    }
    
    //for para recorrer la cadena
    for (let i = 0; i<cadenaSinGuiones.length; i++){
        //si alguno de los caracteres no es un numero devuelve false
        if (isNaN(cadenaSinGuiones[i])){
            return false;
        }
        //Si el primer número no coincide con alguno de los números restantes de la cadena decimos que la variable numeros diferentes es true
        if (primerNum != cadenaSinGuiones[i]){
            numDiferentes = true;
        }
        //incrementamos la variable suma que suma la cantidad de cada digito
        suma += parseInt(cadenaSinGuiones[i]);
    }
    //si no hay numeros diferentes, es decir que todos los numeros son iguales devuelve false
    if (!numDiferentes){
        return false;
    }
    //si la suma de todos los digitos no es mayor que 16 devuelve false
    if (suma <= 16){
        return false;
    }
    //si la ultima posicion de la cadena no es un numero par devuelve false
    if (parseInt(cadenaSinGuiones[15]) %2 != 0){
        return false;
    }
    //en cualqioer otra condicion devolvera true
    return true;
}