import React from 'react'
import styles from './Item.module.css'
import * as funciones from '../Utils/funciones'

export default function Item({producto, carr, setCarr}) {
  
  
  
    return (
    <div className='col-md-3 py-3 my-4 d-flex flex-column align-items-center justify-content-center shadow rounded-4'>
        <img src={producto.image} alt="Producto" className={styles.img}/>
        <p>{producto.title}</p>
        {/* <p>{producto.description}</p> */}
        <div>
            <button className='me-2' onClick={ () => funciones.addCarrito(carr, producto, setCarr)}>
                +
            </button>
            <button onClick={ () => funciones.removeCarrito(carr, producto, setCarr)}>
                -
            </button>
        </div>
    </div>
  )
}
