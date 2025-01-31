import CardProducto from './CardProducto.jsx'
import datos from '../json/productos.json'
import styles from '../Paginas/Principal.module.css'

export default function GridProductos (){

    let arrayProductos = datos.map(p => {
        return <CardProducto obj={p} key={p.id}></CardProducto>
    })
    
    return (
        <section className={styles.contenedoraProducto}>
            {arrayProductos}
        </section>
    )
}