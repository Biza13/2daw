import React, { useState } from 'react'
import ItemCarrito from './ItemCarrito'

export default function Carrito({carr}) {

    

  return (
    <div className='col-md-3 d-flex flex-column gap-3'>
        <h2>Carrito</h2>
        {carr.length == 0 && <p>El carrito esta vacío 😿</p>}
        {carr.map((p) => {
            return <ItemCarrito item={p} key={p.id}></ItemCarrito>
        })}
    </div>
  )
}
