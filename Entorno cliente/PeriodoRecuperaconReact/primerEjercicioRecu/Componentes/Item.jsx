import React from 'react'
import styles from './Item.module.css'
import * as funciones from '../Utils/funciones'

export default function Item({producto, carr, setCarr}) {
  
  
  
    return (
    <div>
        <img src={producto.image} alt="Producto" className={styles.img}/>
        <p>{producto.title}</p>
        <p>{producto.description}</p>
        <button className='me-2' onClick={funciones.addCarrito(carr, producto, setCarr)}>
            +
        </button>
        <button>
            -
        </button>
    </div>
  )
}
