/** 
 * @name filterNumbersGreaterThan 
 * @description Filtra los números de un array que sean mayor a cierto número 
x dejando solo los que sean menores a este 
 * 
 * @param {number[]} numbers - Array de números a filtrar 
 * @param {number} filter - Número a partir del cuál filtrar los demás número
s 
 * @returns {Number[]} - Array de números filtrados menores a {filter} 
 * 
 * @example 
 *  filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7) // returns [3, 1, 4] 
 */
function filterNumbersGreaterThan(numbers, filter) {
  let numeros = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < filter) {
      numeros.push(numbers[i]);
    }
  }
  return numeros;
}

/** 
 * @name toHackerSpeak 
 * @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que 
transformar las "a" en 4, las "e" en 3, las "i" 
 * en 1, las "o" en 0 y las "s" en 5 
 * 
 * @param {string} text  
 * @returns {String} - El texto convertido a "Hacker Speak" 
 *  
 * @example 
 *  toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ack3r n0w" 
 */
function toHackerSpeak(text) {
  //inicializo una variable como cadena vacia para ir metiendole la cadena nueva con las letras cambiadas
  let resultado = "";
  //pasamos la cadena a minuscula para que nos cambie las letras en caso de que haya alguna mayuscula
  let minuscula = text.toLocaleLowerCase();

  for (let i = 0; i < minuscula.length; i++) {
    let letra = minuscula[i];
    switch (letra) {
      case "a":
        resultado += "4";
        break;
      case "e":
        resultado += "3";
        break;
      case "i":
        resultado += "1";
        break;
      case "o":
        resultado += "0";
        break;
      case "s":
        resultado += "5";
        break;
      default:
        //en caso de que ninguna de las letras sea la que hayamos especificado se mantendra y no se cambiara
        resultado += letra;
    }
  }
  return resultado;
}

/**
 * @name getFileExtension
 * @description Obtiene la extensión de un archivo
 *
 * @param {string} file - El nombre del archivo a obtener la extensión
 * @returns {String} - La extensión del archivo
 *
 * @example
 *  getFileExtension("imagen.jpg") // returns "jpg"
 */
function getFileExtension(file) {
  //split nos devuelve un array y cada uno de los elementos de array estara dividido por el punto
  //Es decir el indice 0 sera lo de antes del punto y el 1 lo de despues. Porque solo hay un punto
  let arrArchivo = file.split(".");
  let extension = arrArchivo[1];
  return extension;
}

/** 
 * @name flatArray 
 * @description Dado un array 2D, devuelve un array 1D que contiene todos los 
ítems  
 * 
 * @param {[][]} arr - Array 2D a "aplanar"  
 * @returns {[]} - El array "aplanado" 
 *  
 * @example 
 *  flatArray([[1, 5, 4], [3, 10], [2, 5]]) // returns [1, 5, 4, 3, 10, 2, 5] 
 */
function flatArray (arr){
    let arrayJunta = [];
    for(let i = 0; i<arr.length; i++){
        arrayJunta.push(arr[i]);
    }
    return arrayJunta;
}

/**
 * @name removeDuplicates
 * @description Remueve duplicados de un array
 *
 * @param {[]} arr - Array con duplicados a remover
 * @returns {[]} - El array resultante sin duplicados
 *
 * @example
 *  removeDuplicates([4, 5, 10, 4, 10, 2]) // returns [4, 5, 10, 2]
 */
function removeDuplicates(arr){
  //
  let arrSinDuplicados = [...new Set(arr)]
  return arrSinDuplicados;
}

/** 
 * @name countLetter 
 * @description Devuelve la cantidad de veces que una letra aparece en un str
ing  
 * 
 * @param {string} letter - Letra a contar 
 * @param {string} text - Texto sobre el que realizar la cuenta de {letter} 
 * @returns {Number} - Número de veces que aparece {letter} en {text} 
 *  
 * @example 
 *  countLetter("a", "javascript") // returns 2 
 */
function countLetter(letter, text){
  let contador = 0;
  for(let i = 0; i<text.length; i++){
    if (letter == text[i]){
      contador++;
    }
  }
  return contador;
}

/** 
 * @name removeWords 
 * @description Dado un string y un array de palabras a remover, devuelve el 
string sin las palabras removidas 
 * 
 * @param {string} str - Texto a recortar  
 * @param {string[]} arrWords - Palabras a remover 
 * @returns {string} - Texto resultante con las palabras removidas 
 *  
 * @example 
 *   removeWords("This is a really bad test", ["really", "bad"]) // returns 
"This is a test" 
 */
function removeWords(str, arrWords){
  let arrTexto = str.split(" ");
  /*Filter va a filtrar los elementos del array segun una condicion con una funcion callback
  si la funcion arrow devuelve true, la palabra sera añadida al array palabrasFiltradas
  1)palabraArr es cada una de las palabras del array arrTexto
  2)La condicion es que en el array de arrWords NO incluya la palabraArr
  Si NO la contiene devolvera true y la añadira al array palabrasFiltradas*/
  let palabrasFiltradas = arrTexto.filter(palabraArr => !arrWords.includes(palabraArr));
  
  //La funcion join me devuelve un string separando los elementos del array por espacios en este caso (" ")
  return palabrasFiltradas.join(" ");
}