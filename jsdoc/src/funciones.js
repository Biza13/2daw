/**
 * Funcion que introducidos x parametros, los metera en un array excluyendo aquellos que se dupliquen
 * @returns array sin elementos ducplicados
 */
function onlyUniques(){
    let arr = [];
    for(let i = 0; i<arguments.length; i++){
        if (!arr.includes(arguments[i])){
            arr.push(arguments[i]);
        }
    }
    return arr
}

/**
 * Funcion que introducidos x parametros, haga los cuadrados de estoy y luego los sume
 * @returns number 
 */
function squareAndSum(){
    let sumCuad = 0;
    for(let i = 0; i<arguments.length; i++){
        let num = parseInt(arguments[i]);
        let cuad = Math.pow(num, 2);
        sumCuad += cuad;
    }
    return sumCuad;  
}

/**
 * la funcion "suma" takes two parameters, adds them together, and returns the result.
 * @param a - The function `suma(a, b)` takes two parameters, `a` and `b`, and returns their sum when
 * the function is called.
 * @param b - The parameter `b` in the `suma` function is the second number that will be added to the
 * first number `a`.
 * @returns The function `suma` returns the sum of the two input parameters `a` and `b`.
 */
function suma(a,b){
    return a+b;
}

/**
 * The function "mult" takes two parameters, multiplies them together, and returns the result.
 * @param a - Thank you for providing the `mult` function. How can I assist you with the parameters for
 * `a`?
 * @param b - It seems like you have provided a function `mult(a, b)` that multiplies two parameters
 * `a` and `b`. However, you have not provided the value of the parameter `b`. Could you please provide
 * the value of `b` so that I can help you with the multiplication operation
 * @returns The function `mult` returns the result of multiplying the two input parameters `a` and `b`.
 */
function mult(a,b){
    return a*b;
}