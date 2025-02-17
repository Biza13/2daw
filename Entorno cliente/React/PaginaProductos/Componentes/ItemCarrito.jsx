import { useState } from "react"
import * as funciones from "../Utils/httpClient"

export default function ItemCarrito({obj , array, setArray}) {

  [array, setArray] = useState([])

  return (
    <>
        {/* <img src={obj.image} alt="ariculo" /> */}
        <p>{obj.title}</p>
        <p>{obj.unidades}</p>
        <button onClick={ () => {
            let objMod = funciones.modUnidades(obj, 1)
            setArray(...array, objMod)
        }}>+</button>
        <button onClick={ () => {
            let objMod = funciones.modUnidades(obj, -1)
            setArray(...array, objMod)
        }}>+</button>
    </>
  )
}