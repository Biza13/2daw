import styles from './Ejercicio5.module.css'
import H2 from '../H2'
import A from '../A'
import Boton from '../Boton' 

export default function Ejercicio5(){
    return(
        <nav className={styles.nav}>
            <H2>TRADE</H2>
            <ul className={styles.ul}>
                <li><A>Link 1</A></li>
                <li><A>Link 2</A></li>
                <li><A>Link 3</A></li>
                <li><A>Link 4</A></li>
            </ul>
            <Boton className={styles.boton}>Sign up</Boton>
        </nav>
    )
}