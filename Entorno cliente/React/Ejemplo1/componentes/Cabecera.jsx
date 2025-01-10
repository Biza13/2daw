import styles from './Cabecera.module.css'
import Parrafo from './Parrafo.jsx'

export default function ({children}){
    
    return(
        <>
            <h1 className={styles.header}>{children}</h1>
            <Parrafo codigo="" >Empezzando...</Parrafo>
        </>
     )
}