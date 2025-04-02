export function getFetch(url){
    return fetch(url)
            .then(resp => resp.json())
}

export function addCarrito(arr, obj, setCarr) {
    let objRepetido = arr.find((p) => p.id == obj.id);

    if (objRepetido){
        const nuevoCarrito = arr.map((p) => {
            return p.id == obj.id ? {...p, cantidad: p.cantidad + 1} : p
        })
        setCarr(nuevoCarrito);
    }else {
        let nuevoObj = {...obj, cantidad: 1}
        const nuevoCarrito = [...arr, nuevoObj];
        setCarr(nuevoCarrito);
    }
}

export function removeCarrito(arr, obj, setCarr){
    let prodEsta = arr.find((p) => p.id == obj.id)

    if (prodEsta){
        if (prodEsta.cantidad > 1){
            const nuevoCarrito = arr.map((p) => {
                return p.id == prodEsta.id ? {...p, cantidad: p.cantidad -1} : p
            })
            setCarr(nuevoCarrito)
        } else {
            //con el filter obtenemos un nuevo array con todos los elementos menos el que quiero eliminar
            //todos los elementos de array que NO coincidan con el id del que quiero eliminar
            const nuevoCarrito = arr.filter((p) => p.id != prodEsta.id)
            setCarr(nuevoCarrito)
        }
    }
}