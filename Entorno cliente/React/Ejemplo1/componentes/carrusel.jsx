import { useState, useEffect } from "react"
import Producto from "./Producto";

export default function carrusel(){
    const [indice, setIndice] = useState(1);
    const [producto, setProducto] = useState({});

    useEffect(() => {
        document.title = indice;
        localStorage.setItem('indice', indice);

        fetch('https://fakestoreapi.com/products/' + indice)
            .then(res=>res.json())
            .then(json => { 
                console.log(json)
                setProducto(json)
        });

        console.log("Cambiando estado");
    }, [indice]);

    return(
        <>
            <p>{indice}</p>

            <Producto obj={producto}></Producto>

            {indice > 1 && <button onClick={() => {
                setIndice(indice-1)}}>
                {"<"}
            </button>}
            {indice < 20 && <button onClick={() => {
                setIndice(indice+1)}}>
                {">"}
            </button>}
        </>
    )
}