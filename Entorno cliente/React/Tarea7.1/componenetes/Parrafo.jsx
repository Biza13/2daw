import styles from './Ejercicio1.module.css'

export default function Parrafo ({children, codigo}){
    return(
        <p className={styles.p}>{codigo + " " + children}</p>
    )
}