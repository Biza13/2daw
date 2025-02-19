import { useEffect, useState } from "react";
import CardProducto from "./CardProducto";
import styles from "../Paginas/Principal.module.css"

export default function carrusel(){
    const [indice, setIndice] = useState(1);
    const [producto, setProducto] = useState({});

    useEffect(() => {
        document.title = indice;
        localStorage.setItem('indice', indice);

        fetch('https://fakestoreapi.com/products/' + indice)
            .then(res=>res.json())
            .then(json => { 
                setProducto(json)
        });

    }, [indice]);

    return(
        <>
            <p>{indice}</p>

            <CardProducto obj={producto}></CardProducto>

            <div>
                {indice > 1 && <button onClick={() => {
                    setIndice(indice-1)}}>
                    {"<"}
                </button>}
                {indice < 20 && <button onClick={() => {
                    setIndice(indice+1)}}>
                    {">"}
                </button>}
            </div>
        </>
    )
}