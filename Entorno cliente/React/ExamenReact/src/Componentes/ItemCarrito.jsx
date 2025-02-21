import { Link } from "react-router";
import Detalle from "./Detalle";
import * as funciones from '../../utils/funciones'

export default function Producto({obj}) {

  return (
    <>
        {/* <img src={obj.image} alt="imagen" /> */}
        <p>{obj.title}</p>
        <p>{obj.description}</p>
        {<Link to='/detalle/'>Detalle</Link>}
    </>
  )
}