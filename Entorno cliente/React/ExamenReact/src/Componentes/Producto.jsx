import { Link } from "react-router";
import Detalle from "./Detalle";
import * as funciones from '../../utils/funciones'

export default function Producto({obj , carrito, setCarrito}) {

  const esta = carrito.find(item => item.id == obj.id)

  return (
    <>
        {/* <img src={obj.image} alt="imagen" /> */}
        <p>{obj.title}</p>
        <p>{obj.description}</p>
        {esta? <p>Ya en el carrito</p>: <p>No esta en el carrito</p>}
        {<button onClick={() => {
          const carroMod = funciones.añadirAlCarrito(carrito, obj)
          setCarrito(carroMod)
        }}>Añadir</button>}
        {<Link to='/detalle/'>Detalle</Link>}
    </>
  )
}
