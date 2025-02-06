import { useEffect, useState } from "react";
import * as funciones from "../Utils/httpClient";
import { useParams } from "react-router";
import styles from "../Paginas/Principal.module.css";

export default function DetalleProducto() {
  //para coger los parametros de la url
  const { idProducto } = useParams();
  const [producto, setProducto] = useState({});
  const url = "https://fakestoreapi.com/products/" + idProducto;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    funciones.getFetch(url).then((datos) => {
      console.log(datos);
      setProducto(datos);
      setIsLoading(true);
    });
  });

  //esto es para el spinner, si la flag esta en false sale el spinner, si esta en true sale el otro return (el del producto)
  if (!isLoading){
    return (
        <div class="text-center">
            <div class="spinner-border text-danger" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    )
  }

  return (
    <>
      <div className={styles.detalleProducto}>
        <h3>{producto.title}</h3>
        <img src={producto.image} alt="foto producto" />
        <p>{producto.category}</p>
        <p>{producto.description}</p>
        <p>{producto.price}</p>
      </div>
    </>
  );
}
