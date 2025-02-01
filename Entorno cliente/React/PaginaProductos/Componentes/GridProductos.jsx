import CardProducto from './CardProducto.jsx'
import datos from '../json/productos.json'
import styles from '../Paginas/Principal.module.css'
//import * as Funciones from '../Utils/httpClient.js'
import { useEffect, useState } from 'react'

export default function GridProductos (){

    const [arrayProductos, setProductos] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(resp=>resp.json())
            .then(datos=>console.log(datos))
            .then(resp=>{
                setProductos(resp)
                console.log(resp)
                resp.map(p => {
                    return <CardProducto obj={p} key={p.id}></CardProducto>
                })
            })
    }, []);

    /* let arrayProductos = arrayProductos.map(p => {
        return <CardProducto obj={p} key={p.id}></CardProducto>
    }) */


    
    return (
        <section className={styles.contenedoraProducto}>
            {arrayProductos}
        </section>
    )
}