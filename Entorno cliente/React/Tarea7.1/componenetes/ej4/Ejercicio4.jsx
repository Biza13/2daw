import styles from './Ejercicio4.module.css'
import Parrafo from '../Parrafo'
import Input from '../Input'
import Boton from '../Boton'

export default function Ejercicio4(){
    return(
        <section className={styles.contenedora}>
            <Parrafo codigo="">Prueba el producto gratis</Parrafo>
            <form className={styles.form}>
                <Input type="text" id="email" className={styles.inputEmail} placeholder="Email" />
                <Input type="text" id="password" className={styles.inputPass} placeholder="Password" />
            </form>
            <Boton className={styles.boton}>Prueba gratis</Boton>
        </section>
    )
}