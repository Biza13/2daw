import React, { useState } from 'react'
import ItemCarrito from './ItemCarrito'

export default function Carrito({carr}) {

    

  return (
    <>
        {carr.map((p) => {
            return <ItemCarrito item={p} key={p.cant}></ItemCarrito>
        })}
    </>
  )
}
