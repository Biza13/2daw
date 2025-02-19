import * as funciones from "../Utils/httpClient"

export default function ItemCarrito({obj , carrito, setCarrito}) {

  //actualizamos los estados con los handlers y luego llamamos a estos en el onclic
  const handleSuma = () => {
    let carroMod = funciones.modUnidades(carrito, obj, 'suma');
    setCarrito(carroMod);
  }

  const handleResta = () => {
    let carroMod = funciones.modUnidades(carrito, obj, 'resta');
    setCarrito(carroMod);
  }

  return (
    <>
        {/* <img src={obj.image} alt="ariculo" /> */}
        <p>{obj.title}</p>
        <p>{obj.unidades}</p>
        <button onClick={ handleSuma }>+</button>
        <button onClick={ handleResta }>-</button>
    </>
  )
}