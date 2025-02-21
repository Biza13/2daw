export function getFetch(url) {
    return fetch(url)
            .then((resp) => resp.json())
}



export function añadirAlCarrito (carrito, obj){
    let newCarro = carrito
    newCarro.push(obj)
    return newCarro
}

export function sumarPrecios (carrito){
    let precTotal = 0;
    carrito.map(item=>{
        precTotal = precTotal+item.price
    })
    return precTotal
}