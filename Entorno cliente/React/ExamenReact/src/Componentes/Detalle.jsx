import { useEffect } from "react"
import { useParams } from "react-router"

export default function Detalle() {

  const [producto, setProducto] = useState({})

  let {id} = useParams()
  let url = `https://fakestoreapi.com/products/${id}`

  useEffect(()=>{
    funciones.getFetch(url)
    .then(datos=>{
      setProducto(datos)
    })
  })

  return (
    <>
        <img src={producto.image} alt="imagen" />
        <p>{producto.title}</p>
        <p>{producto.description}</p>
        <p>{producto.category}</p>
        <p>{producto.price}</p>
    </>
  )
}
