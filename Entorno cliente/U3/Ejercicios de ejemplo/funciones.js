function suma (a, b){
    return a+b;
}

function resta(a, b){
    return a-b;
}

function mult(a, b){
    return a*b;
}

function div(a, b){
    return a/b;
}

function operacion(a, b, func){
    return func;
}

function mostrarArray2(arr){
    console.log(arr);
}

function doble(array){
    let nuevoArr = [];
    array.forEach(element => {
        nuevoArr.push(element*2);
    });
    return nuevoArr;
}

