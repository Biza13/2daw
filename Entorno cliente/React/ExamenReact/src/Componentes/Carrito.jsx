import { Link } from "react-router"
import Producto from "./Producto"
import ItemCarrito from "./ItemCarrito"
import carroFalso from "../../json/carro.json"
import * as funciones from '../../utils/funciones'

export default function Carrito({carrito, setCarrito}) {

    const total = funciones.sumarPrecios(carroFalso)
    console.log(carroFalso);

  return (
    <>
        <Link to='/Principal'>Volver</Link>
        <h2>Precio total del carrito: {total}</h2>
        {/* {
            carrito? carrito.map(item => {
                <Producto obj={item}></Producto>
            }): <p>No hay nada en el carrito</p>

        } */}
        {
            carroFalso.map((item) => {
                return<ItemCarrito obj={item} key={item.id}></ItemCarrito>
            })

        }
    </>
  )
}
