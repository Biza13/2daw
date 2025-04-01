import React, { useEffect, useState } from 'react'
import Item from './item'
import * as funciones from '../Utils/funciones'

export default function Items({carr, setCarr}) {

    
    const url = "https://fakestoreapi.com/products/"

    const [productos, setProductos] = useState([])

    useEffect(() =>{
        funciones.getFetch(url)
        .then(resp => {
            setProductos(resp)
        })
    }, [], carr)
  
    /* if (!productos){
        return (
            <div>
                vacio
            </div>
        )
    } */

    return (
    <>
        {productos.map((p) => {
            return <Item producto={p} key={p.id} carr={carr} setCarr={setCarr}></Item>
        })}
    </>
  )
}
