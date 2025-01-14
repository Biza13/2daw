import styles from './Producto.module.css'

export default function Producto ({ children, obj }){

    return (
        <>
            <p>{obj.title}</p>
            <p>{obj.description}</p>
            <p>{"Precio: " + obj.price + "€"}</p>
            <img src={obj.image} className={styles.img}></img>
        </>
    )
}