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