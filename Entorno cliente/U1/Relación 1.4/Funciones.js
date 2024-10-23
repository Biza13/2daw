//@ts-check 
//Esto de arriba nos permite ver si hay errores, como que yo le ponga a una funcion un parametro que es un number una string

/**
 * Este no lo uso pero es mas facil, cuando llames a la funcion le introduces los numeros y ya esta.
 * Arguments.length es una array que ya viene definida a la que se le van a agregar todos los parametros que se pongan a la hora de llamar la función
 * @returns el total de la suma
 */
function sumPrueba(){
    let total = 0;
    for(let i = 0; i<arguments.length; i++){    //El arguments es un array que coge todos los parametrosq ue se le introduzca a la función
        total = total + arguments[i];
    }
    return total;
}

/**
 * Funcion para sumar
 * @param {any} arr array a introducir
 * @returns resultado con la suma de los numeros del array
 */
function sum(arr){
    let resultado = 0;
    for(let i = 0; i<arr.length; i++){
        resultado += arr[i];
    }
    return resultado;
}

/**
 * Funcion para sumar los numeros que se le meteran de parametro a la funcion y que ignorara si se le meten strings y estas no las concatenara
 * @returns suma de los numeros obviando las strings
 */
function addOnlyNums(){
    let total = 0;
    let slot;
    for(let i = 0; i<arguments.length; i++){
        slot = parseInt(arguments[i]);
        if (!isNaN(slot)){  //isNan significa is not a number es decir si slot no es un numero entonces no entra dentro del if
            total = total + arguments[i];
        }
    }
    return total;
}

/**
 * Funcion para decir cuantos elementos se le meten como parametro a la funcion
 * @returns cantidad de elementos introducidos
 */
function countTheArgs(){
    let slots = 0;
    for(let i = 0; i<arguments.length; i++){
        slots++;
    }
    return slots;
}
 /**
  * Misma funcion que la de arriba pero poniendole un array como parametro
  * @param {any} arr array con elementos de diferente tipo
  * @returns cantidad de elementos del array
  */
function contarParametros(arr){
    let slots = 0;
    for(let i = 0; i<arr.length; i++){
        slots++;
    }
    return slots;
}

/**
 * esta funcion concatena dos arrays
 * @param {any} arr1 primer array a concatenar
 * @param {any} arr2 segundo array a concatenar
 * @returns concatenacion de los arrays
 */
function combineTwoArrays(arr1, arr2){
    let array1 = arr1;
    let array2 = arr2;
    let arrayConcatenada = [...array1, ...array2]   //se hace asi para concatenar dos arrays
    return arrayConcatenada;
}

/**
 * Función para sumar los números que haya en los indices pares de los parametros introducidos
 * @returns suma de los indices pares
 */
function sumEveryOther(){
    let sum = 0;
    for(let i = 0; i<arguments.length; i+=2){   //para que sume a la i 2 no se pone i+2, hay que ponerlo i+=2 para que incremente el dos la i
        sum += arguments[i];
    }
    return sum;
}

/**
 * Funcion que devuelve si un numero es divisible por 3
 * @param {number} num numero
 * @returns true o false segun sea o no divisible por 3
 */
function divisible(num){
    let divisib = false;
    if (num % 3 == 0){
        divisib = true;
    }
    return divisib
}

/**
 * Funcion para decir si un numero es divisible por otro
 * @param {string} a numero uno
 * @param {string} b numero por el cual va a ser divisible o no 
 * @returns true o false
 */
function divisibleEntre(a, b){
    let divisib = false;
    let num = parseInt(a);
    let num2 = parseInt(b);
    if (num % num2 == 0){
        divisib = true;
    }
    return divisib
}

/**
 * funcion para decir si es verdadero o falso el que este dentro del rango o no el valor
 * @param {string} valor //numero para combrobar si esta entre los limites
 * @param {string} rangoInf //limite inferior
 * @param {string} rangoSup //limite superior
 * @returns true o false
 */
function rango(valor, rangoInf, rangoSup){
    let siNo = false;
    if (valor > rangoInf && valor < rangoSup){
        siNo = true;
    }else{
        siNo = false;
    }
    return siNo;
}

/**
 * coge un numero metido como string y dice si tiene o no 3 digitos
 * @param {string} num 
 * @returns true o false
 */
function tieneTresDigitos(num){
    let siNo = false;
    if (num[2] != undefined && num[3] == undefined){
        siNo = true;
    }else if (num[3] !=undefined){
        siNo = false;
    }
    return siNo;
}

/**
 * Funcion para calcular ar alrea de un rectangulo
 * @param {number} lado1 
 * @param {number} lado2 
 * @returns multiplica los lados
 */
function areaRectangulo(lado1, lado2){
    return lado1 * lado2;
}

/**
 * Funcion para calcular el imc
 * @param {number} pes peso
 * @param {number} alt altura
 * @returns {number} el imc
 */
function imc(pes, alt){
    return pes / (Math.pow(alt, 2));
}

/**
 * Funcion para aplicar un descuento
 * @param {number} prec 
 * @param {number} desc 
 * @returns {number} precio final con el descuento aplicado
 */
function precioFinal(prec, desc){
    let cantDesc = (desc * prec) / 100;
    return prec - cantDesc;
}

/**
 * calcula el factorial de cualquier numero
 * @param {number} num 
 * @returns {number} el factorial
 */
function factorial(num){
    let fac = 1;    //hay que inicializar a 1 porque sino siempre multiplica por 0 y cualquie numero por 0 es 0
    for(let i = 1; i<=num; i++){
        fac = fac*i;
    }
    return fac
}

function divisible(a, b){

}