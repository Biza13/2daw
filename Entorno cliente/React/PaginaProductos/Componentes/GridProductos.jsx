import CardProducto from "./CardProducto.jsx";
//import datos from '../json/productos.json'
import styles from "../Paginas/Principal.module.css";
//import * as Funciones from '../Utils/httpClient.js'
import { useEffect, useState } from "react";
import * as funciones from "../Utils/httpClient.js";
import { useQuery } from "../hooks/useQuery.jsx";

export default function GridProductos() {
  const [arrayProductos, setProductos] = useState([]);
  let url = "";

  const query = useQuery();
  console.log("search->" + query.get("search"));
  console.log("categoria->" + query.get("categoria"));

  const categoria = query.get("categoria");
  const search = query.get("search");

  useEffect(() => {
    /* fetch('https://fakestoreapi.com/products/')
            .then(resp=>resp.json())
            .then(datos=>{
                //console.log('datos fetch',datos)
                setProductos([...datos])
                
            }) */

    if (categoria) {
      url = "https://fakestoreapi.com/products/category/" + categoria;
    } else if (search ) {
      url = "https://fakestoreapi.com/products/category/" + search;
    } else {
      url = "https://fakestoreapi.com/products/";
    }

    //usando el fetch de las funciones
    funciones.getFetch(url).then((datos) => {
      setProductos([...datos]);
    });
  }, [categoria]);

  /*  let arrayProductosp = arrayProductos.map(p => {
        return <CardProducto obj={p} key={p.id}></CardProducto>
    }) */

  return (
    <section className={styles.contenedoraProducto}>
      {arrayProductos.map((p) => {
        return <CardProducto obj={p} key={p.id}></CardProducto>;
      })}
    </section>
  );
}
