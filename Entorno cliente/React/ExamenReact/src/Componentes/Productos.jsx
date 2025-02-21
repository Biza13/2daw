import { useEffect, useState } from "react"
import * as funciones from '../../utils/funciones'
import Producto from "./Producto"
import datos from "../../json/productos.json"
import Navegacion from "./Navegacion"

export default function GridProductos() {
    const [productos, setProductos] = useState([])
    const url = 'https://fakestoreapi.com/products/'
    const [carrito, setCarrito] = useState([])
    //localStorage.setItem('carrito', carrito)

    useEffect(() =>{
        /* funciones.getFetch(url)
        .then((datos) => {
            //console.log(datos);
            setProductos([...datos])
        }) */

        setProductos([...datos])

    }, [], carrito)

    
  
    return (
    <>
        {
            productos.map((item) => {
                return <Producto obj={item} key={item.id} carrito={carrito} setCarrito={setCarrito} />
            })
        }
    </>
  )
}
