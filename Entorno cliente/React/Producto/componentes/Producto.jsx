import styles from './Producto.module.css'

export default function Producto ({ obj }){

    return (
        <div className={styles.articulo}>
                <p>{obj.title}</p>
                {/* <p>{obj.description}</p> */}
                <p>{"Precio: " + obj.price + "€"} {obj.price > 200 && '✅'}</p>
                <img src={obj.image} className={styles.img}></img>   
        </div>
    )
}