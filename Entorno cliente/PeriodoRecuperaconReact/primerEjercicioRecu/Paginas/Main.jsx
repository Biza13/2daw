import React, { useState } from 'react'
import Items from '../Componentes/Items'
import Carrito from '../Componentes/Carrito'


export default function main() {

    const [carrito, setCarrito] = useState([])

  return (
    <div className='row row-cols-2'>
        <Items carr={carrito} setCarr={setCarrito} className='col-8'></Items>
        <Carrito carr={carrito} className='col-4'></Carrito>
    </div>
  )
}
