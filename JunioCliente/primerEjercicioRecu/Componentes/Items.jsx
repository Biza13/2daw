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
    <div className='col-md-8 row gap-4 justify-content-center'>
        {productos.map((p) => {
            return <Item producto={p} carr={carr} setCarr={setCarr} key={p.id}></Item>
        })}
    </div>
  )
}
