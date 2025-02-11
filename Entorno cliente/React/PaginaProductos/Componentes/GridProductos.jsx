import CardProducto from "./CardProducto.jsx";
//import datos from '../json/productos.json'
import styles from "../Paginas/Principal.module.css";
//import * as Funciones from '../Utils/httpClient.js'
import { useEffect, useState } from "react";
import * as funciones from "../Utils/httpClient.js";
import { useQuery } from "../hooks/useQuery.jsx";
import useDebounce from "../hooks/useDebounce.jsx"

export default function GridProductos() {
  const [arrayProductos, setProductos] = useState([]);
  let url = "";

  const query = useQuery();
  //console.log("search->" + query.get("search"));
  //console.log("categoria->" + query.get("categoria"));

  const categoria = query.get("categoria");
  const search = query.get("search");
  const debounceSearch = useDebounce(query.get("search"), 2000)

  useEffect(() => {
    /* fetch('https://fakestoreapi.com/products/')
            .then(resp=>resp.json())
            .then(datos=>{
                //console.log('datos fetch',datos)
                setProductos([...datos])
                
            }) */

    if (categoria) {
      url = "https://fakestoreapi.com/products/category/" + categoria;

      //usando el fetch de las funciones
      funciones.getFetch(url).then((datos) => {
        setProductos([...datos]);
      });

    } else if (/* search */ debounceSearch) {
      url = "https://fakestoreapi.com/products/";
    
      //usando el fetch de las funciones
      funciones.getFetch(url).then((datos) => {
        let arrayMatches = funciones.buscar(datos, search);
        setProductos([...arrayMatches]);
      });

    } else {
      url = "https://fakestoreapi.com/products/";

      //usando el fetch de las funciones
      funciones.getFetch(url).then((datos) => {
        setProductos([...datos]);
      });
    }

    //acordarse de poner aqui lo que haya que cambiar sino no funciona
  }, [categoria, /* search */ debounceSearch]);

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