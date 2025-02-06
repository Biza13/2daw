import CardProducto from './CardProducto.jsx'
//import datos from '../json/productos.json'
import styles from '../Paginas/Principal.module.css'
//import * as Funciones from '../Utils/httpClient.js'
import { useEffect, useState } from 'react'
import * as funciones from '../Utils/httpClient.js'

export default function GridProductos (){

    const [arrayProductos, setProductos] = useState([]);
    const url = "https://fakestoreapi.com/products/";

    useEffect(() => {
        /* fetch('https://fakestoreapi.com/products/')
            .then(resp=>resp.json())
            .then(datos=>{
                //console.log('datos fetch',datos)
                setProductos([...datos])
                
            }) */

        //usando el fetch de las funciones
        funciones.getFetch(url)
            .then(datos=>{
                setProductos([...datos])
            })
           
    }, []);

   /*  let arrayProductosp = arrayProductos.map(p => {
        return <CardProducto obj={p} key={p.id}></CardProducto>
    }) */


    
    return (
        
        <section className={styles.contenedoraProducto}>
            {arrayProductos.map(p => {
                return <CardProducto obj={p} key={p.id}></CardProducto>
            })}
        </section>
    )
}