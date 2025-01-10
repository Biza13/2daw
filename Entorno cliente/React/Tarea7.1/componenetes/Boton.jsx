import styles from './Ejercicio1.module.css'

export default function Boton ({children}){
    return(
        <button className={styles.boton}>{children}</button>
    )
}