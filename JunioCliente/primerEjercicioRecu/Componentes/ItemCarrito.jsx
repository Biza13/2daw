import React from 'react'

export default function ItemCarrito({item}) {
  return (
    <div className='shadow rounded-4 p-2'>
        <p className='my-0'>{item.title}</p>
        <p>cantidad: {item.cantidad}</p>
    </div>
  )
}
