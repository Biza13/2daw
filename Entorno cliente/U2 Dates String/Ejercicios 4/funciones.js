/**
 * Funcion que dado el angulo te calcula el seno, coseno y la tangente
 * @param {number} angulo 
 * @returns {string} con las tres variables
 */
function triangulo(angulo){
    let seno = Math.sin(angulo);
    let coseno = Math.cos(angulo);
    let tan = seno / coseno;
    return "El seno de " + angulo + " es " + seno + "<br>" + "El coseno es " + coseno + "<br> y la tangente es " + tan;
}

/**
 * Funcion que dado dos lados de un triangulo te calcula la hipotenusa
 * @param {number} lado1 
 * @param {number} lado2 
 * @returns {number} hipotenusa
 */
function hipotenusa(lado1, lado2){
    let hipCuad = Math.pow(lado1, 2) + Math.pow(lado2, 2);
    let hip = Math.sqrt(hipCuad);
    return hip
}

/**
 * Funcion que dados tres numeros calcula la ecuacion de segundo grado
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns {string} con las dos variables
 */
function ecuacionesSegGrado(a,b,c){
    let dividirPor = 2*a;
    let sol1 = -b + Math.sqrt(Math.pow(b,2)-4*a*c);
    let sol2 = -b - Math.sqrt(Math.pow(b,2)-4*a*c);
    let res1 = sol1 / dividirPor;
    let res2 = sol2 / dividirPor;
    return res1 + " y " + res2
}

/**
 * Funcion que calcula la potencia de un numero daso el numero y el exponente
 * @param {number} a base
 * @param {number} b exponente
 * @returns 
 */
function potencia(a, b){
    return Math.pow(a,b)
}