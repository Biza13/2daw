import React, { useState } from 'react'
import Items from '../Componentes/Items'
import Carrito from '../Componentes/Carrito'


export default function main() {

    const [carrito, setCarrito] = useState([])
    console.log(carrito);

  return (
    <div className='row my-4 mx-5 justify-content-center'>
        <Items carr={carrito} setCarr={setCarrito} className='col-8'></Items>
        <Carrito carr={carrito} className='col-3'></Carrito>
    </div>
  )
}
