import styles from './Ejercicio1.module.css'

export default function H1 ({children}){
    return(
        <h1 className={styles.h1}>{children}</h1>
    )
}