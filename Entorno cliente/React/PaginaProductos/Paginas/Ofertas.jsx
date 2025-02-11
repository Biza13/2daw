import Carrusel from "../Componentes/Carrusel";
import Navegacion from "./Navegacion";
import styles from "../Paginas/Principal.module.css"

export default function Ofertas() {
  return (
    <>
        <Navegacion></Navegacion>
        <div className={styles.carrusel}>
          <Carrusel></Carrusel>
        </div>
    </>
  )
}
